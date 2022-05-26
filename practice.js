
var firebaseConfig = {
    apiKey: "AIzaSyA31Po93jIiNKSUlSZ_vIk8aSiQ1J2MWtk",
    authDomain: "practice-c-93.firebaseapp.com",
    projectId: "practice-c-93",
    storageBucket: "practice-c-93.appspot.com",
    messagingSenderId: "863178594348",
    appId: "1:863178594348:web:7bb1b643f79f9910769989"
  };

  firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").Value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}