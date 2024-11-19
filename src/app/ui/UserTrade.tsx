"use client";

import GameSelector from "./GameSelector";
import GameContextProvider from "../context/GameContext";
import Inventory from "./Inventory";

const UserTrade = () => {
    return (
        <GameContextProvider>
            <GameSelector/>
            <Inventory/>
        </GameContextProvider>
    )
}

export default UserTrade;