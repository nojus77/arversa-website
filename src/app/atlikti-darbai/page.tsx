import type { Metadata } from "next";
import { PortfolioPage } from "@/components/portfolio/PortfolioPage";

export const metadata: Metadata = {
  title: "Atlikti darbai",
  description:
    "UAB Arversa atliktu darbu galerija — trinkeliu klojimas, metalo darbai, medienos konstrukcijos, interjeras, zemes darbai ir gerbuvis. Perziurekite musu projektus is visos Lietuvos.",
};

export default function AtliktiDarbaiPage(): React.ReactElement {
  return <PortfolioPage />;
}
