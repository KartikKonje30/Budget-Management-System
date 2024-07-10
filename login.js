// Setting up firebase for website
// const firebaseApp = firebase.initializeApp({ 
//     apiKey: "AIzaSyAd-9UiwIvY_6a4jnyTa6hpMiP7x68wZSg",
//   authDomain: "budget-management-7bad9.firebaseapp.com",
//   projectId: "budget-management-7bad9",
//   storageBucket: "budget-management-7bad9.appspot.com",
//   messagingSenderId: "788488853062",
//   appId: "1:788488853062:web:7b1403bdad09c3c1f85c47",
//   measurementId: "G-KLN9MNPFVE"
//  });
// const db = firebaseApp.firestore();
// const auth = firebaseApp.auth();

// //Sign up function
// const signUp=()=>{
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;
//     console.log(email, password);
//     firebase.auth().createUserWithEmailAndPassword(email, password)
//   .then((userCredential) => {
//     // Signed in 
//     // var user = userCredential.user;
//     document.write("You are signed up");
//     console.log(result);
//     // ...
//   })
//   .catch((error) => {
//     console.log(error.code);
//     console.log(error.message);
//     // ..
//   });
// }

// document.addEventListener('DOMContentLoaded', function() {
//     const loginForm = document.getElementById('loginForm');

//     loginForm.addEventListener('submit', function(event) {
//         event.preventDefault(); // Prevent the form from submitting

//         // Get the username and password from the form
//         const username = document.getElementById('username').value;
//         const password = document.getElementById('password').value;

//         // Simulate a simple authentication process (replace with your actual logic)
//         if (username === 'admin' && password === 'password') {
//             // Store username in session storage (optional)
//             sessionStorage.setItem('username', username);

//             // Redirect to the budget management system page
//             window.location.href = 'index.html';
//         } else {
//             alert('Invalid username or password. Please try again.');
//         }
//     });
// });

const signUpButton=document.getElementById('signUpButton');
const signInButton=document.getElementById('signInButton');
const signInForm=document.getElementById('signIn');
const signUpForm=document.getElementById('signup');

signUpButton.addEventListener('click',function(){
    signInForm.style.display="none";
    signUpForm.style.display="block";
})
signInButton.addEventListener('click', function(){
    signInForm.style.display="block";
    signUpForm.style.display="none";
})
