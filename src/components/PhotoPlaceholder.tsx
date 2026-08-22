import Image from "next/image";
import PendingVerificationPulse from "./PendingVerificationPulse";

type PhotoType = "building" | "document" | "portrait";

type Props = {
  type: PhotoType;
  label: string;
  className?: string;
  aspectRatio?: "video" | "square" | "portrait" | "auto";
  src?: string | null;
  caption?: string;
};

export default function PhotoPlaceholder({
  type,
  label,
  className = "",
  aspectRatio = "video",
  src,
  caption,
}: Props) {
  const ratioClass = {
    video: "aspect-[16/9]",
    square: "aspect-square",
    portrait: "aspect-[3/4]",
    auto: "h-full w-full",
  }[aspectRatio];

  if (src) {
    const visibleCaption =
      caption ??
      (src.includes("housingcdn.com")
        ? "Published project photograph · Housing.com"
        : src.includes("/images/real/")
          ? "Reference visual · not construction evidence"
          : undefined);

    const accessibleLabel =
      src.includes("housingcdn.com") && label.toLowerCase().includes("aakar heights")
        ? "Balaji Empire · published project photograph"
        : label;

    return (
      <div
        className={`relative w-full overflow-hidden ${ratioClass} ${className}`}
        style={{ border: "1px solid var(--hairline)" }}
      >
        <Image
          src={src}
          alt={accessibleLabel}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {visibleCaption ? (
          <div className="absolute inset-x-0 bottom-0 z-10 bg-charcoal/85 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-sand">
            {visibleCaption}
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <div
      className={`relative w-full overflow-hidden flex flex-col justify-between p-4 group select-none ${ratioClass} ${className}`}
      style={{
        background: "var(--surface-muted)",
        border: "1px solid var(--hairline)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(var(--foreground) 1px, transparent 0)`,
          backgroundSize: "8px 8px",
        }}
      />

      <div className="absolute top-2 left-2 w-1.5 h-1.5 border-t border-l border-foreground/20" />
      <div className="absolute top-2 right-2 w-1.5 h-1.5 border-t border-r border-foreground/20" />
      <div className="absolute bottom-2 left-2 w-1.5 h-1.5 border-b border-l border-foreground/20" />
      <div className="absolute bottom-2 right-2 w-1.5 h-1.5 border-b border-r border-foreground/20" />

      <div className="flex-1 flex items-center justify-center text-terracotta/40">
        {type === "building" && (
          <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
          </svg>
        )}
        {type === "document" && (
          <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a1.125 1.125 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-0.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
          </svg>
        )}
        {type === "portrait" && (
          <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
          </svg>
        )}
      </div>

      <div className="z-10 bg-background/90 backdrop-blur-[2px] p-2 text-center" style={{ border: "1px solid var(--hairline)" }}>
        <div className="text-[10px] font-semibold uppercase tracking-widest text-terracotta">
          <PendingVerificationPulse>Media pending verification</PendingVerificationPulse>
        </div>
        <div className="mt-0.5 text-[11px] text-muted truncate">{label}</div>
      </div>
    </div>
  );
}
