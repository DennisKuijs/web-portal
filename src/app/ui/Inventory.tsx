import { useContext, useEffect, useState } from "react";
import { GameContext } from "../context/GameContext";
import { fetchUserInventory } from "../actions/actions";
import { useSession } from "next-auth/react";
import { Card, CardContent } from "@/components/ui/card";
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
        <div className="p-4 flex justify-center">
            {inventory.map((item : any) => (
                <Card className="w-[250px]" key={item.classid}>
                    <CardContent>
                        <Image width={100} height={100} alt={item.name} src={`http://cdn.steamcommunity.com/economy/image/${item.icon_url}`}/>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}

export default Inventory;