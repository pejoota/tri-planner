import InputProps from "../../types/InputProps";
import StyledInput from "../StyledInput";

const TextInput = ({onChangeText, value, textColor, backgroundColor}: InputProps) => {
    return(
        <StyledInput
            onChangeText={onChangeText}
            value={value}
            textColor={textColor}
            backgroundColor={backgroundColor}
        />
    );
}

export default TextInput;