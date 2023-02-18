import styled from "styled-components/native";
import TextProps from "../../types/TextProps";

const StyledText = styled.Text<TextProps>`
    font-family: ${({ fontFamily }) => fontFamily };
    color: ${({ textColor }) => textColor };
    text-transform: uppercase;
    font-size: 16px;
    text-align: center;
`

export default StyledText;