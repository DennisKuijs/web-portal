"use client";

import { useContext } from "react";
import GamesList from '@/app/lib/games.json';
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { GameContext } from "../context/GameContext";

const GameSelector = () => {
    const { selectedGame, setSelectedGame } = useContext(GameContext)
    
    const selectGame = (appId: number) => {
        setSelectedGame(appId === selectedGame ? null : appId);
     }
 
    return (
        <div className="p-4 flex justify-start gap-x-12">
            {GamesList.map((game) => (
                <Card key={game.app_id} className={`cursor-pointer w-[150px] flex justify-center items-center ${selectedGame === game.app_id ? 'border-2 border-green-500' : ''}`} onClick={() => selectGame(game.app_id)}>
                    <CardContent className="py-2 mb-0 flex flex-col items-center justify-center">
                        <Image width={150} height={150} alt={game.name} src={game.imgPath}/>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}

export default GameSelector;