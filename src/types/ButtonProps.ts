import { ReactNode } from "react";

export type ButtonProps = {
    backgroundColor: string;
    textColor: string;
    onPress: () => void;
    children: ReactNode;
}