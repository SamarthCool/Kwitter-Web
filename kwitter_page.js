var firebaseConfig = {
      apiKey: "AIzaSyBIWV_nL53bRBs-aFexaNujoPugfxpHUhU",
      authDomain: "kwitter-9797c.firebaseapp.com",
      databaseURL: "https://kwitter-9797c-default-rtdb.firebaseio.com",
      projectId: "kwitter-9797c",
      storageBucket: "kwitter-9797c.appspot.com",
      messagingSenderId: "950281199670",
      appId: "1:950281199670:web:335eb8a6ab99f0f87cb897"
    };
    
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

    function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
