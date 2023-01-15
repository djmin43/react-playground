import React, {createContext, ReactNode, SetStateAction, useContext, useState,} from "react";

interface ProviderProps {
    children: ReactNode;
}

interface CountProps {
    count: number
    addCount: () => void
}

export const CountContext = createContext<CountProps>({} as CountProps);

export const CountProvider = ({ children }: ProviderProps) => {
    const [count, setCount] = useState(0)

    const addCount = () => {
        setCount(prev => prev + 1)
    }

    return (
        <CountContext.Provider value={{count, addCount}}>
            {children}
        </CountContext.Provider>
    );
};

export const useCount = () => useContext(CountContext);
