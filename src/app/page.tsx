'use client';

import { User } from "./ui/User";
import { Bot } from "./ui/Bot";
import { useSession } from "next-auth/react";
import { useEffect } from 'react';
import io from 'socket.io-client';

export default function Home() {

  const user = useSession();

  useEffect(() => {
    const socket = io();
    
    socket.on('connect', () => {
      console.log('Connected to server');
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <main className="min-h-screen flex flex-col md:flex-row">
      {user ? <>
        <section className="flex-1 flex flex-col p-8 gap-y-4">
          <User/>
        </section>
        <section className="flex-1 flex flex-col p-8 gap-y-4">
          <Bot/>
        </section>
      </> : <></>}
    </main>
  );
}
