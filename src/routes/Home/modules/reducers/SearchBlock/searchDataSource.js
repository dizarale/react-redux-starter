let stateDefault = []

const searchDataSource = (state = stateDefault, action) => {
  switch (action.type) {
    case 'SET_SEARCH_BLOCK_INIT':
      return action.searchDataSource
    default:
      return state
  }
}

export default searchDataSource
