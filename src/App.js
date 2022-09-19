import React,{useEffect} from 'react';
import { Provider } from "react-redux";
import getStore from "./store/configureStore";
import { Route } from 'react-router';
import MainPage from "./components/MainPage/MainPage";

const store = getStore()
const App = () => {
  
  return (
    <Provider store={store}>
    <Route component={MainPage} exact path={"/"} />
    </Provider>
  );
}



export default App
