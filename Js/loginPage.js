

let userDetails=JSON.parse(localStorage.getItem('userDetails'));

let loginBtn=document.getElementById('login-btn');

loginBtn.addEventListener('click',function(){
    let userName=document.getElementById("username-input");
    let password=document.getElementById('password-input');
    CheckUserDetails(userName,password);
})

function CheckUserDetails(userName,password){

    let usernameIncorrect=document.getElementById('incorrect-username');
    let passwordIncorrect=document.getElementById('incorrect-password');
    
    // To Check the username and password are valid or not
    for(let i=0;i<userDetails.length;i++){
     
        if(userDetails[i].name==userName.value){
            if(userDetails[i].password==password.value){
                window.location.href="Library.html";

                userName.value="";
                password.value="";
                break;
            }
            else{
                passwordIncorrect.textContent="Entered password is wrong";
                usernameIncorrect.textContent="";
            }
        }
        else if(userDetails[i].name!=userName.value){
            usernameIncorrect.textContent="Incorrect Username";
            passwordIncorrect.textContent="";
        }
    }
}