import React from 'react'

export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
    const [autenticar, setAutenticar] = React.useState(false);

    return (
        <Context.Provider value={{ autenticar, setAutenticar }}>
            {children}
        </Context.Provider>
    );
}