"use client"

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import TradeIcon from "./icons/TradeIcon";
import TransactionIcon from "./icons/TransactionIcon";
import UserIcon from "./icons/UserIcon";
import SignoutIcon from "./icons/SignoutIcon";
import { signOut } from "next-auth/react";

const UserProfile = (props: any) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Avatar>
                    <AvatarImage src={props.user.user?.image as string}/>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>{props.user.user?.name}</DropdownMenuLabel>
                <DropdownMenuSeparator/>
                <DropdownMenuItem>
                    <UserIcon/>My account
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <TradeIcon/>Trade history
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <TransactionIcon/>Transaction history
                </DropdownMenuItem>
                <DropdownMenuSeparator/>
                <DropdownMenuItem onClick={() => signOut()} className="text-red-600 font-semibold">
                    <SignoutIcon/>Sign Out
                </DropdownMenuItem>
            </DropdownMenuContent>
      </DropdownMenu>
    )
}

export default UserProfile;