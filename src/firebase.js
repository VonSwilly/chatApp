import firebase from 'firebase';

const config = {
	apiKey: "AIzaSyAGu86Gc5Fbc2Fh2n-0ErPNe26gndAd7co",
	authDomain: "restaurantchat-30c5c.firebaseapp.com",
	databaseURL: "https://restaurantchat-30c5c.firebaseio.com",
	projectId: "restaurantchat-30c5c",
	storageBucket: "restaurantchat-30c5c.appspot.com",
	messagingSenderId: "375560490399"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const messaging = firebase.messaging();