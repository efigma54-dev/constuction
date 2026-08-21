import Link from "next/link";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import type { Document } from "@/lib/documents";

export default function DocumentCard({ document }: { document: Document }) {
  const available = Boolean(document.path);

  return (
    <li className="flex min-h-64 flex-col justify-between p-6" style={{ border: "1px solid var(--hairline)" }}>
      <div>
        <div className="w-full mb-5">
          <PhotoPlaceholder
            type="document"
            label={document.title}
            caption={available ? undefined : "Preview image · source document pending verification"}
            aspectRatio="video"
            src={document.previewImage ?? undefined}
          />
        </div>
        <div className="mt-5 font-serif text-lg text-foreground">{document.title}</div>
        <div className="mt-2 text-sm leading-6 text-muted">{document.note}</div>
      </div>
      <div className="mt-6 flex items-center justify-between gap-4">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-muted">
          {available ? "PDF available" : "Verification pending"}
        </span>
        {available ? (
          <Link href={document.path!} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ fontSize: "0.75rem" }}>
            Preview / download
          </Link>
        ) : null}
      </div>
    </li>
  );
}
