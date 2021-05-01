import {  GET_ITEMS, GET_ITEMS_SUCCESS, GET_ITEMS_FAILURE, UPDATE_ITEM, DELETE_ITEM } from "../actions"

 
const initialState = {
    itemList: [],
    items: {
        name:'',
        price: '',
        image: '',
        category:'',
        description: ''
    },
    isLoading: false,
    error: ''
}

export const reducer = ( state = initialState, action) => {
    switch( action.type) {
        case GET_ITEMS:
            return {
                ...state,
                isLoading:true
            }
        case GET_ITEMS_SUCCESS:
            return {
                ...state,
                itemList: action.payload,
                isLoading: false
            }
        case GET_ITEMS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error:action.payload
            }
        case UPDATE_ITEM:
            return {
                ...state,
                items: action.payload,
                isLoading: false
            }
        case DELETE_ITEM:
            return {
                ...state,
                items: action.payload,
                isLoading: false
            }
     default:
         return state
    }
}