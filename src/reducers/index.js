import { combineReducers } from 'redux';
import authReducer from './auth';
import messagesReducer from './messages';
import newMessageReducer from './new-message';
import usersReducer from './users';
import newRestaurantsReducer from './new-restaurants';
import restaurantsReducer from './restaurants';

const reducer = combineReducers({
  auth: authReducer,
  messages: messagesReducer,
  newMessage: newMessageReducer,
  users: usersReducer,
  newRestaurant: newRestaurantsReducer,
	restaurants: restaurantsReducer
});

export default reducer;
