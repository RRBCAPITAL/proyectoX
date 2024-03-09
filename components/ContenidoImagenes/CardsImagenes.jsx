'use client'

import React, { useRef, useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { anuncios } from '@/Data/dataAnuncios';

export default function CardsImagenes() {

    const [loading, setLoading] = useState(true)
    const [dataAnuncios, setDataAnuncios] = useState()
    useEffect(() => {
        if(!dataAnuncios){
            setLoading(true)
            setDataAnuncios(anuncios)
            setLoading(false)
        }
    }, [])

  return (
    <>
      {loading ? '' : <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        slidesPerView={3} // Mostrar 3 imágenes por slide en pantallas pequeñas
        breakpoints={{
        640: {
          slidesPerView: 5, // Mostrar 4 imágenes por slide en pantallas desde 640px hasta 1023px
        },
        1024: {
          slidesPerView: 7, // Mostrar 5 imágenes por slide en pantallas de 1024px y superiores
        },
        1544: {
            slidesPerView: 8, // Mostrar 5 imágenes por slide en pantallas de 1024px y superiores
          },
      }}
        className="mySwiper w-[100%] lg:w-[98%] mt-16 lg:mt-[70px] px-0 mx-0 lg:px-20 lg:mx-10"
      >
        {anuncios.map(i => (
            <SwiperSlide>
                <img src={i.imagenPrincipal} alt={i.name} className=''/>
            </SwiperSlide>
        ))}
      </Swiper>}
    </>
  );
}
