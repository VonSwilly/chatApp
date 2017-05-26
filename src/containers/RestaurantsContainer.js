import { connect } from 'react-redux';
import Restaurants from '../components/Restaurants';
import { upVote, downVote } from '../actions/restaurants';


const mapStateToProps = ({ restaurants, auth }) => {
	return { restaurants, auth };
};

const mapDispatchToProps = (dispatch) => {
	return {
		handleSelect(key, {auth}) {
			dispatch(upVote(key, {auth}));
		},
		handleDeselect(key, {auth}) {
			dispatch(downVote(key, {auth}));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Restaurants);
