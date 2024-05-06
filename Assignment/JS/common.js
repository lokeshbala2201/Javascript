var book;
var author=String;
var authorname=String;
var year=Number;
var price=Number;
var bookObject=Object;




var books =/**@class*/  (function (){
    function books(book=String,author=String,name=String,year=Number,price=number)
    {
        // this.Department=department;
        this.book=book;
        this.author=author;
        this.name=name;
        this.year=year;
        this.price=price;
    }
    return books;
}());
function save()
{
    
    book=document.getElementById("book").value;
    author=document.getElementById("author").value;
    authorname=document.getElementById("Aname").value;
    year=document.getElementById("year").value;
    price=document.getElementById("price").value; 

}


    
        
        

var table=document.getElementById("table");
var form=document.getElementById("formPage");

function show()
{
    table.style.display="block";
    form.style.display="none";
    document.getElementById("bookshow").innerHTML;
    console.log(book.value);

}
function back()
{
    table.style.display="none";
    form.style.display="block";
}

function bookcheck()
{   
    var bookmsg=document.getElementById("bookmsg")
    if(/^[a-zA-z]{50}$/.test(book))
    {
        bookmsg.innerHTML="valid";
        
        
    }
    else{
        bookmsg.innerHTML="invalid";
    }
}
