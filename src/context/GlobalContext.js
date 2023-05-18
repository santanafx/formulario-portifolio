import React from 'react'

const initialState = {
    supervisor: '',
}

const reducer = (state, action) => {
    switch (action.type) {
        default:
            return state
    }

}



export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
    const value = React.useReducer(reducer, initialState);

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    );
}