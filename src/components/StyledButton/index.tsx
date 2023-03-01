import styled from "styled-components/native";

const StyledButton = styled.TouchableOpacity<{bgColor: string}>`
    margin-left: 20%;
    margin-right: 20%;
    margin-top: 5%;
    margin-bottom: 0;
    align-self: center;
    border-radius: 10px;
    padding-vertical: 14px;
    padding-horizontal: 10px;
    width: 60%;
    background-color: ${({ bgColor }) => bgColor };
`

export default StyledButton;