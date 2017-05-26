import React, { PropTypes } from 'react';
import Restaurant from './Restaurant';
import map from 'lodash/map';
import './Restaurants.css';

export const Restaurants = ({restaurants, auth, handleSelect, handleDeselect}) => (
	<section className="Restaurants">
		{
			map(restaurants, (restaurant, key) => {
				return <Restaurant
					key={key}
					{...restaurant}
					user={auth}
					handleSelect={() => handleSelect(key, {auth})}
					handleDeselect={() => handleDeselect(key, {auth})}
				/>;
			})}
	</section>
);



Restaurants.propTypes = {
  auth: PropTypes.object,
  restaurants: PropTypes.object,
	handleSelect: PropTypes.func,
	handleDeselect: PropTypes.func
};

export default Restaurants;
