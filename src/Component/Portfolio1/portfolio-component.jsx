import React, { useRef } from 'react';
import './portfolio-style.css';
import { motion, useScroll, useSpring, useTransform } from "framer-motion";


import deburguerProjectImg from '../../assets/Imgs/ImgProjects/Deburguer-shop.png';
import brasilexpressProjectImg from '../../assets/Imgs/ImgProjects/brasilexpress.png';
import ecommerceProjectImg from '../../assets/Imgs/ImgProjects/e-commerce.png';
import lesconeProjectImg from '../../assets/Imgs/ImgProjects/le-scone.png';
import weatherNowProjectImg from '../../assets/Imgs/ImgProjects/Clima-agora.png';
import barberShop from '../../assets/Imgs/ImgProjects/barber-shop.png';
import systemLogin from '../../assets/Imgs/ImgProjects/loginwebview.png';


const items = [
    {
        id: 1,
        link: "https://client-seven-ashy.vercel.app/",
        name: "Sistema de Autenticação",
        img: systemLogin,
        desc: "Sistema de Registro e Autenticação de usuários, oferecendo uma solução simples e eficaz. Desenvolvido com React e Node."
    },
    {
        id: 2,
        link: "https://ibarber-shop.netlify.app/",
        name: "Barber Shop",
        img: barberShop,
        desc: "Promove serviços de barbearia com um design atraente e responsivo, desenvolvido com HTML5 e CSS3."
    },
    {
        id: 3,
        link: "https://deburguer-shop.netlify.app/",
        name: "Deburguer Shop",
        img: deburguerProjectImg,
        desc: "Apresenta uma seleção de hambúrgueres e bebidas, com um layout intuitivo desenvolvido em HTML5 e CSS3."
    },
    {
        id: 4,
        link: "https://le-scone-gourmet.netlify.app/",
        name: "Le Scone",
        img: lesconeProjectImg,
        desc: "Um site elegante e intuitivo que destaca a qualidade dos produtos, desenvolvido com HTML5 e CSS3."
    },
    {
        id: 5,
        link: "https://brazilexpress.netlify.app/",
        name: "Brasil Express",
        img: brasilexpressProjectImg,
        desc: "Site de transporte de encomendas com um layout moderno e funcional, desenvolvido com HTML5 e CSS3."
    },
    {
        id: 6,
        link: "https://previsao-do-temp.netlify.app/",
        name: "Clima agora",
        img: weatherNowProjectImg,
        desc: "Fornece dados precisos da previsão do tempo de forma simples e acessível, utilizando tecnologias web."
    },
    {
        id: 7,
        link: "https://65af1bb012f1c381d79ac15e--e-commercetestproject.netlify.app/",
        name: "Ecommerce",
        img: ecommerceProjectImg,
        desc: "Projeto E-commerce em React.js, com recursos como carrinho de compras e detalhes de produtos."
    },
];


const Projects = ({ item }) => {
    const imageRef = useRef();
    const { scrollYProgress } = useScroll({ target: imageRef });
    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    return (
        <section id="porfolio"> 
            <div className='portfolio-content'>
                <div className='portfolio-image' ref={imageRef}>
                    <img src={item.img} alt="" />
                </div>
                <motion.div style={{ y }} className='portfolio-description'>
                    <h2>{item.name}</h2>
                    <p>{item.desc}</p>
                    <a href={item.link} target='_target' className='btn-link'>
                        <button>
                            Demo
                        </button>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

function Portfolio() {
    const ref = useRef();
    const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] })
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30
    })
    return (
        <div className='portfolio' ref={ref}>
            <div className='portfolio-lineProgress'>
                <h1>Projetos de Destaque</h1>
                <motion.div style={{ scaleX: scaleX }} className='progressBar'></motion.div>
            </div>
            {items.map((e) => (
                <Projects item={e} key={e.id} />
            ))}
        </div>
    )
}

export default Portfolio;