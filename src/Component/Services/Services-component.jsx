import './Service.css'
import react, {useRef} from 'react'
import {motion} from 'framer-motion'
import people from '../../assets/Imgs/people.webp'

function Service() {

    const variables = {
        initial: {
            x: -500,
            y: 100,
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                staggerChildren: 0.1,
            }
        }
    }



    return (
        <motion.div className='services' variants={variables} initial="initial"animate={"animate"}>
            <motion.div className='textContainer'>
                <p>I focus on helping your brand grow <br/>and move forward</p>
                <hr/>
            </motion.div>
            <motion.div className='titleContainer' variants={variables}>
                <div className='title'>
                    <img src={people} alt="" />
                    <h1>
                        <b>Unique</b> Ideas
                    </h1>
                </div>
                <div className='title'>
                    <h1>
                        <b>For Yuor</b> Buniness
                    </h1>
                    <button>O que faço?</button>
                </div>
            </motion.div>
            <motion.div className='listContainer' variants={variables}>
                <div className="box">
                    <h1>Projeto</h1>
                    <p>
                        Estou comprometido em ser seu parceiro estratégico para o avanço e sucesso de sua presença online. Com soluções
                        personalizadas, podemos criar experiências digitais que cativam
                        e engajam seus usuários.
                        
                    </p>
                    <button>Explore</button>
                </div>
                <div className="box">
                    <h1>Projeto</h1>
                    <p>
                        Estou aqui para apoiá-lo em cada etapa do caminho. Com minha expertise e compromisso, podemos construir um
                        futuro de sucesso, um passo de cada vez.
                    </p>
                    <button>Explore</button>
                </div>
                <div className="box">
                    <h1>Projeto</h1>
                    <p>
                         Estou aqui para colaborar com você em sua jornada rumo ao sucesso. Com minha dedicação e experiência,
                        podemos superar desafios e alcançar novas conquistas juntos.
                    </p>
                    <button>Explore</button>
                </div>
                <div className="box">
                    <h1>Projeto</h1>
                    <p>
                        Estou aqui para transformar suas ideias em realidade digital. Como Desenvolvedor Web, meu objetivo é
                        criar soluções digitais que não apenas impressionem, mas também impulsionem o crescimento de sua empresa.
                    </p>
                    <button>Explore</button>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default Service