export const setNewsBlockInit = () => (dispatch, getState) => {
  dispatch({
    type: 'SET_NEWS_BLOCK_INIT',
    News: []
  })
}