import { database } from '../firebase';
const restaurantsRef = database.ref('/restaurants');


export const addRestaurant = (key = Date.now(), { name, votes }) => {
	return {
		type: 'ADD_RESTAURANT',
		name,
		votes,
		key
	};
};

export const createRestaurant = ({ name }) => {
	return () => {
		const restaurant = {
			name:name
		};
		restaurantsRef.push(restaurant);
	};
};



export const updateRestaurant = (key, restaurant) => {
	return {
		type: 'UPDATE_RESTAURANT',
		restaurant,
		key
	};
};


export const upVote = (key, {auth}) => {
	return (dispatch) => {
		console.log("auth1111", auth, key);
		restaurantsRef.child(key)
			.child('votes')
			.child(auth.uid)
			.set(auth.displayName).then(() => {
				restaurantsRef.child(key).on('value', (snapshot) => {
					const val = snapshot.val();
					console.log("SNAP", val);
					dispatch(updateRestaurant(key, val));
				});
		});
	};
};


export const startListeningForRestaurants = () => {
	return (dispatch) => {
		restaurantsRef.on('child_added', (snapshot) => {
			dispatch(addRestaurant(snapshot.key, snapshot.val()));
		});
		// messagesRef.on('child_removed', (snapshot) => {
		// 	dispatch(resMessage(snapshot.key));
		// });
	};
};
