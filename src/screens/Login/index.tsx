import { useContext, useState } from "react";
import React from "react-native";
import { AuthContext } from "../../contexts/Auth";
import { Button, TextInput } from "../../components";
import { ThemeContext } from "../../contexts";
import AppContainer from "../../components/AppContainer";

const Login = () => {
    const auth = useContext(AuthContext)
    const { appColors } = useContext(ThemeContext)
    
    const [text, onChangeText] = useState('');

    return(
        <AppContainer
            backgroundColor={appColors.primaryBackgroundColor}
        >
            <TextInput
                onChangeText={onChangeText}
                value={text}
                textColor={appColors.primaryTextColor}
                backgroundColor={appColors.secondaryBackgroundColor}
            />
            <Button
                onPress={() => auth.signIn(text)}
                backgroundColor={appColors.highlightBackgroundColor}
                textColor={appColors.highlightTextColor}
            >
                Entrar
            </Button>
        </AppContainer>
    );
}

export default Login;