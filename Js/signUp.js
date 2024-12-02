// let userdetails=[
//    {
//       'name':"sanjai04",
//       'college':"jmc",
//       'gender':"male",
//       'dob':"11/12/2004",
//       'password':"sasan",
//    }
// ]

// localStorage.setItem('userDetails',JSON.stringify(userdetails));

let newUser={};

let userName=document.getElementById('username-input');
let collegeName=document.getElementById('college-input');
let gender=document.getElementById('gender');
let dob=document.getElementById('dob');
let password=document.getElementById('password-input');


let userDetails=JSON.parse(localStorage.getItem('userDetails'));


let signupBtn=document.getElementById('login-btn');
signupBtn.addEventListener('click',function(){
     
     newUser.name=userName.value;
     newUser.collegeName=collegeName.value;
     newUser.gender=gender.value;
     newUser.dob=dob.value;
     newUser.password=password.value;
      
     let confirmPassword=document.getElementById('confirm-password-input');
     let confirmPasswordCorrection=document.getElementById('confirm-password-correction');

     if(password.value==confirmPassword.value){
        userDetails.push(newUser);
        localStorage.setItem('userDetails',JSON.stringify(userDetails));
        window.location.href="loginPage.html";
     }
     else{
        confirmPasswordCorrection.textContent="Password does'nt match";
     }
    
     
})

