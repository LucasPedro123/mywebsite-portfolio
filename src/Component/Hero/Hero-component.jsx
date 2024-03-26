import Navbar from "../NavBar/Navbar"
import myImg from '../../assets/Imgs/p2p.png'
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
              <motion.button variants={textVariants}>See the Latest Works</motion.button>
              <motion.button variants={textVariants}>Contact Me</motion.button>
            </motion.div>
            <motion.div variants={textVariants} animate="scrollButton" className="main-icons">
              <i class="fa-solid fa-computer-mouse-scrollwheel"></i>
              <i class="fa-solid fa-chevron-down"></i>
            </motion.div>
          </motion.div>
        </div>
        <motion.div className="main-slidingText" variants={sliderVariants} animate="animate">
            Writer Content Creator Influencer
        </motion.div>
        <div className="main-image">
          <img src={myImg}  alt="" />
        </div>
      </main>
    </>
  )
}

export default Hero