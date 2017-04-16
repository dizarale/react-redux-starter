import SearchBlockLogic from '../../logics/SearchBlock'

export const setSearchBlockInit = () => (dispatch, getState) => {
    const datasource = SearchBlockLogic.initDataSource()
    dispatch({
        type: 'SET_SEARCH_BLOCK_INIT',
        searchDataSource: datasource
    })
}
export const updateSearchBlockInit = (data) => (dispatch, getState) => {
    const currentData = getState().searchDataSource
    const datasource = updateDataSoure(currentData, data)
    dispatch({
        type: 'UPDATE_SEARCH_BLOCK_INIT',
        searchDataSource: datasource
    })
}
export const setSearchTextInit = () => (dispatch, getState) => {
    dispatch({
        type: 'SET_SEARCH_TEXT_INIT',
        searchText: ''
    })
}
export const setSearchText = (text) => (dispatch, getState) => {
    dispatch({
        type: 'SET_SEARCH_TEXT',
        searchText: text
    })
}