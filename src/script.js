//Static Page Elements
const compatibilityButton = document.querySelector('button'); //button selector
let firstPerson = document.querySelector('#firstname')
let secondPerson = document.querySelector('#secondname')

//Score
const compatibility = () => {
  let random = Math.floor(Math.random() * 101);
  return random;
}

//Notification Paragraph
let notification = document.createElement('p'); //paragraph for love notification
let referenceNode = document.querySelector('button'); //reference for love notification placement
referenceNode.after(notification); //place notification after reference node

//Notification GIF
let notificationPhoto = document.createElement('img');
notificationPhoto.className = "notificationGIF";
notification.after(notificationPhoto);

//Notification
const displayScore = () => {
   let compatibilityScore = compatibility();
   firstPerson.value = null;
   secondPerson.value = null;

     if (compatibilityScore >= 80) {
     notification.innerText = `With a compatibility score of ${compatibilityScore}%, you guys are made for each other!`;
     notificationPhoto.src = "https://media.giphy.com/media/26FLdmIp6wJr91JAI/giphy.gif";
   } else if (compatibilityScore >= 50) {
     notification.innerText = `With a compatibility score of ${compatibilityScore}%, you guys aren't perfect for each other, but you can make it work!`;
     notificationPhoto.src = "https://media.giphy.com/media/3oEjI72YdcYarva98I/giphy.gif";
   } else {
     notification.innerText = `Damn, your compatibility is ${compatibilityScore}%. I wouldn't go for it, if I were you two.`
     notificationPhoto.src = "https://media.giphy.com/media/j4b3GvKct3HBC/giphy.gif";    
   }
}

//Check for empty values and get notifications
function checkScore() {
  if (firstPerson.value == "" && secondPerson.value == "") {
  notification.innerText = "You need two people to check their compatibility!";
  notificationPhoto.src = "";
  } else if (firstPerson.value == "") {
  notification.innerText = "Woah, you haven't put a the first person in yet!";
  notificationPhoto.src = "";
  } else if (secondPerson.value == "") {
  notification.innerText = "You need a second person to check compatibility!";
  notificationPhoto.src = "";
  } else {
    displayScore();
  }
}

//Button event listener
function calculateLove() {
  compatibilityButton.addEventListener('click', checkScore); 
}

calculateLove();