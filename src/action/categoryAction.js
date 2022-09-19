
import { CATEGORY } from "./actionType";
import { getCategory } from "./../api/categoryAPI";



export const getCategoryData = ()=> (dispatch) => {
        return getCategory().then(data => {
            dispatch({
                type:CATEGORY.GET_CATEGORY,
                payload: data.data
            })
        })
    }

    export const setSelectedCategory = (id)=>dispatch=>{
        dispatch({
            type:CATEGORY.SET_SELECTED_CATEGORY,
            payload:id
        })
    }