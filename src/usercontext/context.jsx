import { createContext, useState } from "react";

export const context = createContext();

export const ContextGlobal = ({ children }) => {
    const [visible, setVisible] = useState(false);

    return (
        <context.Provider value={{
            'isVisible': visible,
            'setVisibility': setVisible
        }}> 
            {children}
        </context.Provider>
    )
}