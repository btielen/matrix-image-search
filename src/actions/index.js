import config from '../config'

let nextId = 100

export const addField = (dimension) => {
    return {
        type: 'ADD_FIELD',
        id: nextId++,
        dimension,
        term: ''
    }
}

export const updateField = (id, term) => {
    return {
        type: 'UPDATE_FIELD',
        id,
        term
    }
}

export const thumbnailClicked = (id) => {
    return {
        type: 'THUMBNAIL_CLICKED',
        id
    }
}

export const queryNow = () => {

    return (dispatch, getState) => {
        const { fields, horizontalFields, verticalFields } = getState()

        const queries = {}

        // Combine every vertical search term with every horizontal search term
        for(let x of verticalFields) {
            for(let y of horizontalFields) {
                queries[`${x},${y}`] = {
                    id: `${x},${y}`,
                    isFetching: true,
                    query: `${fields[x].term} ${fields[y].term}`,
                    urls: [],
                    selected: 0
                }
            }
        }
        // Set the queries
        dispatch({
            type: 'SET_QUERIES',
            queries
        })

        for(let query of Object.values(queries)) {
            fetch(`https://www.googleapis.com/customsearch/v1?q=` + query.query + `&num=10&searchType=image&key=${config.apiKey}&cx=${config.cx}`)
                .then(response => response.json())
                .then(json => dispatch(receiveSearchResults(query.id, json)))
        }

    }

}

function receiveSearchResults(id, json) {

    const urls = []
    for(let item of json.items) {
        urls.push(item.image.thumbnailLink)
    }


    return {
        type: 'RECEIVE_SEARCH_RESULTS',
        id,
        urls
    }
}