import React, { createContext, useState } from "react";

export const GameContext = createContext<any>(null);

const GameContextProvider = ({ children, } : Readonly<{children: React.ReactNode}>) => {
    const [selectedGame, setSelectedGame] = useState<string>();
    
    return (
        <GameContext.Provider value={{ selectedGame, setSelectedGame }}>
            {children}
        </GameContext.Provider>
    )
}

export default GameContextProvider;