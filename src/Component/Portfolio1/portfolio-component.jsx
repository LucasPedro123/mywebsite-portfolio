import React, { useRef } from 'react';
import './portfolio-style.css';
import { motion, useScroll, useSpring, useTransform } from "framer-motion";


import deburguerProjectImg from '../../assets/Imgs/ImgProjects/Deburguer-shop.png';
import brasilexpressProjectImg from '../../assets/Imgs/ImgProjects/brasilexpress.png';
import ecommerceProjectImg from '../../assets/Imgs/ImgProjects/e-commerce.png';
import lesconeProjectImg from '../../assets/Imgs/ImgProjects/le-scone.png';
import weatherNowProjectImg from '../../assets/Imgs/ImgProjects/Clima-agora.png';
import barberShop from '../../assets/Imgs/ImgProjects/barber-shop.png';


const items = [
    {
        id: 1,
        link: "https://ibarber-shop.netlify.app/",
        name: "barber-shop",
        img: barberShop,
        desc: "A Barber Shop é um site projetado para promover serviços de barbearia, oferecendo informações sobre os cortes disponíveis, horário de funcionamento e localização. Desenvolvido com HTML5 e estilizado com CSS3, o site da Barber Shop apresenta um design responsivo e uma experiência de usuário atraente, complementada pela biblioteca AOS para animações suaves."
    },
    {
        id: 2,
        link: "https://deburguer-shop.netlify.app/",
        name: "Deburguer Shop",
        img: deburguerProjectImg,
        desc: "O Deburguer é um site desenvolvido para apresentar uma seleção de hambúrgueres e bebidas, além de fornecer informações sobre a localização e como fazer pedidos. Desenvolvido com HTML5 e estilizado com CSS3, o Deburguer segue um layout responsivo e proporciona uma experiência usuário agradável de navegação com um design limpo, atrativo e intuitivo."
    },
    {
        id: 3,
        link: "https://le-scone-gourmet.netlify.app/",
        name: "Le Scone",
        img: lesconeProjectImg,
        desc: "Desenvolvido completamente com HTML5 e CSS3, o Le Scone apresenta um design elegante e uma experiência intuitiva. Este projeto foi feito para destacar a beleza da simplicidade, com ênfase na qualidade do site."
    },
    {
        id: 4,
        link: "https://brazilexpress.netlify.app/",
        name: "Brasil Express",
        img: brasilexpressProjectImg,
        desc: "Desenvolvido com HTML5 e CSS3, o site da Brasil Express Haul apresenta um layout moderno e funcional, projetado para fornecer informações importantes de forma clara e acessível aos usuários. Com uma combinação de imagens ilustrativas e texto descritivo, o site destaca os serviços oferecidos pela empresa e sua posição de destaque no setor de transporte de encomendas no Brasil."
    },
    {
        id: 5,
        link: "https://previsao-do-temp.netlify.app/",
        name: "Clima agora",
        img: weatherNowProjectImg,
        desc: "Implementação capaz de fazer o cliente consumir dados relacionados à previsão do tempo da Api Open Weather."
    },
    {
        id: 6,
        link: "https://65af1bb012f1c381d79ac15e--e-commercetestproject.netlify.app/",
        name: "Ecommerce",
        img: ecommerceProjectImg,
        desc: "Projeto em React.js focado em E-commerce, da qual implementei recursos como carrinho de compras, detalhes de produtos e utilizei o contexto do UseContext para aprimorar a experiência do usuário."
    },
];

const Projects = ({ item }) => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({ target: ref, })
    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    return (
        <section ref={ref}>
            <div className='portfolio-content'>
                <div className='portfolio-image' ref={ref}>

                    <img src={item.img} alt="" />
                </div>
                <motion.div style={{ y: y }} className='portfolio-description'>
                    <h2>{item.name}</h2>
                    <p>{item.desc}</p>
                    <a href={item.link} target='_target'>
                        <button>
                            See demo
                        </button>

                    </a>
                </motion.div>
            </div>
        </section>
    )
}

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
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX: scaleX }} className='progressBar'></motion.div>
            </div>
            {items.map((e) => (
                <Projects item={e} key={e.id} />
            ))}
        </div>
    )
}

export default Portfolio;