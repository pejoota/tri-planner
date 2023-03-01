import { StatusBar } from "react-native";
import { AppContainer, Button } from "../../components";
import { useContext } from "react";
import { ThemeContext } from "../../contexts";
import { useNavigation } from "@react-navigation/native";

const Homescreen = () => {
    const { appColors } = useContext(ThemeContext);
    const navigation = useNavigation();

    return(
        <AppContainer backgroundColor={appColors.primaryBackgroundColor} >
            <StatusBar />
            <Button
                backgroundColor={appColors.highlightBackgroundColor}
                textColor={appColors.highlightTextColor}
                onPress={ () => navigation.navigate("Calendario") }
            >
                Calendário
            </Button>
        </AppContainer>
    );
}

export default Homescreen;