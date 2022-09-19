import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

let composeEnhancers;
let store = undefined;

if (process.env.NODE_ENV === 'production') {
	composeEnhancers = compose;
} else {
	composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

export function configureStore(initialState) {
	return createStore(
		rootReducer,
		initialState,
		composeEnhancers(
			applyMiddleware(
				thunk
			)
		)
	);
}

export default function getStore(){
	if (store) {
		return store;
	} else {
		store = configureStore();
		return store;
	}
}
