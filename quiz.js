const quiz=[

{q:"Which program is used to create documents?",a:["Word","Excel","PowerPoint","Access"],c:0},
{q:"Which program is used for spreadsheets?",a:["Word","Excel","Access","PowerPoint"],c:1},
{q:"Which program creates presentations?",a:["Excel","Word","PowerPoint","Access"],c:2},
{q:"Which program manages databases?",a:["Word","Access","Excel","PowerPoint"],c:1},

{q:"Which Word feature changes text style?",a:["Font","Query","Slide","Formula"],c:0},
{q:"What is used to insert pictures in Word?",a:["Insert tab","Design tab","View tab","File tab"],c:0},

{q:"Which Excel function adds numbers?",a:["SUM","TEXT","FONT","DATA"],c:0},
{q:"Which Excel feature creates charts?",a:["Insert Chart","Slide Show","Query","Format"],c:0},

{q:"What is a slide?",a:["A presentation page","A database","A formula","A document"],c:0},
{q:"Which tab starts a PowerPoint presentation?",a:["Slide Show","Insert","Design","File"],c:0},

{q:"What stores data in Access?",a:["Tables","Slides","Charts","Documents"],c:0},
{q:"What connects tables in Access?",a:["Relationships","Fonts","Animations","Charts"],c:0},

{q:"Which Excel chart compares values?",a:["Bar Chart","Font","Slide","Query"],c:0},
{q:"What does PowerPoint use for effects?",a:["Animations","Queries","Fonts","Tables"],c:0},

{q:"Which Word tool checks spelling?",a:["Spelling & Grammar","Insert","View","Design"],c:0},
{q:"Which Excel feature sorts data?",a:["Sort","Slide","Animate","Query"],c:0},

{q:"What is used to search data in Access?",a:["Query","Font","Slide","Chart"],c:0},
{q:"Which PowerPoint feature moves slides?",a:["Transition","Formula","Font","Table"],c:0},

{q:"Which Excel function calculates average?",a:["AVERAGE","SUM","COUNT","MAX"],c:0},
{q:"Which tab saves files?",a:["File","Insert","Design","View"],c:0}

]

let current=0
let score=0

function loadQuestion(){

let q=quiz[current]

document.getElementById("question").innerText=q.q

let answers=""

q.a.forEach((ans,i)=>{

answers+=`<button onclick="checkAnswer(${i})">${ans}</button>`

})

document.getElementById("answers").innerHTML=answers

updateProgress()

}

function checkAnswer(i){

let q=quiz[current]

if(i===q.c){

document.getElementById("result").innerText="✅ Correct!"
score++
document.getElementById("score").innerText=score

}else{

document.getElementById("result").innerText="❌ Try Again"

}

}

function nextQuestion(){

current++

if(current<quiz.length){

loadQuestion()
document.getElementById("result").innerText=""

}else{

finishQuiz()

}

}

function updateProgress(){

let percent=(current/quiz.length)*100

document.getElementById("progress").style.width=percent+"%"

}

function finishQuiz(){

document.getElementById("celebration").style.display="block"

for(let i=0;i<60;i++){

let flower=document.createElement("div")

flower.className="flower"

flower.innerText="boom! 🎈"

flower.style.left=Math.random()*100+"%"

flower.style.animationDuration=(Math.random()*3+2)+"s"

document.body.appendChild(flower)

}

}

loadQuestion()