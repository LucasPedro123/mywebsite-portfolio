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
        <motion.div className='services' variants={variables} initial="initial"animate={ "animate"}>
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
                    <button>What we do?</button>
                </div>
            </motion.div>
            <motion.div className='listContainer' variants={variables}>
                <div className="box">
                    <h1>Projeto</h1>
                    <p>
                        llllllllllllllllllllllllllllllll
                        llllllllllllllllllllllllllllllll
                        llllllllllllllllllllllllllllllll
                    </p>
                    <button>Go</button>
                </div>
                <div className="box">
                    <h1>Projeto</h1>
                    <p>
                        llllllllllllllllllllllllllllllll
                        llllllllllllllllllllllllllllllll
                        llllllllllllllllllllllllllllllll
                    </p>
                    <button>Go</button>
                </div>
                <div className="box">
                    <h1>Projeto</h1>
                    <p>
                        llllllllllllllllllllllllllllllll
                        llllllllllllllllllllllllllllllll
                        llllllllllllllllllllllllllllllll
                    </p>
                    <button>Go</button>
                </div>
                <div className="box">
                    <h1>Projeto</h1>
                    <p>
                        llllllllllllllllllllllllllllllll
                        llllllllllllllllllllllllllllllll
                        llllllllllllllllllllllllllllllll
                    </p>
                    <button>Go</button>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default Service