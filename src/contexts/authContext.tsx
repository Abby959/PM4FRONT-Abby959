"use client";
import { UserSession } from "@/app/interface";
import { Children, createContext, useEffect, useState } from "react";

interface AuthProviderProps {
    children: React.ReactNode;
}

interface AuthContextprops {
    user: UserSession | null;
    setUser: (user: UserSession | null) => void;
    logout:() => void;
}

const AuthContext = createContext<AuthContextprops>({
    user: null,
    setUser: () => {},
    logout: () => {},
});

export const AuthProvider = ({ children }: AuthProviderProps
) => {
    const [user, setUser] = useState<UserSession | null>(null);
    useEffect(() => {
        if (user) {
            localStorage.setItem("user", JSON.stringify(user));
        }

    }, [user]);

    useEffect(() => {
        const localUser = localStorage.getItem("user");
        if (localUser) {
            setUser(JSON.parse(localUser));
        }
    }, []);

    const logout = () => {
        localStorage.removeItem("user");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, setUser, logout }}>
            {children}
        </AuthContext.Provider>
    )
};



export default AuthContext;