import axios from 'axios'
export const GET_ITEMS = 'GET_ITEMS'
export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS'
export const GET_ITEMS_FAILURE = 'GET_ITEMS_FAILURE'
export const UPDATE_ITEM = 'UPDATE_ITEM'
export const DELETE_ITEM = 'DELETE_ITEM'

const baseURL = 'https://african-marketplace-oz.herokuapp.com'

export const getItems = () => (dispatch) => {
 
    axios.get('https://african-market-allstars.herokuapp.com/api/items')
    .then( res => {
        console.log( 'items found', res)
        dispatch({
            type:GET_ITEMS_SUCCESS,
            payload: {
                name: res.data.name,
                category: res.data.category,
                image: res.data.image_url,
                price: res.data.price,
                description: res.data.description
            }
        })
    })
    .catch( err => {
        console.log('items not found', err.message)
        dispatch({
            type: GET_ITEMS_FAILURE,
            payload: err.message
        })
    } )
}

export const updateItem = () => (dispatch) => {

    axios.put(`${baseURL}/api/users/:id`)
    .then( res => {
        console.log( ' item updated' , res)
    } )
}