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
import Modal18 from "@/components/Modal18";

const Inicio = () => {
  const [access, setAccess] = useState();
  const [openModal18, setOpenModal18] = useState(false);
  const {
    modalLogin,
    setModalLogin,
    credencialsOk,
    setCredencialsOk,
    modalBlocked,
    modalLoginMid,
    modalSuscripcion,
    modalMetodosPago,
  } = useThemeContext();

  console.log(credencialsOk);

  useEffect(() => {
    if (credencialsOk[0]?.user) {
      setAccess(true);
    } else {
      setAccess(false);
    }
  }, [credencialsOk, access]);

  useEffect(() => {
    // Verificar si el modal no se ha abierto antes
    const hasOpenedBefore = localStorage.getItem("modalOpened");

    if (!hasOpenedBefore) {
      setTimeout(() => {
        // Si no se ha abierto antes, abre el modal
        setOpenModal18(true);
        // Marca que el modal se ha abierto
        localStorage.setItem("modalOpened", "true");
      }, 1000);
    }
  }, []);

  const mainContentClassName =
    modalLogin ||
    modalBlocked ||
    modalLoginMid ||
    modalSuscripcion ||
    modalMetodosPago
      ? "flex flex-col w-screen relative min-h-screen overflow-y-hidden"
      : "flex flex-col w-screen relative min-h-screen";

  return (
    <div className={mainContentClassName}>
      {modalLogin && (
        <div className="z-[900] fixed lg:top-[60px] lg:right-[240px]">
          <div className="">
            <ModalLogin />
          </div>
        </div>
      )}
      {modalBlocked && (
        <div className="z-[900] fixed bg-[#00000080] w-screen h-screen flex justify-center items-center">
          <div className="relative">
            <ModalBlocked />
          </div>
        </div>
      )}
      {modalLoginMid && (
        <div className="z-[900] fixed bg-[#00000080] w-screen h-screen flex justify-center items-center">
          <div className="relative">
            <ModalLoginMid />
          </div>
        </div>
      )}
      {modalSuscripcion && (
        <div className="relative">
          <ModalSuscripcion />
        </div>
      )}
      {modalMetodosPago && (
        <div className="relative">
          <ModalMetodosDePago />
        </div>
      )}
      <CardsImagenes />
      <CardsVideos access={access} />
      {openModal18 && <Modal18 setOpenModal18={setOpenModal18} />}
    </div>
  );
};

export default Inicio;
