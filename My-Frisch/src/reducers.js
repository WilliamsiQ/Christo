import {CHANGE_SEARCH_FIELD, 
    REQUEST_FRISCH_PENDING,
    REQUEST_FRISCH_SUCCESS,
    REQUEST_FRISCH_FAILED
} from './constants';

const initialStateSearch = {
    searchField: ''
}

export const searchFrischs = (state= initialStateSearch, action= {})=>{
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, {searchField: action.payload})
        default:
            return state;
    }
}

const initialStateRequest = {
    isPending: false,
    frischs: [],
    error: ''
}

export const requestFrischs = (state= initialStateRequest, action={})=> {
    switch(action.type) {
        case REQUEST_FRISCH_PENDING:
            return Object.assign({}, state, {isPending: true});
        case REQUEST_FRISCH_SUCCESS:
            return Object.assign({}, state, {isPending: false, frischs: action.payload});
        case REQUEST_FRISCH_FAILED:
            return Object.assign({}, state, {isPending: false, error: action.payload});
        default:
            return state;
    }
}