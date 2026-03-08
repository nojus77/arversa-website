import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { COMPANY, NAV_ITEMS } from "@/lib/constants";
import { formatPhone } from "@/lib/utils";

const SERVICE_LINKS = NAV_ITEMS.filter(
  (item) =>
    item.href !== "/" &&
    item.href !== "/kontaktai" &&
    item.href !== "/atlikti-darbai",
);

export function Footer(): React.ReactElement {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white/80">
      {/* Main footer */}
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Col 1: Logo & description */}
          <div>
            <a
              href="/"
              className="inline-block font-heading text-2xl text-amber tracking-wide mb-4"
            >
              ARVERSA
            </a>
            <p className="text-white/60 text-sm leading-relaxed">
              Statybos ir gerbuvio darbai visoje Lietuvoje. Technikos nuoma,
              zemes kasimas, trinkeliu klojimas ir atlieku isvezimas.
            </p>
          </div>

          {/* Col 2: Services */}
          <div>
            <h3 className="font-heading text-lg text-white mb-4">Paslaugos</h3>
            <ul className="space-y-2.5">
              {SERVICE_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-amber transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h3 className="font-heading text-lg text-white mb-4">Kontaktai</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2.5 text-sm text-white/60 hover:text-amber transition-colors"
                >
                  <Phone className="w-4 h-4 text-amber shrink-0" />
                  {formatPhone(COMPANY.phone)}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-2.5 text-sm text-white/60 hover:text-amber transition-colors"
                >
                  <Mail className="w-4 h-4 text-amber shrink-0" />
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-white/60">
                <MapPin className="w-4 h-4 text-amber shrink-0" />
                {COMPANY.location}
              </li>
            </ul>
          </div>

          {/* Col 4: Working hours */}
          <div>
            <h3 className="font-heading text-lg text-white mb-4">
              Darbo laikas
            </h3>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-2.5 text-sm text-white/60">
                <Clock className="w-4 h-4 text-amber shrink-0 mt-0.5" />
                <div>
                  <p>Pirmadienis - Penktadienis</p>
                  <p className="text-white/80">8:00 - 18:00</p>
                </div>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-white/60">
                <Clock className="w-4 h-4 text-amber shrink-0 mt-0.5" />
                <div>
                  <p>Sestadienis</p>
                  <p className="text-white/80">Pagal susitarima</p>
                </div>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-white/60">
                <Clock className="w-4 h-4 text-amber shrink-0 mt-0.5" />
                <div>
                  <p>Sekmadienis</p>
                  <p className="text-white/80">Nedirbame</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/40">
          <p>
            &copy; {COMPANY.founded}&ndash;{currentYear} {COMPANY.name}
          </p>
          <p>Visos teises saugomos</p>
        </div>
      </div>
    </footer>
  );
}
