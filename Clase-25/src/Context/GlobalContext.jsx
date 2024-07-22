import { createContext, useContext } from "react";

const GlobalContext = createContext()

export  const  GlobalContextProvider = ({children}) => {
    let nombre = 'pepe'
    return (
        <GlobalContextProvider value= {{ nombre: nombre}} >
                {children}
            </GlobalContextProvider>
    )
}

export
    
