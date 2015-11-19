"use strict";

var numberOfBlocks = 9;
var numberOfTarget = 3;
var targetBlocks = [];
var trapBlock=[];
var targetTimer=null;
var trapTimer=null;
var instantTimer=null;


document.observe('dom:loaded', function(){
	
   	$("start").observe("click", function(){

   	$("state").innerHTML = "Ready!";
   	$("score").innerHTML = "0";
  	clearInterval(targetTimer);
  	clearInterval(trapTimer);
  	clearInterval(instantTimer);
   	setTimeout(startGame, 3000);
   });

	$("stop").observe("click", stopGame);
});

function startGame(){
	targetBlocks = [];
	trapBlock=[];
	clearInterval(targetTimer);
  	clearInterval(trapTimer);
  	clearInterval(instantTimer);
	startToCatch();
}

function stopGame(){

	$("state").innerHTML = "Stop";
	targetBlocks = [];
	trapBlock=[];
	clearInterval(targetTimer);
  	clearInterval(trapTimer);
  	clearInterval(instantTimer);

}

function startToCatch(){

	$("state").innerHTML = "Catch";

	var r = [];
   for(var i = 0; i < numberOfTarget; i++) 
   	r[i] = Math.floor(Math.random() * 9);
   for(var i = 0; i < numberOfTarget; i++) targetBlocks.push(r[i])
   var block = $$(".block");
   for(var i = 0; i < numberOfTarget; i++) block[targetBlocks[i]].addClassName("target");

   if(targetBlocks[i].length > 4){
   	targetTimer=null;
	trapTimer=null;
	instantTimer=null;

	alert("you lose");
   }



}