import { useRef } from 'react';
import img from "../../assets/Imgs/sun.png"
import img2 from "../../assets/Imgs/lua-cheia.png"

import './Parallax-style.css';
import { motion, useScroll, useTransform } from "framer-motion";

function Parallax({ type }) {
    
    const ref = useRef();
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const yTexts = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
    
    return (
        <div
            className='section-parallax'
            style={{
                background: type === "What We Do"
                    ? "linear-gradient(180deg, #111132, #505064)"
                    : "linear-gradient(180deg, #111132, #0c0c14)"
            }}
            ref={ref}
        >
            <motion.h1 style={{ y: yTexts }}>{type}</motion.h1>
            <div className='mountains'></div>
            <motion.div
                style={{ y: yBg, backgroundImage: `url(${type ? img : img2})` }}
                className='planets'

            ></motion.div>
            <motion.div style={{ x: yBg }} className='stars'></motion.div>
        </div>    
    );
}

export default Parallax;
