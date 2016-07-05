import { getFirebase } from './firebaseServerAdapter'
import firebase from 'firebase'

const preLoadFlightTrackerData = (req, res, next) => {
  if (!req.session && !req.session.currentUser) {
    return next()
  }
  const currentUser = req.session.currentUser
  console.log(`making request: users/${currentUser}`)
  let fb = getFirebase()

  let database = firebase.database()
  let ref = database.ref()

  return ref.on('value',
    function(data) {
      console.log(data)
      return next()
    })
}

export { preLoadFlightTrackerData }
