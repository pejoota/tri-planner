import ThemeProps from "./ThemeProps";

export default interface ThemeContextProps{
    appColors: ThemeProps;
    theme: string;
    changeTheme: () => void;
}