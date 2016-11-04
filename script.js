
var number = 0;
var questionArray = ['Adding one bit ____ the amount of information that can be represented.', 'A(n) ____ is the set of rules governing the exchange or transmission of data between devices.', 'The ____ created the first multi-computer network known as the ARPANET.', 'What does HTTP stand for?', 'ASCII is used to ______', 'A high-quality internet connection has______.','What program is used to access websites?','A .Com domain is typically used for a _____ site.','A ____ connects to the host server.','Images in the ____ domain are not protected by copyright.',
    'How do you start an HTML document?','What are some editors you can use to make HTML, CSS, etc? (Multiple Answers)','Which one of these fonts is not installed by default?','Which tag is used before an individual item in lists?','How do you link an external JavaScript page?','What tag shows a table row?','How do you correctly call an image in HTML?','How do you add a horizontal rule?','Which heading tag is the largest?','Which ways can you call a color in HTML?',
    'Which one of these properties is used to change the text color in CSS?','Which property below increases space inside an element in CSS?','How do you correctly add multiple margins in one line of code if the top margin is 100px, the right margin is 150px, the bottom margin is 100px, and the left margin is 80px in CSS?','Which symbol is used to call an id in CSS?','What is the outermost element found in the box model?','How do you add a border to an element with only one line of code in CSS?','How do you use a font that has multiple words in CSS?','What should you add to the <a> tag if you want to change the color of a previously visited link in CSS?','How do you add a background color to an element in CSS?','How do you align text in CSS?',
    'How do you write a message to the console in JavaScript?','How do you comment a single line in JavaScript?','Which answer below maintains proper Camelcase?','What is a string used for?','What is used to alter HTML with Javascript?','How do you create an array in JavaScript?','JavaScript was originally called _____.','How do you write an alert to the user in JavaScript?','How do you make an if statement?','How do you create a function?',];

var answerArrayA = ['Doubles', 'Domain', 'Government', 'Hyperlink to Text Protocol', 'Encode text in an easy to understand format', 'High Bandwidth; Low Latency', 'Internet Browser', 'Commercial', 'Client', 'Public',
    'html', 'Android Studio', 'Times New Roman', 'ol', 'myFunction()=embed', 'tablerow', 'img src="image.jpg"', '"horizontalrule"', 'h3', 'color=#FFFFFF', 
    'h1 {color:red;}', 'h1 padding:5px', 'p {margin: 100px 150px 100px 80px;}', '%', 'Padding', 'border-left: red solid 6px;', 'font-family: |Comic Sans MS|;', 'a:hover', 'background-color: white;', 'gravity: falls;',
    'console.log("Text")','(Comment)','TEXTEXAMPLE','Storing and Manipulating Numbers','innerHTML','var javascript() = [This, IsAn, Array]','Java','console.log','if i == x then','function completeMath(x - y) {x*y}',];

var answerArrayB = ['Triples', 'Protocol', 'Harvard College', 'Hypertext Transfer Protocol', 'Encrypt Passwords', 'Low Bandwidth; Low Latency', 'Android Studio', 'Government', 'Folder', 'Private', 
    '!DOCTYPE html', 'Brackets', 'Comic Sans MS', 'ul', 'link rel="javascript" type="text/javascript" href="theme.js"', 'th', 'a href="image"', 'hr', 'h6', 'color="white"', 
    'h1 color:red', 'h1 {padding:5px}', 'p {margin: 80px 100px 150px 100px;}', '*', 'Content', 'border-left: 6px solid red;', 'font-family: *Comic Sans MS*;', 'a:visited', 'backgroundcolor: white;', 'align-text: left;', 
    'document.write("Text")', '//Comment', 'TeXtExAmPlE', 'Writing Functions', 'getElementByClassName', 'var javascript = [This, IsAn, Array]', 'ECMScript', 'messageUser("Hi how are you")', 'if i = x then', 'function completeMath(x, y) {x*y}',];

var answerArrayC = ['Halves', 'IP Address', 'Founders of Microsoft', 'Hypertext Translation Post', 'Create websites', 'High Bandwidth; High Latency', 'Adobe Illustrator', 'Educational', 'Download', 'Open',
    'head', 'Sublime', 'Arial', 'li', 'script src="myscripts.js"', 'td', 'script="image"', 'br', 'h1', 'Both of these answers are correct',
    'h1 {textcolor:red;}', 'h1 {margin:5px;}', 'p {margin: 150px 100px 80px 100px;}', '.', 'Margin', 'border-left: solid red 6px;', 'font-family: /Comic Sans MS/;', 'a:link', 'background_color: white;', 'text-align: left;',
    'myFunction(logConsole)', '/* */', 'textExample', 'Adding a CSS file', 'console.log', 'var javascript = This, IsAn, Array', 'ECMAScript', 'alertUser("Hi There");', 'if (i == x) then', 'function completeMath(x + y) {x*y}',];
var answerArrayD = ['Does nothing', 'Bit', 'Google Company', 'Helpful Transaction Translation Pile', 'Access the console', 'Low Bandwidth; High Latency', 'Microsoft Paint', 'Organization', 'PDF', 'Closed', 
    '/html', 'xCode', 'Sans-Serif', 'hl', 'var embedHTML = innerHTML', 'tr', 'link rel="image.jpg"', '"ruler"', 'h4', 'None of these answers are correct', 
    'h1 textcolor:red;', 'h1 margin:5px;', 'p {margin: 80px 100px 100px 150px;}', '#', 'Border', 'border-left: red 6px solid;','font-family: "Comic Sans MS";', 'a:active', 'background:color= white;', 'text-gravity: left;', 
    'logInformation(Now)', '!-- --', 'TextExample', 'Storing and Manipulating Text', 'getElementById', 'var javascript() = [This(), IsAn(), Array()]', 'HTMLScript', 'alert("Hi There");', 'if i = x', 'function completeMath x, y {x*y}',];

var rightAnswers = ['Doubles', 'Protocol', 'Harvard College', 'Hypertext Transfer Protocol', 'Encode text in an easy to understand format', 'High Bandwidth; Low Latency', 'Internet Browser', 'Commercial', 'Client', 'Public',
                       '!DOCTYPE html', 'Brackets, Sublime', 'Comic Sans MS', 'li', 'script src="myscripts.js"', 'tr', 'img src="dankmemes.jpg"', 'hr', 'h1', 'Both of these answers are correct',
                       'h1 {color:red;}', 'h1 {padding:5px;}', 'p {margin: 100px 150px 100px 80px;}', '#', 'Margin', 'border-left: 6px solid red;', 'font-family: "Comic Sans MS";', 'a:visited', 'background-color: white;', 'text-align: left;',
                       'console.log("Text")', '//Comment', 'textExample', 'Storing and Manipulating Text', 'innerHTML', 'var dankmemes = [Pepe, Dat Boi, Harambe]', 'ECMAScript', 'alert(“Hi There”);', 'if (i == x) then', 'function completeMath(x, y) {x*y}']

function random() { x = Math.random(); }

function randomQuestion() {
    random();
 var randomnumber =    Math.floor(x * questionArray.length); 
    document.getElementById("questionnumber").value = randomnumber;
var rand = questionArray[randomnumber];
document.getElementById("Question").innerHTML = rand;
    randomAnswerA();
    randomAnswerB();
    randomAnswerC();
    randomAnswerD();
    reset(); 
    counter();
}

function randomAnswerA() {
    var rand = answerArrayA[Math.floor(x * answerArrayA.length)];
    document.getElementById("a").innerHTML = rand;    
}

function randomAnswerB() {
    var rand = answerArrayB[Math.floor(x * answerArrayB.length)];
    document.getElementById("b").innerHTML = rand;    
}

function randomAnswerC() {
    var rand = answerArrayC[Math.floor(x * answerArrayC.length)];
    document.getElementById("c").innerHTML = rand;  
}

function randomAnswerD() {
    var rand = answerArrayD[Math.floor(x * answerArrayD.length)];
    document.getElementById("d").innerHTML = rand;  
}

function verify(){ 
    var questionnumber = document.getElementById("questionnumber").value; 
    var correctanswer =  rightAnswers[questionnumber];
 
    var selectedAnswer="";
    if( document.getElementById("option1").checked ){ 
        selectedAnswer=answerArrayA[questionnumber];
    }else  if( document.getElementById("option2").checked ){
        selectedAnswer=answerArrayB[questionnumber]; 
    }else  if( document.getElementById("option3").checked ){
        selectedAnswer=answerArrayC[questionnumber]; 
    }else {
        selectedAnswer=answerArrayD[questionnumber]; 
    }
    
    if(selectedAnswer==correctanswer){
        document.getElementById("verifybox").style.backgroundColor = "green";
}  else{
        document.getElementById("verifybox").style.backgroundColor = "red";}
}

function reset() {
document.getElementById("verifybox").style.backgroundColor = "transparent";
document.getElementById("option1").checked = false;
document.getElementById("option2").checked = false;
document.getElementById("option3").checked = false;
document.getElementById("option4").checked = false;
}
function counter() {
    number += 1;
    document.getElementById("QuestionLabel").innerHTML = "Question Number: " + number;
    if(number > 10 ) {
    document.getElementById("QuestionLabel").innerHTML ="";
    document.getElementsByTagName("P")[0].innerHTML ="Congratulations!";
    document.getElementsByTagName("P")[1].innerHTML ="You have completed the quiz!";
    document.getElementsByTagName("P")[1].style.color = "lightgreen";
    document.getElementsByTagName("P")[0].style.color = "lightgreen";
    document.getElementsByTagName("P")[3].innerHTML ="";
    document.getElementsByTagName("P")[4].innerHTML ="";
    document.getElementsByTagName("UL")[0].innerHTML ="";
    document.getElementsByTagName("LI")[0].innerHTML ="";
    } 
    
}
