var firebaseConfig = {
    apiKey: "AIzaSyDo7z-VQXOu2mM4wWeuYppjVZumOGUm1Pc",
    authDomain: "kwitter-project-85d17.firebaseapp.com",
    databaseURL: "https://kwitter-project-85d17-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-85d17",
    storageBucket: "kwitter-project-85d17.appspot.com",
    messagingSenderId: "660105855646",
    appId: "1:660105855646:web:0e00e9357776243840b18f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function addRoom() {
    room_name = document.getElementById("room_name").value
    firebase.database().ref("/").child(room_name).update({
purpose:"Adding Room Name"
    });
    localStorage.setItem("room_name", room_name);
    window.location="kwitter_page.html";
}
function getData() { 
  firebase.database().ref("/").on('value', function(snapshot) 
  { 
document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; 
Room_names = childKey; console.log("Room Name - " + Room_names); 
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
document.getElementById("output").innerHTML += row; 
}); 
}); 
}
function logout()
{
     localStorage.removeItem("user_name");
     localStorage.removeItem("room_name");
window.location= "index.html";
}