"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { changeIn } from "@/utils/motionTransitions";
import { useRouter } from "next/navigation";
import { FaCirclePlay } from "react-icons/fa6";
import { useThemeContext } from "@/context/theme";

const CardVideo = ({
  id,
  name,
  description,
  videoUrl,
  thumbnailUrl,
  duration,
  nivel,
  views,
  blocked,
  access
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  
  const { setModalBlocked } = useThemeContext()

  console.log(access);

  const toggleHover = () => {
    setIsHovered(!isHovered);
  };

  const handleClick = () => {
    setIsClicked(true);
  };

  const handleContextMenu = (event) => {
    event.preventDefault();
  };
3.7254
  return (
    <div>
      <motion.div
        style={{ position: "relative" }}
        className={`mb-2 hover:cursor-pointer w-fit sm:w-[343.59px] lg:w-[439.7952px] 2xl`}
        variants={changeIn(0)}
        initial="hidden"
        animate="show"
        exit="hidden"
        onContextMenu={handleContextMenu}
      >
        {access ? <>
          <div
          style={{
            position: "relative",
            overflow: "hidden",
          }}
          className="w-full h-fit sm:h-[193.26px] lg:h-[247.3728px]"
        >
          {!isClicked ? (
            <>
              <img
                src={thumbnailUrl}
                onClick={handleClick}
                alt="Miniatura del video"
                className="relative w-full h-full object-cover cursor-pointer"
              />
              <div className="absolute bottom-0 right-0 px-2 mx-4 my-2 py-1 bg-[#212121] text-white">
                {duration}
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <FaCirclePlay
                  onClick={handleClick}
                  className="w-[50px] h-[50px] opacity-0 sm:w-[100px] sm:h-[100px] text-t-red hover:opacity-80 transition-all duration-200 ease-linear cursor-pointer"
                />
              </div>
            </>
          ) : (
            <video
              autoPlay
              controls
              muted
              playsInline
              src={videoUrl}
              className="w-full h-full object-cover cursor-pointer"
              controlsList="nodownload"
            ></video>
          )}
        </div>
        <h2 className="text-white px-1 py-1">{description}</h2>
        </> : 
        <>
        <div
        style={{
          position: "relative",
          overflow: "hidden",
        }}
        className="w-full h-fit sm:h-[193.26px] lg:h-[247.3728px]"
        onClick={() => setModalBlocked(true)}
      >    
            <img
              src={thumbnailUrl}
              alt="Miniatura del video"
              className="relative w-full h-full object-cover cursor-pointer hover:opacity-80 duration-200 transition-all ease-linear"
            />
            <div className="absolute bottom-0 right-0 px-2 mx-4 my-2 py-1 bg-[#212121] text-white">
              {duration}
            </div>
            <div className="absolute flex bottom-0 left-0 px-1 mx-[6px] my-1 py-1 rounded-[10px] text-white">
            <img width="18" height="12" src="https://img.icons8.com/ios-filled/50/lock.png" alt="lock" className="bg-back-red py-1 px-0 h-6 w-[20px]"/>
            <label htmlFor="" className="bg-black text-white py-[2px] px-2 text-[12px]">Premium</label>
            </div>
      </div>
      <h2 className="text-white px-1 py-1">{description}</h2>
        </>}
      </motion.div>
    </div>
  );
};

export default CardVideo;
