"use client";

import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import CardVideo from "./CardVideo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Masonry from "react-masonry-css";
// import "./stylecards.css";

import { dataVideos } from "@/Data/dataVideos";

const CardsVideos = () => {
  const [video, setVideo] = useState();
  const [filteredVideo, setFilteredVideo] = useState([]);
  const [updatedVideo, setUpdatedVideo] = useState(false);
  const [listen, setListen] = useState(false);

  useEffect(() => {
    window.addEventListener("beforeunload", () => {
      localStorage.removeItem("videoStorage");
    });
  }, []);

  useEffect(() => {
    setVideo(dataVideos)
  }, [updatedVideo]);

  const breakpointColumnsObj = {
    default: 4, // Número de columnas por defecto
    1500: 4,
    1200: 3, // Cambiar a 4 columnas en pantallas de 1200px o menos
    992: 2, // Cambiar a 3 columnas en pantallas de 992px o menos
    768: 2, // Cambiar a 2 columnas en pantallas de 768px o menos
    610: 2, // Cambiar a 2 columnas en pantallas de 768px o menos
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center gap-4 w-screen min-h-screen lg:min-h-fit dark:bg-dark-l bg-[#fff]">

      <containertotal className="flex overflow-x-hidden mt-2 lg:mt-10 mx-[12px]">
        <contain className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-center gap-1 lg:gap-[20px] min-h-fit mb-0 lg:mb-10 w-full">
          {video?.length > 0
            ? video.map((a) => (
                <CardVideo
                  key={a?.id}
                  id={a?.id}
                  name={a?.title}
                  description={a?.description}
                  nivel={a?.nivel}
                  videoUrl={a?.videoUrl}
                  thumbnailUrl={a?.thumbnailUrl}
                  duration={a?.duration}
                  views={a?.views}
                />
              ))
            : ""}
        </contain>
      </containertotal>

    </div>
  );
};

export default CardsVideos;
