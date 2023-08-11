import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORIES_MAP_TYPES } from "./categories.types";

export const setCategories = (categorieArray) => {
    return createAction(CATEGORIES_MAP_TYPES.SET_CATEGORIES, categorieArray)
}

    