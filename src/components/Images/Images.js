import React, { useEffect,useState } from 'react';
import "../../styles/Images.scss"
import { connect } from 'react-redux';
import Image from '../Image/Image';
import { setFilters } from "./../../action/filtersAction";
import { getImagesData } from "./../../action/imagesAction";
import Spinner from "./../Spinner/Spinner";
const Images = ({ images, filters, setFilters, getImagesData }) => {
    const [isLoad, setIsLoad] = useState(false);
    useEffect(() => {
        getImagesData(filters)
    }, [filters]);

   useEffect(() => {
    
       window.addEventListener('scroll', loadMore);
   }, []);

    var loadMore = async function () {
        if (window.innerHeight + document.documentElement.scrollTop >= document.scrollingElement.scrollHeight && isLoad) {
            await setIsLoad(false)
            await setFilters("page",filters.page+1)

        }
    }
    return <div className='images_wrapper'>
        {
            !images.lenght
                ?
                images.map(image => {
                    return <Image key={image.key} item={image} />
                })
                :
                "Not Image"
        }
        {
            isLoad && <Spinner/>
        }
    </div>
}

const mapStateToProps = state => ({
    images: state.images,
    filters: state.filters,
});

const mapDispatchToProps = {
    setFilters,
    getImagesData

};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Images);