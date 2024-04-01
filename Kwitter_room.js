const firebaseConfig = {
   apiKey: "AIzaSyCMOHkO3S6Ub9DUhFDea75g3XcmxCaNtQY",
   authDomain: "basebook-45e44.firebaseapp.com",
   projectId: "basebook-45e44",
   storageBucket: "basebook-45e44.appspot.com",
   messagingSenderId: "55119076109",
   appId: "1:55119076109:web:af7928b9e17f04643c6e44"
 };

    firebase.initializeApp(firebaseConfig);



username=localStorage.getItem("name")
document.getElementById("usernamelabel").innerHTML= "Welcome "+username

function addRoom()
{
   roomname=document.getElementById("addroom").value
   firebase.database().ref("/").child(roomname).update({
      purpose: "addRoom"
   })
   localStorage.setItem("room_name",roomname)
   window.location="kwitter_page.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("trendingrooms").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Rooms:" + Room_names)
       row= "<div class='room_name' id="+Room_names+" onclick='redirectToRoom(this.id)'>#"+Room_names+"</div><hr>"
       document.getElementById("trendingrooms").innerHTML+=row
      });});}
getData();

function redirectToRoom(name){
      console.log("name:"+name)
      localStorage.setItem("roomEntered",name)
      window.location="kwitter_page.html"
}
