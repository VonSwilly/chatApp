import { connect } from 'react-redux';
import NewRestaurant from '../components/NewRestaurant';
import { updateNewRestaurant, clearNewRestaurant } from '../actions/new-restaurants';
import { createRestaurant } from '../actions/restaurants';

const mapStateToProps = ({ newRestaurant }) => {
	return { newRestaurant };
};

const mapDispatchToProps = (dispatch) => {
	return {
		handleChange(event) { dispatch(updateNewRestaurant(event.target.value)); },
		handleSubmit(event, newRestaurant) {
			event.preventDefault();
			
			dispatch(createRestaurant({name:newRestaurant}));
			dispatch(clearNewRestaurant());
		}
		// handleSubmit(event, content, uid) {
		// 	event.preventDefault();
		// 	dispatch(createMessage({ content, uid }));
		// 	dispatch(clearNewMessage());
		// }
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(NewRestaurant);
