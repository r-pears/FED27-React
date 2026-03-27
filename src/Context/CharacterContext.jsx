import {createContext, useMemo, useState} from 'react';

export const CharacterContext = createContext();

export const CharacterProvider = ({ children }) => {
    const [characters, setCharacters] = useState([]);

    const value = useMemo(() => ({
        characters,
        setCharacters
    }), [characters, setCharacters]);

    return (
        <CharacterContext.Provider value={value}>
            {children}
        </CharacterContext.Provider>
    )
}