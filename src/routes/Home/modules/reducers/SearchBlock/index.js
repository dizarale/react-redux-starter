import { combineReducers } from 'redux'
import searchDataSource from './searchDataSource'
import searchText from './searchText'

const SearchBlockReducer = combineReducers({
	searchDataSource,
	searchText
});

export default SearchBlockReducer
