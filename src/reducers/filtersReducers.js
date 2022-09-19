import initialState from "../store/initialState";
import { FILTERS } from "./../action/actionType";


export const filtersReducers =( state = initialState.filters, action) => {
    switch (action.type) {
        case FILTERS.CHANGE_FILTERS:
            return {
                ...state,
                [action.payload.type]:action.payload.value
            }

        default:
            return state;
    }
};

