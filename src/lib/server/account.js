import { getFirebase } from './firebaseServerAdapter'

const signIn = (req, res) => {
  const idToken = req.body.idToken
  if (!idToken) {
    return (res.send())
  }
  return getFirebase().auth().verifyIdToken(idToken)
    .then(decodedToken => {
      const uid = decodedToken.sub
      const session = req.session
      session.currentUser = uid
      console.log(`setting session currentUser to ${uid}`)
      return res.send()
    })
    .catch(error => {
      console.log(`invalid idToken: ${error}`)
      return res.send()
    })
}

const logOut = (req, res) => {
  req.session.destroy(err => {
    if (err) { console.log(err) }
    res.send()
  })
}

export { signIn, logOut }
