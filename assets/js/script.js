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

