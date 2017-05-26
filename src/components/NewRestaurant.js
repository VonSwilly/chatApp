import React, { PropTypes } from 'react';
import './NewRestaurant.css';

export const NewRestaurant = ({ newRestaurant, handleSubmit, handleChange }) => (
  <form
    className="NewRestaurant"
    onSubmit={(event) => handleSubmit(event, newRestaurant)}
  >
    <input
      type="text"
      value={newRestaurant}
      placeholder="Name of Fine Establishment"
      onChange={handleChange}
    />
    <button
      type="submit"
      value="Post"
      disabled={!newRestaurant.length}
    >
      Submit
    </button>
  </form>
);

NewRestaurant.propTypes = {
  newRestaurant: PropTypes.string,
	handleChange: PropTypes.func,
	handleSubmit: PropTypes.func
};

export default NewRestaurant;