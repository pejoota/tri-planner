import React, { useEffect } from "react";
import StyledButton from "../StyledButton";
import StyledText from "../StyledText";
import { ButtonProps } from "../../types/ButtonProps";
import { Text } from "react-native";

const Button = ({
    backgroundColor,
    textColor,
    children,
    onPress
}: ButtonProps) => {
        return (
            <StyledButton
                bgColor={backgroundColor}
                onPress={onPress}
            >
                <StyledText
                    textColor={textColor}
                    fontFamily="MontserratSemiBold"
                >
                    {children}
                </StyledText>
            </StyledButton>
        );
    }

export default Button;