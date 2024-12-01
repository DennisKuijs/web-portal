"use client";

import GameContextProvider from "../context/GameContext"
import { GameSelector } from "./GameSelector";
import Inventory from "./Inventory";
import { SelectedInventory } from "./SelectedInventory";

export const User = () => {
    return (
        <>
            <GameContextProvider>
                <div><SelectedInventory/></div>
                <div><GameSelector/></div>
                <div><Inventory/></div>
            </GameContextProvider>
        </>
    )
}