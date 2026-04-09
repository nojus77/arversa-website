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
      from: "Arversa Svetainė <noreply@inerci.lt>",
      replyTo: safeEmail,
      to: contactEmail,
      subject: `Nauja užklausa: ${safeName} — ${safeService}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 16px;">
          <div style="background: #111111; color: white; padding: 20px 24px; border-radius: 12px 12px 0 0;">
            <h1 style="margin: 0; font-size: 18px; font-weight: 600;">Nauja užklausa iš svetainės</h1>
          </div>
          <div style="background: #ffffff; border: 1px solid #e0e0e0; border-top: none; padding: 24px; border-radius: 0 0 12px 12px;">
            <p style="margin: 0 0 4px; font-size: 22px; font-weight: 700; color: #111111;">${safeName}</p>
            <p style="margin: 0 0 16px; font-size: 14px; color: #888888;">Domisi: ${safeService}</p>

            <div style="background: #f5f5f5; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
              <p style="margin: 0 0 4px; font-size: 12px; color: #888888; text-transform: uppercase; letter-spacing: 1px;">Žinutė</p>
              <p style="margin: 0; font-size: 15px; color: #111111; white-space: pre-wrap; line-height: 1.5;">${safeMessage}</p>
            </div>

            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 6px 0; font-size: 13px; color: #888888; width: 90px;">Telefonas</td>
                <td style="padding: 6px 0; font-size: 15px;">
                  <a href="tel:${safePhone}" style="color: #d4a853; text-decoration: none; font-weight: 600;">${safePhone}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 6px 0; font-size: 13px; color: #888888;">El. paštas</td>
                <td style="padding: 6px 0; font-size: 15px;">
                  <a href="mailto:${safeEmail}" style="color: #d4a853; text-decoration: none; font-weight: 600;">${safeEmail}</a>
                </td>
              </tr>
            </table>

            <a href="tel:${safePhone}" style="display: inline-block; background: #d4a853; color: #111111; font-weight: 600; font-size: 15px; padding: 12px 28px; border-radius: 8px; text-decoration: none;">Paskambinti</a>
          </div>
          <p style="margin-top: 12px; font-size: 11px; color: #aaaaaa; text-align: center;">
            Gauta per arversa.lt kontaktų formą
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
