// links/Links.js
import React from 'react';
import './links.css';
import { motion } from "framer-motion";


const variants = {
    open: {
        transition: {
            staggerChildren: 0.1
        }
    },
    closed: {
        transition: {
            staggerChildren: 0.5,
            staggerDirection: -1,
        }
    }
}

const itemVariants = {
    open: {
        y: 0,
        opacity: 1
    },
    closed: {
        y: 50,
        opacity: 0
    }
}

const items = [
    {
        link: "#home",
        name: "Home"
    },
    {
        link: "#servicos",
        name: "Serviços"
    },
    {
        link: "#porfolio",
        name: "Porfolio"
    },
    {
        link: "#contato",
        name: "Contato"
    },
]

function Links() {
    return (
        <>
            <motion.div className='links' variants={variants}>
                {items.map(e => {
                    return (
                        <span >
                            <motion.a href={e.link}  variants={itemVariants}>
                                {e.name}
                            </motion.a >
                        </span>
                    )
                })}
            </motion.div>
        </>
    );
}

export default Links;
