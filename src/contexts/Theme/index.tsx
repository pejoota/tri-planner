import React, { createContext, useState } from 'react';
import ThemeContextProps from '../../types/ThemeContextProps';
import { Theme } from '../../types/Theme';
import ColorScheme from '../../constants/colors/ColorScheme';


export const ThemeContext = createContext({} as ThemeContextProps);

const ThemeProvider = ({children}: any) => {
    const [theme, setTheme] = useState<Theme>('dark');

    const changeTheme = () => {
        if(theme === 'light')
            setTheme('dark');
        else
            setTheme('light');
    }
    
    return(
        <ThemeContext.Provider value={{
            appColors: ColorScheme[theme],
            theme: theme,         
            changeTheme: changeTheme,
        }}>
            {children}
        </ThemeContext.Provider>
    );

}

export default ThemeProvider;