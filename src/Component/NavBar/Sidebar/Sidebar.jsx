// Sidebar.js
import React, { useState, useEffect, useRef } from "react";
import './Sidebar.css';
import Links from './links/links';
import ToggleBtn from './toggleButton/toggleButton';
import { motion } from "framer-motion";
import { GoogleLogin } from '@react-oauth/google';
import { LoginContext } from '../../../Context/loginGoogle-context'
import { useContext } from "react";
import { jwtDecode } from 'jwt-decode'
import axios from 'axios';

const variants = {
    open: {
        clipPath: "circle(1200px at 50px 50px)",
        transition: {
            type: "spring",
            stiffness: 20,
        }
    },
    closed: {
        clipPath: "circle(30px at 50px 50px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40,
        }
    }
};
function Sidebar() {
    const [open, setOpen] = useState(false);
    const { isLoggedIn, setIsLoggedIn, name, setName, email, setEmail, profilePic, setProfilePic } = useContext(LoginContext);

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


    return (
        <motion.div className='sidebar' animate={open ? "open" : "closed"}>
            <motion.div className='bg' variants={variants}>
                <Links />
                {isLoggedIn ? (
                    <div className="user-info">
                        <img src={profilePic} alt="Profile" className="profile-pic" />
                    </div>
                ) : (
                    <div className="google-login-button">
                        <GoogleLogin
                            text="Continuar com o Google"
                            onSuccess={responseGoogle}
                            onError={responseGoogle}
                        />
                    </div>
                )}
            </motion.div>
            <ToggleBtn setOpen={setOpen} />
        </motion.div>
    );
}

export default Sidebar;
