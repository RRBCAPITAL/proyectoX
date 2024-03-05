"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { changeIn } from "@/utils/motionTransitions";
import { useRouter } from "next/navigation";
import { FaCirclePlay } from "react-icons/fa6";

const CardVideo = ({
  id,
  name,
  description,
  videoUrl,
  thumbnailUrl,
  duration,
  nivel,
  views,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const router = useRouter();

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
        className={`mb-2 dark:bg-dark-d bg-white hover:cursor-pointer w-fit sm:w-[343.59px] lg:w-[439.7952px] 2xl`}
        variants={changeIn(0)}
        initial="hidden"
        animate="show"
        exit="hidden"
        onContextMenu={handleContextMenu}
      >
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
                // onClick={() => router.push(`/videos/${name}/${id}`)}
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
              className="w-full h-full object-cover cursor-pointer rounded-[15px]"
              controlsList="nodownload"
            ></video>
          )}
        </div>
        {/* <div
          className="flex flex-col gap-2 dark:text-white text-slate-500 px-1 lg:px-4 py-2 text-sm sm:text-[18px] font-bold leading-5 h-[80px] sm:h-[90px] overflow-hidden"
          style={{
            borderRadius: "0 0 18px 18px",
            bottom: 0,
            left: 0,
            right: 0,
          }}
          onClick={() => router.push(`/videos/${name}/${id}`)}
        >
          <h1
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2,
              whiteSpace: "normal",
              marginBottom: "2px",
            }}
          >
            {name}
          </h1>
          <h2 className="text-sm font-light">{views}k vistas</h2>
        </div> */}
      </motion.div>
    </div>
  );
};

export default CardVideo;
