 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
 import { getFirestore, collection, addDoc, getDocs, doc, setDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js";
 import { getAuth ,createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";

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

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const db = getFirestore(app);
 const auth = getAuth();

 const signupBtn = document.querySelector("#signupBtn")
 signupBtn.addEventListener("click", signUp)
 
 async function signUp(e) {
     try {
         const fullName = document.getElementById("fullName").value
         const phoneNumber = document.getElementById("phoneNumber").value
         const email = document.getElementById("email").value
         const password = document.getElementById("password").value
        //  const userType = document.getElementById("userType")
 
         if (!fullName || !phoneNumber || !email || !password) {
             alert("required field are missing")
             return
         }
        //  if (userType.selectedIndex === 0) {
        //      alert("please select user type")
        //      return
        //  }
         const userAuth = await createUserWithEmailAndPassword(auth, email, password)
         console.log(userAuth.user.uid)
         const uid = userAuth.user.uid
         const userObj = {
             fullName,
             phoneNumber,
             email,
             accountActivate: true,
             uid,
            //  type: userType.value
         }
         const userRef = doc(db, "users", uid);
         const userDB = await setDoc(userRef, userObj)
         window.location.assign("/")
     } catch (error) {
         console.log("error", error.message)
         alert(error.message)
     }
 
 
 }