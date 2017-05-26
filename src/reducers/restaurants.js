import initialState from '../initial-state';
import extend from 'lodash/extend';
import clone from 'lodash/clone';
import omit from 'lodash/omit';


export default function restaurantsReducer(state = initialState.restaurants, action) {
	switch(action.type) {
		case 'ADD_RESTAURANT':
			return extend(clone(state), {
				[action.key]: {
					name: action.name,
					votes:action.votes
				}
			});
		case 'REMOVE_RESTAURANT':
			return omit(clone(state), action.key);
		case 'UPDATE_RESTAURANT':
			return {
			...state,
				[action.key]: action.restaurant
			};
		default:
			return state;
	}
}

