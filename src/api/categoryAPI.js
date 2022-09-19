import axios from 'axios'

export const getCategory = () => {
    return axios.get('https://api.thecatapi.com/v1/categories')
        .then(result => result ? result : false)

}