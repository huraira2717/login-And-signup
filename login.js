 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
 import { getFirestore, collection, addDoc, getDocs, doc, setDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js";
 import { getAuth ,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";


 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyB3EdmH11rLvbLZRcxDX0covwM3ay2THTg",
   authDomain: "my-lg-sp.firebaseapp.com",
   projectId: "my-lg-sp",
   storageBucket: "my-lg-sp.appspot.com",
   messagingSenderId: "86454687277",
   appId: "1:86454687277:web:003d1ef1d86d97ac404aa4"
 };

 const app = initializeApp(firebaseConfig);
 const db = getFirestore(app);
 const auth = getAuth();



 const loginBtn = document.querySelector("#loginBtn")
 loginBtn.addEventListener("click", login)
 
 
 async function login(e) {


    try {
        const email = document.getElementById("email").value
        const password = document.getElementById("password").value
        console.log(email, password)
        const userLogin = await signInWithEmailAndPassword(auth, email, password)
        console.log(userLogin)
        localStorage.setItem("userUid", userLogin.user.uid)
        window.location.replace("/Deshbord.html")    

        }catch(error){
            console.log('Error', error.message );
            alert(error.message )
        }
 }