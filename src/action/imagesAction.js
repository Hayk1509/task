
import { IMAGES } from "./actionType";
import { getImages, getSelectedImage } from "./../api/imagesAPI";
import { transformObjectToString } from "../helpers";



export const getImagesData = (data) => (dispatch) => {
    let query = transformObjectToString(data)
    if (data.page === 1) {
        return getImages(query).then(data => {
            if (data.status === 200) {
                dispatch({
                    type: IMAGES.GET_IMAGES,
                    payload: data.data
                })
            }
        })
    } else {
        return getImages(query).then(data => {
            if (data.status === 200) {
                dispatch({
                    type: IMAGES.PAGINATE_IMAGES,
                    payload: data.data
                })
            }
        })
    }

}

export const getSelectedImageData = (id)=>dispatch=>{
    return getSelectedImage(id).then(data => {
        console.log(data);
        if (data.status === 200) {
            dispatch({
                type: IMAGES.SET_SELECTED_IMAGE,
                payload: data.data
            })
        }
    })
}