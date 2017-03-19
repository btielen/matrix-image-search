import { combineReducers } from 'redux'



const queries = (state = {}, action) => {
    switch (action.type) {

        case 'SET_QUERIES':
            return action.queries

        case 'RECEIVE_SEARCH_RESULTS':
            return Object.assign({}, state, {[action.id]: {
                id: action.id,
                isFetching: false,
                urls: action.urls,
                selected: 0
            }})

        case 'THUMBNAIL_CLICKED':
            const selected = state[action.id].selected
            const length = state[action.id].urls.length
            return Object.assign({}, state, {[action.id]: {
                id: action.id,
                urls: state[action.id].urls,
                isFetching: state[action.id].isFetching,
                selected: (selected+1)%length
            }})

        default:
            return state;
    }
}

const fields = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_FIELD':
        case 'UPDATE_FIELD':
            return Object.assign({}, state, {[action.id]: {id: action.id, term: action.term, valid: action.term.length > 0}})
        default:
            return state;
    }
}

const horizontalFields = (state = [], action) => {

    switch (action.type) {
        case 'ADD_FIELD':
            if(action.dimension === 2)
                return [...state, action.id]
            else
                return state
        default:
            return state
    }
}

const verticalFields = (state = [], action) => {

    switch (action.type) {
        case 'ADD_FIELD':
            if(action.dimension === 1)
                return [...state, action.id]
            else
                return state
        default:
            return state
    }
}


const imageSearchApp = combineReducers({
    fields,
    horizontalFields,
    verticalFields,
    queries
})

export default imageSearchApp