/* Trivia Game*/

//Global Variables
// questions for trivia quiz
var eighty1 = { //all 'eighty#' obj are set up the same
		question: "Which song won the Grammy for record of the year in 1989?", //question to be displayed
		ans1: "Wind Beneath My Wings", // answer 1
		ans2: "Don't Worry, Be Happy", //answer 2
		ans3: "Giving You The Best That I Got", //answer 3
		ans4: "Fast Car", //answer 4
		correctAn: 1, //correct answer is 1
		image: "https://media.giphy.com/media/Z6aNFBevc1e8/giphy.gif" //image to display at question end
};
var eighty2 = {
		question: "In 1989, who win the Grammy for Best Comedy Recording?",
		ans1: "Whoopi Goldberg - Fontaine: Why Am I Straight?",
		ans2: "Jonathan Winters - Jonathan Winters Finally Captured",
		ans3: "George Carlin - What Am I Doing in New Jersey?",
		ans4: "Robin Williams - Good Morning, Vietnam",
		correctAn: 4,
		image: "http://media4.giphy.com/media/BYG86QlGgaHvy/200.gif"
};
var eighty3 = {
		question: "Who won the Grammy for Album of the Year in 1980?",
		ans1: "Donna Summer - Bad Girls Lyrics",
		ans2: "Billy Joel - 52nd Street",
		ans3: "The Doobie Brothers - Minute By Minute",
		ans4: "Kenny Rogers - The Gambler",
		correctAn: 2,
		image: "http://media3.giphy.com/media/kwedy7YBOR9TO/200.gif"
};
var eighty4 = {
		question: "Who won the Grammy for Best Rock Vocal Group in 1980?",
		ans1: "The Blues Brothers - Briefcase Full of Blues",
		ans2: "Styx - Cornerstone",
		ans3: "The Eagles - Heartache Tonight",
		ans4: "Dire Straits - Sultans Of Swing",
		correctAn: 3,
		image: " http://media2.giphy.com/media/G931aAI3D1yLe/200.gif"
};
var eighty5 = {
		question: "In 1986, which movie won the Grammy for Best Album or Original Score?",
		ans1: "St. Elmo's Fire",
		ans2: "Back to the Future",
		ans3: "Witness",
		ans4: "Beverly Hills Cop",
		correctAn: 4,
		image: " http://media0.giphy.com/media/3oEjI5VtIhHvK37WYo/200.gif"
};
var eighty6 = {
		question: "In 1986, who won the Grammy for Best Pop Instrumental Performance?",
		ans1: "Jan Hammer - Miami Vice Theme",
		ans2: "Harold Faitermeyer - Axel F",
		ans3: "David Foster - Love Theme from St. Elmo's Fire",
		ans4: "Spyro Gyra - Shake Down",
		correctAn: 1,
		image: "http://media0.giphy.com/media/bK1B852Fwhk1q/200.gif"
};
var eighty7 = {
		question: "Who won the 1986 Grammy for Song of the year?",
		ans1: "Mark Koopfler, Sting - Money for Nothing",
		ans2: "Don Henley, Mike Campbell - The Boys of Summer",
		ans3: "Michael Jackson, Lionel Richie - We Are the World",
		ans4: "Mick Jones - I Want to Know What Love Is",
		correctAn: 3,
		image: "https://media1.giphy.com/media/SzXbYeimuETjG/200.gif"
};
var eighty8 = {
		question: "Who won the 1982 Grammy for Best Rock Vocal Group?",
		ans1: "Foreigner",
		ans2: "The Police",
		ans3: "REO Speedwagon",
		ans4: "Stevie Nicks with Tom Petty and the Heartbreakers",
		correctAn: 2,
		image: "http://media2.giphy.com/media/VnotNtf05tubS/200.gif"
};
var eighty9 = {
		question: "In 1982, who won the Grammy for Best Pop Vocal Group?",
		ans1: "Diana Ross, Lionel Richie - Endless Love",
		ans2: "Steely Dan - Gaucho Lyrics",
		ans3: "Daryl Hall, John Oates - Private Eyes",
		ans4: "Pointer Sisters - Slow Hand",
		correctAn: 1,
		image: "http://media4.giphy.com/media/7KHwGg1ETDf9u/200.gif"
};
var eighty10 = {
		question: "In 1985, which movie won the Best Album Or Original Score Written For A Motion Picture Grammy?",
		ans1: "Against All Odds",
		ans2: "Purple Rain",
		ans3: "Ghostbusters",
		ans4: "Footloose",
		correctAn: 2,
		image: "https://media1.giphy.com/media/3o6ozytWsop0roTP5m/200.gif"
};
var eighty11 = {
		question: "Who won the 1985 Best New Artist Grammy?",
		ans1: "Frankie Goes To Hollywood",
		ans2: "The Judds",
		ans3: "Cyndi Lauper",
		ans4: "Corey Hart",
		correctAn: 3,
		image: "http://media1.giphy.com/media/g4rMY2BEDF42c/200.gif"
};
var eighty12 = {
		question: "Who won the 1988 Album of the Year Grammy?",
		ans1: "Whitney Houston - Whitney",
		ans2: "Michael Jackson - Bad",
		ans3: "Prince - Sing O' the Times",
		ans4: "U2 - The Joshua Tree",
		correctAn: 4,
		image: "https://media3.giphy.com/media/5lfCgCmkOCvra/200.gif"
};
var eighty13 = {
		question: "Who won the Best Rock Vocal Performance in 1988?",
		ans1: "Tina Turner - Better Be Good To Me",
		ans2: "Bob Seger - Shakedown",
		ans3: "Joe Cocker - Unchain My Heart",
		ans4: "Bruce Springsteen - Tunnel Of Love",
		correctAn: 4,
		image: "http://media3.giphy.com/media/l41lPvHniDcGbVSRG/200.gif"
};
var eighty14 = {
		question: "Who won the 1981 Album of the Year Grammy?",
		ans1: "Billy Joel - Glass Houses",
		ans2: "Frank Sinatra - Trilogy: Past, Present, Future",
		ans3: "Christopher Cross - Christopher Cross",
		ans4: "Pink Floyd - The Wall",
		correctAn: 3,
		image: "http://media4.giphy.com/media/mBSFefesp3o2I/200.gif"
};
var eighty15 = {
		question: "In 1981, the Grammy for Best Pop Female Vocalist was won by:",
		ans1: "Olivia Newton-John - Magic",
		ans2: "Bette Midler - The Rose",
		ans3: "Donna Summer - On The Radio",
		ans4: "Barbra Streisand - Woman in Love",
		correctAn: 2,
		image: "http://media2.giphy.com/media/WSRfKHhbKSxgc/200.gif"
};
var eighty16 = {
		question: "The 1983 Grammy for Best Rock Male Vocalist was:",
		ans1: "John Cougar - Hurts So Good",
		ans2: "Don Henley - Dirty Laundry",
		ans3: "Rod Stewart - Tonight I'm Yours",
		ans4: "Peter Gabriel - Shock The Monkey",
		correctAn: 1,
		image: "http://media4.giphy.com/media/l0MYv9yviadoEu4BG/200.gif"
};
var eighty17 = {
		question: "The 1983 Grammy winner for Record of the Year winner was:",
		ans1: "Paul McCartney, Stevie Wonder - Ebony and Ivory",
		ans2: "Toto - Rosanna",
		ans3: "Willie Nelson - Always On My Mind",
		ans4: "Joe Jackson - Steppin' Out",
		correctAn: 2,
		image: "http://media2.giphy.com/media/RR0LUyrX9DP68/200.gif"
};
var eighty18 = {
		question: "The 1982 Grammy winner for Best New Artist was:",
		ans1: "The Go-Go's",
		ans2: "Luther Vandross",
		ans3: "Sheena Easton",
		ans4: "Adam And The Ants",
		correctAn: 3,
		image: "http://media2.giphy.com/media/J8bVTWgCYWXIY/200.gif"
};
var eighty19 = {
		question: "The 1982 winner for the Best Rock Male Vocalist Grammy was:",
		ans1: "Rick James - Superfreak",
		ans2: "Bruce Springsteen - The River",
		ans3: "Rod Stewart - Young Turks",
		ans4: "Rick Springfield - Jesse's Girl",
		correctAn: 4,
		image: "http://media3.giphy.com/media/Zq0v0PnDKkl4k/200.gif"
};
var eighty20 = {
		question: "The Record of the Year Grammy winner for 1987 was:",
		ans1: "Peter Gabriel - Sledgehammer",
		ans2: "Steve Winwood - Higher Love",
		ans3: "Robert Palmer - Addicted To Love",
		ans4: "Whitney Houston - Greatest Love Of All",
		correctAn: 2,
		image: "http://media3.giphy.com/media/KxCbwjYF3GB4Q/200.gif"
};
var eighty21 = {
		question: "In 1987, the Song of the Year Grammy winner was:",
		ans1: "Paul Simon - Graceland",
		ans2: "Robert Palmer - Addicted To Love",
		ans3: "Steve Winwood, Will Jennings - Higher Love",
		ans4: "Burt Bacharach, Carole Bayer Sager - That's What Friends Are For",
		correctAn: 4,
		image: "http://media4.giphy.com/media/sfNI4nuJNnPPy/200.gif"
};
var eighty22 = {
		question: "The 1980 Record of the Year Grammy winner was:",
		ans1: "Barbra Streisand, Neil Diamond - You Don't Bring Me Flowers",
		ans2: "Gloria Gaynor - I Will Survive",
		ans3: "The Doobie Brothers - What A Fool Believes",
		ans4: "Earth Wind & Fire - After The Love Has Gone",
		correctAn: 3,
		image: "http://media1.giphy.com/media/AeEmjOYfobOwM/200.gif"
};
var eighty23 = {
		question: "The Best New Artist Grammy winner for 1980 was::",
		ans1: "Blues Brothers",
		ans2: "Rickie Lee Jones",
		ans3: "Dire Straits",
		ans4: "The Knack",
		correctAn: 2,
		image: "http://media4.giphy.com/media/Hx7HQQyITPD2g/200.gif"
};
var eighty24 = {
		question: "In 1981, the Grammy winner for Best Album Or Original Score Written For A Motion Picture was:",
		ans1: "John Williams - The Empire Strikes Back",
		ans2: "J.D. Souther, Boz Scaggs, David Foster, Jerry Foster, Bill Rice, Brian Collins, Robby Campbell, Joe Walsh, Bob Morrison, Johnny Wilson, Dan Fogelberg, Bob Seger, Wayland Holyfield, Bob House, Wanda Mallette, Patti Ryan - Urban Cowboy",
		ans3: "Paul Simon - One Trick Pony",
		ans4: "Michael Gore, Anthony Evans, Paul McCrane, Dean Pitchford, Lesley Gore, Robert F. Colesberry - Fame",
		correctAn: 1,
		image: "http://media1.giphy.com/media/3o7abIn8H8TTzmQrcc/200.gif"
};
var eighty25 = {
		question: "The 1981 Grammy winner for Best Pop Vocal Group was:",
		ans1: "Barbra Streisand, Barry Gibb - Guilty",
		ans2: "Bob Seger and the Silver Bullet Band - Against the Wind",
		ans3: "Pointer Sisters - He's So Shy",
		ans4: "Kenny Rogers, Kim Carnes - Don't Fall in Love with a Dreamer",
		correctAn: 1,
		image: "http://media1.giphy.com/media/V5b67XPRI8meA/200.gif"
};
var eighty26 = {
		question: "In 1982, the Grammy winner for Best Rock Female Vocalist was:",
		ans1: "Donna Summer - Cold Love",
		ans2: "Pat Benatar - Fire And Ice",
		ans3: "Stevie Nicks - Edge Of Seventeen",
		ans4: "Yoko Ono - Walking on Thin Ice",
		correctAn: 2,
		image: "http://media0.giphy.com/media/iFgXeLNjqXvuo/200.gif"
};
var eighty27 = {
		question: "The Grammy winner for Song Of The Year in 1982 was:",
		ans1: "Dolly Parton - 9 To 5",
		ans2: "Bill Withers, William Salter, Ralph MacDonald - Just the Two of Us",
		ans3: "Donna Weiss, Jackie DeShannon - Bette Davis Eyes",
		ans4: "Peter Allen, Burt Bacharach, Carole Bayer Sager, Christopher Cross - Arthur's Theme",
		correctAn: 3,
		image: "http://media3.giphy.com/media/l0MYQTU4sj65O63Ys/200.gif"
};
var eighty28 = {
		question: "The Best Comedy Recording Grammy for 1983 went to:",
		ans1: "Steve Martin - The Steve Martin Brothers",
		ans2: "George Carlin - A Place for My Stuff",
		ans3: "Eddie Murphy - Eddie Murphy",
		ans4: "Richard Pryor - Live on the Sunset Strip",
		correctAn: 4,
		image: "http://media4.giphy.com/media/8E0BKkif6fxJe/200.gif"
};
var eighty29 = {
		question: "The Best Rock Female Vocalist Grammy for 1983 went to:",
		ans1: "Pat Benatar - Shadows Of The Night Lyrics",
		ans2: "Linda Ronstadt - Get Closer",
		ans3: "Bonnie Raitt - Green Light",
		ans4: "Donna Summer - Protection",
		correctAn: 1,
		image: "http://media1.giphy.com/media/qfaOraM9d7gCk/200.gif"
};
var eighty30 = {
		question: "The Best Album Of The Year Grammy for 1984 went to:",
		ans1: "Billy Joel - An Innocent Man",
		ans2: "Michael Jackson - Thriller",
		ans3: "David Bowie - Let's Dance",
		ans4: "The Police – Sychronicity",
		correctAn: 2,
		image: "http://media2.giphy.com/media/4pgUXUloMxiLu/200.gif"
};
var eighty31 = {
		question: "The Grammy for Best Album Or Original Score Written For A Motion Picture winner, in 1984, was:",
		ans1: "Dave Grusin - Tootsie",
		ans2: "John Williams - Star Wars: Return of the Jedi",
		ans3: "Giorgio Moroder, Keith Forsey, Irene Cara, Shandi Sinnamon, Ronald Magness, Douglas Cotler, Richard Gilbert, Michael Boddicker, Jerry Hey, Phil Ramone, Michael Sembello, Kim Carnes, Duane Hitchings, Craig Krampf, Dennis Matkosky - Flashdance",
		ans4: "Frank Stallone, Bruce Stephen Foster, R. Freeland, V. DiCola, T. Marolda, Joe Bean Esposito, Randy Bishop, Tommy Faragher, Barry Gibb, Maurice Gibb, Robin Gibb - Stayin' Alive",
		correctAn: 3,
		image: "http://media1.giphy.com/media/pqBlJrmobXx2E/200.gif"
};
var eighty32 = {
		question: "The Song of the Year Grammy for 1984 went to:",
		ans1: "Michael Jackson - Beat It",
		ans2: "Michael Jackson - Billie Jean",
		ans3: "Lionel Richie - All Night Long",
		ans4: "Sting - Every Breath You Take",
		correctAn: 4,
		image: "http://media4.giphy.com/media/26FL2kSt4v5bjgHKw/200.gif"
};
var eighty33 = {
		question: "The Record of the Year Grammy in 1984 went to:",
		ans1: "Irene Cara - Flashdance - What A Feeling",
		ans2: "The Police - Every Breath You Take",
		ans3: "Lionel Richie - All Night Long",
		ans4: "Michael Jackson - Beat It",
		correctAn: 4,
		image: "http://media4.giphy.com/media/yFL6fCUq6tUVq/200.gif"
};
var eighty34 = {
		question: "In 1985, the Grammy for Song of the Year went to:",
		ans1: "Cyndi Lauper, Rob Hyman - Time After Time",
		ans2: "Lionel Richie - Hello",
		ans3: "Graham Lyle, Terry Britten - What's Love Got to Do With It?",
		ans4: "Stevie Wonder - I Just Called To Say I Love You",
		correctAn: 3,
		image: "http://media1.giphy.com/media/9KNy8QtqQqdqg/200.gif"
};
var eighty35 = {
		question: "In 1985, the Best Rock Vocal Group Grammy winner was:",
		ans1: "Yes - 90125",
		ans2: "Prince and the Revolution - Purple Rain",
		ans3: "Genesis - Genesis",
		ans4: "The Cars - Heartbreak City",
		correctAn: 2,
		image: "http://media4.giphy.com/media/HI6lQ93tjxQCQ/200.gif"
};
var eighty36 = {
		question: "The 1986 Album of the Year Grammy went to:",
		ans1: "Phil Collins - No Jacket Required",
		ans2: "Whitney Houston - Whitney Houston",
		ans3: "Sting - The Dream Of The Blue Turtles",
		ans4: "Dire Straits - Brothers In Arms",
		correctAn: 1,
		image: "http://media2.giphy.com/media/N6Rhk8gMl4Dlu/200.gif"
};
var eighty37 = {
		question: "The Best Comedy Recording Grammy for 1987 went to:",
		ans1: "George Carlin - Playin' with Your Head",
		ans2: "Bill Cosby - Those of You with or without Children, You'll Understand",
		ans3: "Rodney Dangerfield (Back to School film soundtrack) - Twist and Shout",
		ans4: "Steven Wright - I Have a Pony",
		correctAn: 2,
		image: "http://media0.giphy.com/media/Ay4RnxQwWu9ry/200.gif"
};
var eighty38 = {
		question: "In 1987, the Best New Artist Grammy went to:",
		ans1: "Glass Tiger",
		ans2: "Simply Red",
		ans3: "Bruce Hornsby and The Range",
		ans4: "Timbuk 3",
		correctAn: 3,
		image: "https://media.giphy.com/media/bC2GvTPzPX0Eo/giphy.gif"
};
var eighty39 = {
		question: "In 1988, the Grammy for Best Album Or Original Instrumental Background Score Written For A Motion Picture went to:",
		ans1: "Henry Mancini - The Glass Menagerie",
		ans2: "James Horner - An American Tail",
		ans3: "Mark Knopfler - The Princess Bride",
		ans4: "Ennio Morricone - The Untouchables",
		correctAn: 4,
		image: "http://media0.giphy.com/media/FumKQRJ0VZhug/200.gif"
};
var eighty40 = {
		question: "In 1988, The Song of the Year Grammy went to:",
		ans1: "Richie Valens - La Bamba",
		ans2: "U2 - I Still Haven't Found What I'm Looking For",
		ans3: "James Horner, Barry Mann - Somewhere Out There",
		ans4: "Michael Masser, Will Jennings - Didn't We Almost Have It All",
		correctAn: 3,
		image: "http://media2.giphy.com/media/P0VeD9rG7D5zW/200.gif"
};
var eighty41 = {
		question: "In 1989, The Best Album of the Year Grammy went to:",
		ans1: "Sting - ...Nothing Like the Sun",
		ans2: "George Michael - Faith",
		ans3: "Tracy Chapman - Tracy Chapman",
		ans4: "Bobby McFerrin - Simple Pleasures",
		correctAn: 2,
		image: "http://media4.giphy.com/media/KfQRyOxYjTQsM/200.gif"
};
// array of obj for random pick function
var CAnswerArr = [eighty1, eighty2, eighty3, eighty4, eighty5, eighty6, eighty7, eighty8, eighty9, eighty10, eighty11, eighty12, eighty13, eighty14, eighty15, eighty16, eighty17, eighty18, eighty19, eighty20, eighty21, eighty22, eighty23, eighty24, eighty25, eighty26, eighty27, eighty28, eighty29, eighty30, eighty31, eighty32, eighty33, eighty34, eighty35, eighty36, eighty37, eighty38, eighty39, eighty40, eighty41];
var gamestart = false; // wait for user to read directions before start
var currentQ = ""; //question to be displayed pulled from current obj
var corrAnswer = 0; // number of correct answers each game reset each game
var playerA = 0; // player answer 1 - 4 depending on which buton they click  if timer hits 0 playerA is 0
var numArray = []; // keeps an array of the index numbers of the questions that will be played in the game assigned randomly and refreshed each game
var wins = 0; // win counter is increased when a player answers more than 50% of questions correct
var losses = 0; // loss counter is increased when a player guesses 50% or less of the incorrect answers
var correctAnsNum = 0; //holds the value of the correct answer from the obj
var inncorrectAns = 0; //counts the number of incorrect answers guessed each game
var percentR = 0; //holds the percentage of the correct answers at games end
var endsaying = ""; // holds the end saying to display depending on the final result
var qplayed = -1; // current question number
var countdown = false; // countdown time is not running when set to false
var	pause = 6; //pause length in seconds to display correct answer
var	pausetimer; //sets the time interval for the pause timer for answer display
var countup = false; // pause timer is not running when set to false
var count=22; // countdown timer set to 22 seconds
var counter; //clock timing function
var winaudio = "assets/audio/applause"; // file for winning audio effect
var loseaudio = "assets/audio/sad-trombone"; // file for losing audio effect

// plays sound effects during game
function audioPlay(filename) {
 		document.getElementById("myaudio").innerHTML='<audio autoplay="autoplay"><source src="' + filename + '.mp3" type="audio/mpeg"><embed hidden="true" autostart="true" loop="false" volume="0.4" src="' + filename +'.mp3"></audio>';

 }
// the functions below are shortcuts to turn on and off the various displays

function toggleonA () { //turn on answers
	$("#answer").css("display", "table");}

function toggleoffA () { // turn off answers
	$("#answer").css("display", "none");}

function toggleonansreset () { //reset answer display on with no data
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
function toggleonCorrect () { //set up correct answer display
	toggleonA();
	$("#correct").css("display", "inline");
	$("#ans1").css("display", "none");
	$("#ans2").css("display", "none");
	$("#ans3").css("display", "none");
	$("#ans4").css("display", "none");
}
//set up variables at beginning of each game
function initialize () {
	currentQ = "";
	corrAnswer = 0;
	numArray = [];
	correctAnsNum = 0;
	inncorrectAns = 0;
	percentR = 0;
	endsaying = "";
	qplayed = -1;
	$("#correct").css("display", "none");
	toggleoffA();
	//console.log("initialize");

}
// pause game to display answer screen  answerpause checks to see if the timer is running
function answerpause() {
	if (countup === false) {
		pause = 6;
    	pausetimer = setInterval(timed, 1000); //1000 will  run it every 1 second
    	countup = true;
	}
}
// timed runs the answerpause timer
function timed() {
  		pause--;
 	 if (pause <= 0 && gamestart === true) {
     	clearInterval(pausetimer);
     	countup = false;
     	count=22;
 		counters();
 		displayQuestion();
     	return;
  	}
}
// set up game timer. this function checks to see if the timer is running
function counters() {
	if (countdown === false) {
    	counter = setInterval(timer, 1000); //1000 will  run it every 1 second
    	countdown = true;
    	count = 21;
	}
}
// this function runs the game clock and runs the animation for the clock as well as stops the game when time expires
function timer() {
  	count--;
 	if (count <= 0 && gamestart === true) {
     	clearInterval(counter);
     	countdown = false;
     	$("#time").css("display", "none");
     	playerA = 0;
     	$("#time").css("animation-duration", "3s");
     	checkAnswer(playerA);
     	return;
  	}
  	if (count <= 11 && count >= 6) {
			$("#time").css("animation-duration", "1.0s");}
	if (count < 6) {
			$("#time").css("animation-duration", "0.3s");}
  $("#time").html(count);
}
// this function checks if the answer is correct and sets up the correct answer display
function checkAnswer (answ) {
	$("#time").css("display", "none");
	clearInterval(counter);
    countdown = false;
    count = 22;
    answerpause();
	toggleoffA();
	$("#pict").css("display", "table");
	$("#pict").html('<img src=' + CAnswerArr[numArray[qplayed]].image + '>'); //displays a giffy
 	if (answ === corrAnswer) {
		audioPlay(winaudio); //plays winning sound effect
 		$("#question").html("<h2 id='green'>CORRECT!</h2>");
 		correctAnsNum++; // updates correct number of answers
	}	
	else { 
		audioPlay(loseaudio); // plays losing audio effect
		$("#question").html("<h2>Sorry that is Incorrect.</h2><h2 id='green'>The Correct Answer is:</h2>");
		inncorrectAns++; // updates incorrect answers
	}// the function below turns on the correct answer div and displays the correct answer for the player
	toggleonCorrect();
	switch (corrAnswer) {
 			case 1:
 				$("#correct").html(CAnswerArr[numArray[qplayed]].ans1);
 				break;
 			case 2:
 				$("#correct").html(CAnswerArr[numArray[qplayed]].ans2);
 				break;
 			case 3:
 				$("#correct").html(CAnswerArr[numArray[qplayed]].ans3);
 				break;
 			case 4:
 				$("#correct").html(CAnswerArr[numArray[qplayed]].ans4);
 				break;
 		}
 	//console.log("CheckAnswer");
 	
}
// print directions on screen at the beginning of the game
function directions() {
	toggleoffA();
	$("#question").html("<h2>1980's Grammy winner trivia</h2><span id='dir'>You have 20 seconds<br>to answer each of the<br>8 questions.<br>Click HERE to begin.</span><br><h3>GOOD LUCK !<h3>");
}
//randomly pick the questions from the 41 available runs once each game
function pickQuestions() {
	//console.log("pick question");
	var i = 0;
	do {
		var r = Math.floor(Math.random() * 100);

		if (r >= 0 && r <=40 && numArray.indexOf(r) === -1) {
			numArray.push(r);
			//console.log(numArray);
			i++;	
		}
	}
	while (i < 8);
	//console.log("first Question is: " + CAnswerArr[numArray[(qplayed+1)]].question + " qplayed: " + (qplayed+1));

}
// display the questions and the timer for the player 
function displayQuestion () {
	$("#pict").css("display", "none");
	$("#correct").css("display", "none");
	counters(); //restart countdown timer
	$("#time").css("animation-duration", "3s");
	$("#time").html("20");
	$("#time").css("display", "inline");
	//display 8 questions with this if statement
	if (qplayed < 7){
		toggleonansreset();
		toggleonA(); 
		qplayed++; //need to update before picking question because started at -1
		//console.log("display Question Function, qplayed = " + qplayed);
		currentQ = CAnswerArr[numArray[qplayed]].question; //set current question
		//console.log("Made it to display Question " + currentQ);
		$("#question").html(currentQ); //display current question
		corrAnswer = CAnswerArr[numArray[qplayed]].correctAn; //set correct answer
		//console.log("correct answer number is " + corrAnswer);
		// display answer buttons for player
		$("#ans1").html(CAnswerArr[numArray[qplayed]].ans1);
		$("#ans2").html(CAnswerArr[numArray[qplayed]].ans2);
		$("#ans3").html(CAnswerArr[numArray[qplayed]].ans3);
		$("#ans4").html(CAnswerArr[numArray[qplayed]].ans4);
	}// after the 8th question played end the game
	else { 
		toggleoffA();
		rungameOver();}

}
// run end game function
function rungameOver () {
	clearInterval(counter); // stop the timer
	countdown = false;
	$("#time").css("display", "none"); // turn off timer display
	toggleoffA(); // turn off answer divs
	$("#reset").css("display", "table"); //turn on reset button
	$("#question").html("<h2>GAME OVER</h2><span id='dir'>Click Reset to play again.</span>");
		percentR = Math.round(correctAnsNum / 8 * 100); // find correct answer percentage & set sayings
		if (percentR > 85) {
				endsaying = "FABULOUS!<br>You know your 80's trivia!";
				wins++;}
			else if (percentR > 61)	{
				endsaying = "Not bad...<br>Were you alive in the 80's?";
				wins++;}
			else { 
				endsaying = "Better Luck Next Time!";
				losses++;}
	toggleonCorrect();
	// display end game stats
	$("#correct").html(('Wins: ') + wins + (' - Losses: ') + losses + ('<br>') + correctAnsNum + (' questions correct out of 8.<br><h3>You got ') + percentR + ('% right.<br>') + endsaying);
	// set up on click event for game reset
	$("#reset").on("click", function() {
		$("#reset").css("display", "none");
		$("#reset").off("click");
		toggleonansreset();
		toggleoffA();
		resetGame ();
	});
}
//reset game to play again
function resetGame() {
	count = 22;
	$("#time").css("animation-duration", "3s");
	initialize();
	pickQuestions();
	displayQuestion();
}
// set up on click events for answer divs
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
}
//when loaded run game
$(document).ready(function () {
	//setupDisplay();
	console.log("ready");
	directions();
	runGame();
	$("#time").css("display", "none");

	//when done with directions start game
	$("#dir").click(function () {
		$("#dir").click(function(event){
    	event.stopPropagation();
		});
		gamestart = true;
		console.log("mainprogram");
		resetGame();
	});

}); //end code