import "../../../../styles/globals.css";

export default function SanityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full bg-white/50 noise relative small:min-h-screen">
      {/* Correction: Placer le commentaire à l'intérieur de crochets */}
      <span className="w-full text-xs mx-10">{"//// Leroll Design App"}</span>
      <div className="relative">{children}</div>
    </div>
  );
}