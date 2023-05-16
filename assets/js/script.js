var scores = 0;
var timer = 60;
var interval;
var index = 0;
var highOption;
var saveHighScore = [];
var saveHighScoreObj;
var containerBtn = document.querySelector(".textAction");
var container = document.querySelector(".container");
var textQuestion = document.querySelector(".textCenter");
var answer = document.querySelector(".answer");
var linkScore = document.querySelector(".a-score");
var remainTime = document.querySelector(".timer");
var firstColor = "#4112cf";
var secondColor = "#5fc6fe";
var textCnt = "left";

initialContent();

var questions = [

    {
        q : "Commonly used data types do NOT include: ",
        a : "Strings",
        b : "Booleans",
        c : "Alerts",
        d : "Numbers",
        
        answer : "B"
    },

    {
        q : "Arrays in Javascript can be used to store: ",
        a : "Numbers and Strings",
        b : "Booleans",
        c : "Other Arrays",
        d : "All of the above",
        
        answer : "A"
    },

    {
        q : "The condition for the if/else statement is enclosed within: ",
        a : "Curly Brackets",
        b : "Quotes",
        c : "Square Brackets",
        d : "Parantheses",
        
        answer : "D"

    },

    {
        q : "The Browser event submit allows u to do the following ",
        a : "Submit a form usng a button and the Enter key",
        b : "Submit a form usng a button",
        c : "Submit a form usng the Enter key",
        d : "None of the aboe",

        answer : "A"

    },

    {
        q : "A very useful tool used during development and debuggng for printing content to the debugger is: ",
        a : "Terminal/Bash",
        b : "For loops",
        c : "Javascript",
        d : "Console.log",
        
        answer : "C"

    },

];

function createButton (id, txt){
    var button = document.createElement("button");
    button.setAttribute("id", id);
    button.textContent = txt;
    button.style.background = firstColor;
    button.style.color = secondColor;
    button.style.borderRadius = "20px"
    containerBtn.appendChild(button);

}

function initialContent()
{
    createButton("start", "Start Quiz");

    highOption: 0;
}

var checkTimer = function(){
    var eval = false;
    if(timer <= 0){
        timer = 0;
        eval = true
    }
    return eval;
};

var checkAnswer = function(str, x){
    if(x < questions.length){

        var showAnswer = "";
        
        if (str === questions[x].answer){
            if(!checkTimer()){
                showAnswer = "That's Correct!";
                scores+=10;
            }
        }
        else{
            if(!checkTimer()){
                timer-=10;
        }
        showAnswer = "Uh-oh, that's incorrect";
    }

    var elementNode = document.querySelector("#question-id");
    deleteChildNode(elementNode);

    index = showQuestion(index);
    answer.textContent = showAnswer;

}
else{
    var elementNode = document.querySelector("#question-id");
    deleteChildNode(elementNode);
    answer.textContent = "";

    showInitialScore();
}

};

var showQuestion = function(x) {
    if(x < questions.length)
    {
        textQuestion.textContent = questions[x].q;

        var listUnOrdered = document.createElement("ul");
        listUnOrdered.setAttribute("id", "question-id");
        var op1 = document.createElement("li");
        var op2 = document.createElement("li");
        var op3 = document.createElement("li");
        var op4 = document.createElement("li");

        listUnOrdered.style.color = secondColor;
        listUnOrdered.style.justifycontent = "space-between";
        listUnOrdered.style.listStyle = "none";

        op1.style.background = firstColor;
        op1.style.justifyContent = textCnt;
        op1.style.borderRadius = "10px";

        op2.style.background = firstColor;
        op2.style.justifyContent = textCnt;
        op2.style.borderRadius = "10px";

        op3.style.background = firstColor;
        op3.style.justifyContent = textCnt;
        op3.style.borderRadius = "10px";
        
        op4.style.background = firstColor;
        op4.style.justifyContent = textCnt;
        op4.style.borderRadius = "10px";

        op1.innerHTML = "<a href= '#' onclick=checkAnswer('A'," + x + 
        ") style = 'text-decoration: none; color: #5fc6fe; '><div style = 'text-align: left;'>1. "
        + questions[x].a + "</div></a>";

        op2.innerHTML = "<a href= '#' onclick=checkAnswer('B'," + x + 
        ") style = 'text-decoration: none; color: #5fc6fe; '><div style = 'text-align: left;'>2. "
        + questions[x].b + "</div></a>";

        op3.innerHTML = "<a href= '#' onclick=checkAnswer('C'," + x + 
        ") style = 'text-decoration: none; color: #5fc6fe; '><div style = 'text-align: left;'>3. "
        + questions[x].c + "</div></a>";

        op4.innerHTML = "<a href= '#' onclick=checkAnswer('D'," + x + 
        ") style = 'text-decoration: none; color: #5fc6fe; '><div style = 'text-align: left;'>4. "
        + questions[x].d + "</div></a>";

        listUnOrdered.appendChild(op1);
        listUnOrdered.appendChild(op2);
        listUnOrdered.appendChild(op3);
        listUnOrdered.appendChild(op4);
        container.appendChild(listUnOrdered);
        
        var button = document.querySelector("#start");
        deleteChildNode(button);
        deleteChildNode(document.querySelector("#go-back"));
        deleteChildNode(document.querySelector("#clear"));

        x++;
    }
    else{
        showInitialScore();    
    }
    return x;  
};

var deleteChildNode = function(elementNode){

    if(elementNode){
        elementNode.parentNode.removeChild(elementNode);
    }

};

var displayErrorMessage = function(msg){
    alert(msg);
};

var getArrayLocalStore = function(){
    var user = [];
    user = JSON.parse(localStorage.getItem("userScore"));
    return user;
};

var clearLocalStore = function(){
    localStorage.clear();
};

var retrieveHighScore = function(){

    saveHighScore = getArrayLocalStore();
    timer = 0;

    textQuestion.textContent = "High Scores";
    remainTime.textContent = "";
    linkScore.textContent = "";
    answer.textContent = "";

    if(!highOption){
        container.textContent = "";
        deleteChildNode(document.querySelector("#start"));
    }
    else{
        deleteChildNode(document.querySelector(".p-store"));
        deleteChildNode(document.querySelector(".form-store"));
        deleteChildNode(document.querySelector("#score-id"));
    }

    if(saveHighScore != null)
    {
        console.log(saveHighScore.length);
        var listUnOrdered = document.createElement("ul");

        listUnOrdered.style.background = secondColor;
        listUnOrdered.style.justifyContent = "space-between";
        listUnOrdered.style.listStyle = "none";
        
        for(var i=0; i< saveHighScore.length; i++){
            var li = document.createElement("li");
            li.innerHTML = "<div style = 'text-align: left;'>" + (i+1) + ". " +
                            JSON.stringify(saveHighScore[i].user) + " - " + JSON.stringify(saveHighScore[i].score) + "</div>";
            li.style.textAlign = textCnt;
            li.style.background - firstColor;
            li.style.borderBottom = "10px";
            listUnOrdered.appendChild(li);''
        }

        container.appendChild(listUnOrdered);
    }

    createButton("go-back", "Go Back");
    createButton("clear", "Clear High Scores");
    
    var btn1 = document.querySelector("#go-back");
    var btn2 = document.querySelector("#clear");
    btn1.addEventListener("click", function() {
        location.reload();
    });
    btn2.addEventListener("click", function() {
        clearLocalStore();
    });

    deleteChildNode(document.querySelector("#question-id"));

};

var saveScore = function(){

    event.preventDefault();

    var input = document.querySelector("#initials").value;

    if (input === "") {
        displayErrorMessage("You must type in your initials to log your Score");
    } else {
        displayErrorMessage("Registered your score successfully!");

        saveHighScore = getArrayLocalStore();

        if(saveHighScore == null)
        {
            saveHighScore = [];
        }

        saveHighScoreObj ={
            user: input,
            score: scores
        };

        saveHighScore.push(saveHighScoreObj);

        localStorage.setItem("userScore",JSON.stringify(saveHighScore));
        retrieveHighScore();
    }
};

var showInitialScore = function() {

    textQuestion.textContent = "All Done!";
    remainTime.textContent = "Time left :" + timer;
    answer.textContent = "";

    var msg = document.createElement("p");
    msg.setAttribute("id", "score-id");

    msg.textContent = "Your final score is: " + scores + " out of "+ (questions.length * 10);

    var span = document.createElement("span");
    span.setAttribute("id", "form-id");
    span.style.dsiplay = "flex";
    span.style.flexWrap = "wrap";
    span.style.justifyContent = "center";
    span.style.flex = "flex-wrap";
    span.innerHTML = "<p class='p-store' style ='text-align:left'> Enter Initials: </p>" +
                        "<form class='form-store' style='padding:10px'><input type='text' name='initials placeholder='Enter initials' id='initials'/>"+
                        "<button id='save' type='submit' onclick='saveScore()' style= 'background:" + firstColor +
                        "; color:" + secondColor +"; border-radius:10px'>Submit</button></form>";

    
    container.appendChild(msg);
    container.appendChild(span);
};

var clockTime = function () {

    if(checkTimer()){
        clearInterval(interval);

        var elementNode = document.querySelector("#question-id");
        if(elementNode != null && answer != null){
            deleteChildNode(elementNode);

            answer.textContent ="";

            showInitialScore();
        }   
    }else{

        if(index < questions.length){

            timer--;
            remainTime.textContent = "Time left :"+ timer;
        }
    }
}; 

var startHandler = function() {

    container.textContent = "";
    highOption = 1;

    interval = setInterval(clockTime, 1000);

    index = showQuestion(index);
};

var button = document.querySelector("#start");
button.addEventListener("click", startHandler);
linkScore.addEventListener("click", retrieveHighScore);





