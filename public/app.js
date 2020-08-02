const auth = firebase.auth()

const whenSignedIn = document.getElementById('when_signed_in')
const whenSignedOut = document.getElementById('when_signed_out')

const userDetails = document.getElementById('user_details')

const signInButton = document.getElementById('sign_in')
const signOutButton = document.getElementById('sign_out')

const provider = new firebase.auth.GoogleAuthProvider()

signInButton.onclick = () => auth.signInWithPopup(provider)

signOutButton.onclick = () => auth.signOut()


auth.onAuthStateChanged(user => {
    if (user) {
        whenSignedIn.hidden = false;
        whenSignedOut.hidden = true;
        userDetails.innerHTML = `<h3>${user.displayName}</h3>`

    } else {
        whenSignedIn.hidden = true;
        whenSignedOut.hidden = false;
        userDetails.innerHTML = ``

    }
})