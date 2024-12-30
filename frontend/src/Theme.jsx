
import { createContext, useState, useContext } from 'react';

const Theme = createContext();

export function ThemeProvider({ children }) {
    const [darkmode, setDarkmode] = useState(1);
    const toggleDarkmode = () => setDarkmode(!darkmode);
    return (
        <Theme.Provider value={{ darkmode, toggleDarkmode }}>
            {children}
        </Theme.Provider>
    );
}

export function useTheme() {
    return useContext(Theme);
}
