import * as firebase from 'firebase/app'
import 'firebase/auth'

export default ({ redirect }) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user !== null) {
      if (user.emailVerified) {
        return redirect('/dashboard')
      }
    }
  })

  return true
}
