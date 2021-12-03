
const firebaseConfig = {
      apiKey: "AIzaSyDvgnXC7C4CXKePY-7rf8wrtQnq5m_RLcg",
      authDomain: "chatter-ac82c.firebaseapp.com",
      databaseURL: "https://chatter-ac82c-default-rtdb.firebaseio.com",
      projectId: "chatter-ac82c",
      storageBucket: "chatter-ac82c.appspot.com",
      messagingSenderId: "240871150321",
      appId: "1:240871150321:web:0332a211ed5b027aaa8f50",
      measurementId: "G-ZW8YSJQL2W"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
