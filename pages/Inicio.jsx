"use client";

import { useEffect, useState } from "react";
import CardsVideos from "@/components/ContenidoVideos/CardsVideos";
import ModalLogin from "@/modals/ModalLogin";
import { useThemeContext } from "@/context/theme";
import CardsImagenes from "@/components/ContenidoImagenes/CardsImagenes";
import ModalBlocked from "@/modals/ModalBlocked";
import ModalLoginMid from "@/modals/ModalLoginMid";
import ModalSuscripcion from "@/modals/ModalSuscripcion";
import ModalMetodosDePago from "@/modals/ModalMetodosDePago";

const Inicio = () => {
  const [access, setAccess] = useState();
  const { modalLogin, setModalLogin, credencialsOk, setCredencialsOk, modalBlocked, modalLoginMid, modalSuscripcion, modalMetodosPago } =
    useThemeContext();

    console.log(credencialsOk);
    
    useEffect(() => {
      if(credencialsOk[0]?.user){
        setAccess(true);
      }else{
        setAccess(false);
      }
  }, [credencialsOk, access])

  return (
    <div className="flex flex-col w-screen relative min-h-screen">
      {modalLogin && (
        <div className="z-[900] fixed lg:top-[60px] lg:right-[240px]">
          <div className="">
            <ModalLogin />
          </div>
        </div>
      )}
      {modalBlocked && (
        <div className="z-[900] fixed bg-[#0000005a] w-screen h-screen">
          <div className="absolute lg:top-[40%] lg:right-[40%]">
            <ModalBlocked />
        </div>
        </div>
      )}
      {modalLoginMid && (
        <div className="z-[900] fixed bg-[#0000005a] w-screen h-screen">
          <div className="absolute lg:top-[40%] lg:right-[40%]">
            <ModalLoginMid />
          </div>
        </div>
      )}
      {modalSuscripcion && (
        <div className="z-[900] fixed bg-[#0000005a] w-screen h-screen">
        <div className="absolute lg:top-[35%] lg:right-[30%]">
          <ModalSuscripcion />
      </div>
      </div>
      )}
      {modalMetodosPago && (
        <div className="z-[900] fixed bg-[#0000005a] w-screen h-screen">
        <div className="absolute lg:top-[10%] lg:right-[10%]">
          <ModalMetodosDePago />
      </div>
      </div>
      )}
      <CardsImagenes />
      <CardsVideos access={access}/>
      </div>
  );
};

export default Inicio;
