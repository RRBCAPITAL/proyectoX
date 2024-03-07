'use client';

import { createContext, useContext, useState } from "react";

const ThemeContext = createContext({})

export const ThemeContextProvider = ({ children }) => {
    
    const [ modalLogin, setModalLogin ] = useState(false);
    const [ modalLoginM, setModalLoginM ] = useState(false);

    const [ modalLoginMid, setModalLoginMid ] = useState(false);
    const [ modalLoginMidM, setModalLoginMidM ] = useState(false);
    
    const [ modalBlocked, setModalBlocked ] = useState(false);

    const [credencialsOk, setCredencialsOk] = useState([]);
    const [show, setShow] = useState(false)

    const [ modalSuscripcion, setModalSuscripcion ] = useState(false);

    const [ modalMetodosPago, setModalMetodosPago ] = useState(false);

    return (
        <ThemeContext.Provider value={{ modalLogin, setModalLogin, modalLoginM, setModalLoginM, modalLoginMid, setModalLoginMid, modalLoginMidM, setModalLoginMidM, modalBlocked, setModalBlocked, credencialsOk, setCredencialsOk, show, setShow, modalSuscripcion, setModalSuscripcion, modalMetodosPago, setModalMetodosPago }}>
            {children}
        </ThemeContext.Provider>
    )
};

export const useThemeContext = () => useContext(ThemeContext);