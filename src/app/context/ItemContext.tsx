import React, { createContext, useState } from "react";

export const ItemContext = createContext<any>(null);

const ItemContextProvider = ({ children, } : Readonly<{children: React.ReactNode}>) => {
    const [selectedItem, setSelectedItem] = useState<Array<any>>();
    
    return (
        <ItemContext.Provider value={{ selectedItem, setSelectedItem }}>
            {children}
        </ItemContext.Provider>
    )
}

export default ItemContextProvider;