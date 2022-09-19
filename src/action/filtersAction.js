
import { FILTERS } from "./actionType";





export const setFilters = (type,id) => dispatch => {
    dispatch({
        type: FILTERS.CHANGE_FILTERS,
        payload: {
            type,
            value:id
        }
    })
}