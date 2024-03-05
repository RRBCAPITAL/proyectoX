"use client";

import { useEffect, useState } from "react";
import CardsVideos from "@/components/ContenidoVideos/CardsVideos";
import Navbar from "@/components/NavBar/Navbar";
import ModalLogin from "@/modals/ModalLogin";
import { useThemeContext } from "@/context/theme";
import CardsImagenes from "@/components/ContenidoImagenes/CardsImagenes";

export const metadata = {
  title: "Proyecto X - Kinesiólogas 🥰✅",
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
  
  const [access, setAccess] = useState(true);
  const { modalLogin, setModalLogin, credencialsOk, setCredencialsOk} = useThemeContext();

  return (
    <>
      <main className="relative z-[900] dark:bg-black bg-white flex flex-col gap-2 items-center justify-center">
      { modalLogin &&
          <div className="z-[900] fixed lg:top-[60px] lg:right-[240px]">
          <div className="">
            <ModalLogin />
          </div>
        </div>
        }
      <CardsImagenes />
        {access ? <>
          
          <CardsVideos />
        </> : <div>NO ESTAS REGISTRADO</div>}
        
      </main>
    </>
  );
}
