"use client"

import Image from "next/image";
import SteamButton from '../img/steam_button.png';
import { signIn } from "next-auth/react";
import Link from "next/link";

const SteamLoginButton = () => {
    return (
        <Link onClick={() => signIn('steam')} href="">
            <Image alt="steam-login-button" src={SteamButton}/>
        </Link>
    )
}

export default SteamLoginButton