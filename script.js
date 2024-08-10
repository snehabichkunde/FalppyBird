var block = document.getElementById("block");
var hole = document.getElementById("hole");
var character = document.getElementById("character")
var jumping = 0;
var counter = 0;

hole.addEventListener('animationiteration', () => {
    var random = -((Math.random()*500)+150);
    hole.style.top = random + "px";
    counter++;
});

//lets add gravity 
setInterval(function(){
    var charaTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"))
    if(jumping == 0){
        character.style.top = (charaTop+ 3) + "px";
    }
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    var cTop = -(750-charaTop);
    if((charaTop>730)||((blockLeft<20)&&(blockLeft>-30)&&((cTop<holeTop)||(cTop>holeTop+180)))){
        alert("Game over. Score: "+(counter-1));
        character.style.top = 100 + "px";
        counter=0;
    }

}, 10)

// lets add the jump function 
function jump(){
    jumping = 1;
    let jumpCount = 0;
    var jumpInterval = setInterval(function(){
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if((characterTop>6)&&(jumpCount<15)){
            character.style.top = (characterTop-4)+"px";
        }
        if(jumpCount>20){
            clearInterval(jumpInterval);
            jumping=0;
            jumpCount=0;
        }
        jumpCount++;
    },10);
}