"use client";

import Link from "next/link";
import { credencialsAccess } from "@/Data/credenciales";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useThemeContext } from "@/context/theme";
import "./style.css";

const ModalMetodosDePago = () => {
  const { setModalMetodosPago } = useThemeContext();

  return (
    <div className="z-[900] fixed bg-[#0000005a] w-screen h-screen flex items-center justify-center lg:pt-0" style={{'paddingTop': '70px'}}>
    <div className="relative z-[1001] w-[70%] sm:w-[400px] lg:w-[60vw] h-[80vh] lg:h-fit overflow-y-auto bg-black px-4 lg:px-10 py-6 mx-1 shadow-2xl flex flex-col items-center justify-center">
      <h1 className="titulo text-center mx-auto text-white text-xl font-bold  px-2 py-1 rounded-[10px]">
        Métodos de pago
      </h1>
      <div className="mt-4">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center justify-center">
          <div className="flex gap-2 items-center justify-center">
            <img src="/assets/qr.jpg" alt="" className="qr" />
            <a href="/assets/qr.jpg" download>
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/flat-round/64/downloading-updates--v1.png"
                alt="downloading-updates--v1"
                className="h-10 w-10 my-auto hover:opacity-80 duration-200 transition-all ease-linear"
              />
            </a>
          </div>

          <div className="flex flex-col gap-2 items-center justify-center">
          <div className="flex gap-2 text-white items-center justify-center">
            <img src="/assets/yapep.png" alt="" className="yapeplin"/>
            <img src="/assets/plin.png" alt="" className="yapeplin rounded-lg"/>
          </div>
          <Link href={'https://t.me/starmaxhub'} target="_blank"><img src="/assets/paypal.png" alt="" className="paypal bg-white px-2 py-1 w-full"/></Link>
          </div>
          </div>
          <div className="text-white flex flex-col gap-4">
            <div className="flex gap-1 sm:gap-6">
              <h1 className="font-bold">Titular:</h1>
              <h2>Atlas Entretenimiento</h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-1 sm:gap-6">
              <h1 className="font-bold">Opcion 01</h1>
              <h2>Escanea el QR y realiza el pago de suscripcion</h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-1 sm:gap-6">
              <h1 className="font-bold">Opcion 02</h1>
              <ul>
                <li>• Descargar QR</li>
                <li>• Ingresa tu billetera (Yape/Plin)</li>
                <li>• Selecciona el pago por QR</li>
                <li>• Sube el QR descargado</li>
                <li>• Realizar el pago de tu suscripcion</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="mensaje font-bold text-white leading-5 mt-4 mx-auto">
          Una vez realizado el pago, envía una captura por WhatsApp o Telegram
          para que podamos enviarte un nombre de usuario y contraseña.
        </h2>

        <div className="flex items-center justify-center gap-2 text-white w-full mt-2">
          <a target="_blank" href={`https://api.whatsapp.com/send?phone=+51989752208&text=Hola,%20me%20interesa%20suscribirme%20a%20XDebutantes.com`} className="px-6 py-2 font-bold rounded-lg" style={{backgroundColor: 'rgb(0, 216, 18)'}}>WhatsApp</a>
          <Link href={'https://t.me/starmaxhub'} target="_blank" className="bg-back-red font-bold px-6 py-2 rounded-lg">Telegram</Link>
        </div>
      </div>
      <button
        className="absolute top-0 right-0 px-2 py-0 lg:py-1 text-white bg-back-redd rounded text-[18px] sm:text-neutral"
        onClick={() => {
          setModalMetodosPago(false);
        }}
      >
        X
      </button>
    </div>
    </div>
  );
};

export default ModalMetodosDePago;
