let customerRecords=JSON.parse(localStorage.getItem('CustomerRecords'));

let ulist=document.getElementById('ulist');

let searchBar=document.getElementById('search-bar');
searchBar.placeholder="search customers";
// getting key value (mobile number) from local storage

let listItems=[];
let totalFine=0;

customerRecords.forEach(element => {
    console.log(element);
    let date=element.date;
    let days=element.days;

    let endDate=findingEndDate(date,days);
    let delayedDays=delayeddays(endDate);
    let fine=calculateFine(delayedDays);

    element.delayedDays=delayedDays;
    element.fineAmount=fine;
    
    console.log(element);

    listItems.push(element);
});

renderCustomers(listItems);

function renderCustomers(listItem){

    listItem.forEach(items => {
  
        // creating div for book name
        let bookName=document.createElement('div');
        bookName.className="book-name-div left-spacing";
        bookName.textContent=items.bookname;
    
        let mobileLabel=document.createElement('div');
        mobileLabel.className="mobile-label-div flex left-spacing";
        mobileLabel.textContent="Mobile : ";
    
                //creating div for mobile number
                let mobileNumber=document.createElement('div');
                mobileNumber.className="mobile-number-div";
                mobileNumber.textContent=items.mobile;
    
            mobileLabel.append(mobileNumber);
    
        let daysLabel=document.createElement('div');
        daysLabel.className="delayed-days-label-div flex left-spacing";
        daysLabel.textContent="Delayed days : ";
    
                //creating div for delayed days
                let delayedDays=document.createElement('div');
                delayedDays.className="delayed-days-div";
                delayedDays.textContent=items.delayedDays;
    
            daysLabel.append(delayedDays);
    
        let fineLabel=document.createElement('div');
        fineLabel.className="fine-amount-label-div flex left-spacing";
        fineLabel.textContent="Fine : ";    
    
                //creating div for fine amount
                let fineAmount=document.createElement('div');
                fineAmount.className="fine-amount-div";
                fineAmount.textContent=items.fineAmount;
                
                totalFine+=Number(items.fineAmount);
    
            fineLabel.append(fineAmount);
    
        let li=document.createElement('li');
        li.className="delayed-book-list-items";
    
        // append the details to <li>
        li.append(bookName);
        li.append(mobileLabel);
        li.append(daysLabel);
        li.append(fineLabel);
    
        // append the <li> to <ul>
        ulist.append(li);
    });
    
}



localStorage.setItem('TotalAmount',JSON.stringify(totalFine));


function findingEndDate(date,days){
       let endDate=new Date(date);
       endDate.setDate(endDate.getDate()+days);

       return endDate;
}

function delayeddays(enddate){
    let subDate=new Date();
    let end=new Date(enddate);
     let difference=subDate-end;
     let delayedDays=difference/(1000*60*60*24);

     return Math.floor(delayedDays);
}

function calculateFine(delayeddays){
   
     let fine=Math.floor(delayeddays)*100;
     return fine;
}

function addToList(listItems){ 
    let li=document.createElement('li');
    for(let i=0;i<listItems.length;i++){
        li.append(listItems[i]);

        ulist.append(li);
    }

}
//add event listener for searchbar
searchBar.addEventListener('input',searchCustomer);

//search customer mobile number and add that number's delayed books to <ul> 
function searchCustomer(){
    let listItem=[];
    for(let i=0;i<customerRecords.length;i++){
        if(customerRecords[i].mobile.includes(searchBar.value)){
              listItem.push(customerRecords[i]);
        }
    }
    ulist.textContent="";
    renderCustomers(listItem);
  
}