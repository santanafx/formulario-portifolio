import React from 'react'

export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
    const [autenticar, setAutenticar] = React.useState(false);
    const dataBase = [
        {
            id: 0,
            usuario: 'santanafx@hotmail.com',
            senha: '123',
        },
        {
            id: 1,
            usuario: 'tatu@hotmail.com',
            senha: '123',
        }
    ]

    return (
        <Context.Provider value={{ autenticar, setAutenticar, dataBase }}>
            {children}
        </Context.Provider>
    );
}