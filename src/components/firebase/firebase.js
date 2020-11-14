import * as firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage'
var firebaseConfig = {
        apiKey: "AIzaSyAx9X4a3GIGipRU2wGjcBkt9tNWS7kCSTg",
        authDomain: "olx-app-86b1c.firebaseapp.com",
        databaseURL: "https://olx-app-86b1c.firebaseio.com",
        projectId: "olx-app-86b1c",
        storageBucket: "olx-app-86b1c.appspot.com",
        messagingSenderId: "877950616308",
        appId: "1:877950616308:web:1441ce5ec26de3eabc94a1",
        measurementId: "G-X8L374VQQ3"
      }                                                                                 

      firebase.initializeApp(firebaseConfig);

      export default firebase;  