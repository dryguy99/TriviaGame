/* Trivia Game*/

//Global Variables

var eighty1 = {
		question: "Which song won the Grammy for record of the year in 1989?",
		ans1: "Wind Beneath My Wings",
		ans2: "Don't Worry, Be Happy",
		ans3: "Giving You The Best That I Got",
		ans4: "Fast Car",
		correctAn: 1,
		image: ""
};
var eighty2 = {
		question: "In 1989, who win the Grammy for Best Comedy Recording?",
		ans1: "Whoopi Goldberg - Fontaine: Why Am I Straight?",
		ans2: "Jonathan Winters - Jonathan Winters Finally Captured",
		ans3: "George Carlin - What Am I Doing in New Jersey?",
		ans4: "Robin Williams - Good Morning, Vietnam",
		correctAn: 4,
		image: ""
};
var eighty3 = {
		question: "Who won the Grammy for Album of the Year in 1980?",
		ans1: "Donna Summer - Bad Girls Lyrics",
		ans2: "Billy Joel - 52nd Street",
		ans3: "The Doobie Brothers - Minute By Minute",
		ans4: "Kenny Rogers - The Gambler",
		correctAn: 2,
		image: ""
};
var eighty4 = {
		question: "Who won the Grammy for Best Rock Vocal Group in 1980?",
		ans1: "The Blues Brothers - Briefcase Full of Blues",
		ans2: "Styx - Cornerstone",
		ans3: "The Eagles - Heartache Tonight",
		ans4: "Dire Straits - Sultans Of Swing",
		correctAn: 3,
		image: ""
};
var eighty5 = {
		question: "In 1986, which movie won the Grammy for Best Album or Original Score?",
		ans1: "St. Elmo's Fire",
		ans2: "Back to the Future",
		ans3: "Witness",
		ans4: "Beverly Hills Cop",
		correctAn: 4,
		image: ""
};
var eighty6 = {
		question: "In 1986, who won the Grammy for Best Pop Instrumental Performance?",
		ans1: "Jan Hammer - Miami Vice Theme",
		ans2: "Harold Faitermeyer - Axel F",
		ans3: "David Foster - Love Theme from St. Elmo's Fire",
		ans4: "Spyro Gyra - Shake Down",
		correctAn: 1,
		image: ""
};
var eighty7 = {
		question: "Who won the 1986 Grammy for Song of the year?",
		ans1: "Mark Koopfler, Sting - Money for Nothing",
		ans2: "Don Henley, Mike Campbell - The Boys of Summer",
		ans3: "Michael Jackson, Lionel Richie - We Are the World",
		ans4: "Mick Jones - I Want to Know What Love Is",
		correctAn: 3,
		image: ""
};
var eighty8 = {
		question: "Who won the 1982 Grammy for Best Rock Vocal Group?",
		ans1: "Foreigner",
		ans2: "The Police",
		ans3: "REO Speedwagon",
		ans4: "Stevie Nicks with Tom Petty and the Heartbreakers",
		correctAn: 2,
		image: ""
};
var eighty9 = {
		question: "In 1982, who won the Grammy for Best Pop Vocal Group?",
		ans1: "Diana Ross, Lionel Richie - Endless Love",
		ans2: "Steely Dan - Gaucho Lyrics",
		ans3: "Daryl Hall, John Oates - Private Eyes",
		ans4: "Pointer Sisters - Slow Hand",
		correctAn: 1,
		image: ""
};
var eighty10 = {
		question: "In 1985, which movie won the Best Album Or Original Score Written For A Motion Picture Grammy?",
		ans1: "Against All Odds",
		ans2: "Purple Rain",
		ans3: "Ghostbusters",
		ans4: "Footloose",
		correctAn: 2,
		image: ""
};
var eighty11 = {
		question: "Who won the 1985 Best New Artist Grammy?",
		ans1: "Frankie Goes To Hollywood",
		ans2: "The Judds",
		ans3: "Cyndi Lauper",
		ans4: "Corey Hart",
		correctAn: 3,
		image: ""
};
var eighty12 = {
		question: "Who won the 1988 Album of the Year Grammy?",
		ans1: "Whitney Houston - Whitney",
		ans2: "Michael Jackson - Bad",
		ans3: "Prince - Sing O' the Times",
		ans4: "U2 - The Joshua Tree",
		correctAn: 4,
		image: ""
};
var eighty13 = {
		question: "Who won the Best Rock Vocal Performance in 1988?",
		ans1: "Tina Turner - Better Be Good To Me",
		ans2: "Bob Seger - Shakedown",
		ans3: "Joe Cocker - Unchain My Heart",
		ans4: "Bruce Springsteen - Tunnel Of Love",
		correctAn: 4,
		image: ""
};
var eighty14 = {
		question: "Who won the 1981 Album of the Year Grammy?",
		ans1: "Billy Joel - Glass Houses",
		ans2: "Frank Sinatra - Trilogy: Past, Present, Future",
		ans3: "Christopher Cross - Christopher Cross",
		ans4: "Pink Floyd - The Wall",
		correctAn: 3,
		image: ""
};
var eighty15 = {
		question: "In 1981, the Grammy for Best Pop Female Vocalist was won by:",
		ans1: "Olivia Newton-John - Magic",
		ans2: "Bette Midler - The Rose",
		ans3: "Donna Summer - On The Radio",
		ans4: "Barbra Streisand - Woman in Love",
		correctAn: 2,
		image: ""
};
var eighty16 = {
		question: "The 1983 Grammy for Best Rock Male Vocalist was:",
		ans1: "John Cougar - Hurts So Good",
		ans2: "Don Henley - Dirty Laundry",
		ans3: "Rod Stewart - Tonight I'm Yours",
		ans4: "Peter Gabriel - Shock The Monkey",
		correctAn: 1,
		image: ""
};
var eighty17 = {
		question: "The 1983 Grammy winner for Record of the Year winner was:",
		ans1: "Paul McCartney, Stevie Wonder - Ebony and Ivory",
		ans2: "Toto - Rosanna",
		ans3: "Willie Nelson - Always On My Mind",
		ans4: "Joe Jackson - Steppin' Out",
		correctAn: 2,
		image: ""
};
var eighty18 = {
		question: "The 1982 Grammy winner for Best New Artist was:",
		ans1: "The Go-Go's",
		ans2: "Luther Vandross",
		ans3: "Sheena Easton",
		ans4: "Adam And The Ants",
		correctAn: 3,
		image: ""
};
var eighty19 = {
		question: "The 1982 winner for the Best Rock Male Vocalist Grammy was:",
		ans1: "Rick James - Superfreak",
		ans2: "Bruce Springsteen - The River",
		ans3: "Rod Stewart - Young Turks",
		ans4: "Rick Springfield - Jesse's Girl",
		correctAn: 4,
		image: ""
};
var eighty20 = {
		question: "The Record of the Year Grammy winner for 1987 was:",
		ans1: "Peter Gabriel - Sledgehammer",
		ans2: "Steve Winwood - Higher Love",
		ans3: "Robert Palmer - Addicted To Love",
		ans4: "Whitney Houston - Greatest Love Of All",
		correctAn: 2,
		image: ""
};
var eighty21 = {
		question: "In 1987, the Song of the Year Grammy winner was:",
		ans1: "Paul Simon - Graceland",
		ans2: "Robert Palmer - Addicted To Love",
		ans3: "Steve Winwood, Will Jennings - Higher Love",
		ans4: "Burt Bacharach, Carole Bayer Sager - That's What Friends Are For",
		correctAn: 4,
		image: ""
};
var CAnswerArr = [eighty1, eighty2, eighty3, eighty4, eighty5, eighty6, eighty7, eighty8, eighty9, eighty10, eighty11, eighty12, eighty13, eighty14, eighty15, eighty16, eighty17, eighty18, eighty19, eighty20, eighty21];
//var ansArray = [ans1, ans2, ans3, ans4];
var qindex = -1;
var currentQ = -1;
var qtimeLimit = 15000;
var qanswerTime = 4000;
var corrAnswer = 0;
var playerA = 0;
var isRight = false;
var Z = 0; // current question number
var cQuestion = [];
var corrAnswerArr = [];
var numArray = [];
var wins = 0;
var losses = 0;
var correctAnsNum = 0;
var inncorrectAns = 0;
var percentR = 0;
var endsaying = "";
var qplayed = -1;
var showAnswer;


function toggleonQ () { //turn on questions
	$("#question").css("display", "table");
	console.log("display on");}

function toggleonA () { //turn on answers
	$("#answer").css("display", "table");}

function toggleoffQ () {
	$("#question").css("display", "none");}

function toggleoffA () {
	$("#answer").css("display", "none");}

function toggleoffQandA () {
	$("#question").css("display", "none");
	$("#answer").css("display", "none");}

function toggleonans1only() {
	toggleonA();
	$("#ans1").css("display", "table");
	$("#ans2").css("display", "none");
	$("#ans3").css("display", "none");
	$("#ans4").css("display", "none");
}
function toggleonans2only () {
	toggleonA();
	$("#ans1").css("display", "none");
	$("#ans2").css("display", "table");
	$("#ans3").css("display", "none");
	$("#ans4").css("display", "none");
}
function toggleonans3only () {
	toggleonA();
	$("#ans1").css("display", "none");
	$("#ans2").css("display", "none");
	$("#ans3").css("display", "table");
	$("#ans4").css("display", "none");
}
function toggleonans4only () {
	toggleonA();
	$("#ans1").css("display", "none");
	$("#ans2").css("display", "none");
	$("#ans3").css("display", "none");
	$("#ans4").css("display", "table");
}
function toggleonansreset () {
	toggleoffA();
	$("#ans1").css("display", "table");
	$("#ans1").html("");
	$("#ans2").css("display", "table");
	$("#ans2").html("");
	$("#ans3").css("display", "table");
	$("#ans3").html("");
	$("#ans4").css("display", "table");
	$("#ans4").html("");
}

function initialize () {
	qindex = -1;
	currentQ = -1;
	corrAnswer = 0;
	qtimeLimit = 15000;
	qanswerTime = 4000;
	numArray = [];
	cQuestion = [];
	correctAnsNum = 0;
	inncorrectAns = 0;
	percentR = 0;
	endsaying = "";
	qplayed = -1;
	toggleonQ();
	toggleoffA();
	console.log("initialize");
}
function settimeInterval (item) {

}
function displayTimer () {

}

function checkAnswer (answ) {
	toggleoffA();
 	if (answ === corrAnswer) {
 		$("#question").html("<h2>CORRECT!</h2><br>");
 		correctAnsNum++;
	}	
	else { 
		$("#question").html("<h2>Sorry that is Incorrect.<br>The Correct Answer is:</h2>");
		inncorrectAns++;
	}

	switch (corrAnswer) {
 			case 1:
 				toggleonans1only();
 				$("#ans1").css("display", "table");
 				break;
 			case 2:
 				toggleonans2only();
 				$("#ans2").css("display", "table");
 				break;
 			case 3:
 				toggleonans3only();
 				$("#ans1").css("display", "table");
 				break;
 			case 4:
 				toggleonans4only();
 				$("#ans1").css("display", "table");
 				break;
 		}
 	toggleonansreset();
 	setTimeout (displayQuestion(), 4000);
}

function setupDisplay () {
	
	console.log("buttons set");
}

function directions() {
	toggleoffA();
	$("#question").html("<h2>1980's Grammy winner trivia</h2><span id='dir'>You have 20 seconds<br>to answer each question.<br>Click HERE to begin.</span><br><h3>GOOD LUCK !<h3>");
}

function pickQuestions() {
	console.log("pick question");
	var i = 0;
	do {
		var r = Math.floor(Math.random() * 100);

		if (r >= 0 && r <=20 && numArray.indexOf(r) === -1) {
			numArray.push(r);
			console.log(numArray);
			i++;	
		}
	}
	while (i < 8);
	console.log("first Question is: " + CAnswerArr[numArray[(qplayed+1)]].question + " qplayed: " + (qplayed+1));

}

function displayQuestion () {
	if (qplayed < 7){
		toggleonA();
		qplayed++; //need to update before picking question
		console.log("display Question Function, qplayed = " + qplayed);
		currentQ = CAnswerArr[numArray[qplayed]].question;
		console.log("Made it to display Question " + currentQ);
		$("#question").html(currentQ);
		corrAnswer = CAnswerArr[numArray[qplayed]].correctAn;
		console.log("correct answer number is " + corrAnswer);
		$("#ans1").html(CAnswerArr[numArray[qplayed]].ans1);
		$("#ans2").html(CAnswerArr[numArray[qplayed]].ans2);
		$("#ans3").html(CAnswerArr[numArray[qplayed]].ans3);
		$("#ans4").html(CAnswerArr[numArray[qplayed]].ans4);
	}
	else { 
		toggleoffA();
		rungameOver();}

}

function rungameOver () {
	toggleoffA();
	toggleonans1only();
	$("#reset").css("display", "table");	
	$("#question").html("<h2>GAME OVER</h2><span id='dir'>Click Reset to play again.</span>");
		percentR = Math.round(correctAnsNum / 8 * 100);
		if (percentR > 85) {
				endsaying = "FABULOUS!<br>You know your 80's trivia!";
				wins++;}
			else if (percentR > 61)	{
				endsaying = "Not bad...<br>Were you alive in the 80's?";
				wins++;}
			else { 
				endsaying = "Better Luck Next Time!";
				losses++;}
	$("#ans1").html(('Wins: ') + wins + (' - Losses: ') + losses + ('<br>') + correctAnsNum + (' questions correct out of 8.<br><h3>You got ') + percentR + ('% right.<br>') + endsaying);
	
	$("#reset").on("click", function() {

		$("#reset").css("display", "none");
		$("#reset").off("click");
		toggleonansreset();
		toggleoffA();
		resetGame ();
	});
}
function resetGame() {
	initialize();
	pickQuestions();
	settimeInterval();
	console.log("time interval");
	displayTimer();
	console.log("display timer");
	displayQuestion();
}

function startcheckAnswer () {
	showAnswer = setInterval(checkAnswer, 4000);
	console.log("interval set");
}
function runGame() {

			$("#ans1").on("click", function() {
				playerA = 1;
				console.log(playerA + " is the answer");
				checkAnswer(playerA);
			});
			$("#ans2").on("click", function () {
				playerA = 2;
				console.log(playerA + " is the answer");
				checkAnswer(playerA);
			});
			$("#ans3").on("click", function () {
				playerA = 3;
				console.log(playerA + " is the answer");
				checkAnswer(playerA);
			});
			$("#ans4").on("click", function () {
				playerA = 4;
				console.log(playerA + " is the answer");
				checkAnswer(playerA);
			});

	//rungameOver ();
}



$(document).ready(function () {
	resetGame();
	//setupDisplay();
	console.log("ready");
	directions();

	$("#dir").click(function () {
		$("#dir").click(function(event){
    	event.stopPropagation();
		});
		runGame();
		setTimeout (displayQuestion(), 4000);
	});

});


