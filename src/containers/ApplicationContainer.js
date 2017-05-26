import { connect } from 'react-redux';
import Application from '../components/Application';
import { signIn, signOut } from '../actions/auth';


const mapStateToProps = ({ auth, restaurants }) => {
  return {
    auth: auth,
    restaurants:restaurants
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn() {
      dispatch(signIn());
      },
    signOut() {
      dispatch(signOut());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Application);
