// Global Variables
let myScore = 0;
let lives = 3;
let gameTime;

// FUNCTIONS 
threeLives();
pause();
muteSounds();
unMuteSounds();

// Sounds Variables (using these "shorcuts" in the functions)
let bgSound = document.querySelector("#background_sound");
let fireOneSound = document.querySelector("#fire_one_sound");
let fireTwoSound = document.querySelector("#fire_two_sound");
let fireThreeSound = document.querySelector("#fire_three_sound");
let uiSound = document.querySelector("#ui_sound");
let goodSound = document.querySelector("#good_sound");
let badSound = document.querySelector("#bad_sound");
let squirrelSound = document.querySelector("#squirrel_sound");
let owlSound = document.querySelector("#owl_sound");
let loseSound = document.querySelector("#lose_sound");
let winSound = document.querySelector("#win_sound");



// Play Sound Functions

/*

--> Every sound has its function that play play the sound
--> These are used by eventListener in the functions

*/
function playBgSound() {
    bgSound.currentTime = 0;
    bgSound.play();    
}

function playUiSound() {
    uiSound.currentTime = 0;
    uiSound.play();    
}

function playfireOneSound() {
    fireOneSound.currentTime = 0;
    fireOneSound.play();    
}

function playfireTwoSound() {
    fireTwoSound.currentTime = 0;
    fireTwoSound.play();    
}

function playfireThreeSound() {
    fireThreeSound.currentTime = 0;
    fireThreeSound.play();    
}

function playGoodSound() {
    goodSound.currentTime = 0;
    goodSound.play();    
}

function playBadSound() {
    badSound.currentTime = 0;
    badSound.play();    
}

function playSquirrelSound() {
    squirrelSound.currentTime = 0;
    squirrelSound.play();    
}

function playOwlSound() {
    owlSound.currentTime = 0;
    owlSound.play();    
}

function playLoseSound() {
    loseSound.currentTime = 0;
    loseSound.play();    
}

// Pause all Sounds
function pauseAllSounds() {
    bgSound.pause();
    fireOneSound.pause();
    fireTwoSound.pause();
    fireThreeSound.pause();
    // uiSound.pause();
    goodSound.pause();
    badSound.pause();
    squirrelSound.pause();
    owlSound.pause();
}

// Stop Sound Functions (fires and loseSound...)

function stopfireOneSound() {
    fireOneSound.currentTime = 0;
    fireOneSound.pause();    
}

function stopfireTwoSound() {
    fireTwoSound.currentTime = 0;
    fireTwoSound.pause();    
}

function stopfireThreeSound() {
    fireThreeSound.currentTime = 0;
    fireThreeSound.pause();    
}

function stopLoseSound() {
    loseSound.currentTime = 0;
    loseSound.pause();    
}

// Mute all Sounds
function muteSounds() {
    console.log("Mute");
    document.querySelector("#sound_on").addEventListener("click", playUiSound);
    document.querySelector("#sound_on").addEventListener("click", muteAllSounds);
}

function muteAllSounds() {
    console.log("Mute All Sounds");
    document.querySelector("#sound_off").classList.remove("hide");
    document.querySelector("#sound_on").classList.add("hide");
    bgSound.muted = true;
    fireOneSound.muted = true;
    fireTwoSound.muted = true;
    fireThreeSound.muted = true;
    // uiSound.mute = true;
    goodSound.muted = true;
    badSound.muted = true;
    squirrelSound.muted = true;
    owlSound.muted = true;
}

// Unmute all Sounds
function unMuteSounds() {
    console.log("UnMute");
    document.querySelector("#sound_off").addEventListener("click", playUiSound);
    document.querySelector("#sound_off").addEventListener("click", unMuteAllSounds);
}

function unMuteAllSounds() {
    console.log("UnMute All Sounds");
    document.querySelector("#sound_on").classList.remove("hide");
    document.querySelector("#sound_off").classList.add("hide");
    bgSound.muted = false;
    fireOneSound.muted = false;
    fireTwoSound.muted = false;
    fireThreeSound.muted = false;
    // uiSound.mute = false;
    goodSound.muted = false;
    badSound.muted = false;
    squirrelSound.muted = false;
    owlSound.muted = false;
}










// WELCOME 

/* 
--> Welcome page start by "load" addEventListener and calls welcome(); function
--> welcome(); function display all the #welcome page and calls the function start(); or instructions(); with addEventListener click on the buttons
*/

window.addEventListener("load", welcome);

function welcome() {
    console.log("Welcome");
    playBgSound();

    document.querySelector("#welcome").classList.remove("hide");
    document.querySelector("#welcome").classList.add("show");

    document.querySelector("#sprite_welcome").addEventListener("click", playUiSound)
    document.querySelector("#sprite_welcome").addEventListener("click", start);
    document.querySelector("#rules").addEventListener("click", playUiSound);
    document.querySelector("#rules").addEventListener("click", instructions);

}

function instructions() {
    console.log("Rules");
    document.querySelector("#instructions").classList.remove("hide");
    document.querySelector("#instructions").classList.add("show"); 
    document.querySelector("#close").addEventListener("click", playUiSound);
    document.querySelector("#close").addEventListener("click", closeInstructions);
}

function closeInstructions() {
    console.log("Close Rules");
    document.querySelector("#instructions").classList.remove("show");
    document.querySelector("#instructions").classList.add("hide");
    welcome();
}










// START GAME

/*

--> This function starts the timer by calling startTimer();
--> This function play background sound by calling playBgSound();
--> Adds an EventListener to all the objects (containers) to call the functions that will execute the animations when hitting, calls the good and bad sounds
--> Adds a classes with the falling animations, positions and speeds to those objects

*/

function start() {
    console.log("start");
    
    startTimer();
    playBgSound();

    // Dry Objects
    document.querySelector("#container_1").addEventListener("click", stopDry);
    document.querySelector("#container_1").addEventListener("click", playGoodSound);
    document.querySelector("#container_2").addEventListener("click", stopDry);
    document.querySelector("#container_2").addEventListener("click", playGoodSound);
    document.querySelector("#container_3").addEventListener("click", stopDry);
    document.querySelector("#container_3").addEventListener("click", playGoodSound);
    document.querySelector("#container_4").addEventListener("click", stopDry);
    document.querySelector("#container_4").addEventListener("click", playGoodSound);
    document.querySelector("#container_5").addEventListener("click", stopDry);
    document.querySelector("#container_5").addEventListener("click", playGoodSound);
    // Second batch Dry objects
    document.querySelector("#container_11").addEventListener("click", stopDry);
    document.querySelector("#container_11").addEventListener("click", playGoodSound);
    document.querySelector("#container_12").addEventListener("click", stopDry);
    document.querySelector("#container_12").addEventListener("click", playGoodSound);
    document.querySelector("#container_13").addEventListener("click", stopDry);
    document.querySelector("#container_13").addEventListener("click", playGoodSound);
    document.querySelector("#container_14").addEventListener("click", stopDry);
    document.querySelector("#container_14").addEventListener("click", playGoodSound);
    document.querySelector("#container_15").addEventListener("click", stopDry);
    document.querySelector("#container_15").addEventListener("click", playGoodSound);

    // Green Objects
    document.querySelector("#container_6").addEventListener("click", stopGreen);
    document.querySelector("#container_6").addEventListener("click", playBadSound);
    document.querySelector("#container_7").addEventListener("click", stopGreen);
    document.querySelector("#container_7").addEventListener("click", playBadSound);
    document.querySelector("#container_8").addEventListener("click", stopGreen);
    document.querySelector("#container_8").addEventListener("click", playBadSound);
    document.querySelector("#container_9").addEventListener("click", stopGreen);
    document.querySelector("#container_9").addEventListener("click", playBadSound);
    document.querySelector("#container_10").addEventListener("click", stopGreen);
    document.querySelector("#container_10").addEventListener("click", playBadSound);
    // Second batch Green objects
    document.querySelector("#container_16").addEventListener("click", stopGreen);
    document.querySelector("#container_16").addEventListener("click", playBadSound);
    document.querySelector("#container_17").addEventListener("click", stopGreen);
    document.querySelector("#container_17").addEventListener("click", playBadSound);
    document.querySelector("#container_18").addEventListener("click", stopGreen);
    document.querySelector("#container_18").addEventListener("click", playBadSound);
    document.querySelector("#container_19").addEventListener("click", stopGreen);
    document.querySelector("#container_19").addEventListener("click", playBadSound);
    document.querySelector("#container_20").addEventListener("click", stopGreen);
    document.querySelector("#container_20").addEventListener("click", playBadSound);

    console.log("Events Click Objects")

    // dry_falling Class and Pos_
    document.querySelector("#container_1").classList.add("pos_1");
    document.querySelector("#container_1").classList.add("dry_falling");
    document.querySelector("#container_1").classList.add("speed_1");
    document.querySelector("#container_2").classList.add("pos_6");
    document.querySelector("#container_2").classList.add("dry_falling");
    document.querySelector("#container_2").classList.add("speed_2");
    document.querySelector("#container_3").classList.add("pos_7");
    document.querySelector("#container_3").classList.add("dry_falling");
    document.querySelector("#container_3").classList.add("speed_3");
    document.querySelector("#container_4").classList.add("pos_4");
    document.querySelector("#container_4").classList.add("dry_falling");
    document.querySelector("#container_4").classList.add("speed_4");
    document.querySelector("#container_5").classList.add("pos_10");
    document.querySelector("#container_5").classList.add("dry_falling");
    document.querySelector("#container_5").classList.add("speed_5");

    document.querySelector("#container_11").classList.add("pos_2");
    document.querySelector("#container_11").classList.add("dry_falling");
    document.querySelector("#container_11").classList.add("speed_11");
    document.querySelector("#container_12").classList.add("pos_3");
    document.querySelector("#container_12").classList.add("dry_falling");
    document.querySelector("#container_12").classList.add("speed_12");
    document.querySelector("#container_13").classList.add("pos_5");
    document.querySelector("#container_13").classList.add("dry_falling");
    document.querySelector("#container_13").classList.add("speed_13");
    document.querySelector("#container_14").classList.add("pos_9");
    document.querySelector("#container_14").classList.add("dry_falling");
    document.querySelector("#container_14").classList.add("speed_14");
    document.querySelector("#container_15").classList.add("pos_8");
    document.querySelector("#container_15").classList.add("dry_falling");
    document.querySelector("#container_15").classList.add("speed_15");


    // green_falling Class and Pos_
    document.querySelector("#container_6").classList.add("pos_2");
    document.querySelector("#container_6").classList.add("green_falling");
    document.querySelector("#container_6").classList.add("speed_6");
    document.querySelector("#container_7").classList.add("pos_3");
    document.querySelector("#container_7").classList.add("green_falling");
    document.querySelector("#container_7").classList.add("speed_7");
    document.querySelector("#container_8").classList.add("pos_5");
    document.querySelector("#container_8").classList.add("green_falling");
    document.querySelector("#container_8").classList.add("speed_8");
    document.querySelector("#container_9").classList.add("pos_9");
    document.querySelector("#container_9").classList.add("green_falling");
    document.querySelector("#container_9").classList.add("speed_9");
    document.querySelector("#container_10").classList.add("pos_8");
    document.querySelector("#container_10").classList.add("green_falling");
    document.querySelector("#container_10").classList.add("speed_10");

    document.querySelector("#container_16").classList.add("pos_1");
    document.querySelector("#container_16").classList.add("green_falling");
    document.querySelector("#container_16").classList.add("speed_16");
    document.querySelector("#container_17").classList.add("pos_6");
    document.querySelector("#container_17").classList.add("green_falling");
    document.querySelector("#container_17").classList.add("speed_17");
    document.querySelector("#container_18").classList.add("pos_7");
    document.querySelector("#container_18").classList.add("green_falling");
    document.querySelector("#container_18").classList.add("speed_18");
    document.querySelector("#container_19").classList.add("pos_4");
    document.querySelector("#container_19").classList.add("green_falling");
    document.querySelector("#container_19").classList.add("speed_19");
    document.querySelector("#container_20").classList.add("pos_10");
    document.querySelector("#container_20").classList.add("green_falling");
    document.querySelector("#container_20").classList.add("speed_20");

    // Pos 1 (in Speed 1 / 16)
    // Pos 2 (in Speed 11 / 6)
    // Pos 3 (in Speed 12 / 7)
    // Pos 4 (in Speed 4 / 19)
    // Pos 5 (in Speed 13 / 8)
    // Pos 6 (in Speed 2 / 17)
    // Pos 7 (in Speed 3 / 18)
    // Pos 8 (in Speed 15 / 10)
    // Pos 9 (in Speed 14 / 9)
    // Pos 10 (in Speed 5 / 20)

}










// TIME

/* 
--> Function called by welcome
--> sprite_time is the needle

*/


function startTimer() {
    console.log("Start Timer");

    document.querySelector("#welcome").classList.remove("show");
    document.querySelector("#welcome").classList.add("hide");

    document.querySelector("#sprite_time").classList.add("shrink");
    document.querySelector("#sprite_red").classList.add("shrink_2");
    document.querySelector("#sprite_time").addEventListener("animationend", gameOver);
    document.querySelector("#sprite_red").addEventListener("animationend", gameOver);
}










// CONTROL

/*

--> pause(); calls pauseGame and it pause all the falling animations by adding a class "pause" that is in the CSS
--> Then calls play(); and this calls playGame(); it hides the pause-icon and shows the play-icon
--> play(); has just an eventListener in the id="play" that call playGame();
--> playGame do the oposite, hides play-icon and shows pause-icon again; and then removes all the paused added by pauseGame();

*/

function pause() {
    console.log("Pause");
    document.querySelector("#pause").addEventListener("click", playUiSound);
    document.querySelector("#pause").addEventListener("click", pauseGame);   
}

function pauseGame() {
    console.log("Paused Game");
    document.querySelector("#play").classList.remove("hide");
    document.querySelector("#pause").classList.add("hide");

    document.querySelector("#container_1").classList.add("paused");
    document.querySelector("#container_2").classList.add("paused");
    document.querySelector("#container_3").classList.add("paused");
    document.querySelector("#container_4").classList.add("paused");
    document.querySelector("#container_5").classList.add("paused");

    document.querySelector("#container_11").classList.add("paused");
    document.querySelector("#container_12").classList.add("paused");
    document.querySelector("#container_13").classList.add("paused");
    document.querySelector("#container_14").classList.add("paused");
    document.querySelector("#container_15").classList.add("paused");

    document.querySelector("#container_6").classList.add("paused");
    document.querySelector("#container_7").classList.add("paused");
    document.querySelector("#container_8").classList.add("paused");
    document.querySelector("#container_9").classList.add("paused");
    document.querySelector("#container_10").classList.add("paused");

    document.querySelector("#container_16").classList.add("paused");
    document.querySelector("#container_17").classList.add("paused");
    document.querySelector("#container_18").classList.add("paused");
    document.querySelector("#container_19").classList.add("paused");
    document.querySelector("#container_20").classList.add("paused");
    // Pause Timer
    document.querySelector("#sprite_time").classList.add("paused");
    document.querySelector("#sprite_red").classList.add("paused");

    play();    
}

function play() {
    console.log("Play");
    document.querySelector("#play").addEventListener("click", playUiSound);
    document.querySelector("#play").addEventListener("click", playGame);    
}

function playGame() {
    console.log("Play Game");
    document.querySelector("#pause").classList.remove("hide");
    document.querySelector("#play").classList.add("hide");

    document.querySelector("#container_1").classList.remove("paused");
    document.querySelector("#container_2").classList.remove("paused");
    document.querySelector("#container_3").classList.remove("paused");
    document.querySelector("#container_4").classList.remove("paused");
    document.querySelector("#container_5").classList.remove("paused");

    document.querySelector("#container_11").classList.remove("paused");
    document.querySelector("#container_12").classList.remove("paused");
    document.querySelector("#container_13").classList.remove("paused");
    document.querySelector("#container_14").classList.remove("paused");
    document.querySelector("#container_15").classList.remove("paused");

    document.querySelector("#container_6").classList.remove("paused");
    document.querySelector("#container_7").classList.remove("paused");
    document.querySelector("#container_8").classList.remove("paused");
    document.querySelector("#container_9").classList.remove("paused");
    document.querySelector("#container_10").classList.remove("paused");

    document.querySelector("#container_16").classList.remove("paused");
    document.querySelector("#container_17").classList.remove("paused");
    document.querySelector("#container_18").classList.remove("paused");
    document.querySelector("#container_19").classList.remove("paused");
    document.querySelector("#container_20").classList.remove("paused");

    document.querySelector("#sprite_time").classList.remove("paused");
    document.querySelector("#sprite_red").classList.remove("paused");
    
}











// WHEN USER CLICKS ON GOOD OBJECTS

/* 

--> stopDry(); is called by the start(); function with an eventListener added in all the objects!
--> stopDry(); detects through the variable (this); which container was hitted and adds a class with the property animation-play-state: paused; 
--> stopDry(); function also increases 10 points as textContent in the #score id. 
--> Calls 30, 60 and 90 points functions to to rises the fire up. 
--> Displays 10 ten points animated in the id="add_points" with animation class "display_ten_points", 
--> Adds score_style class to #score id. 
--> Animates Sprite and when the animation ends call resetDry(); function. Every is cleaned up and it starts again.

*/



function stopDry() {
    console.log("stopDry");

    console.log(this);
    
    // document.querySelector("#container_1").classList.add("stop_dry")
    this.classList.add("stop_dry")

    console.log("Add 10 Points");
    myScore++; // it increments 1
    document.querySelector("#score").textContent=myScore * 10; // and it multiplies that 1 by 10 that always result in ten

    thirtyPoints();
    sixtyPoints();
    ninetyPoints();

    document.querySelector("#add_points").classList.add("display_ten_points");
    this.removeEventListener("click", stopDry);
    // document.querySelector("#sprite_1").classList.add("dry_hit")
    this.firstElementChild.classList.add("dry_hit")
    document.querySelector("#score").classList.add("score_style")
    // document.querySelector("#sprite_1").addEventListener("animationend", resetDry);
    this.firstElementChild.addEventListener("animationend", resetDry);
}









// RESET DRY

/*

--> resetDry(); stops all the animations and eventListener from the constainers and sprites (and calls itself again!),
--> Completes the javascript timeframe and to start a new one,
--> Designates a new (Random) position,
--> Add the animation to the container again (dry_falling in (this) case).

*/

function resetDry() {
    console.log("resetDry");
    console.log(this);

    this.parentNode.classList.value = ""; // Her removes all the classes from the container
    this.classList.value = ""; // Her removes all the classes from the Sprie
    this.removeEventListener("animationend", resetDry);

    // document.querySelector("#container_1").classList.remove("stop_dry");
    this.classList.remove("stop_dry");
    // document.querySelector("#container_1").classList.remove("dry_falling");
    this.classList.remove("dry_falling");

    document.querySelector("#add_points").classList.remove("display_ten_points");
    // document.querySelector("#sprite_x").removeEventListener("animationend", resetDry);

    console.log("Classes removed");

    // To complete the javascript timeframe and for a new one to start
    // document.querySelector("#container_1").offsetHeight;
    this.offsetHeight;

    // Random position
    //Variable that indicates the position from the Random Position
    let position = positionRandomNumber(); // The variable is EQUAL to the function 
    console.log(position);

    // document.querySelector("#container_1").classList.add("pos_" + rndPos);
    this.classList.add("pos_" + position); // Her I use the result from that function

    let speed = speedRandomNumber();
    console.log(speed)
    this.parentNode.classList.add("speed_" + speed); // It is the same to the speed

    // Start dry_falling again
    // document.querySelector("#container_1").addEventListener("click", stopDry);
    this.parentNode.addEventListener("click", stopDry);
    // document.querySelector("#container_1").classList.add("dry_falling");
    this.parentNode.classList.add("dry_falling"); 
}





// WHEN USER CLICKS ON BAD OBJECTS

/* 

--> stopGreen(); function do the same that stoDry(); called throught an eventListener in the containers in start(); ... but insted of the score it changes the number of the lives.
--> Subtracts One Life from #lives id --> define the value and subtract one with (--) 
--> Calls noLivesLeft(), function that conduces to gameOver(); if there are no more lives.
--> stopGreen(); stop the Container (this) with a class animation-play-state: paused; and animates its Sprite,
--> When the animation ends calls resetGreen();,
--> threeLives(); function adds the number 3 as textContent with the variables defined in the very beginning of the js. and its style to #lives id.


*/

function threeLives() {
    console.log("three lives");
    document.querySelector("#lives").textContent=lives;
    document.querySelector("#lives").classList.add("lives_style")
    }


function stopGreen() {
    console.log("stopGreen");

    console.log(this);

    // document.querySelector("#container_2").classList.add("stop_green")
    this.classList.add("stop_green");

    lives--;
    document.querySelector("#lives").textContent=lives;

    console.log("Subtract One Life");    

    noLivesLeft();

    // document.querySelector("#subtract_life").classList.add("subtract_one_life");
    
    // document.querySelector("#sprite_2").classList.add("green_hit")
    this.firstElementChild.classList.add("green_hit");
    document.querySelector("#lives").classList.add("lives_style")
    document.querySelector("#lives").classList.add("subtract_one_life");
    
    // document.querySelector("#sprite_2").addEventListener("animationend", resetGreen);
    this.firstElementChild.addEventListener("animationend", resetGreen);
}

/*

--> resetGreen(); stops all the animations and eventListener from the constainers and sprites (and calls itself again!),
--> Completes the javascript timeframe and to start a new one,
--> Designates a new (Random) position,
--> Add the animation to the container again (green_falling in (this) case).

*/

function resetGreen() {
    console.log("resetGreen");

    console.log(this);

    this.parentNode.classList.value = ""; // Her removes all the classes from the container
    this.classList.value = ""; // Her removes all the classes from the Sprie
    this.removeEventListener("animationend", resetGreen);

    // document.querySelector("#container_2").classList.remove("stop_green");
    this.classList.remove("stop_green");

    // document.querySelector("#container_2").classList.remove("green_falling");
    this.classList.remove("green_falling");

    // document.querySelector("#sprite_2").classList.remove("green_hit");
    document.querySelector("#lives").classList.remove("subtract_one_life");

    console.log("aqui");

    // To complete the javascript timeframe and for a nrew one to start
    // document.querySelector("#container_2").offsetHeight;
    this.offsetHeight;

    // Random position
    //Variable that indicates the position from the Random Position
    let position = positionRandomNumber();
    console.log(position);

    // document.querySelector("#container_1").classList.add("pos_" + rndPos);
    this.classList.add("pos_" + position);

    let speed = speedRandomNumber();
    console.log(speed)
    this.parentNode.classList.add("speed_" + speed);
    
    // document.querySelector("#container_2").classList.add("green_falling"); 
    this.parentNode.classList.add("green_falling");
    // document.querySelector("#container_1").addEventListener("click", stopGreen);
    this.parentNode.addEventListener("click", stopGreen);
}

// LIGHT THE FIRE

/*

--> These functions are called from stopDry and stopGreen functions.
--> stopDry and stopGreen functions analize the values of the score and change the SVG of the sprite of the #fire.
--> thirtyPoints(); calls lightFireOne();
--> sixtyPoints(); calls lightFireTwo();
--> ninetyPoints() calls lightFireThree();

*/



function thirtyPoints() {
    console.log("Thirty Points");
    if (myScore === 3) {
        lightFireOne();
        playfireOneSound();
    }
}

function sixtyPoints() {
    console.log("Sixty Points");
    if (myScore === 6) {
        lightFireTwo();
        stopfireOneSound();
        playfireTwoSound();
    }
}

function ninetyPoints() {
    console.log("Ninety Points");
    if (myScore === 9) {
        lightFireThree();
        stopfireTwoSound();
        playfireThreeSound();
    }
}

function lightFireOne() {
    console.log("Light Fire 1");
    document.querySelector("#fire").classList.add("sprite_fire_1");
}

function lightFireTwo() {
    console.log("Light Fire 2");
    document.querySelector("#fire").classList.add("sprite_fire_2");
}

function lightFireThree() {
    console.log("Light Fire 3");
    document.querySelector("#fire").classList.add("sprite_fire_3");
}









// NO LIVES LEFT

/* 

--> noLivesLeft(); is called in stopGreen(); function to analize the amount of lives
--> If there are no more lives so it calls gameOver(); function
--> gameOver(); removes all the classes from Dry and Green and Show with the class ".show" the screen #game_over
--> Game Over screen is just an animation an when it ends calls condition();

*/

// NO LIVES LEFT + GAME OVER

function noLivesLeft() {
    console.log("Lives left");
    if (lives === 0) {
        gameOver();     
    } 
}

function gameOver() {
    console.log("Game Over");

    // gameRunning = false;
    
    // remove all animations
    document.querySelector("#container_1").classList.value = "";
    document.querySelector("#container_2").classList.value = "";
    document.querySelector("#container_3").classList.value = "";
    document.querySelector("#container_4").classList.value = "";
    document.querySelector("#container_5").classList.value = "";

    document.querySelector("#container_6").classList.value = "";
    document.querySelector("#container_7").classList.value = "";
    document.querySelector("#container_8").classList.value = "";
    document.querySelector("#container_9").classList.value = "";
    document.querySelector("#container_10").classList.value = "";

    document.querySelector("#container_11").classList.value = "";
    document.querySelector("#container_12").classList.value = "";
    document.querySelector("#container_13").classList.value = "";
    document.querySelector("#container_14").classList.value = "";
    document.querySelector("#container_15").classList.value = "";

    document.querySelector("#container_16").classList.value = "";
    document.querySelector("#container_17").classList.value = "";
    document.querySelector("#container_18").classList.value = "";
    document.querySelector("#container_19").classList.value = "";
    document.querySelector("#container_20").classList.value = "";

    document.querySelector("#fire").classList.value = "";

    document.querySelector("#sprite_time").classList.remove("shrink");
    document.querySelector("#sprite_red").classList.remove("shrink_2");

    // remove all eventListeners

    document.querySelector("#game_over").classList.remove("hide");
    document.querySelector("#game_over").classList.add("show"); // display: inline-fex;
    document.querySelector("#sprite_game_over").classList.add("fade_in");
    document.querySelector("#sprite_game_over").addEventListener("animationend", gameOverFade);

    // Stop All Sounds
    pauseAllSounds();
}

function gameOverFade() {
    console.log("Fade");
    document.querySelector("#sprite_game_over").classList.remove("fade_in");
    document.querySelector("#sprite_game_over").classList.add("fade_out");
    document.querySelector("#sprite_game_over").addEventListener("animationend", condition);
}









// CONDITION

/**

--> codition(); checks if the score is reached or not and decide if calls win or lost game
--> regardless of the amount of lives.

 */


function condition() {
    console.log("Condition");

    if (myScore > 9) {
        winGame();
    } else {
        loseGame();
    }
    
}










// WIN GAME

/*

--> winGame(); and lostGame(); do basically the same.
--> Clean all the values and classes from the containers and IDs.
--> Shows the screen that was hidden.
--> And adds to eventListeners to the two buttons in the screens (#home or #play_again 1 or 2).

*/

function winGame() {
    console.log("Win Game" + "100 Points - Level Complete")

    // remove all animations
    document.querySelector("#container_1").classList.value = "";
    document.querySelector("#container_2").classList.value = "";
    document.querySelector("#container_3").classList.value = "";
    document.querySelector("#container_4").classList.value = "";
    document.querySelector("#container_5").classList.value = "";

    document.querySelector("#container_6").classList.value = "";
    document.querySelector("#container_7").classList.value = "";
    document.querySelector("#container_8").classList.value = "";
    document.querySelector("#container_9").classList.value = "";
    document.querySelector("#container_10").classList.value = "";

    document.querySelector("#container_11").classList.value = "";
    document.querySelector("#container_12").classList.value = "";
    document.querySelector("#container_13").classList.value = "";
    document.querySelector("#container_14").classList.value = "";
    document.querySelector("#container_15").classList.value = "";

    document.querySelector("#container_16").classList.value = "";
    document.querySelector("#container_17").classList.value = "";
    document.querySelector("#container_18").classList.value = "";
    document.querySelector("#container_19").classList.value = "";
    document.querySelector("#container_20").classList.value = "";

    document.querySelector("#fire").classList.value = "";

    document.querySelector("#sprite_time").classList.remove("shrink");
    document.querySelector("#sprite_red").classList.remove("shrink_2");

    // remove all eventListeners

    document.querySelector("#game_won").classList.remove("hide");
    document.querySelector("#game_won").classList.add("show"); // display: inline-fex;
    document.querySelector("#game_won").classList.add("fade_in");
    document.querySelector("#sprite_game_won").classList.add("fade_in");
    playfireThreeSound();
    document.querySelector("#play_again_1").addEventListener("click", playUiSound);
    document.querySelector("#play_again_1").addEventListener("click", restartGame);
    // Go to restartGame2 and then to welcome page
    document.querySelector("#home_won").addEventListener("click", playUiSound);
    document.querySelector("#home_won").addEventListener("click", restartGame2);
    
}

// LOSE GAME

function loseGame() {
    console.log("Lose Game" + "No points enough");

    // remove all animations
    document.querySelector("#container_1").classList.value = "";
    document.querySelector("#container_2").classList.value = "";
    document.querySelector("#container_3").classList.value = "";
    document.querySelector("#container_4").classList.value = "";
    document.querySelector("#container_5").classList.value = "";

    document.querySelector("#container_6").classList.value = "";
    document.querySelector("#container_7").classList.value = "";
    document.querySelector("#container_8").classList.value = "";
    document.querySelector("#container_9").classList.value = "";
    document.querySelector("#container_10").classList.value = "";

    document.querySelector("#container_11").classList.value = "";
    document.querySelector("#container_12").classList.value = "";
    document.querySelector("#container_13").classList.value = "";
    document.querySelector("#container_14").classList.value = "";
    document.querySelector("#container_15").classList.value = "";

    document.querySelector("#container_16").classList.value = "";
    document.querySelector("#container_17").classList.value = "";
    document.querySelector("#container_18").classList.value = "";
    document.querySelector("#container_19").classList.value = "";
    document.querySelector("#container_20").classList.value = "";

    document.querySelector("#fire").classList.value = "";

    document.querySelector("#sprite_time").classList.remove("shrink");
    document.querySelector("#sprite_red").classList.remove("shrink_2");

    // Show game Lost

    document.querySelector("#game_lost").classList.remove("hide");
    document.querySelector("#game_lost").classList.add("show"); // display: inline-fex;
    document.querySelector("#game_lost").classList.add("fade_in");
    document.querySelector("#sprite_game_lost").classList.add("fade_in");
    playLoseSound();
    document.querySelector("#play_again_2").addEventListener("click", playUiSound);
    document.querySelector("#play_again_2").addEventListener("click", restartGame);
    // Go to restartGame2 and then to welcome page
    document.querySelector("#home_lost").addEventListener("click", playUiSound);
    document.querySelector("#home_lost").addEventListener("click", restartGame2);
}










// RANDOM POSITION

/* It is added in stopDry(); and stopGreen(); functions */

function positionRandomNumber() {
    console.log("positionRandomNumber");
    return Math.floor(Math.random()*10+1);
}

function speedRandomNumber() {
    console.log("speedRandomNumber");
    return Math.floor(Math.random()*20+1);
}










// RESTART GAME

/*

--> Hides the screens where it comes from 
--> Clean the values in the #score
--> Stop the sounds
--> Reset the score and lives
--> Calls start

*/

function restartGame() {
    console.log("restartGame");
    document.querySelector("#screen").offsetHeight;
    document.querySelector("#game_won").classList.add("hide");
    document.querySelector("#game_lost").classList.add("hide");
    document.querySelector("#game_over").classList.add("hide");

    console.log("Restarting myScore and Lives");

    document.querySelector("#score").textContent = '';
    document.querySelector("#score").offsetHeight;

    stopfireThreeSound();
    stopLoseSound();
    console.log("Stop Sounds Screens Win & Lose");

    myScore = 0;
    lives = 3;

    threeLives();
    start();
}


// RESTART WELCOME PAGE


/*

--> It does the same than restartGame(); but calls welcome(); insted for start.

*/

function restartGame2() {
    console.log("restartGame2");
    document.querySelector("#screen").offsetHeight;
    document.querySelector("#game_won").classList.add("hide");
    document.querySelector("#game_lost").classList.add("hide");
    document.querySelector("#game_over").classList.add("hide");

    console.log("Restarting myScore and Lives");

    document.querySelector("#score").textContent = '';
    document.querySelector("#score").offsetHeight;

    stopfireThreeSound();
    stopLoseSound();
    console.log("Stop Sounds Screens Win & Lose");

    myScore = 0;
    lives = 3;

    threeLives();
    welcome();
}




