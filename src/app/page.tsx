'use client'

import Image from 'next/image'
import { useState, useEffect } from "react";
import Dot from '@/components/Dot';

type MousePositionT = {
  mpx : number
  mpy : number
}


export default function Home() {

  const [mousePos, setMousePos] = useState<MousePositionT>({ mpx: 0, mpy: 0});

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      setMousePos({ mpx: e.clientX, mpy: e.clientY});
    };
    window.addEventListener("mousemove", handler);

    return () => {
      window.removeEventListener("mousemove", handler);
    }
  },[])

  return (
    <main className="relative flex flex-col justify-center items-center px-10 pt-[10rem]">
      <div className='flex flex-wrap w-[1400px] gap-24 mx-auto p-12 z-0'>
        {
          Array.from({ length: 126 }, (_, i) => (
            <Dot key={i} mousePos={mousePos} />
          ))
        }

      </div>
      <h1 className='absolute z-10 text-[140px] top-[30%] left-[20%] font-bold text-gray-950'>
        JOHN ZHERKA
      </h1>
      <h2 className='absolute z-10 text-[40px] top-[48%] left-[24%] font-bold text-gray-950'>
        CREATIVE DIRECTOR OF RIGBY
      </h2>
    </main>
  )
}
