import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod/v4";

const contactSchema = z.object({
  name: z.string().min(2, "Vardas per trumpas"),
  phone: z.string().min(8, "Neteisingas telefono numeris"),
  email: z.email("Neteisingas el. pašto adresas"),
  service: z.string().min(1, "Pasirinkite paslaugą"),
  message: z.string().min(10, "Žinutė per trumpa"),
  honeypot: z.string().max(0).optional(),
});

// Simple in-memory rate limiter
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 60_000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return true;
  }

  entry.count++;
  return false;
}

function sanitize(input: string): string {
  return input
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .trim();
}

export async function POST(request: Request): Promise<NextResponse> {
  try {
    // Rate limiting
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded?.split(",")[0]?.trim() ?? "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Per daug užklausų. Bandykite vėliau." },
        { status: 429 },
      );
    }

    const body: unknown = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Neteisingi duomenys. Patikrinkite formą." },
        { status: 400 },
      );
    }

    const { name, phone, email, service, message, honeypot } = result.data;

    // Silently reject spam (honeypot filled)
    if (honeypot && honeypot.length > 0) {
      return NextResponse.json({ success: true });
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const contactEmail =
      process.env.CONTACT_EMAIL ?? "audrius.technuoma@gmail.com";

    if (!resendApiKey) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        { error: "Serverio klaida. Bandykite vėliau." },
        { status: 500 },
      );
    }

    const resend = new Resend(resendApiKey);

    const safeName = sanitize(name);
    const safePhone = sanitize(phone);
    const safeEmail = sanitize(email);
    const safeService = sanitize(service);
    const safeMessage = sanitize(message);

    const { error: sendError } = await resend.emails.send({
      from: "Arversa Svetainė <onboarding@resend.dev>",
      to: contactEmail,
      subject: `Nauja užklausa: ${safeName} — ${safeService}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <div style="background: #1a1a2e; color: white; padding: 24px; border-radius: 12px 12px 0 0;">
            <h1 style="margin: 0; font-size: 20px; font-weight: 600;">Nauja užklausa iš svetainės</h1>
          </div>
          <div style="background: #ffffff; border: 1px solid #e2e2e8; border-top: none; padding: 24px; border-radius: 0 0 12px 12px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #6e6e80; width: 120px; vertical-align: top;">Vardas:</td>
                <td style="padding: 8px 0; color: #1a1a2e; font-weight: 500;">${safeName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6e6e80; vertical-align: top;">Telefonas:</td>
                <td style="padding: 8px 0; color: #1a1a2e; font-weight: 500;">
                  <a href="tel:${safePhone}" style="color: #d4a853; text-decoration: none;">${safePhone}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6e6e80; vertical-align: top;">El. paštas:</td>
                <td style="padding: 8px 0; color: #1a1a2e; font-weight: 500;">
                  <a href="mailto:${safeEmail}" style="color: #d4a853; text-decoration: none;">${safeEmail}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6e6e80; vertical-align: top;">Paslauga:</td>
                <td style="padding: 8px 0; color: #1a1a2e; font-weight: 500;">${safeService}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6e6e80; vertical-align: top;">Žinutė:</td>
                <td style="padding: 8px 0; color: #1a1a2e; white-space: pre-wrap;">${safeMessage}</td>
              </tr>
            </table>
          </div>
          <p style="margin-top: 16px; font-size: 12px; color: #a0a0b0; text-align: center;">
            Ši žinutė buvo išsiųsta per arversa.lt kontaktų formą
          </p>
        </div>
      `,
    });

    if (sendError) {
      console.error("Resend error:", sendError);
      return NextResponse.json(
        { error: "Nepavyko išsiųsti žinutės. Bandykite vėliau." },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Serverio klaida. Bandykite vėliau." },
      { status: 500 },
    );
  }
}
