import Inicio from "@/pages/Inicio";

export const metadata = {
  title: "XDEBUTANTES.COM - DEBUTANTES XXX 🥰✅",
  description:
    "kinesiólogas reales en Lima, kinesiólogas reales en Trujillo, La Libertad, Chiclayo, Lambayeque, chicas caletas debutantes, anfitrionas, escorts peruanas, kines venezolanas y kinesiologas colombianas en el norte del Perú",
  icons: {
    icon: ["/favicon_io/favicon.ico?v=4"],
    apple: ["/favicon_io/apple-touch-icon.png?v=4"],
    shortcut: ["/favicon_io/apple-touch-icon.png"],
  },
  keywords: [
    "kinesiologas lima",
    "kinesiologas en trujillo",
    "los olivos",
    "kines teens",
    "kinesiologas chiclayo",
    "prostitutas lima",
    "kines surco",
    "caletas lima",
    "putas peruanas",
    "putas extranjeras",
    "anfitrionas lima",
    "kines miraflores",
    "kinesiologas venezolanas y colombianas",
  ],
  referrer: "origin-when-cross-origin",
  metadataBase: new URL("https://papayahub.pe/" || "https://www.papayahub.pe/"),
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "RRB CAPITAL" }],
  publisher: "RRB CAPITAL",
};

export default function Home() {

  return (
    <>
      <main className="relative z-[900] dark:bg-black bg-white flex flex-col gap-2 items-center justify-center">
        <Inicio />
      </main>
    </>
  );
}
