

window.onscroll = function() {myFunction()};

let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;
console.log(sticky)

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  
    
  } else {
    navbar.classList.remove("sticky");
 
  }
  
}



const firebaseConfig = {
  apiKey: "AIzaSyCF5khD8A_rM9hYhdhUdcRP0F9L8nPkmv8",
  authDomain: "briemail-48eb7.firebaseapp.com",
  databaseURL: "https://briemail-48eb7.firebaseio.com",
  projectId: "briemail-48eb7",
  storageBucket: "",
  messagingSenderId: "942795508931",
  appId: "1:942795508931:web:a470fa94b097b80c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database()

$("#addEmail").on("click", function(event){
  event.preventDefault();

  let custName = $("#name").val().trim();
  let custEmail = $("#email").val().trim();
  
  
  console.log(custName);
  console.log(custEmail);


  let newEmail = {
      Name:custName,
      Email:custEmail,    
  }

database.ref().push(newEmail);

$("#name").val("Thanks for signing up!");
$("#email").val(" ");

})


