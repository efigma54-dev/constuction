import Image from "next/image";

type Props = {
  title: string;
  verifiedPlan: boolean;
  unitDataAvailable: boolean;
  imageSrc?: string | null;
};

export default function FloorPlanStatus({ title, verifiedPlan, unitDataAvailable, imageSrc }: Props) {
  return (
    <section className="p-8" style={{ border: "1px solid var(--hairline)" }}>
      <div className="text-xs font-semibold uppercase tracking-widest text-terracotta">
        Floor plan
      </div>
      <h2 className="mt-2 font-serif text-foreground" style={{ fontSize: "var(--text-card)", lineHeight: "1.2" }}>
        {title}
      </h2>
      <p className="mt-3 max-w-prose text-sm leading-6 text-muted">
        {verifiedPlan
          ? "Approved floor plan and verified unit details are available below."
          : "Approved floor plans and unit-level details will be published after verification."}
      </p>

      <div className="mt-8 grid min-w-0 gap-0 lg:grid-cols-5">
        <div
          className="flex min-w-0 aspect-[4/3] items-center justify-center p-8 lg:col-span-3"
          style={{ border: "1px solid var(--hairline)", background: "var(--surface-muted)" }}
        >
          {verifiedPlan && imageSrc ? (
            <Image src={imageSrc} alt={`${title} approved floor plan`} width={1200} height={900} className="h-full w-full object-contain" />
          ) : (
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center border border-terracotta/50 text-xs font-semibold uppercase tracking-widest text-terracotta">
                Plan
              </div>
              <div className="mt-5 text-xs font-semibold uppercase tracking-widest text-foreground">
                Not yet published
              </div>
              <p className="mt-2 text-xs leading-5 text-muted">
                The approved drawing will appear here when available.
              </p>
            </div>
          )}
        </div>
        <div className="min-w-0 p-6 lg:col-span-2" style={{ border: "1px solid var(--hairline)", borderLeft: "none" }}>
          <div className="text-xs font-semibold uppercase tracking-widest text-terracotta">Floor plan status</div>
          <dl className="mt-6 grid gap-4 text-sm">
            {[
              ["Status", verifiedPlan ? "Published" : "Not published"],
              ["Availability", unitDataAvailable ? "See approved plan" : "Not published"],
              ["Pricing", "Not published"],
              ["Unit-level details", unitDataAvailable ? "Available in plan" : "Not published"],
            ].map(([label, value]) => (
              <div key={label} className="flex items-start justify-between gap-4 border-b border-hairline pb-3">
                <dt className="text-muted">{label}</dt>
                <dd className="text-right font-semibold text-foreground">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
