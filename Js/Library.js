// let bookList=[
//     {
//         "name": "Atomic Habits",
//         "image_src":"../Images/Atomic-Habits.jpg",
//         "author": ["James Clear","Thalif","Sanjai"],
//         "page_no": 320,
//         "prize": 450,
//         "genre": "self-help",
//         "version":["v1","v2","v3"],
//         "ratings":4.5,
//         "stock": 8,
//         "publish": "15/10/2018"
//     },
//     {
//         "name": "Rich Dad Poor Dad",
//         "image_src":"../Images/Richdad.jpg",
//         "author": ["Robert T. Kiyosaki"],
//         "page_no": 336,
//         "prize": 350,
//         "genre": "finance",
//         "version":["v1"],
//         "ratings":4.0,
//         "stock": 10,
//         "publish": "11/04/2000"
//     },
//     {
//         "name": "Deep Work",
//         "image_src":"../Images/Deep-work.jpg",
//         "author": ["Cal Newport"],
//         "page_no": 304,
//         "prize": 400,
//         "genre": "productivity",
//         "version":["v1"],
//         "ratings":4.1,
//         "stock": 7,
//         "publish": "05/01/2016"
//     },
//     {
//         "name": "Sapiens: A Brief History of Humankind",
//         "image_src":"../Images/Sapiens.jpg",
//         "author": ["Yuval Noah Harari","Howard"],
//         "page_no": 498,
//         "prize": 600,
//         "genre": "history",
//         "version":["v1","v2"],
//         "ratings":4.4,
//         "stock": 4,
//         "publish": "04/09/2014"
//     },
//     {
//         "name": "The Lean Startup",
//         "image_src":"../Images/Lean-Startup.jpg",
//         "author": ["Eric Ries"],
//         "page_no": 336,
//         "prize": 500,
//         "genre": "business",
//         "version":["v1"],
//         "ratings":3.9,
//         "stock": 12,
//         "publish": "13/09/2011"
//     },
//     {
//         "name": "Atom",
//         "image_src":"../Images/Atomic-Habits.jpg",
//         "author": ["James Clear","Thalif","Sanjai"],
//         "page_no": 320,
//         "prize": 450,
//         "genre": "self-help",
//         "version":["v1","v2","v3"],
//         "ratings":4.5,
//         "stock": 8,
//         "publish": "15/10/2018"
//     }
// ]


//  localStorage.setItem("booklist",JSON.stringify(bookList));

let logo=document.getElementById('logo');
logo.textContent="Library";

let addCustomer=document.getElementById('add-user-btn');
addCustomer.textContent="Add Customer";

addCustomer.addEventListener('click',function(){
        window.location.href="addCustomer.html";
})

let fine=JSON.parse(localStorage.getItem('TotalAmount'));

let TotalAmount=document.getElementById('total-amount-div');
TotalAmount.textContent=fine;

let searchBar=document.getElementById('search-bar');  

let ulist=document.getElementById("book-list");

     let bookList=JSON.parse(localStorage.getItem("booklist"));


function renderBookListItems(givenBookList){

    ulist.innerHTML="";
    givenBookList.forEach(book => {

       //Book Image
       let bookImamgeDiv=document.createElement('div');
       bookImamgeDiv.className="book-image-div";

            let bookImage=document.createElement('img');
            bookImage.src=book.image_src;
            bookImage.className="book-image";

        bookImamgeDiv.append(bookImage);  

       //Name Tag 

        let bookTag=document.createElement('div');
        bookTag.className="book-tag";

                //Book Name 
                  let nameParentDiv=document.createElement('div');
                  nameParentDiv.className="name-title-card flex padding";
                
                        let nametitleDiv=document.createElement('div');
                        nametitleDiv.className="name-title-key";
                        nametitleDiv.textContent="Book Name : ";

                        let bookName=document.createElement('div');
                        bookName.innerHTML=book.name;
                        bookName.className="book-name";

                nameParentDiv.append(nametitleDiv,bookName);     

       
         

       // Author and Published data tag
       
       let genreNdataTag=document.createElement('div');
       genreNdataTag.className="genre-date-tag flex padding";

                // Author Name
                let authorParentDiv=document.createElement('div');
                authorParentDiv.className="author-title-card flex padding";

                        let authorTitleDiv=document.createElement('div');
                        authorTitleDiv.className="author-title-key";
                        authorTitleDiv.textContent=" ";
                        
                        let multipleAuthors=document.createElement('div');
                        multipleAuthors.className="multiple-authors flex padding";

                        let bookAuthor=[];
                        //Why?
                        for(let i=0;i<book.author.length;i++){
                              bookAuthor[i] =document.createElement('div');
                            
                              // To Avoid the " | " on the last element of array
                              if(i===book.author.length-1){
                                bookAuthor[i].innerHTML=book.author[i];
                                bookAuthor[i].className="book-author padding";
                              }
                              else{
                                bookAuthor[i].innerHTML=book.author[i]+" | ";
                                bookAuthor[i].className="book-author padding";
                              }
                                
                                 multipleAuthors.append(bookAuthor[i]);
                        }

                       

                // Published date of book

                let dateParentDiv=document.createElement('div');
                dateParentDiv.className="date-title-card flex padding";

                        let dateTitleDiv=document.createElement('div');
                        dateTitleDiv.className="date-title-key";
                      
                        let publishedDate=document.createElement('div');
                        publishedDate.innerHTML=" | "+book.publish;
                        publishedDate.className="published-date";

                dateParentDiv.append(dateTitleDiv,publishedDate);
        
        //Page Number

        let pageParentDiv=document.createElement('div');
        pageParentDiv.className="page-title-card flex padding";

                let pageTitleDiv=document.createElement('div');
                pageTitleDiv.className="page-title-key";
                pageTitleDiv.textContent="Pages : ";

                let pageNo=document.createElement('div');
                pageNo.innerHTML=book.page_no;
                pageNo.className="page-no";

        pageParentDiv.append(pageTitleDiv,pageNo);

        
        //Price & Stock Tag

        let priceNstock=document.createElement('div');
        priceNstock.className="price-stock-tag flex padding";

                //Book Prize
        
                let prizeParentDiv=document.createElement('div');
                prizeParentDiv.className="prize-title-card flex";
                
                        let prizeTitleDiv=document.createElement('div');
                        prizeTitleDiv.className="prize-title-key";
                // prizeTitleDiv.textContent="Price : ";

                        let prize=document.createElement('div');
                        prize.innerHTML="$"+book.prize;
                        prize.className="book-prize";
                
                prizeParentDiv.append(prizeTitleDiv,prize);

        // Book Stock

        let stockParentDiv=document.createElement('div');
        stockParentDiv.className="stock-title-card flex";

                let stockTitleDiv=document.createElement('div');
                stockTitleDiv.className="stock-title-key";
                stockTitleDiv.textContent="Stock : ";

                let bookStock=document.createElement('div');
                bookStock.innerHTML=book.stock;
                bookStock.className="book-stock";
              //  checkStock(book.stock,bookStock,book);
              
        stockParentDiv.append(stockTitleDiv,bookStock);   
        

        
        //Book Genre

        let genreParentDiv=document.createElement('div');
        genreParentDiv.className="genre-title-card flex padding";

                let genreTitleDiv=document.createElement('div');
                genreTitleDiv.className="genre-title-key";
               // genreTitleDiv.textContent="Genre : ";

                let bookGenre=document.createElement('div');
                bookGenre.innerHTML=book.genre;
                bookGenre.className="book-genre";
        
        genreParentDiv.append(genreTitleDiv,bookGenre);
        
        //Version

        let versionParentDiv=document.createElement('div');
        versionParentDiv.className="version-title-card flex padding";
                
               
                let bookVersion=[];
                for(let i=0;i<book.version.length;i++){
                        
                        bookVersion[i]=document.createElement('button');
                        
                                bookVersion[i].className="book-version add-btn";
                                bookVersion[i].innerHTML=book.version[i];
                                
                        versionParentDiv.append(bookVersion[i]);
                }
                

        //Book Ratings
        
        let ratingsParentDiv=document.createElement('div');
        ratingsParentDiv.className="ratings-title-card flex border";

           let bookRatings=document.createElement('div');
           bookRatings.innerHTML=book.ratings;
           bookRatings.className="book-ratings";

           // creating Star symbol
           let starSymbol=document.createElement('div');
           starSymbol.className="star-symbol";
           starSymbol.innerHTML="\u2605";

        ratingsParentDiv.append(bookRatings,starSymbol);
        
        //Append to AuthorNdata 
        genreNdataTag.append(versionParentDiv,genreParentDiv,dateParentDiv);   

        //Append to Price & Stock Tag
        priceNstock.append(prizeParentDiv,stockParentDiv,ratingsParentDiv);

        //Append to Book Tag
        bookTag.append(nameParentDiv);
        bookTag.append(multipleAuthors);
        bookTag.append(genreNdataTag);
        bookTag.append(priceNstock);
        bookTag.append(pageParentDiv);
        
        
        let listItems=document.createElement('li');
        listItems.className="book-list-items border";

        listItems.append(bookImamgeDiv);
        listItems.append(bookTag);
        //listItems.append(addBtn);
       checkStock(book.stock,bookStock,listItems);
        ulist.append(listItems);
    });
    addEventListener();
}

renderBookListItems(bookList);

// check stock is less than 3 or zero. if stock less than 3 ,its color changed to red 
function checkStock(stock,stockDiv,listItem){

        if(stock<4){
                stockDiv.style.color="red";
        }
        if(stock>0){
                listItem.style.pointerEvents="visible";
        }
        else if(!stock>0){
                // if stock=0 , the listitem has disableld and shows "out of stock"
                listItem.style.pointerEvents="none";
                listItem.style.opacity="0.5";
                let outOfStock=document.createElement('div');
                outOfStock.textContent="Out Of Stock";
                outOfStock.className="out-of-stock";
                listItem.append(outOfStock);
        }
}

function addEventListener(){
     
    let bookListItem=document.getElementsByClassName("book-list-items");
   
    for(let i=0;i<bookListItem.length;i++){
      
        bookListItem[i].addEventListener('click', function(){
                
            bookList[i].stock--;
           
            //Store the updated data on local storage (OverWrite)
            localStorage.setItem("booklist",JSON.stringify(bookList));

            ulist.innerHTML="";
            renderBookListItems(bookList);

           // Go to the Book CheckOut Page
            window.location.href="bookCheckout.html";

            //Store the selected book details to the created "selectedBook" key on Local Storage
            localStorage.setItem('selectedBook',JSON.stringify(bookList[i]));
        })
    }
}

//Create list items and append to the <ul> Searched Books
function updateSearchList(booklist){

        let searchedBooks=document.getElementById('searched-books');

        searchedBooks.innerHTML="";
          for(let i=0;i<booklist.length;i++){
               let listItem=document.createElement('li');
               listItem.className="searched-list-item";
               listItem.textContent=booklist[i].name;
               searchedBooks.append(listItem);
          }
}

searchBar.addEventListener('input',searchFeature);

function searchFeature(){

        let inputText=searchBar.value.toLowerCase();

        let searchedList=[];

        for(let i=0;i<bookList.length;i++){
               
                if(bookList[i].name.toLowerCase().includes(inputText)){
                        searchedList.push(bookList[i]);
                }
        }
      //  updateSearchList(searchedList);
        renderBookListItems(searchedList);
}


          
function getBookGenre(booklist){
       
        let genreList=[];
        for(let i=0;i<booklist.length;i++){
          
                // to avoid duplicates
                if(!genreList.includes(booklist[i].genre)){
                       genreList.push(booklist[i].genre);
                }
        }
        updateCatogories(genreList);
}

let catogoriesList=document.getElementById('catogories');

function updateCatogories(catogories){

        for(let i=0;i<catogories.length;i++){

                let catogoriesListItems=document.createElement('li');
                catogoriesListItems.className="catogories-items";

                catogoriesListItems.textContent=catogories[i];
                catogoriesList.append(catogoriesListItems);
        }
}

getBookGenre(bookList);


let genrelist=document.getElementById('catogories');


genrelist.addEventListener('click',function(e){

        let selectCatogory=[];
        let selectedCatogory=e.target.innerHTML;
        for(let i=0;i<bookList.length;i++){
                if(bookList[i].genre==selectedCatogory){
                        selectCatogory.push(bookList[i]);
                        
                }
        }
        renderBookListItems(selectCatogory);
});

