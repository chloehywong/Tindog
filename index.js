import dogsData from '/data.js'

const nopeBtn = document.getElementById("nopeBtn")
const likeBtn = document.getElementById("likeBtn")
const nopeImg = document.getElementById("nopeImg")
const likeImg = document.getElementById("likeImg")
const endPage = document.getElementById("endPage")

document.getElementById("nopeBtn").addEventListener("click", nope)
document.getElementById("likeBtn").addEventListener("click", like)



// Later, build a constructor function in Dog.js
let dogId = 0


function getDogHtml(data) {
    let doghtml = ''

    dogId = Math.floor(Math.random(0) * dogsData.length)
    data = dogsData[dogId]

    doghtml =  `
        <div class="profile">
            <img class="cover-img" src="${data.avatar}">
            <h1 class="name">${data.name}, ${data.age}</h1>
            <p class="bio">${data.bio}</p>
        </div>
    `
    return doghtml
} 

function nope() {
    nopeImg.style.display = "block";
    likeBtn.disabled = true;

    if(dogId > 0) {
        setTimeout(() => {
            dogsData.splice(dogId, 1)
            render()
            nopeImg.style.display = "none"; 
            likeBtn.disabled = false;
        }, 1500)
    } else {
        setTimeout(() => {
            endPage.style.display = "flex"; 
        }, 1000)
    }
}

function like() {
    likeImg.style.display = "block";
    nopeBtn.disabled = true;
   
    if(dogId > 0) {
        setTimeout(() => {
            dogsData.splice(dogId, 1)
            render()
            likeImg.style.display = "none"; 
            nopeBtn.disabled = false;
        }, 1500)
    } else {
        setTimeout(() => {
            endPage.style.display = "flex"; 
        }, 1000)
    }
}



function render() {
    document.getElementById("dog").innerHTML = getDogHtml()
}
render()

