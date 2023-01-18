import { useContext, createContext, useState } from "react";
import { getLettersRequest, getLetterRequest, createLetterRequest, updateLetterRequest, deleteLetterRequest } from "../api/Letter.api";

const LetterContext = createContext();

export const useLetter = () => {
    return useContext(LetterContext);
}

export const LetterProvider = ({ children }) => {

    const [letters, setLetters] = useState([]);

    const changeLetterState = (letters) => {
        setLetters(letters)
    }

    const getLetters = async (page) => {
        const letters = await getLettersRequest(page)
        setLetters(letters.data);
    }

    const getLetter = async (id) => {
        const letter = await getLetterRequest(id)
        return letter;
    }

    const createLetter = async (letter) => {
        const newLetter = await createLetterRequest(letter)
        setLetters([...letters.docs, newLetter]);
    }

    const updateLetter = async (id, letter) => {
        const updatedLetter = await updateLetterRequest(id, letter)
        const letters = await getLettersRequest(1);
        setLetters(letters.data);
    }

    const deleteLetter = async (id) => {
        await deleteLetterRequest(id)
        const letters = await getLettersRequest(1);
        setLetters(letters.data);
    }

    return (
        <LetterContext.Provider value={{ letters, getLetters, getLetter, createLetter, updateLetter, deleteLetter, changeLetterState }}>
            {children}
        </LetterContext.Provider>
    )
}

export default LetterProvider;