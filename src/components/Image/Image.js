import React from 'react';
import "../../styles/Images.scss";
import { connect } from 'react-redux'
import { getSelectedImageData } from '../../action/imagesAction';

const Image = ({ item, key, getSelectedImageData }) => {
    return <div className="card" key={key} onClick={
        () => {
            getSelectedImageData(item.id)
        }
    }>
        <img src={item.url} alt="Avatar" className='avatar' />
        <h4>{item.id}</h4>
    </div>
}
const mapStateToProps = state => ({
    images: state.images,
    filters: state.filters,
});

const mapDispatchToProps = {

    getSelectedImageData
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Image);