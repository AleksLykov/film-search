import { combineReducers } from 'redux';
import favoriteReducers from './favoriteReducers'
import searchReducers from './searchReducers'

export default combineReducers({
	favorite: favoriteReducers,
	search: searchReducers
});