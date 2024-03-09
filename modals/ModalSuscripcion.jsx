"use client";

import Link from "next/link";
import { credencialsAccess } from "@/Data/credenciales";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useThemeContext } from "@/context/theme";

const ModalSuscripcion = () => {
  const {
    setModalSuscripcion,
    setModalMetodosPago
  } = useThemeContext();

  return (
    <div className="relative z-[1001] w-[92%] sm:w-[400px] lg:w-[300px] h-fit bg-black px-6 py-6 mx-10 shadow-2xl overflow-y-scroll">
      <img src="/assets/logod.png" alt="" className="px-4 py-2"/>

      <containeniveles className="grid sm:grid-cols-2 lg:grid-cols-3 mx-0 lg:mx-6 items-center gap-2 lg:gap-2 justify-center mt-4">
          
          <div className="flex flex-col gap-2 items-center justify-center w-full">
            <div className="text-white bg-slate-600 w-full text-center py-2 px-2 lg:px-4 font-bold">
              <h1 className='text-2xl sm:text-neutro'>Plan Mensual</h1>
            </div>
            <div className="text-white bg-back-red font-bold w-full text-center py-6 px-6">
              <h1 className="font-bold text-[60px] sm:text-4xl">S/100.00</h1>
            </div>
            <button onClick={() => setModalMetodosPago(true)} className="bg-back-redd px-4 text-white py-2 rounded-[10px] w-full text-center text-xl sm:text-neutro">Suscríbete ahora</button>
          </div>

          <div className="flex flex-col gap-2 items-center justify-center">
            <div className="text-white bg-slate-600 w-full text-center py-2 px-2 font-bold">
              <h1 className=''>Plan Trimestral</h1>
            </div>
            <div className="text-white bg-back-red font-bold text-xl w-full text-center py-6">
              <h1 className="font-bold text-4xl">S/250.00</h1>
            </div>
            <button onClick={() => setModalMetodosPago(true)} className="bg-back-redd px-4 text-white py-2 rounded-[10px] w-full text-center">Suscríbete ahora</button>
          </div>

          <div className="flex flex-col gap-2 items-center justify-center">
            <div className="text-white bg-slate-600 w-full text-center py-2 px-10 font-bold">
              <h1 className=''>Plan Semestral</h1>
            </div>
            <div className="text-white bg-back-red font-bold text-xl w-full text-center py-6">
              <h1 className="font-bold text-4xl">S/100.00</h1>
            </div>
            <button onClick={() => setModalMetodosPago(true)} className="bg-back-redd px-4 text-white py-2 rounded-[10px] w-full text-center">Suscríbete ahora</button>
          </div> 
        </containeniveles>

      <button
        className="absolute top-0 right-0 px-2 py-0 lg:py-1 text-white bg-back-redd rounded text-[18px] sm:text-neutral"
        onClick={() => {
          setModalSuscripcion(false);
        }}
      >
        X
      </button>
    </div>
  );
};

export default ModalSuscripcion;
