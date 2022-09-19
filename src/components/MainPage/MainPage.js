import React from 'react';
import Category from '../Category/Category';
import Header from '../Header/Header';
import Images from '../Images/Images';

const MainPage = () => {
    return <div>
        <Header />
        <div style={{display:"flex",justifyContent:"center"}}>
            <Category />
            <Images />
        </div>
    </div>
}
export default MainPage