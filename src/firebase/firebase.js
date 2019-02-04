import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyAiQRzcdGLJVIcGbjaVqKEpZcEZRtZ-19k",
  authDomain: "todo-test-145be.firebaseapp.com",
  databaseURL: "https://todo-test-145be.firebaseio.com",
  projectId: "todo-test-145be",
  storageBucket: "todo-test-145be.appspot.com",
  messagingSenderId: "951146688758"
};
firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };
