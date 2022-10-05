var firebaseConfig = {
      apiKey: "AIzaSyCn8Ss93Vw6lqt2XNIvsRQ9zGr3fDZdmIw",
      authDomain: "lets-chat-ad0cc.firebaseapp.com",
      databaseURL: "https://lets-chat-ad0cc-default-rtdb.firebaseio.com",
      projectId: "lets-chat-ad0cc",
      storageBucket: "lets-chat-ad0cc.appspot.com",
      messagingSenderId: "706389280316",
      appId: "1:706389280316:web:f09d60b2b696f6127c2539"
    };
    
    // Initialize Firebase
       firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
