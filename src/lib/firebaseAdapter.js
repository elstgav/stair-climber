import firebase from 'firebase'

const getFirebase = () => {
  if (firebase.apps.length == 0) {
    var config = {
      apiKey: "AIzaSyBnjhh1f0kuds0q8bByqHymdtLe6junhic",
      authDomain: "stepup-e9532.firebaseapp.com",
      databaseURL: "https://stepup-e9532.firebaseio.com",
    };
    firebase.initializeApp(config);
  }
  return firebase
}

export { getFirebase }
