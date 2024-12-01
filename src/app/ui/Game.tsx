"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useContext } from "react";
import { GameContext } from "../context/GameContext";

export const Game = (props : any) => {
    const { selectedGame, setSelectedGame } = useContext(GameContext)
    
    return (
        <Card className={`cursor-pointer w-[150px] flex justify-center items-center ${selectedGame === props.id ? 'border-2 border-green-500' : ''}`} onClick={() => setSelectedGame(props.id)}>
            <CardContent className="py-2 mb-0 flex flex-col items-center justify-center">
                <Image width={150} height={150} alt={props.name} src={props.img}/>
            </CardContent>
        </Card>
    )
}