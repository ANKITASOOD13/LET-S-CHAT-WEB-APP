
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAX9sQOaToKGjtqKpnfj6aLufnPuF7-Agg",
      authDomain: "kwitter2-ce413.firebaseapp.com",
      databaseURL: "https://kwitter2-ce413-default-rtdb.firebaseio.com",
      projectId: "kwitter2-ce413",
      storageBucket: "kwitter2-ce413.appspot.com",
      messagingSenderId: "324650135971",
      appId: "1:324650135971:web:1187cf911319415c0f2a16"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + " ! ";

    function addRoom(){  
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
     purpose:"adding room name"
  });
  localStorage.setItem("room_name",room_name);
  window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html";   
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}