import { combineReducers } from 'redux';
import { imagesReducer, selectedImagesReducer } from "./imagesReducer";
import { categoryReducer, setSelectedCategoryReducer } from "./categoryReducer";
import { filtersReducers } from './filtersReducers';

const rootReducer = combineReducers({
 images:imagesReducer,
 category:categoryReducer,
 filters:filtersReducers,
 selectedImage:selectedImagesReducer
});

export default rootReducer;
