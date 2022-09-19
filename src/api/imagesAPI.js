import axios from 'axios'

export const getImages = (query) => {
    return axios.get(`https://api.thecatapi.com/v1/images/search${query}`)
        .then(result => result ? result : false)

}
export const getSelectedImage = (id) => {
    return axios.get(`https://api.thecatapi.com/v1/images/${id}`)
        .then(result => result ? result : false)

}