
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyBh-zwmVaCceMHwYePkdg575E6gFQlS3Xo",
      authDomain: "kwitterupdated.firebaseapp.com",
      databaseURL: "https://kwitterupdated-default-rtdb.firebaseio.com",
      projectId: "kwitterupdated",
      storageBucket: "kwitterupdated.appspot.com",
      messagingSenderId: "974833594150",
      appId: "1:974833594150:web:f4a3dd9d2b7ab172061be7"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

 user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      });});}
getData();
function getData2() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
     });});}
getData();

console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML += row;

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout() {
      
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";
}