import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privatumo politika",
  description: `${COMPANY.name} privatumo politika. Informacija apie asmens duomenų tvarkymą.`,
};

export default function PrivatumoPolitika(): React.ReactElement {
  return (
    <div className="pt-28 pb-20 bg-offwhite min-h-screen">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h1 className="font-heading text-3xl md:text-4xl text-charcoal mb-8">
            Privatumo politika
          </h1>

          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm space-y-8 text-body leading-relaxed">
            <section>
              <h2 className="font-heading text-xl text-charcoal mb-3">
                1. Bendrosios nuostatos
              </h2>
              <p>
                {COMPANY.name} (toliau - Bendrov&#279;) gerbia J&#363;s&#371;
                privatum&#261; ir &#303;sipareigoja saugoti J&#363;s&#371;
                asmens duomenis. &#352;i privatumo politika paai&#353;kina, kaip
                renkame, naudojame ir saugome J&#363;s&#371; informacij&#261;,
                kai naudojat&#279;s m&#363;s&#371; interneto svetaine.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl text-charcoal mb-3">
                2. Kokius duomenis renkame
              </h2>
              <p className="mb-3">
                Mes galime rinkti &#353;iuos asmens duomenis:
              </p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Vardas ir pavard&#279;</li>
                <li>Telefono numeris</li>
                <li>El. pa&#353;to adresas</li>
                <li>
                  &#381;inut&#279;s turinys, kai u&#382;pildote kontaktin&#281;
                  form&#261;
                </li>
                <li>Pasirinkta paslauga</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-xl text-charcoal mb-3">
                3. Kaip naudojame J&#363;s&#371; duomenis
              </h2>
              <p className="mb-3">
                J&#363;s&#371; asmens duomenis naudojame &#353;iais tikslais:
              </p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>
                  Atsakyti &#303; J&#363;s&#371; u&#382;klausas ir pateikti
                  pasi&#363;lymus
                </li>
                <li>Susisiekti su Jumis d&#279;l paslaug&#371; teikimo</li>
                <li>Gerinti m&#363;s&#371; paslaug&#371; kokyb&#281;</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-xl text-charcoal mb-3">
                4. Duomen&#371; saugojimas
              </h2>
              <p>
                J&#363;s&#371; asmens duomenys saugomi saugiai ir yra prieinami
                tik &#303;galiotiems darbuotojams. Duomenis saugome tik tiek
                laiko, kiek b&#363;tina tikslams, d&#279;l kuri&#371; jie buvo
                surinkti, pasiekti.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl text-charcoal mb-3">
                5. J&#363;s&#371; teis&#279;s
              </h2>
              <p className="mb-3">Jūs turite teisę:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>
                  &#381;inoti, kokie J&#363;s&#371; asmens duomenys yra tvarkomi
                </li>
                <li>Pra&#353;yti i&#353;taisyti netikslius duomenis</li>
                <li>
                  Pra&#353;yti i&#353;trinti J&#363;s&#371; asmens duomenis
                </li>
                <li>At&#353;aukti sutikim&#261; tvarkyti duomenis</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-xl text-charcoal mb-3">
                6. Slapukai
              </h2>
              <p>
                &#352;i svetain&#279; gali naudoti b&#363;tinuosius slapukus,
                u&#382;tikrinan&#269;ius tinkam&#261; svetain&#279;s
                veikim&#261;. Analitiniai slapukai naudojami tik su
                J&#363;s&#371; sutikimu.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl text-charcoal mb-3">
                7. Kontaktai
              </h2>
              <p>
                Jei turite klausim&#371; d&#279;l &#353;ios privatumo politikos
                ar norite pasinaudoti savo teis&#279;mis, susisiekite su mumis:
              </p>
              <div className="mt-3 space-y-1">
                <p className="font-medium text-charcoal">{COMPANY.name}</p>
                <p>El. pa&#353;tas: {COMPANY.email}</p>
                <p>Telefonas: {COMPANY.phone}</p>
                <p>Adresas: {COMPANY.location}</p>
              </div>
            </section>

            <p className="text-sm text-subtle pt-4 border-t border-border">
              Paskutin&#303; kart&#261; atnaujinta: 2026 m. kovo m&#279;n.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
