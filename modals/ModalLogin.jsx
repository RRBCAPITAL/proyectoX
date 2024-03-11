'use client'

import Link from "next/link";
import { credencialsAccess } from "@/Data/credenciales";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useThemeContext } from "@/context/theme";

const ModalLogin = () => {
    const router = useRouter();
    const [credenciales, setCredenciales] = useState({
        user: '',
        password: ''
    });
    const [credencialStorage, setCredencialStorage] = useState()
    const { credencialsOk, setCredencialsOk, modalLogin, setModalLogin, modalLoginM, setModalLoginM, show, setShow, setModalSuscripcion} = useThemeContext();

    const AccessOk = () => {
        const res = credencialsAccess.filter(c => c.user === credenciales.user && c.password === credenciales.password)

        if(res.length > 0){
            if(res[0].status === true) {
                setModalLogin(false);
                setModalLoginM(false);
                setCredencialsOk(res);
            }
        }
    }

    useEffect(() => {
        console.log(credencialsOk);
            if(credencialsOk){
                localStorage.setItem("credencial", JSON.stringify(credencialsOk))
            }
    }, [credencialsOk])

    useEffect(() => {
    // Recupera las credenciales de localStorage al cargar el componente
    const storedCredencial = localStorage.getItem("credencial");
    if (storedCredencial) {
      // Verifica si han pasado 30 días
      const storedCredencialParsed = JSON.parse(storedCredencial);
      const storedDate = new Date(storedCredencialParsed.timestamp);
      const currentDate = new Date();
      const differenceInDays = Math.floor(
        (currentDate - storedDate) / (1000 * 60 * 60 * 24)
      );

      if (differenceInDays >= 30) {
        // Si han pasado más de 30 días, elimina las credenciales almacenadas
        localStorage.removeItem("credencial");
        setCredencialsOk(null);
      } else {
        // Si no han pasado 30 días, establece las credenciales recuperadas
        setCredencialsOk(storedCredencialParsed);
      }
    }
  }, []);

  return <div className="relative z-[1001] w-[92%] sm:w-[400px] lg:w-[300px] h-fit bg-black px-4 py-6 mx-2">
    <div className="flex flex-col gap-2 leading-5">
        <label htmlFor="" className="text-[16px] mb-1 sm:mb-0 text-white sm:text-neutral">Nombre de usuario</label>
        <input className="py-1 rounded bg-white text-black px-1" type="text" name="user" value={credenciales.user} onChange={(e) => setCredenciales({
            ...credenciales,
            user: e.target.value
        })}/>
    </div>
    <div className="flex flex-col gap-2 mt-4 leading-5">
        <label htmlFor="" className="text-[16px] mb-1 sm:mb-0 text-white sm:text-neutral">Contraseña</label>
        <input className="py-1 rounded bg-white text-black px-1" type="password" name="password" value={credenciales.password} onChange={(e) => setCredenciales({
            ...credenciales,
            password: e.target.value
        })}/>
    </div>

    <button onClick={AccessOk} className="bg-back-red px-4 py-2 rounded-[10px] text-white mt-4 text-[18px] sm:text-neutral">Acceder</button>
    <h2 className="mt-2 text-[14px] sm:text-neutral text-white">¿No tienes cuenta? <button onClick={() => {
        setShow(false);
        setModalSuscripcion(true);
        setModalLogin(false);
        setModalLoginM(false);
    }} className="text-t-red text-[14px] sm:text-neutral">Suscríbete aquí</button></h2>

    <button className="absolute top-0 right-0 px-2 py-0 lg:py-1 text-white bg-red-500 rounded text-[18px] sm:text-neutral" onClick={() => {
        setModalLogin(false);
        setModalLoginM(false)
    }}>X</button>
  </div>
};

export default ModalLogin;
