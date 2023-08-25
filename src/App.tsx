import React from "react";
import { Home } from "./pages/home";

export interface IPluginOptions {
    initializedOptions?: string[];
    onPositionChange?: (positions: string[]) => void;
    onComplete?: (positions: string[]) => void;
    onInit?: () => void;
}

interface IProps {
    options: IPluginOptions;
}

export const App: React.FC<IProps> = ({ options }) => {
    return <Home options={options} />;
};
