const auth = firebase.auth()

const signInButton = document.getElementById('sign_in')
const signOutButton = document.getElementById('sign_out')

const provider = new firebase.auth.GoogleAuthProvider()

signInButton.onclick = () => auth.signInWithPopup(provider)

signOutButton.onclick = () => auth.signOut()