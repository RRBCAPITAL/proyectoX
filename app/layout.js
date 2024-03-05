// Librerías externas
import { Suspense } from "react";

// Componentes locales
import Access from "@/components/Access/Access";
import Loading from "./loading";

// Estilos locales
import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import GoogleAnalytics from "./GoogleAnalytics";
import { Poppins } from "next/font/google";

const quicksand = Poppins({ subsets: ["latin"], weight: "400" });

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="es" className={quicksand.className}>
        <body className="w-screen overflow-x-hidden">
          <GoogleAnalytics />
          <Suspense fallback={<Loading />}>
            <Access children={children} />
          </Suspense>
          <Analytics />
        </body>
      </html>
    </>
  );
}
