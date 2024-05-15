var Q1 = {
    Quote:"“Be yourself; everyone else is already taken.”",
    Author:"― Oscar Wilde"
};

var Q2 = {
    Quote : "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
    Author : "― Marilyn Monroe"
};

var Q3 = {
    Quote : "“So many books, so little time.”",
    Author : "― Frank Zappa"
};

var Q4 = {
    Quote : "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    Author : "― Albert Einstein"
};

var Q5 = {
    Quote : "“A room without books is like a body without a soul.”",
    Author : "― Marcus Tullius Cicero"
};

var Q6 = {
    Quote : "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
    Author : "― Bernard M. Baruch"
};

var Q7 = {
    Quote : "“You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.”",
    Author : "― William W. Purkey"
};

var Q8 = {
    Quote : "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
    Author : "― Dr. Seuss"
};
var Q9 = {
    Quote : "“You only live once, but if you do it right, once is enough.”",
    Author : "― Mae West"
};

var Q10 = {
    Quote : "“In three words I can sum up everything I've learned about life: it goes on.”",
    Author : "― Robert Frost"
};

var listOfQuotes = [Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10];
var button = document.getElementById('New_quote-btn');
var quoteDiv = document.getElementById('Quotes');
button.addEventListener('click', changeQuotes);

var finalRandomIndex=null;
function changeQuotes() {
    var Index = Math.floor(Math.random() * (listOfQuotes.length));
    
    //To Handle Repaeated Values
    while(finalRandomIndex == Index)
    {
        Index = Math.floor(Math.random() * (listOfQuotes.length));
    }
    finalRandomIndex = Index;

    quoteDiv.innerHTML=
    `<p id="Quote" class="quote text-center animate__animated animate__bounceInLeft">${listOfQuotes[finalRandomIndex].Quote}</p>
    <p id="Author" class="author text-center animate__animated animate__bounceInRight">${listOfQuotes[finalRandomIndex].Author}</p>`
}

