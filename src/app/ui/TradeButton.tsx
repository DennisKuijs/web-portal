import { Button } from "@/components/ui/button";
import { useContext } from "react";
import io from 'socket.io-client';
import { ItemContext } from "../context/ItemContext";
import { useSession } from "next-auth/react";

const TradeButton = () => {

    const { selectedItem, setSelectedItem } = useContext(ItemContext);
    const socket = io();
    const user = useSession();

    const sendTrade = () => {
        const trade = {}
        trade.user = user.data?.user.profile.sub;
        trade.item = selectedItem;
        socket.emit('trade', trade);
    }

    return (
        <Button onClick={() => sendTrade()}>Create Trade</Button>
    )
}

export default TradeButton;