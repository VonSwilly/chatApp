import { connect } from 'react-redux';
import Restaurants from '../components/Restaurants';
import { upVote } from '../actions/restaurants';


const mapStateToProps = ({ restaurants, auth }) => {
	return { restaurants, auth };
};

const mapDispatchToProps = (dispatch) => {
	return {
		handleSelect(key, {auth}) {
			dispatch(upVote(key, {auth}));
		}
		// handleDeselect(key) {
		// 	return () => dispatch(handleDeselect(key, auth));
		// }
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Restaurants);
