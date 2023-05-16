import dogsData from '/data.js'
import Dog from '/Dog.js'

const nopeBtn = document.getElementById("nopeBtn")
const likeBtn = document.getElementById("likeBtn")
const nopeImg = document.getElementById("nopeImg")
const likeImg = document.getElementById("likeImg")
const endPage = document.getElementById("endPage")

document.getElementById("nopeBtn").addEventListener("click", nope)
document.getElementById("likeBtn").addEventListener("click", like)


function getNewDog() {
    const nextDogProfile = dogsData.shift();
    return nextDogProfile ? new Dog(nextDogProfile) : []
}


function nope() {
    nopeImg.style.display = "block";
    likeBtn.disabled = true;

    dog.hasBeenSwiped = true;

    if (dogsData.length > 0) {
        setTimeout(() => {
            dog = getNewDog()
            render()
            nopeImg.style.display = "none"; 
            likeBtn.disabled = false;
        }, 1000)
    } else {
        setTimeout(() => {
            endPage.style.display = "flex"; 
        }, 1000)
    }
}

function like() {
    likeImg.style.display = "block";
    nopeBtn.disabled = true;

    dog.hasBeenSwiped = true;
    dog.hasBeenLiked = true;
   
    if(dogsData.length > 0) {
        setTimeout(() => {
            dog = getNewDog()
            render()
            likeImg.style.display = "none"; 
            nopeBtn.disabled = false;
        }, 1000)
    } else {
        setTimeout(() => {
            endPage.style.display = "flex"; 
        }, 1000)
    }
}


function render() {
    document.getElementById("dog").innerHTML = dog.doghtml()
}

let dog = getNewDog()
render()

