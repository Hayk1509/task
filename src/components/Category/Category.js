import React, { useEffect } from 'react';
import "../../styles/Category.scss"
import { connect } from 'react-redux';
import { getCategoryData } from "../../action/categoryAction";
import { setFilters } from "./../../action/filtersAction";
const Category = ({ getCategoryData, category, filters, setFilters }) => {
    useEffect(() => {
        getCategoryData()
    }, [filters]);
    return <div className='category_wrapper'>
        <div className='category_header'>Categories</div>
        {!!category.length && category.map(category => {
            return <div
                key={category.id}
                onClick={() => {
                    setFilters("category_ids", category.id)
                    setFilters("page", 1)
                }}
            >
                <input
                    onChange={() => {
                        setFilters("category_ids", category.id)
                    }}
                    type="radio"
                    id={category.name}
                    name={category.name}
                    value={category.name}
                    checked={filters.category_ids === category.id ? true : false}
                />
                <label htmlFor={category.name}>{category.name}</label>
            </div>
        })}
    </div>
}

const mapStateToProps = state => ({
    category: state.category,
    filters: state.filters,
});

const mapDispatchToProps = {
    getCategoryData,
    setFilters

};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Category);