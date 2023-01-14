const cards = document.querySelectorAll(".card")
let heading = document.querySelector("h2")

let matchedCards = 0;
let cardOne, cardTwo;
let disableDeck = false;


function flipCard(e){
  let clickedCard = e.target;
  if(clickedCard !== cardOne && !disableDeck){
    clickedCard.classList.add("flip")
    if(!cardOne){
      return cardOne = clickedCard;
    }
    cardTwo = clickedCard
    disableDeck = true;
    let cardOneImg = cardOne.querySelector("img").src,
    cardTwoImg = cardTwo.querySelector("img").src;
    matchCards(cardOneImg, cardTwoImg)
  }
}
matchedSound = new Audio("./sounds/card-matched.mp3")
successSound = new Audio("./sounds/success-trumpets.mp3")
notMatchSound = new Audio("./sounds/gamefx.mp3")
function matchCards(img1,img2){
  if(img1 === img2){
    matchedCards++;
    console.log(heading)
    matchedSound.play();
    if(matchedCards == 8){
      successSound.play();
      heading.innerHTML="WIN!"
      setTimeout(() => {
        heading.innerHTML=""
        return shuffleCards();
      }, 4500);
    }
    cardOne.removeEventListener("click",flipCard)
    cardTwo.removeEventListener("click",flipCard)
    cardOne = cardTwo ="";
    return disableDeck = false;;
  }
  setTimeout(()=>{
    cardOne.classList.add("shake")
    cardTwo.classList.add("shake")
    // notMatchSound.play();

  },400)
  setTimeout(()=>{
    cardOne.classList.remove("shake","flip")
    cardTwo.classList.remove("shake","flip")
    cardOne = cardTwo ="";
    disableDeck = false;
  },1200)
}

function shuffleCards(){
  disableDeck = false;
  matchedCards = 0;
  cardOne = cardTwo = ""
  let arr = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8]
  arr.sort(()=> Math.random()> 0.5 ? 1 : -1)

  cards.forEach((card, index) =>{
    card.classList.remove("flip")
    let imgTag = card.querySelector("img")
    imgTag.src = `images/img${arr[index]}.jpg`
    card.addEventListener("click",flipCard)
  })
} 

shuffleCards();

cards.forEach(card =>{
  card.addEventListener("click",flipCard)
})