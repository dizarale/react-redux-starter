let stateDefault = ''

const searchText = (state = stateDefault, action) => {
    switch (action.type) {
        case 'SET_SEARCH_TEXT_INIT':
            return ''
        case 'SET_SEARCH_TEXT':
            return action.searchText
        default:
            return state
    }
}

export default searchText
