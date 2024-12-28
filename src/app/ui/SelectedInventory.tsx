import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useContext } from "react"
import { ItemContext } from "../context/ItemContext"
import Image from "next/image"

export const SelectedInventory = () => {

    const { selectedItem, setSelectedItem } = useContext(ItemContext)

    return (
        <Card className="w-[600px]">
            <CardHeader>
                <CardTitle>Je gekozen items</CardTitle>
                <CardDescription>Deze items wil je graag verkopen aan ons</CardDescription>
            </CardHeader>
            <CardContent>
            {selectedItem ? <>
                <Card className={`w-[150px] bg-slate-50 flex justify-center items-center`} key={selectedItem.classid}>
                    <CardContent>
                        <Image width={100} height={100} alt={selectedItem.name} src={`http://cdn.steamcommunity.com/economy/image/${selectedItem.icon_url}`}/>
                    </CardContent>
                </Card>
            </> : <></>}
            </CardContent>
        </Card>
    )
}