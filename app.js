
const nameInput = document.getElementById('nameInput');
const professionInput = document.getElementById('professionInput');
const bioInput = document.getElementById('bioInput');
const createBtn = document.getElementById('createBtn');
const cardContainer = document.getElementById('cardContainer');


createBtn.addEventListener('click', () => {
  const name = nameInput.value.trim();
  const profession = professionInput.value.trim();
  const bio = bioInput.value.trim();


  if(!nameInput.value.trim()){
    return null
  }
  

  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <div class="card__name">${name}</div>
    <div class="card__profession">${profession}</div>
    <div class="card__bio">${bio}</div>`
  ;

  cardContainer.appendChild(card);

  nameInput.value = "";
  professionInput.value = "";
  bioInput.value ="";
});



const formControll = document.querySelector(".form-controll")
const messageInput=document.querySelector(".message")
const wrapper=document.querySelector(".wrapper")

const DATA=[
  "hi",
  "how are you?",
  "what's up",
  "You good?",
  "No worries",
  "for real",
  "no cap",
  "chill out",
  "don't trip",
  "thats fact",
  "Im out",
  "You do you"
]

function anotherMessage(){
  const card = document.createElement("div")
  card.className="cardd another"
  let date =new Date()
  let randomInd = Math.floor(Math.random()* DATA.length)
  let randomMsg =DATA[randomInd]

  card.innerHTML=`
  <p>${randomMsg}</p>
  <span>${date.getHours()}:${date.getMinutes()}</span>
  `
wrapper.appendChild(card)
}



formControll.addEventListener("submit",(event)=>{
  event.preventDefault()
  if(!messageInput.value.trim()){
    return null
  }
  const card = document.createElement("div")
  card.className="cardd"
  let date =new Date()
  card.innerHTML=`
  <p>${messageInput.value}</p>
  <span>${date.getHours()}:${date.getMinutes()}</span>
  `
wrapper.appendChild(card)
messageInput.value=""
setTimeout(()=>{
  anotherMessage()
},3000)


})