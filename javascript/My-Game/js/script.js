var character = document.getElementById("character");
var block = document.getElementById("block");
var gameOver = document.getElementById("gameOver")
var button = document.getElementById("button")
cross = true
score = 0;
var counter = 0




function jump() {
    if (character.classList != "animate") {
        character.classList.add("animate");
        counter++
    }
    setTimeout(function () {
        character.classList.remove("animate");
    }, 500);
}
var checkDead = setInterval(function () {
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    console.log(characterTop)
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    // console.log(blockLeft)
    // console.log(characterTop);
    if (blockLeft < 50 && blockLeft > 30 && characterTop == 150) {

        gameOver.style.visibility = "visible"
        button.style.visibility = "visible"
        block.style.animation = "none"
        block.style.display = "none"
        character.style.display = "none"
        scoreCont.style.display = "none"

        // alert("Try again score: " + counter)
    }
    else if (cross) {
        score += 1;
        updateScore(characterTop < 150 && score);
        cross = false
        setTimeout(() => {
            cross = true
        }, 1000);

    }
}, 10);
aniDur = parseFloat(window.getComputedStyle(block).getPropertyValue("animation-duration"));
newDur = aniDur - 0.3
block.style.animationDuration = newDur + "s";



document.body.onkeyup = function (e) {
    if (e.keyCode == 32, 38) {
        jump();
    }
}

function updateScore(score) {
    scoreCont.innerHTML = "Your Score: " + counter
    // console.log(score)
}



function mybutton(params) {
    location.reload();
}

//  console.log (updateScore(score))