"use client";

import GamesList from '@/app/lib/games.json';
import { GameContext } from '../context/GameContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { useContext } from 'react';

export const GameSelector = () => {

    const { selectedGame, setSelectedGame } = useContext(GameContext)

    return (
        <Card className='w-[600px]'>
            <CardHeader>
                <CardTitle>Selecteer een game</CardTitle>
                <CardDescription>We hebben verschillende mogelijkheden</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="p-4 flex justify-start gap-x-12">
                    {GamesList.map((game) => (
                        <Card className={`cursor-pointer w-[150px] flex justify-center items-center bg-slate-50 ${selectedGame === game.app_id ? 'border-2 border-green-500' : ''}`} onClick={() => setSelectedGame(game.app_id)}>
                            <CardContent className="py-2 mb-0 flex flex-col items-center justify-center">
                                <Image width={150} height={150} alt={game.name} src={game.img}/>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}