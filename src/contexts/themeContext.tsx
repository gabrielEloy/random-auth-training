import {createContext} from 'react';

export interface IContextTypes {
    theme: 'main' | 'dark';
    toggleTheme: () => void;
}

export const ThemeContext = createContext<IContextTypes>({} as IContextTypes);