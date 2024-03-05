"use client";

import { useEffect, useState } from "react";
import CardsVideos from "@/components/ContenidoVideos/CardsVideos";
import ModalLogin from "@/modals/ModalLogin";
import { useThemeContext } from "@/context/theme";
import CardsImagenes from "@/components/ContenidoImagenes/CardsImagenes";

const Inicio = () => {
  const [access, setAccess] = useState(true);
  const { modalLogin, setModalLogin, credencialsOk, setCredencialsOk } =
    useThemeContext();

  return (
    <>
      {modalLogin && (
        <div className="z-[900] fixed lg:top-[60px] lg:right-[240px]">
          <div className="">
            <ModalLogin />
          </div>
        </div>
      )}
      <CardsImagenes />
      {access ? (
        <>
          <CardsVideos />
        </>
      ) : (
        <div>NO ESTAS REGISTRADO</div>
      )}
      </>
  );
};

export default Inicio;
