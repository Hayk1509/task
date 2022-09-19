import initialState from "../store/initialState";
import { CATEGORY } from "./../action/actionType";


export const categoryReducer =( state = initialState.category, action) => {
    switch (action.type) {
        case CATEGORY.GET_CATEGORY:
            return [ ...action.payload ]

        default:
            return state;
    }
};

export const setSelectedCategoryReducer = (state = initialState.selectedCategory, action)=>{
    switch (action.type) {
        case CATEGORY.SET_SELECTED_CATEGORY:
            return action.data
        default:
            return state;
    }
}