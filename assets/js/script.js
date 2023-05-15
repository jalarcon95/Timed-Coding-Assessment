var score = 0;
var timer = 60;
var index = 0;
var saveHighScore = [];
var containerBtn = document.querySelector(".textAction");
var container = document.querySelector(".textBox");
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
        b : "Alerts",
        c : "Booleans",
        d : "Numbers",
        
        answer : "c"
    },

    {
        q : "Arrays in Javascript can be used to store: ",
        a : "Numbers and Strings",
        b : "Booleans",
        c : "Other Arrays",
        d : "All of the above",
        
        answer : "b"
    },

    {
        q : "The condition for the if/else statement is enclosed within: ",
        a : "Curly Brackets",
        b : "Quotes",
        c : "Square Brackets",
        d : "Parantheses",
        
        answer : "d"

    },

    {
        q : "True or False: DOM is built into a Javascript language ",
        a : "True",
        b : "False",

        answer : "a"

    },

    {
        q : "A very useful tool used during development and debuggng for printing content to the debugger is: ",
        a : "Terminal/Bash",
        b : "For loops",
        c : "Javascript",
        d : "Console.log",
        
        answer : "c"

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
                score+=10;


            }
        }
        else{
            if(!checkTimer()){
                timer-=10;
        }
        showAnswer = "Uh-oh, that's incorrect";
    }

    var elementNode = document.querySelector("#question-id");
    deleteChilNode(elementNode);

    index = showQuestion(index);
    answer.textContent = showAnswer;

}
else{
    var elementNode = document.querySelector("#question-id");
    deleteChildNode(elementNode);
    answer.textContent ="";

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




