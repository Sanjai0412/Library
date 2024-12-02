
// let cr=[
//     {
//         'mobile': "8838691296",
//         'bookname': "Atomic Habits",
//         'date': "2024/11/01",
//         'days': 6
//     },
//     {
//         'mobile': "8838691297",
//         'bookname': "The Power of Habit",
//         'date': "2024/12/01",
//         'days': 7
//     },
//     {
//         'mobile': "8838691298",
//         'bookname': "Deep Work",
//         'date': "2024/10/15",
//         'days': 10
//     },
//     {
//         'mobile': "8838691299",
//         'bookname': "Mindset: The New Psychology of Success",
//         'date': "2024/09/10",
//         'days': 5
//     },
//     {
//         'mobile': "8838691300",
//         'bookname': "Dare to Lead",
//         'date': "2024/11/25",
//         'days': 8
//     }
// ];
//   localStorage.setItem('CustomerRecords',JSON.stringify(cr))

// get the list from the local storage
let selectedBook=JSON.parse(localStorage.getItem('selectedBook'));
let customerList=JSON.parse(localStorage.getItem('CustomerDetails'));
let customerRecords=JSON.parse(localStorage.getItem('CustomerRecords'));

// customerList.splice(4,1);
// localStorage.setItem('CustomerDetails',JSON.stringify(customerList));

let newCustomer={};
let outLine=document.getElementById('outline');
let mobile;
// getting from dom
let logo=document.getElementById('logo');
logo.textContent="Library";

let CustomerName=document.getElementById('customer-name');

let inputTxt=document.getElementById('search-customer');

let ulist=document.getElementById('customer-list');

let bookName=document.getElementById('book-name');
bookName.textContent=selectedBook.name;


let checkoutBtn=document.getElementById('checkout-btn-div');

// event listener for checkout button
checkoutBtn.addEventListener('click',function(){

    addBooktoCustomerDetails();

});

// add customer mobile number and selected book to Customer records (local storage)=>{mobile: , books=[]}
function addCustomerRecords(customermobile){

    let day=document.getElementById('date').value;
    let date=new Date();

       newCustomer.mobile=customermobile;
       newCustomer.bookname=bookName.textContent;
       newCustomer.date=date.toLocaleDateString();
       newCustomer.days=day;

    customerRecords.push(newCustomer);

      // update the records to the local storage named (Customer Records)
      localStorage.setItem('CustomerRecords',JSON.stringify(customerRecords));
}

// add selected book to the customer details(local storage) => books=[] 
function addBooktoCustomerDetails(){

    for(let i=0;i<customerList.length;i++){
       
        if(CustomerName.textContent.toLowerCase()==customerList[i].name.toLowerCase()){
             
                //pushing customer mobile number to the Function()
                addCustomerRecords(customerList[i].mobile);
              break;
        }
    }
    //after clicking checkout button, it goes to the Library.html page
    window.location.href="Library.html";
}


// add the clicked list item (name) to the Customer Name textcontent
ulist.addEventListener('click',function(customer){

    let cname=customer.target.innerHTML;
    //get selected customer's mobile number
     mobile=getMobileNumber(cname);

     //Pushing mobile number and customer name to function()
     checkCustomerBookCount(mobile,cname);
})

//Check the customer have 2 books or less  than 2 books

function checkCustomerBookCount(mobile,name){
    let count=0;
    let fine=0;
    for(let i=0;i<customerRecords.length;i++){
        if(mobile==customerRecords[i].mobile){
            count++;
            fine=checkCustomerFine(customerRecords[i]);
        }
    }
    if(fine==1){
        //disable body 
        outLine.style.pointerEvents="none";
        outLine.style.opacity="0.5";

        createPopUpForFine();
    }
    if(count>=2){
       //disable body 
        outLine.style.pointerEvents="none";
        outLine.style.opacity="0.5";

        createPopUp();
    }
    else if(count<2){
        CustomerName.textContent=name;
    }
}

//Check if customer has to pay fine for the book 
function checkCustomerFine(customername){
    let date=new Date();
    let endDate=findingEndDate(customername.date,customername.days);
    let f=0;
     if(endDate>date){
        f=1;
     }
     return f;
}

//Finding ending date from(days you ) the date you bought a book 
function findingEndDate(date,days){
    let endDate=new Date(date);
    endDate.setDate(endDate.getDate()+days);

    return endDate;
}

//Create Pop Up 
function createPopUp(){
        let popUp=document.createElement('div');
        popUp.className="pop-up-div";

        let popUpText=document.createElement('div');
        popUpText.className="pop-up-text";

        let popUpBtn=document.createElement('button');
        popUpBtn.className="pop-up-btn";

        popUpText.textContent="This Customer already have two books";
        popUpBtn.textContent="Okay";

        popUp.append(popUpText);
        popUp.append(popUpBtn);
        document.body.append(popUp);

        popUpBtn.addEventListener('click',function(){

            //Remove the pop up
            popUp.remove();

            //set visible for outline div
            outLine.style.pointerEvents="visible";
            outLine.style.opacity="1";
            
        })
}

//create pop up for fine pending customers
function createPopUpForFine(){
    let popUp=document.createElement('div');
    popUp.className="pop-up-div";

    let popUpText=document.createElement('div');
    popUpText.className="pop-up-text";

    let popUpBtn=document.createElement('button');
    popUpBtn.className="pop-up-btn";

    popUpText.textContent="This Customer have to pay their fine Amount";
    popUpBtn.textContent="Okay";

    popUp.append(popUpText);
    popUp.append(popUpBtn);
    document.body.append(popUp);

    popUpBtn.addEventListener('click',function(){

        //Remove the pop up
        popUp.remove();

        //set visible for outline div
        outLine.style.pointerEvents="visible";
        outLine.style.opacity="1";
        
    })
}
//Check the customer have to settle Fine amount for book they bought
function checkFineForCustomer(){

}

// create list items (given list) on unordered list and append on it
function updateSearchedList(clist){

    ulist.innerHTML="";
    for(let i=0;i<clist.length;i++){
        let customers=document.createElement('li');
        customers.className="list-items";
        customers.textContent=clist[i].name;
        ulist.append(customers);
    }
}

// to get mobile number of selected customer
function getMobileNumber(name){
          let mobile;
    for(let i=0;i<customerList.length;i++){
        if(name.toLowerCase().includes(customerList[i].name.toLowerCase())){
            mobile=customerList[i].mobile;
            break;
        }
    }
    return mobile;
}

// event listener for the input field(search bar)
inputTxt.addEventListener('input',searchCustomer);

// search customers and append that customer to the customer list
function searchCustomer(){
    let customerArray=[];
    let text=inputTxt.value.toLowerCase();
    for(let i=0;i<customerList.length;i++){
        
        if(customerList[i].name.toLowerCase().includes(text)){
             customerArray.push(customerList[i]);
        }
    }
    // pushing customer Array list to the function
    updateSearchedList(customerArray);
}
