import { CATEGORIES_MAP_TYPES } from "./categories.types"

export const CATEGORIES_INTIAL_STATE = {
    categories: []
}

export const categoriesReducer = (state = CATEGORIES_INTIAL_STATE, action = {}) => {
    const { type, payload } = action

    switch (type) {
        case CATEGORIES_MAP_TYPES.SET_CATEGORIES:
            return {
                ...state,
                categories: payload
            }

        default:
            return state
    }
}