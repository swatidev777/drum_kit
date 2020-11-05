var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    console.log(this); 
 
    this.style.color="green"
    setTimeout(()=>{
      this.style.color="red";
    
    },1000)
var button_inner_letter=this.textContent;

console.log(button_inner_letter);

    makeSound(button_inner_letter);
    button_Animation(button_inner_letter);

  });

}

document.addEventListener("keypress", function(event) {
var keypressed=event.key;
console.log(this);

document.querySelector("."+keypressed).style.color="blue";
setTimeout(()=>{
  document.querySelector("."+keypressed).style.color="green";

},1000)
 console.log(keypressed)
 makeSound(keypressed);
 button_Animation(keypressed);
});


function makeSound(key){

switch(key){


case"w":

var audio=new Audio('sounds/crash.mp3');
audio.play();

break;
case"a":

var audio=new Audio('sounds/crash.mp3');
audio.play();

break;
case"d":

var audio=new Audio('sounds/tom-3.mp3');
audio.play();

break;
case"s":

var audio=new Audio('sounds/tom-2.mp3');
audio.play();

break;

case"j":

var audio=new Audio('sounds/tom-1.mp3');
audio.play();

break;
case"k":

var audio=new Audio('sounds/snare.mp3');
audio.play();

break;
case"l":

var audio=new Audio('sounds/kick-bass.mp3');
audio.play();

break;
default:alert("KUCH B PRESS KIYA");


}

}





function button_Animation(current_Key){

var active_button=document.querySelector("."+current_Key);
active_button.classList.add("pressed");
setTimeout(()=>{
  active_button.classList.remove("pressed");
},1000)

}