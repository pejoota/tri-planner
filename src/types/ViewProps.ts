import { ReactNode } from "react";

export default interface ViewProps {
    width?: string;
    height?: string;
    backgroundColor: string;
    children?: ReactNode
}