// Remember to import the data and Dog class!
import Dog from '/Dog.js'
import dogs from '/data.js'


// Button Badge Functions
let yesBadge = document.getElementById('yes-badge')
let noBadge = document.getElementById('no-badge')

let yesBtn = document.getElementById('yesBtn')
let noBtn = document.getElementById('noBtn')


// Event Listeners 
yesBtn.addEventListener('click', () => {like()})
noBtn.addEventListener('click', () => {reject()})



////// ---------------------------------------------------------


//Dog Rendering Variables //
const totalDogs = dogs.length
let currentDogIndex = 0;
let currentDogCard = " ";

//Render the dog Card//


function render () {
    currentDogCard = new Dog(dogs[currentDogIndex])
    document.getElementById("dogCard").innerHTML = currentDogCard.dogCardHtml()
}

render()



// Like Dislike Functions
function like() {
    yesBadge.style.display = "block";
    //incorret way to toggle boolean
    if (!currentDogCard.hasBeenLiked && !currentDogCard.hasBeenSwiped) {
        currentDogCard.hasBeenLiked = true;
        currentDogCard.hasBeenSwiped = true;
    }
   likeDislike()
    
}

function reject() {
    noBadge.style.display = "block"
    if (!currentDogCard.hasBeenLiked && !currentDogCard.hasBeenSwiped) {
        currentDogCard.hasBeenSwiped = true
    }
    likeDislike()
}


function likeDislike() {
    //This would display the html from the dog constructor class. however we are currently using a display:none on the style for the badges. should go back and fix this. 
    // document.getElementById('dog-status').innerHTML = currentDogCard.likeRejectHtml()
    getNextCard()
}



//get next card, function called when like/dislike btn is clicked, then render next Dog card.
function getNextCard() {
    // Attempted to use the method from Wizard app. However not functioning. I believe because I hav not declared an array to go after dogs.shift()
    // const newCardData  = dogs.shift()
    // return newCardData ? new Dog(newCardData) : {}
    
    if (currentDogIndex < totalDogs -1) {
        currentDogIndex++
    } else if (currentDogIndex === totalDogs -1){
        currentDogIndex = 0
    }
    setTimeout(() => render(), 800)
    setTimeout(() => hideBadge(), 800)
   
}

function hideBadge () {
    yesBadge.style.display = "none";
    noBadge.style.display = "none";
}
console.log(getNextCard())