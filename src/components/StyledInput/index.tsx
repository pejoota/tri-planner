import styled from "styled-components/native";
import InputProps from "../../types/InputProps";

const StyledInput = styled.TextInput<Partial<InputProps>>`
    height: 7%;
    margin: 4.5%;
    background-color: ${({ backgroundColor }) => backgroundColor};
    padding: 10px;
    color: ${({ textColor }) => textColor};
    font-family: MontserratLight;
    font-size: 18px
    border-radius: 10px;
`;

export default StyledInput;