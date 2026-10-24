// Brand mark for the favicon / apple icon (next/og can't load logo.svg's
// full artwork cheaply): the orange oil drop inside a toothed ring, echoing the
// gear-and-drop logo. Colors are duplicated by hand from the @theme tokens.
export function BrandMark({ size, rounded }: { size: number; rounded?: boolean }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#08111f",
        borderRadius: rounded ? size * 0.2 : 0,
      }}
    >
      <svg width={size * 0.92} height={size * 0.92} viewBox="0 0 32 32">
        <circle cx="16" cy="16" r="13" fill="none" stroke="#ffffff" strokeWidth="3.4" strokeDasharray="3.1 2.4" />
        <circle cx="16" cy="16" r="11" fill="none" stroke="#ffffff" strokeWidth="1.6" />
        <path d="M16 6.5C16 6.5 9.8 13.6 9.8 18.2a6.2 6.2 0 0 0 12.4 0C22.2 13.6 16 6.5 16 6.5Z" fill="#f5921e" />
      </svg>
    </div>
  );
}
