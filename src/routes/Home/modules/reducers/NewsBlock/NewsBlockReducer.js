let stateDefault = []

const NewsBlockReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case 'SET_NEWS_BLOCK_INIT':
      return action.News
    default:
      return state
  }
}

export default NewsBlockReducer
