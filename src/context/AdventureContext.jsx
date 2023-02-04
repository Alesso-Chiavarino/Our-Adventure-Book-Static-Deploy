import { createContext, useContext, useState, getAdventureRequest, getAdventuresRequest, createAdventureRequest, deleteAdventureRequest, updateAdventureRequest, getLimitedAdventuresRequest, getTotalAventuresRequest } from '../import'


const AdventureContext = createContext();

export const useAdventure = () => {
    return useContext(AdventureContext);
}

const AdventureProvider = ({ children }) => {

    const [adventures, setAdventures] = useState([]);
    const [adventuresHome, setAdventuresHome] = useState([])
    const [adventuresTimeline, setAdventuresTimeline] = useState([]);
    const [data, setData] = useState({});

    const changeAdventuresState = (adventures) => {
        setAdventures(adventures)
    }

    const getAdventures = async () => {
        const result = await getAdventuresRequest()
        setAdventures(result.data.docs)
    }

    const getLimitedAdventures = async (limit, page, search) => {
        const result = await getLimitedAdventuresRequest(limit, page, search)
        const data = result.data
        if (limit === 10) {
            return setAdventuresHome(result.data.docs);
        }
        setAdventures(result.data.docs)
        setData(data);
    }

    const getTotalAdventures = async () => {
        const orderedAdventures = await getTotalAventuresRequest()
        setAdventuresTimeline(orderedAdventures.data);
    }

    const createAdventure = async (data) => {
        const result = await createAdventureRequest(data)
        setAdventures([...adventures, result.data])
        setAdventuresHome(await getLimitedAdventures(10, 1, ''))
        setAdventuresTimeline(await getTotalAventuresRequest())
    }

    const deleteAdventure = async (id) => {
        await deleteAdventureRequest(id)
        setAdventures(adventures?.filter(adventure => adventure._id !== id))
        setAdventuresHome(adventuresHome?.filter(adventure => adventure._id !== id))
        setAdventuresTimeline(adventuresTimeline.data?.filter(adventure => adventure._id !== id))
    }

    const getAdventure = async (id) => {
        const result = await getAdventureRequest(id)
        return result.data;
    }

    const updateAdventure = async (id, data, limit, page, search) => {
        await updateAdventureRequest(id, data);
        const adventuress = await getLimitedAdventuresRequest(limit, page, search);
        setAdventures(adventuress.data.docs);
        //ver que onda
        setAdventuresHome(adventuress.data.docs);
        setAdventuresTimeline(adventuress.data.docs);
    }

    //fixes
    const [confirm, setConfirm] = useState(false);
    const handleConfirm = (data) => {
        setConfirm(data);
    }

    return (
        <AdventureContext.Provider value={{ adventures, adventuresHome, adventuresTimeline, data, confirm, getAdventures, createAdventure, deleteAdventure, getAdventure, updateAdventure, getLimitedAdventures, getTotalAdventures, handleConfirm, changeAdventuresState }}>
            {children}
        </AdventureContext.Provider>
    )
}

export default AdventureProvider;