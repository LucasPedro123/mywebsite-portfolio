import React, { useState, useEffect, useRef, useContext } from "react";
import './Comments-style.css';
import { jwtDecode } from 'jwt-decode'
import axios from 'axios';
import { motion } from 'framer-motion'
import { GoogleLogin } from '@react-oauth/google';
import { LoginContext } from '../../Context/loginGoogle-context'

function Comments() {
    const { isLoggedIn, setIsLoggedIn, name, setName, email, setEmail, profilePic, setProfilePic } = useContext(LoginContext);

    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);

    useEffect(() => {
        // Carregar comentários do servidor quando o componente montar
        loadComments();
    }, []);

    const responseGoogle = (res) => {
        const credentialsDecoded = jwtDecode(res.credential);

        setName(credentialsDecoded.name);
        setEmail(credentialsDecoded.email);
        setProfilePic(credentialsDecoded.picture);
        setIsLoggedIn(true);
        console.log("login sucessed")
    };

    const loadComments = async () => {
        try {
            const response = await axios.get('https://system-comments.onrender.com/api/comments');
            setComments(response.data);
        } catch (error) {
            console.error('Erro ao carregar comentários:', error);
        }
    };

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const handleSubmitComment = async () => {
        try {
            await axios.post('https://system-comments.onrender.com/api/comments', {
                name,
                profilePic,
                comment
            });
            setComment('');
            // Recarregar comentários após enviar um novo comentário
            loadComments();
        } catch (error) {
            console.error('Erro ao enviar comentário:', error);
        }
    };










    const [startX, setStartX] = useState(null);
    const [startScrollLeft, setStartScrollLeft] = useState(null);
    const carouselRef = useRef(null);

    function handleMouseDown(e) {
        setStartX(e.pageX);
        setStartScrollLeft(e.currentTarget.scrollLeft);
    }

    function handleMouseMove(e) {
        if (!startX) return; // Mouse não foi pressionado

        const carousel = e.currentTarget;
        const scrollLeft = startScrollLeft - (e.pageX - startX);
        carousel.scrollLeft = scrollLeft;
    }

    function handleMouseUp() {
        setStartX(null);
        setStartScrollLeft(null);
    }

    function handleClickBtn(direction) {
        const carousel = carouselRef.current;
        const firstCardWidth = 300; // Largura do primeiro cartão em pixels

        if (carousel) {
            const scrollAmount = direction === "left" ? -firstCardWidth : firstCardWidth;
            carousel.scrollLeft += scrollAmount;
        }
    }


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
        <motion.section id="comentario" variants={variables} initial="initial" animate={"animate"}>
            <motion.div className='textContainer'>
                <p>Descubra o que posso
                    <br /> fazer por você</p>
                <hr />
            </motion.div>
            <div>
                <div className="container">
                    {/* Mapeia todos os comentários e exibe cada um como um cartão */}
                    <i id="left" className="fa-solid fa-angle-left" onClick={() => handleClickBtn("left")}></i>
                    <ul
                        className="carousel"
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseUp}
                        ref={carouselRef}
                    >
                        {comments.map((comment, index) => (
                            <li key={index} className="card">
                                <div className="card-img">
                                    <div className="img">
                                        <img src={comment.profilePic} alt="" />
                                    </div>
                                </div>
                                <div className="card-texts">
                                    <h2>{comment.name}</h2>
                                    <span>{comment.comment}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <i id="right" className="fa-solid fa-angle-right" onClick={() => handleClickBtn("right")}></i>
                </div>
                <div className="container-comments">
                    <div className="comment-content">
                        <div className="comment-forms">
                            <img src={profilePic ? profilePic : 'https://th.bing.com/th/id/OIP.dNfuZjZeZUmYxsqHRhYtSQHaHa?rs=1&pid=ImgDetMain'} alt="Profile" className="profile-pic" />
                            <div className="input-box">
                                <input
                                    value={comment}
                                    onChange={handleCommentChange}
                                    className="comment-text"
                                    placeholder="Adicione um comentário..."
                                    maxLength={100}
                                />
                            </div>
                        </div>
                        <div className="comment-submit">
                            <button type="submit" disabled={!isLoggedIn} onClick={handleSubmitComment} className="submit-button" >Enviar Comentário</button>
                        </div>
                        <div className="message">
                            {!isLoggedIn && <div className="login-message">
                                <i class="fa-solid fa-circle-exclamation"></i>
                                {!isLoggedIn && <span>Por favor, entre com sua conta Google para comentar.</span>}
                            </div>}


                        </div>
                    </div>
                </div>
            </div>


        </motion.section>
    );
}

export default Comments;