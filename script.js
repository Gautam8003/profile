const firebaseConfig = {
  apiKey: "AIzaSyBxt9HcFns_LcCTyBlxpsZ_TQr7FQ1mg1E",
  authDomain: "portfolio-8f8ae.firebaseapp.com",
  databaseURL: "https://portfolio-8f8ae-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "portfolio-8f8ae",
  storageBucket: "portfolio-8f8ae.firebasestorage.app",
  messagingSenderId: "428852147606",
  appId: "1:428852147606:web:5404f5bf940b85866899b7",
  measurementId: "G-PR5D2B9050"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();


function saveData(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === ""){
        alert("enter all fields");
        return ;
    }

    if (!validateName === "" || !validateEmail===""){
        alert("invalid input");
        return;
    }
    
    let id = Date.now();

    firebase.database().ref("clients/"+id).set({
        name : name, 
        email : email,
        message : message,
    })

    alert("Data Saved")
}



function validateName(){
    let input = document.getElementById("name");
    let value = input.value ;
    let regex = /^[A-Za-z]{1,20}$/;
    if (regex.test(value)){
        input.style.borderColor = "green";
        return true;
    }else{
        input.style.borderColor = "red";
        return false;
    }
}

function validateEmail(){
    let input = document.getElementById("email");
    let value = input.value;
    let regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/
    if (regex.test(value)){
        input.style.borderColor = "green";
        return true;
    }else {
        input.style.borderColor = "red";
        return false;
    }
}

function openAbout(){
    document.getElementById("about").style.display = "flex";
}

function closeAbout(){
    document.getElementById("about").style.display= "none";
}

function openForm(){
    document.getElementById("contact").style.display = "flex";
}

function closeForm(){
    document.getElementById("contact").style.display = "none";
}

