"use client"

import Navbar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";
import { usePathname } from "next/navigation";
import { ThemeContextProvider } from "@/context/theme";

import { useEffect, useState } from "react";
import SMSFlotante from "./SMSFlotante";

const Access = ({ children }) => {

  const pathname = usePathname();

  return (
    <>

      <ThemeContextProvider>
      <Navbar />
      {children}
      </ThemeContextProvider>
      <Footer />
    </>
  );
};

export default Access;

{/* <SMSFlotante /> */}