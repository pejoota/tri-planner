import React, { useContext } from 'react';
import { ThemeContext } from "../../contexts";
import StyledView from "../StyledView";
import ViewProps from '../../types/ViewProps';
import StyledText from '../StyledText';

const Header = ({ backgroundColor }: ViewProps) => {
    return(
        <StyledView
            backgroundColor={backgroundColor}
            height='100%'
        >
            <StyledText
                textColor={'#fff'}
            >login</StyledText>
        </StyledView>
    );
};

export default Header;