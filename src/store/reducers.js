import {RENAME} from './actionTypes'

const initialState = {
    name: 'User'
}

export const maiReducer = (state = initialState, action) => {
    switch(action.type){
        case RENAME: 
            return  {...state, name: action.name}
        default:
        return state
    }
}