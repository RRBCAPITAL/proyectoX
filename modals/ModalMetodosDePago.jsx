"use client";

import Link from "next/link";
import { credencialsAccess } from "@/Data/credenciales";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useThemeContext } from "@/context/theme";

const ModalMetodosDePago = () => {
  const {
    setModalMetodosPago
  } = useThemeContext();

  return (
    <div className="relative z-[1001] w-[92%] sm:w-[400px] lg:w-[300px] h-fit bg-black px-6 py-6 mx-auto shadow-2xl">
          <h1 className="text-center dark:text-slate-200 text-slate-600 text-2xl sm:text-3xl font-bold">
            <strong className="text-t-red">Métodos</strong> de pago
          </h1>
      <button
        className="absolute top-0 right-0 px-2 py-0 lg:py-1 text-white bg-back-redd rounded text-[18px] sm:text-neutral"
        onClick={() => {
          setModalMetodosPago(false);
        }}
      >
        X
      </button>
    </div>
  );
};

export default ModalMetodosDePago;
