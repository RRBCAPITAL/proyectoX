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
  const [solesDolares, setSolesDolares] = useState(false)

  return (
    <div className="z-[900] fixed bg-[#0000005a] w-screen h-screen pt-[70px] lg:flex lg:items-center lg:justify-center lg:pt-0">
      <div className="relative z-[1001] w-[70%] sm:w-[400px] lg:w-[300px] h-[80vh] lg:h-fit overflow-y-auto bg-black px-6 py-6 mx-4 shadow-2xl flex flex-col items-center justify-center">
      <img src="/assets/logod.png" alt="" className="px-0 w-[90%] h-[90%] lg:w-[250px] lg:h-fit pt-2 mx-auto"/>
      <div className="rounded-[10px] p-1 bg-back-red mx-auto w-[270px] flex items-center justify-center mt-2 mb-2">
        <button onClick={() => setSolesDolares(false)} className={`rounded-[10px] ${!solesDolares ? 'bg-back-red text-white' : 'bg-white text-black'}  px-6 py-1 cursor-pointer`}>Soles ( S/ )</button>
        <button onClick={() => setSolesDolares(true)} className={`rounded-[10px] ${solesDolares ? 'bg-back-red text-white' : 'bg-white text-black'}  px-6 py-1 cursor-pointer`}>Dolares ( $ )</button>
      </div>

      <containeniveles className="grid sm:grid-cols-2 lg:grid-cols-3 mx-0 lg:mx-6 items-center gap-2 lg:gap-2 justify-center mt-2">
          
          <div className="flex flex-col gap-2 items-center justify-center w-full">
          <div className="text-white bg-slate-600 w-full text-center py-2 px-2 lg:px-4 font-bold">
              <h1 className='text-[16px] lg:text-[18px]'>PLAN MENSUAL</h1>
              <h2 className="font-light">( cada mes )</h2>
            </div>
            <div className="text-white bg-back-red font-bold w-full text-center py-2 px-2 sm:py-8 sm:px-4">
              <h1 className="font-bold text-4xl">{solesDolares ? '$ 9.00' : 'S/ 29.00'}</h1>
              <h2 className="font-light text-[8px] lg:text-sm">A partir del segundo mes a <strong>{solesDolares ? '$ 6.00' : 'S/ 19.00'}</strong></h2>
            </div> 
          </div>

          <div className="flex flex-col gap-2 items-center justify-center w-full">
          <div className="text-white bg-slate-600 w-full text-center py-2 px-2 lg:px-4 font-bold">
              <h1 className='text-[16px] lg:text-[18px]'>PLAN TRIMESTRAL</h1>
              <h2 className="font-light">( cada 3 meses )</h2>
            </div>
            <div className="text-white bg-back-red font-bold w-full text-center p-2 sm:py-8 sm:px-6">
              <h1 className="font-bold text-4xl">{solesDolares ? '$ 14.00' : 'S/ 49.00'}</h1>
            </div> 
          </div>

          <div className="flex flex-col gap-2 items-center justify-center w-full">
          <div className="text-white bg-slate-600 w-full text-center py-2 px-2 lg:px-4 font-bold">
              <h1 className='text-[16px] lg:text-[18px]'>PLAN SEMESTRAL</h1>
              <h2 className="font-light">( cada 6 meses )</h2>
            </div>
            <div className="text-white bg-back-red font-bold w-full text-center p-2 sm:py-8 sm:px-6">
              <h1 className="font-bold text-4xl">{solesDolares ? '$ 29.00' : 'S/ 99.00'}</h1>
            </div> 
          </div>

        </containeniveles>
        <div className="w-full flex items-center justify-center">
        <button onClick={() => setModalMetodosPago(true)} className="bg-back-redd px-4 mt-4 text-white py-2 rounded-[10px] mx-auto w-fit text-center text-xl sm:text-neutro">Suscríbete ahora</button>
        </div>
      <button
        className="absolute top-0 right-0 px-2 py-0 lg:py-1 text-white bg-back-redd rounded text-[18px] sm:text-neutral"
        onClick={() => {
          setModalSuscripcion(false);
        }}
      >
        X
      </button>
    </div>
    </div>
  );
};

export default ModalSuscripcion;
