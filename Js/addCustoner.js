// let userdetails=[
//    {
//       'name':"sanjai04",
//       'college':"jmc",
//       'gender':"male",
//       'dob':"11/12/2004",
//       'mobile':"8838691296",
//       'books':[]
//    }
// ]
// localStorage.setItem('CustomerDetails',JSON.stringify(userdetails));

let newUser={};

let userName=document.getElementById('username-input');
let collegeName=document.getElementById('college-input');
let gender=document.getElementById('gender');

let mobile=document.getElementById('mobile-input');

let userDetails=JSON.parse(localStorage.getItem('CustomerDetails'));

let signupBtn=document.getElementById('add-btn');

function convertToDate(){
    let date=new Date(dob);
    return date.toLocaleDateString();
}

signupBtn.addEventListener('click',function(){
    let dob=document.getElementById('dob').value;
     
     newUser.name=userName.value;
     newUser.collegeName=collegeName.value;
     newUser.gender=gender.value;
     newUser.dob=convertToDate(dob);
     newUser.mobile=mobile.value;
     newUser.books=[];

         userDetails.push(newUser);
         localStorage.setItem('CustomerDetails',JSON.stringify(userDetails));
         window.location.href="Library.html";
})

