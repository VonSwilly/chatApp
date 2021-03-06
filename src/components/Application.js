import React, { PropTypes } from 'react';
import MessagesContainer from '../containers/MessagesContainer';
import NewMessageContainer from '../containers/NewMessageContainer';
import NewRestaurant from '../containers/NewRestaurantsContainer';
import Restaurants from "../containers/RestaurantsContainer";
import Header from './Header';
import SignIn from './SignIn';
import CurrentUser from './CurrentUser';
import Loading from './Loading';
import './Application.css';



const Application = ({ auth, signIn, signOut}) => {
  return (
    <main className="Application">
      <Header/>
      <div className="Application--sidebar">
        { auth.status === 'ANONYMOUS' && <SignIn signIn={signIn}/> }
        { auth.status === 'SIGNED_IN' && <CurrentUser auth={auth} signOut={signOut} />}
        { auth.status === 'AWAITING_AUTH_RESPONSE' && <Loading /> }
      </div>
      <NewRestaurant/>
      <Restaurants/>
      { auth.status === 'SIGNED_IN' && <NewMessageContainer /> }
      <MessagesContainer />
    </main>
  );
};

Application.propTypes = {
  auth: PropTypes.object.isRequired,
  signIn: PropTypes.func.isRequired,
  signOut: PropTypes.func.isRequired
};

export default Application;
