'use client';

import { createContext, useContext, useState } from "react";

const ThemeContext = createContext({})

export const ThemeContextProvider = ({ children }) => {
    
    const [ modalLogin, setModalLogin ] = useState(false);
    const [ modalLoginM, setModalLoginM ] = useState(false);
    const [credencialsOk, setCredencialsOk] = useState();
    const [show, setShow] = useState(false)

    return (
        <ThemeContext.Provider value={{ modalLogin, setModalLogin, modalLoginM, setModalLoginM, credencialsOk, setCredencialsOk, show, setShow }}>
            {children}
        </ThemeContext.Provider>
    )
};

export const useThemeContext = () => useContext(ThemeContext);