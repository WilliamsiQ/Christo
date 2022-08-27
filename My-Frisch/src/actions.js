import {CHANGE_SEARCH_FIELD, 
    REQUEST_FRISCH_PENDING,
    REQUEST_FRISCH_SUCCESS,
    REQUEST_FRISCH_FAILED
} from './constants';

export const setSearchField =(text)=> ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

export const setFrisch = () => (dispatch)=>{
    dispatch({type:REQUEST_FRISCH_PENDING});
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(frischs=> dispatch({type: REQUEST_FRISCH_SUCCESS, payload: frischs}))
        .catch(error=> dispatch({type: REQUEST_FRISCH_FAILED, payload: error}))
}