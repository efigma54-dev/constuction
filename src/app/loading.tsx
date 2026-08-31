export default function Loading() {
  return (
    <main
      className="route-loading"
      aria-label="Loading page"
      style={{ minHeight: "100dvh", display: "grid", placeItems: "center" }}
    >
      <div className="route-loading-inner" role="status" aria-live="polite">
        <div className="route-loading-line" aria-hidden="true" />
        <p className="route-loading-label">Aakar Developers</p>
        <div className="route-loading-rule" aria-hidden="true" />
        <span className="sr-only">Loading page</span>
      </div>
    </main>
  );
}
