"use client";

import { useState } from "react";
import GamesList from '@/app/lib/games.json';
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const GameSelector = () => {
    const [selectedGame, setSelectedGame] = useState<number | null>(null)
    const selectGame = (id: number) => {
        setSelectedGame(id === selectedGame ? null : id);
     }
 
    return (
        <div className="p-4 flex justify-start gap-x-12">
            {GamesList.map((game) => (
                <Card key={game.id} className={`cursor-pointer w-[150px] flex justify-center items-center ${selectedGame === game.id ? 'border-2 border-green-500' : ''}`} onClick={() => selectGame(game.id)}>
                    <CardContent className="py-2 mb-0 flex flex-col items-center justify-center">
                        <Image width={150} height={150} alt={game.name} src={game.imgPath}/>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}

export default GameSelector;