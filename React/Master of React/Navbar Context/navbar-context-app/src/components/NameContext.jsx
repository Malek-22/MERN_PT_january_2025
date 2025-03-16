import { createContext, useState } from "react";

export const NameContext = createContext();

export const NameProvider = ({ children }) => {
    const [name, setName] = useState("Bob Smith");

    return (
        <NameContext.Provider value={{ name, setName }}>
            {children}
        </NameContext.Provider>
    );
};
