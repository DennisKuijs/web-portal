"use client";

import GameContextProvider from "../context/GameContext"
import ItemContextProvider from "../context/ItemContext";
import { GameSelector } from "./GameSelector";
import Inventory from "./Inventory";
import { SelectedInventory } from "./SelectedInventory";
import TradeButton from "./TradeButton";

export const User = () => {
    return (
        <>
            <GameContextProvider>
                <ItemContextProvider>
                    <div><SelectedInventory/></div>
                    <div><GameSelector/></div>
                    <div><Inventory/></div>
                    <div><TradeButton/></div>
                </ItemContextProvider>
            </GameContextProvider>
        </>
    )
}