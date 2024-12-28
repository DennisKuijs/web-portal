import { useContext, useEffect, useState } from "react";
import { GameContext } from "../context/GameContext";
import { fetchUserInventory } from "../actions/actions";
import { useSession } from "next-auth/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { ItemContext } from "../context/ItemContext";

const Inventory = () => {
    const { selectedGame, setSelectedGame } = useContext(GameContext)
    const { selectedItem, setSelectedItem } = useContext(ItemContext)
    
    const [inventory, setInventory] = useState<Array<any>>([])
    const user = useSession();

    useEffect(() => {
        const fetchinventory = async () => {
            try {
                if(selectedGame) {
                    const response = await fetchUserInventory(user.data?.user.profile.sub, selectedGame, 2);
                    const newInventory = await JSON.parse(response);
                    console.log(newInventory);
                    setInventory(newInventory.descriptions);
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
                        <Card className={`w-[150px] bg-slate-50 flex justify-center items-center ${selectedItem === item ? 'border-2 border-green-500' : ''}`} key={item.classid} onClick={() => setSelectedItem(item)} >
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