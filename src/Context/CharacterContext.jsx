import {createContext, useState} from 'react';

export const CharacterContext = createContext();

export const CharacterProvider = ({ children }) => {
    const [characters, setCharacters] = useState([]);

    const value = {
        characters,
        setCharacters
    }

    return (
        <CharacterContext.Provider value={value}>
            {children}
        </CharacterContext.Provider>
    )
}