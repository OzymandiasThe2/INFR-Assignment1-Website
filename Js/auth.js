//auth status changes
auth.onAuthStateChanged(user =>{
   if (user) {
       console.log('User has logged in: ', user);
       changeState(user);
   } else {
       changeState();
       console.log('User has signed out');
   }
});



//Sign Up stuff
const signupForm = document.querySelector('#signup-form');

signupForm
    .addEventListener('submit', (e) => {
        e.preventDefault();

    // GET user information
    const email = signupForm['signup-email']
        .value;
    //const password = signupForm['signup-password']
      //  .value;


    // DEBUG: console.log(email,password)

    // sign up user
//    auth.createUserWithEmailAndPassword(email, password)
//        .then(cred => {
//            const modal = document.querySelector('#modal-signup');
//            M.Modal.getInstance(modal)
//                .close();
//            signupForm.reset;
//        })
    auth.sendPasswordResetEmail(email)
        .then(cred => {
            const modal = document.querySelector('#modal-signup');
            M.Modal.getInstance(modal)
                .close();
            signupForm.reset;
            alert("Password reset is done");
        })
        .catch((error) =>{
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
            alert(errorMessage + " Please try to reset again. If error persists, contact website administrator");
            const modal = document.querySelector('#modal-signup');
            M.Modal.getInstance(modal)
                .close();
        });
    });


// logout stuff
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut();
});

// Login stuff
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // user info
    const email = loginForm['login-email']
        .value;
    const password = loginForm['login-password']
        .value;

    // login user
    auth.signInWithEmailAndPassword(email,password)
        .then(cred => {
            const modal = document.querySelector('#modal-login');
            M.Modal.getInstance(modal)
                .close();
            loginForm.reset;
        })
        .catch((error) =>{
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
            alert(errorMessage + " Please try to login again. If error persists, contact website administrator");
            const modal = document.querySelector('#modal-login');
            M.Modal.getInstance(modal)
                .close();
        });

})



