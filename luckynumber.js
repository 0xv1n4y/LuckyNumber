const c=console;



var luckyNumber=Math.floor(Math.random()*20);
c.log(luckyNumber);
var startmessage=document.getElementById("message")
c.log(startmessage);

var userGuess=document.getElementById("guessing");
c.log(userGuess);

var mainSection=document.getElementById("main");
c.log(mainSection);

var checkButton=document.getElementById("check");
c.log(checkButton);

var againbutton=document.getElementById("again");
onclick="location.reload();"
c.log(againbutton);


var markers=document.getElementById("marker");
c.log(markers);
 var againButton=document.getElementById("btn again");
 
 c.log(againButton);
 

var scores=document.getElementById('score');
c.log(scores);


var score=10;

function clicked(){
    var guessedNumber=parseInt(userGuess.value);
    c.log(guessedNumber);

     if(guessedNumber>20 || guessedNumber<1 ){
        c.log("Plese Provide Number Between 1 And 20");
        mainSection.style.backgroundColor="#FCE700";
            startmessage.innerText='Number Should Be in 1 To 20';
            markers.innerText="π";
            score--;
            scores.innerText=score;

     } else {
        if(guessedNumber===luckyNumber){
            c.log("You Wonππππ");
            mainSection.style.backgroundColor="green";
            startmessage.innerText=' You Won  ππ';
            markers.innerText="β€οΈ";
            score--;
            scores.innerText=score;

        } else 
        if(guessedNumber > luckyNumber){
            c.log("Too Highπ€¦ββοΈ");
            mainSection.style.backgroundColor="pink";
            startmessage.innerText='Its Too High π₯΅';
            markers.innerText="πΌ";
            score--;
            scores.innerText=score;
        } else 
        if(guessedNumber < luckyNumber){
            c.log("Too Lowπ₯΅");
            mainSection.style.backgroundColor="#F57328";
            startmessage.innerText='Its Too Low π ';
            markers.innerText="π‘";
            score--;
            scores.innerText=score;

            
        }
     }


    }

    


    
checkButton.addEventListener("click",clicked);

checkButton.value==" ";