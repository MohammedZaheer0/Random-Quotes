let Quote = document.getElementById("quote");
let Author = document.getElementById("author");
let Button = document.getElementById("btn");
let Tweet = document.getElementById("tweet");

async function DataFetch(){
    let response = await fetch("https://api.quotable.io/random");
    let data  = await response.json();
    Quote.textContent = data.content;
    Author.textContent = data.author;
}

Tweet.addEventListener("click",function(){
    window.open("https://twitter.com/intent/tweet?text="+Quote.innerHTML +" ---By "+ Author.innerHTML,"Tweet Window","width=600, height=600");
})

DataFetch();



