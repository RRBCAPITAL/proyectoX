"use client";

import Link from "next/link";
import { credencialsAccess } from "@/Data/credenciales";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useThemeContext } from "@/context/theme";

const ModalBlocked = () => {
  const {
    setModalLoginMidM,
    setModalBlocked,
    modalLoginMid,
    setModalLoginMid,
    show,
    setShow,
    setModalSuscripcion
  } = useThemeContext();

  return (
    <div className="relative z-[1001] w-[300px] sm:w-[400px] lg:w-[300px] h-fit bg-black px-2 py-6 mx-auto shadow-2xl">
      <img src="/assets/logod.png" alt="" className="px-4 py-2" />

      <div className="flex flex-col gap-2 items-center justify-center mt-4">
        <button
          className="bg-back-red text-white px-0 py-2 text-[16px] rounded-[10px] w-[200px] text-center"
          onClick={() => {
            setModalLoginMid(true);
            setModalBlocked(false);
          }}
        >
          Acceder
        </button>
        <button
          onClick={() => {
            setShow(false);
            setModalBlocked(false);
            setModalSuscripcion(true);
          }}
          className="duration-200 transition-all ease-linear text-white px-0 py-2 text-[16px] rounded-[10px] w-[200px] text-center"
          style={{background: '#ff3030'}}
        >
          Suscribirse
        </button>
      </div>

      <button
        className="absolute top-0 right-0 px-2 py-0 lg:py-1 text-white bg-back-redd rounded text-[18px] sm:text-neutral"
        onClick={() => {
          setModalBlocked(false);
        }}
      >
        X
      </button>
    </div>
  );
};

export default ModalBlocked;
