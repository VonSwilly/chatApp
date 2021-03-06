import React, { Component, PropTypes } from 'react';
import map from 'lodash/map';
import './Restaurant.css';

class Restaurant extends Component {
  render () {
    const { name, user, votes, handleSelect, handleDeselect } = this.props;
    const userHasSelected = votes && Object.keys(votes).includes(user.uid);
    return (
      <article className="Restaurant">
        <h3>{name}</h3>
        <ul>
          {votes && map(votes, (voter, key) => {
            return <li key={key}>{voter}</li>;
          })}
        </ul>

        {
          user.displayName ?
          userHasSelected
            ? <button className="destructive"  onClick={handleDeselect}> Actually, nope</button>
            : <button onClick={handleSelect}>Yep, I am in</button> : <p>You must be signed in to vote</p>
        }
      </article>
    );
  }
}

Restaurant.propTypes = {
  name: PropTypes.string,
  votes: PropTypes.object,
  user: PropTypes.object,
  handleSelect: PropTypes.func,
  handleDeselect: PropTypes.func
};

export default Restaurant;
