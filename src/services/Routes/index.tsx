import React, { useContext } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CalendarioScreen, Homescreen, Login } from '../../screens';
import { RootStackParamList } from "../../types/RootStackParamList";
import { AuthContext, ThemeContext } from "../../contexts";
import SunSVG from "../../components/SunSVG";
import MoonSVG from "../../components/MoonSVG";
import ExitSVG from "../../components/ExitSVG";

const Stack = createNativeStackNavigator<RootStackParamList>();

const Routes = () => {
    const { appColors, theme, changeTheme } = useContext(ThemeContext);
    const { user } = useContext(AuthContext)

    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerStyle: {
                  backgroundColor: appColors.headerColor,
                },

                headerTintColor: appColors.primaryTextColor,
                headerTitleStyle: {
                    fontSize: 20,
                    fontFamily: 'MontserratSemiBold'
                },
                title: `Bem-vindo, ${user}!`,
                headerRight: () => {
                    return(theme === 'dark' ?
                        <SunSVG
                            color={appColors.highlightBackgroundColor}
                            onPress={ () => changeTheme() }
                        /> :
                        <MoonSVG
                            color={appColors.highlightBackgroundColor}
                            onPress={ () => changeTheme() }
                        />
                    )
                },
                headerLeft: () => <ExitSVG 
                    color={appColors.highlightBackgroundColor}
                    onPress={ () => changeTheme() }
                />
              }}
        >
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    title: 'Login',
                    headerLeft: () => null
                }}
            />
            <Stack.Screen
                name="Home"
                component={Homescreen}
            />
            <Stack.Screen
                name="Calendario"
                component={CalendarioScreen}
            />
        </Stack.Navigator>
    );
}

export default Routes;