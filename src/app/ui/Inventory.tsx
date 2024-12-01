import { useContext, useEffect, useState } from "react";
import { GameContext } from "../context/GameContext";
import { fetchUserInventory } from "../actions/actions";
import { useSession } from "next-auth/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const Inventory = () => {
    const { selectedGame, setSelectedGame } = useContext(GameContext)
    const [inventory, setInventory] = useState<Array<any>>([])
    const user = useSession();

    useEffect(() => {
        const fetchinventory = async () => {
            try {
                if(selectedGame) {
                    const response = await fetchUserInventory(user.data?.user.profile.sub, selectedGame, 2);
                    const newInventory = await JSON.parse(response);
                    setInventory(newInventory.descriptions);
                    console.log(newInventory)
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchinventory();
    }, [selectedGame, setSelectedGame])

    return (
        <Card className="w-[600px]">
            <CardHeader>
                <CardTitle>Selecteer je items</CardTitle>
                <CardDescription>Selecteer de items die je wilt verkopen</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-3 gap-8">
                    {inventory.map((item : any) => (
                        <Card className="w-[150px] bg-slate-50" key={item.classid}>
                            <CardContent>
                                <Image width={100} height={100} alt={item.name} src={`http://cdn.steamcommunity.com/economy/image/${item.icon_url}`}/>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}

export default Inventory;