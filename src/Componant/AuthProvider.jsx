import React, { createContext } from 'react';
import { getAuth } from "firebase/auth";


export const AuthContext = createContext(null)
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const user = { displayName: 'sagor pata' }

    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;