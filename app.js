
const firebaseConfig = {
    apiKey: "AIzaSyBQPgtoQY2VdDIplxAA0COnLSVvC9lkJhU",
  authDomain: "portfolio-72fd7.firebaseapp.com",
  projectId: "portfolio-72fd7",
  storageBucket: "portfolio-72fd7.appspot.com",
  messagingSenderId: "244140608491",
  appId: "1:244140608491:web:08d327b6f72173660ce7ae",
  measurementId: "G-Q7DKS5JET8"
  };


  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore()
  const colref = db.collection('form');

    const D= new Date();
    const date = D.getDate() + "/" + (D.getMonth()+1) + "/" + D.getFullYear();
    const time = D.getHours() + ":" + D.getMinutes() + ":" + D.getSeconds();
    console.log(date,time);
  
  let f = document.getElementById('form');
  let t = document.getElementById('thank-note');
  f.addEventListener('submit', function(e){
      e.preventDefault();
      let name = document.getElementById('f-name').value;
      let email = document.getElementById('f-email').value;
      let message = document.getElementById('f-message').value;
      console.log(name,email,message);
      colref.doc()
          .set({
                date: date,
                time: time,
                name: name,
                email: email,
                message: message 
          })
          .then(() => {
              console.log("Document inserted successfully");
              e.target.reset(); 
              t.style.display = "block";     
          })
          .catch((err) => {
              console.log(err);
      });
  })