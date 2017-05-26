export const updateNewRestaurant = (content) => {
	return {
		type: 'UPDATE_NEW_RESTAURANT',
		content
	};
};

export const clearNewRestaurant = () => {
	return {
		type: 'CLEAR_NEW_RESTAURANT'
	};
};

