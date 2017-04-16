import { combineReducers } from 'redux'
import SearchBlock from './SearchBlock'
import NewsBlock from './NewsBlock'

const HomeReducer = combineReducers({
	SearchBlock,
    NewsBlock
});

export default HomeReducer
