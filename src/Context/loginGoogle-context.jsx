import React, { createContext, useState, useContext } from 'react';

// Criando o contexto
export const LoginContext = createContext();

// Hook personalizado para acessar o contexto de login
export function useLogin() {
    return useContext(LoginContext);
}

// Provedor de contexto de login
export function LoginProvider({ children }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Valores fornecidos pelo provedor de contexto
    const values = {
        isLoggedIn,
        setIsLoggedIn,
        name,
        setName,
        email,
        setEmail,
        profilePic,
        setProfilePic
    };

    return (
        <LoginContext.Provider value={values}>
            {children}
        </LoginContext.Provider>
    );
}
