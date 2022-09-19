import initialState from "../store/initialState";
import { IMAGES } from "./../action/actionType";


export const imagesReducer = (state = initialState.images, action) => {
    switch (action.type) {
        case IMAGES.GET_IMAGES:
            return [...action.payload]
        case IMAGES.PAGINATE_IMAGES:
            return [
                ...state,
                ...action.payload
            ]
        default:
            return state;
    }
};
export const selectedImagesReducer = (state = initialState.selectedImage, action) => {
    switch (action.type) {
        case IMAGES.SET_SELECTED_IMAGE:
            return {
                ...state,
                image: { ...action.payload }
            }

        default:
            return state;
    }
};