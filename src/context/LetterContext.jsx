import { useContext, createContext, useState, getLetterRequest, createLetterRequest, updateLetterRequest, getLettersRequest, deleteLetterRequest, toast } from '../import'


const LetterContext = createContext();

export const useLetter = () => {
    return useContext(LetterContext);
}

export const LetterProvider = ({ children }) => {

    const [letters, setLetters] = useState([]);

    const getLetters = async (page, limit) => {
        const letters = await getLettersRequest(page, limit)
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
        await updateLetterRequest(id, letter)
        const letters = await getLettersRequest(1);
        setLetters(letters.data);
    }

    const deleteLetter = async (id) => {
        await deleteLetterRequest(id)
        const letters = await getLettersRequest(1);
        setLetters(letters.data);
        toast('Letter deleted successfully', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }

    return (
        <LetterContext.Provider value={{ letters, getLetters, getLetter, createLetter, updateLetter, deleteLetter }}>
            {children}
        </LetterContext.Provider>
    )
}

export default LetterProvider;