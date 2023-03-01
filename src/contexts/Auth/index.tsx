import React, { ReactNode, createContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import AuthContextProps from '../../types/AuthContextProps';
import ServerRequest from '../../services/ServerRequests';
import db from '../../../db.json'

export const AuthContext = createContext({} as AuthContextProps);

type props = {
    children: ReactNode ;
}

const AuthProvider = ({children}: props): JSX.Element => {
    const navigation = useNavigation();
    const [user, setUser] = useState('');

    const signIn = async (chave: string) => {
        chave = chave.toUpperCase()

        try {
            // const response = await ServerRequest.GETFromServer('funcionarios')
            const response = db.funcionarios;
            if(response.find((funcionario: { chave: string; }) => funcionario.chave === chave)){
                setUser(chave);
                navigation.navigate("Home");
            } else
                alert('Usuário não encontrado!')
        } catch (error) {
            alert(error)
        }

    };

    return(
        <AuthContext.Provider value={{
            user: user,
            signIn: signIn
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;