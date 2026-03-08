import { COMPANY } from "@/lib/constants";

export function MapEmbed(): React.ReactElement {
  return (
    <div className="rounded-xl overflow-hidden border border-border w-full h-[400px] lg:h-full min-h-[400px]">
      <iframe
        src={COMPANY.mapEmbedUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Arversa vieta - Lentvaris, Lietuva"
      />
    </div>
  );
}
