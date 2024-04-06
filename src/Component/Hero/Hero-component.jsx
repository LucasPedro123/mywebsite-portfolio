import Navbar from "../NavBar/Navbar"
import myImg from '../../assets/Imgs/eu.jpg'
import { motion } from "framer-motion";
import './Hero-style.css'

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: 1,
    staggerChildren: 0.1,
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity
    }
  },

};



const sliderVariants = {
  initial: {
    x: 0, // Inicializa o texto fora da tela à direita
  },
  animate: {
    x: ["-100%", "100%", "-100%", "100%"], // Move o texto da direita para a esquerda e de volta para a direita
    transition: {
      repeatType: "mirror",
      repeat: Infinity,
      duration: 20, // Ajuste conforme necessário para controlar a velocidade do deslize
    },
  },
};


function Hero() {
  return (
    <>
      <main className="main">
        <div className="main-wrapper">
          <motion.div className="main-content" variants={textVariants} initial="initial" animate="animate">
            <motion.h2 className="main-name" variants={textVariants}>Lucas Pedro</motion.h2>
            <motion.h1 className="main-title" variants={textVariants}>Web developer and UI Designer</motion.h1>
            <motion.div className="main-buttoms" variants={textVariants}>
              <a href="#servicos">
                <motion.button variants={textVariants}>Veja Meus Trabalhos</motion.button>
              </a>
              <a href="https://api.whatsapp.com/send?phone=11976589382&text=Olá,%20Lucas%20Pedro!%20Eu%20vim%20através%20do%20seu%20site!%20Podemos%20conversar?">
                <motion.button variants={textVariants}>Entre em Contato <i class="fa-brands fa-whatsapp"></i></motion.button>
              </a>
            </motion.div>
            <motion.div variants={textVariants} animate="scrollButton" className="main-icons">
              <i class="fa-solid fa-computer-mouse-scrollwheel"></i>
              <i class="fa-solid fa-chevron-down"></i>
            </motion.div>
          </motion.div>
        </div>
        <motion.div className="main-slidingText" variants={sliderVariants} initial="initial" animate="animate">
          Transformando Ideias em Realidade Digital
        </motion.div>
        <article className="test">
          <div className="main-image">
            <img src={myImg} alt="" />
          </div>
        </article>
      </main>
    </>
  )
}

export default Hero