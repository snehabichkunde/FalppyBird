var block = document.getElementById("block");
var hole = document.getElementById("hole");
var character = document.getElementById("character")
var jumping = 0;


hole.addEventListener('animationiteration', () => {
    var random = -((Math.random()*500)+150);
    hole.style.top = random + "px";
    counter++;
});

//lets add gravity 
setInterval(function(){
    var charaTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"))
    if(jumping == 0){
        character.style.top = (charaTop+ 3) + "px"
    }
}, 10)

// lets add the jump function 
function jump(){
    jumping = 1;
    let jumpCount = 0;
    var jumpInterval = setInterval(function(){
        jumpCount++;
        var charaTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"))
        if(charaTop>6){
            character.style.top = (charaTop- 5) + "px" ;
        }
        if(jumpCount>20){
            clearInterval(jumpInterval);
            jumping = 0;
            jumpCount = 0;
        }
    }, 10);
}