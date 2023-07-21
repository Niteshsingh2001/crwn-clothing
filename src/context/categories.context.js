import { useState, createContext, useEffect } from 'react'
import SHOP_DATA from '../shopdata'
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils'

export const CategoriesContext = createContext({
    categoriesMap: []
})


export function CategoriesProvider({ children }) {

    const [categoriesMap, setCategoriesMap] = useState({})
    const val = { categoriesMap, setCategoriesMap }

    useEffect(() => {
        const getCategoriesMap = async () => {
            const category = await getCategoriesAndDocuments('categories')
            setCategoriesMap(category)
        }
        getCategoriesMap();

    }, [])


    return (
        <CategoriesContext.Provider value={val}>
            {children}
        </CategoriesContext.Provider>
    )
}
