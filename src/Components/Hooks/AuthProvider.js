import React from 'react';
import { createContext } from 'react';
import UseFirebase from './UseFirebase';


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const allContexts = UseFirebase()
    return (
        <AuthContext.Provider value={allContexts}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;