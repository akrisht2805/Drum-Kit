
for(let i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        let buttonHTML = this.innerHTML;
        makeSound(buttonHTML);
        buttonAnimation(buttonHTML);
    });
}

document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});



function makeSound(key){
    switch (key) {
        case 'a':
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case 'k':
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case 'r':
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case 'i':
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case 's':
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case 'h':
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;
        case 't':
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        default:
            break;
    }
}


function buttonAnimation(button){
    document.querySelector("."+button).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+button).classList.remove("pressed");
    },100);
}