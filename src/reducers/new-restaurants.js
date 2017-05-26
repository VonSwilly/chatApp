// import initialState from '../initial-state';

export default function newRestaurantsReducer(state = '', action) {
	switch(action.type) {
		case 'UPDATE_NEW_RESTAURANT':
			return action.content;
		case 'CLEAR_NEW_RESTAURANT':
			return '';
		default:
			return state;
	}
}
