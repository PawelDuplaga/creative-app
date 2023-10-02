'use client'

import { useEffect, useRef, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const BIG_SIZE = 120;
const SMALL_SIZE = 15;
const PER_PX = 0.3;


const Dot = ({ mousePos }: { mousePos: { mpx: number, mpy: number }}) => {

    const size = useSpring(SMALL_SIZE,{
        damping: 30,
        stiffness: 200,
    });

    const dotRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!dotRef.current) return;
        const { mpx, mpy } = mousePos;
        const { x: dotX, y: dotY } = dotRef.current.getBoundingClientRect();

        const distance = Math.sqrt(
            Math.pow(Math.abs(mpx - dotX), 2) + 
            Math.pow(Math.abs(mpy - dotY), 2)
        );

        size.set(Math.max(BIG_SIZE - PER_PX * distance, SMALL_SIZE));
    }, [mousePos, size]);

    return (
        <div ref={dotRef} className="relative">
            <motion.div
                className="bg-violet-400 rounded-full absolute -translate-y-1/2 -translate-x-1/2"
                style={{ width: size, height: size}}
            />
        </div>
    )

}


export default Dot;