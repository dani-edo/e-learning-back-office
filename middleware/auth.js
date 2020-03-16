import * as firebase from 'firebase/app'
import 'firebase/auth'

export default ({ redirect }) => {
  firebase.auth().onAuthStateChanged((user) => {
    console.log('user => ', user)
    if (!user) {
      return redirect('/auth/login')
    }
  })

  return true
}
