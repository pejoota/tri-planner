import React, { useContext, useState } from "react";
import { AppContainer } from "../../components"
import { ThemeContext } from "../../contexts";
import { Calendario } from "../../components";

const CalendarioScreen = () => {
    const { appColors } = useContext(ThemeContext);
    

    return(
        <AppContainer
            backgroundColor={appColors.primaryBackgroundColor}        
        >
            <Calendario appColors={appColors}/>
        </AppContainer>
    );
};

export default CalendarioScreen;