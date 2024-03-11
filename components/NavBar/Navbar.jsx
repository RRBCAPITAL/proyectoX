"use client"

import Link from "next/link"
import { useState, useEffect, useCallback, useReducer } from "react";
import { FiMenu } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";
import { FaUserCheck } from 'react-icons/fa'
import { usePathname, useRouter } from "next/navigation";
import { MdNightlight } from 'react-icons/md'
import { MdOutlineLightMode } from 'react-icons/md'

import { motion } from "framer-motion"
import { fadeIn } from '@/utils/motionTransitions'

import { Poppins } from 'next/font/google'
import { useThemeContext } from "@/context/theme";
import ModalLogin from "@/modals/ModalLogin";

const quick = Poppins({ subsets: ['latin'], weight: ["400", "600"] })

export const changeNabvar = (changeNabvarF) => {
  console.log(changeNabvarF);
  if(typeof changeNabvar === "undefined"){
    const changeNabvarF = true
    return changeNabvarF
  }
  return changeNabvarF
}

const Navbar = () => {

    const pathname = usePathname()
    const [ changeNabvarF, setChangeNabvarF ] = useState(false)
    const { modalLogin, setModalLogin, credencialsOk, setCredencialsOk, modalLoginM, setModalLoginM, show, setShow, setModalSuscripcion} = useThemeContext();  

const [isLoadingAnuncio, setIsLoadingAnuncio] = useState(false);

  const handleClick = () => {
    // Inicia la carga
    setIsLoadingAnuncio(true);

    // Simula alguna operación asincrónica, como una solicitud HTTP
    setTimeout(() => {
      // Finaliza la carga después de un tiempo de simulación
      setIsLoadingAnuncio(false);
    }, 2000); // Simulación de 2 segundos
  };

    const handleNavbarPhone = () => setShow(!show)

    return (
    <div className={quick.className}>

<header className="z-[999] w-screen fixed  bg-black py-0 px-[2rem]">
    <motion.div className="h-[60px] w-[94%] mx-auto flex items-center justify-between"
     variants={fadeIn("left", 0)} initial='hidden' animate="show" exit="hidden"
    >
        
        <menu className="flex gap-10">
        <div className="text-[1rem] font-bold">
        <Link href={'/'} onClick={() => {
          setShow(false)
          setChangeNabvarF(!changeNabvarF)
        }} className="font-extrabold">
                <img src="/assets/logod.png" alt="" className="h-[56px] py-2 w-auto rounded-md shadow-sm"/>
                {/* <h1 className="text-t-red text-xl font-bold">PremiumXXX Web</h1> */}
        </Link>
        </div>
        <div className="hidden lg:block dark:text-white text-slate-800">
            <ul className="my-auto flex gap-[2rem] h-full font-bold text-[14px]">
            {/* <Link
                href={'/inicio'}
                className={`my-auto ${pathname === ('/inicio') ? "font-extrabold  text-t-red transition-all duration-300 ease-in-out" : "transition-all duration-300 ease-in-out dark:text-white text-slate-800"}`}
            >Inicio</Link> */}
            {/* <Link
                href={'/'}
                className={`my-auto ${pathname === ('/') ? "font-extrabold  text-t-red transition-all duration-300 ease-in-out" : "transition-all duration-300 ease-in-out dark:text-white text-slate-800"}`}
            >Kinesiologas</Link> */}

            </ul>
        </div>
        </menu>

        <div className="hidden lg:block">
            <div className="flex gap-[0.8rem]">
           
           { credencialsOk && credencialsOk[0]?.status ? <>
            <div className="flex flex-col items-center justify-center gap-0">
            <h1 className="py-auto text-[18px] font-bold text-white">{credencialsOk[0]?.user}</h1>
            <h2 className="text-[12px] text-t-red">Suscripcion activa</h2>
            </div>
           <div className="flex gap-4 text-white">
           <button className="text-red-500 px-4 py-2 rounded-[10px]" onClick={() => setCredencialsOk([])}>Salir</button>
          </div>
           </>   
           : <div className="flex gap-4 text-white">
            <button className="bg-back-red px-6 py-2 rounded-[10px]" onClick={() => setModalLogin(true)}>Acceder</button>
            <button onClick={() => {
              setModalSuscripcion(true);
              setShow(false)
            }} className="bg-back-redd px-6 py-2 rounded-[10px]">Suscribirse</button>
           </div>}

        {/* { theme === "dark" ?
        <button onClick={handleChangeTheme} className=" rounded-full px-[10px] transition-all duration-300 ease-in-out">
              <MdOutlineLightMode className="text-t-red w-6 h-6 transition-all duration-300 ease-in-out"/>
        </button>
        :
        <button onClick={handleChangeTheme} className="rounded-full px-[10px] transition-all duration-300 ease-in-out">       
             <MdNightlight className="text-t-red w-6 h-6 transition-all duration-300 ease-in-out"/>
        </button>  
        } */}
            </div>
        </div>
        <div className=" lg:hidden"
        onClick={handleNavbarPhone}
        >
            <div className="text-[#fff] text-[1.5rem] cursor-pointer flex-none">
                { show ? <MdOutlineClose /> : <FiMenu />}
            </div>
        </div>
    </motion.div>
    
    {
        show ? <motion.div className="z-50 lg:hidden fixed left-[0rem] h-screen w-screen bg-[#131313] backdrop:blur-[15px]
        overflow-hidden transition-nicetransition"
        variants={fadeIn("left", 0)} initial='hidden' animate="show" exit="hidden"
        >
            <div className="flex flex-col justify-between gap-1 my-2">
                <ul className="flex flex-col text-2xl gap-0 p-[0.1rem] my-4 ">
                {credencialsOk && credencialsOk[0]?.status ? <>
                  <h1 className="text-[24px] font-bold px-4 text-white leading-4">Hola {credencialsOk[0]?.user}</h1>
                <h2 className="text-[16px] px-4 py-1 text-t-red">Suscripción Activa.</h2>
                <div className="flex flex-col mx-auto gap-1 text-white mt-2 py-[0.1rem] px-[1rem] w-full">
            <button className="bg-back-red px-4 py-1 text-[16px] rounded-[10px] w-full" onClick={() => {
              setModalLoginM(true);
            }}>Acceder a otra cuenta</button>
            <button onClick={() => {
              setModalSuscripcion(true);
              setShow(false)
            }} className="bg-back-redd px-4 py-1 rounded-[10px] text-[16px] w-full text-center">Suscribir otra cuenta</button>
           </div>
                </>
                : <><h1 className="text-[24px] font-bold px-4 text-white leading-4">Hola</h1>
                  <h2 className="text-[16px] px-4  text-white">El mejor contenido premium te espera</h2>
                <div className="flex mx-auto gap-4 text-white mt-2 py-[0.1rem] px-[1rem] w-full">
            <button className="bg-back-red px-4 py-1 text-[16px] rounded-[10px] w-full" onClick={() => {
              setModalLoginM(true);
            }}>Acceder</button>
            <button onClick={() => {
              setModalSuscripcion(true);
              setShow(false)
            }} className="bg-back-redd px-4 py-1 rounded-[10px] text-[16px] w-full text-center">Suscribirse</button>
           </div>
          </>}
          {modalLoginM && <div className="mt-4">
            <ModalLogin />
            </div>}
              {/* <Link href={'/inicio'} onClick={handleNavbarPhone} className={` ${pathname === ('/inicio') ? "text-t-red" : "dark:text-white text-slate-600"} mt-4 my-auto text-xl w-full flex gap-2 py-[0.1rem] px-[1rem] outline-none
                rounded-[20px] text-[16px] cursor-pointer hover:scale-[1.05] active:scale-[0.95] transition-all scale-[1] ease`}>Inicio</Link> */}
                    {/* <Link href={'/'} onClick={handleNavbarPhone} className={` ${pathname === ('/') ? "text-t-red" : "dark:text-white text-slate-600"} my-auto text-xl w-full flex gap-2 py-[0.1rem] px-[1rem] outline-none
                rounded-[20px] text-[16px] cursor-pointer hover:scale-[1.05] active:scale-[0.95] transition-all scale-[1] ease`}>Kinesiologas</Link> */}
                
                {/* { theme === "dark" ?
        <div className="flex gap-2 dark:text-white text-slate-600 py-[0.1rem] px-[1rem] hover:scale-[1.05] transition-all scale-[1] ease">
            <p className="my-auto text-[16px]"></p>
        <button onClick={handleChangeTheme} className="rounded-full transition-all duration-300 ease">    
             <MdNightlight className="text-t-red w-6 h-6 transition-all duration-300 ease"/> 
        </button>    
        </div>
        :
        <div className="flex gap-2 dark:text-white text-slate-600 py-[0.1rem] px-[1rem] hover:scale-[1.05] transition-all scale-[1] ease">
            <p className="my-auto text-[16px]"></p>
        <button onClick={handleChangeTheme} className="rounded-full transition-all duration-300 ease">
             <MdOutlineLightMode className="text-t-red w-6 h-6 transition-all duration-300 ease"/>
        </button>  
        </div>
        } */}
        
                </ul>
                
            </div>
                </motion.div> : ""
    }
</header>

</div>
  )
}

export default Navbar;