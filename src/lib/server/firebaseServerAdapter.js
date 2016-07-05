import firebase from 'firebase'

const getFirebase = () => {
  if (firebase.apps.length === 0) {
    firebase.initializeApp({
      serviceAccount: {
        projectId: process.env.PID,
        clientEmail: process.env.CEMAIL,
        privateKey: process.env.PKEY,
      },
      databaseURL: "https://stepup-e9532.firebaseio.com",
    })
  }
  return firebase
}

export { getFirebase }
