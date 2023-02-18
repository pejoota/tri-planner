import ViewProps from "../../types/ViewProps";
import StyledView from "../StyledView";

const AppContainer = ({
    backgroundColor,
    children
}: ViewProps) => {
    return(
        <StyledView
            backgroundColor={backgroundColor}
        >
            {children}
        </StyledView>
    )
};

export default AppContainer;