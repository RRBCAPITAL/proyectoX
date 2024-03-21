import Link from "next/link"
import { AiFillFacebook, AiFillInstagram, AiFillTiktok } from 'react-icons/ai'
import { SiTiktok, SiInstagram, SiFacebook, SiTelegram } from "react-icons/si";
import { Poppins } from 'next/font/google'

const quick = Poppins({ subsets: ['latin'], weight: ["400", "600"] })

const Footer = () => {
  return (
    <div className={quick.className}>
        <footer className='flex flex-col items-center justify-center text-white bg-blue-500 pt-[2rem] lg:pt-[5rem] text-[1rem]'>
        <div className='grid sm:grid-cols-4 mx-10 lg:mx-24 gap-10 sm:gap-40'>
            <div className='footer-1'>
                <Link href={'/'} className="flex flex-col gap-4 max-w-[260px]">
                    <h1 className="text-2xl font-extrabold"><strong className="">X</strong>Debutantes.com</h1>
                    <h2>Videos variados de casting de estudiantes y colegialas que inician en el porno siendo debutantes.</h2>
                </Link>
            </div>  

            <div className="flex flex-col gap-4">
                <h4 className="text-xl font-extrabold">Enlaces</h4>
                <ul className="flex flex-col gap-1">
                    {/* <li><Link href={'/inicio'}>Inicio</Link></li> */}
                    <li><Link href={'/'}>Debutantes</Link></li>
                    {/* <li><Link href={'/metodos-de-pago'}>Metodos de pago</Link></li> */}
                    {/* <li><Link target="_blank"
                    href={`https://api.whatsapp.com/send?phone=+51931550980&text=Hola,%20quiero%20crear%20un%20anuncio%20en%20Papayahub.pe`}>Crear anuncio</Link></li>
                    <li><Link href={'/activar-anuncio'}>Planes de publicación</Link></li> */}
                </ul>
            </div>

            <div className="flex flex-col gap-4">
                <h4 className="text-xl font-extrabold">Primacy</h4>
                <ul className="flex flex-col gap-4">
                    {/* <li><Link href={'/'}>Política de privacidad</Link></li> */}
                    <li>Términos y condiciones</li>
                    {/* <li><Link href={'/faqs'}>Política de reembolso</Link></li> */}
                </ul>
            </div>

            <div className="flex flex-col gap-4">
                <h4 className="text-xl font-extrabold">Redes sociales</h4>
                <div className="flex flex-col gap-4">
                <ul className="socials flex gap-2">
                    <li><Link target="_blank" href={'https://t.me/+kRPGKNx2eNZlNmQ5'} className="flex gap-1">
                        <h1>Telegram</h1>
                        <SiTelegram className="my-auto"/></Link></li>
                        <li><Link target="_blank" href={'https://www.instagram.com/xdebutantes?igsh=MWtrZDQ1dGVsNDQ2aA=='} className="flex gap-1">
                        <h1>Instagram</h1>
                        <SiInstagram className="my-auto"/></Link></li>
                    {/* <li><Link target="_blank" href={'https://www.tiktok.com/@papayahub_pe'} className="flex gap-1">
                        <h1>Tik tok</h1>
                        <SiTiktok className="my-auto"/></Link></li>           */}
                </ul>
                </div>
                
            </div>
  
        </div>
        <div className="text-center mt-[4rem] py-[0.8rem] mx-auto border-t border-slate-500 w-screen">
                <small>Copyright &copy; XDebutantes 2024</small>
        </div>
        
    </footer>
    </div>
  )
}

export default Footer