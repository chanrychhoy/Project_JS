function deletePlace1(event) {
  // 1- Check the event if raised on the button delete 
  if (event.target.className === 'delete') {
    event.target.parentElement.remove();
  }
}
function deletePlace2(event) {
  // 1- Check the event if raised on the button delete 
  if (event.target.className === 'delete') {
    event.target.parentElement.remove();
  }
}
function addMorePlace(event) {
  // ----------- Prevent default to avoid to refresh the page
  event.preventDefault();
  showElement(closeBtn,true);
  showElement(formBtn,true);
  showElement(createBtn,false);
  //  -----  Get the form inputs information-------------
  let inputPlace = document.getElementById("place");
  let firstDate=document.querySelector("#firstDate");
  let lastDate=document.querySelector("#lastDate");
  let startDate=new Date(firstDate.value);
  let endDate=new Date(lastDate.value);
  let inputPrice = document.getElementById("price");
  let inputTransport = document.getElementById("transport");

  //Check if task text, color, date are defined :
  //---------------If not defined, display a warnning   "You must fill all inputs"-------------

  if (inputPlace.value !="" && firstDate.value !="" && lastDate.value!="" && inputPrice.value !="" && inputTransport.value !="") {
    
    if (startDate.getTime() > endDate.getTime()){
      alert("first date must be smaller than last date") ;
    }
    else{
      let date=lastDate.value;
      // -1- ----Create a span for the  name place------------- class = "cardName"
      const createSpan1 = document.createElement("span");
      createSpan1.classList.add("cardName");
      createSpan1.textContent = inputPlace.value;
      // -2- ----Create a span for the  date------------- class = "cardDate"
      
      const createSpan2 = document.createElement("span");
      createSpan2.classList.add("cardDate");
      createSpan2.textContent = date;
      
      // -3- ----Create a span for the  price------------- class = "cardPrice"
      const createSpan3 = document.createElement("span");
      createSpan3.classList.add("cardPrice");
      createSpan3.textContent = inputPrice.value;
      // -4- ----Create a span for the  Transport------------- class = "cardTransport"
      const createSpan4 = document.createElement("span");
      createSpan4.classList.add("cardTransport");
      createSpan4.textContent = inputTransport.value;
      // -5- ----Create a span for the  delete------------- class = "delete"
      const createSpan5 = document.createElement("span");
      createSpan5.classList.add("delete");
      createSpan5.textContent = "x";
      // ---------- Create a new div--------------
      const createDiv = document.createElement("div");
      createDiv.classList.add("card");
      // --------- Add placeName and deleteBtn to class and div to the PlaceList  div-------
      createDiv.appendChild(createSpan1);
      createDiv.appendChild(createSpan2);
      createDiv.appendChild(createSpan3);
      createDiv.appendChild(createSpan4);
      createDiv.appendChild(createSpan5);

      const divAllcard1 = document.querySelector("#place-list1");
      const divAllcard2 = document.querySelector("#place-list2");
      // -------------------get information form input radio----------------
      let result = "";
      let inputSelectPlace = document.getElementsByName("userSelect");
      for (let selectPlace of inputSelectPlace) {
        if (selectPlace.checked) {
          result = selectPlace.value;
        }
      }
      // -------------------Ask radio user click local or Abroad---------------- 
      if (result === "Local") {
        divAllcard1.appendChild(createDiv);
        // ------back to show your result----------
        cardBtn.style.display = "block";
        closeBtn.style.display = "none";
        formBtn.style.display = "none";
        createBtn.style.display="block";
        
        
      }
      else {
        divAllcard2.appendChild(createDiv);
        // ------back to show your result----------
        cardBtn.style.display = "block";
        closeBtn.style.display = "none";
        formBtn.style.display = "none";
        createBtn.style.display="block";
        
        
      }
      
    }  
    // -------clear input-----------
    inputPlace.value = "";
    firstDate.value= "";
    lastDate.value = "";
    inputPrice.value = "";
    inputTransport.value = "";
  }
  else{
    alert("you must fill all inputs");
  }
}
// -------------------create function reseach name in local place--------------

function searchNamePlace_L(event) {
  // ---------- Get the search text
  let search = document.querySelector("#local");
  let text = search.value.toLowerCase();
  let listItem = document.querySelectorAll("#place-list1 .card");
  // ------ Loop on all card
  // Update the style of the card (visible or hidden)
  for (let card of listItem) {
    let NamePlace = card.firstElementChild.textContent.toLowerCase();
    if (NamePlace.indexOf(text) === -1) {
      card.style.display = "none";
      
    }
    else {
      card.style.display = "";
    }
  }
}

// -------------------create function reseach name in Abroad place--------------

function searchNamePlace_A(event) {
  // 1- Get the search text
  let search = document.querySelector("#abroad");
  let text = search.value.toLowerCase();
  let listItem = document.querySelectorAll("#place-list2 .card");
  // 2- Loop on all card
  // Update the style of the card (visible or hidden)
  for (let card of listItem) {
    let NamePlace = card.firstElementChild.textContent.toLowerCase();
    if (NamePlace.indexOf(text) === -1) {
      card.style.display = "none";
    }
    else {
      card.style.display = "";
    }
  }
}

// ---------------hide show--------------

function showElement(element,isShow){
  if (isShow){
    element.style.display="block";
  }
  else{
    element.style.display="none";
  }
}
const createBtn=document.querySelector("#createId");
const closeBtn=document.querySelector("#closeId");
const formBtn=document.querySelector(".container");
const cardBtn=document.querySelector(".add-card");

function buttonCreate(event){
  showElement(closeBtn,true);
  showElement(formBtn,true);
  showElement(createBtn,false);
  showElement(cardBtn,false);
}
function buttonClose(event){
  showElement(closeBtn,false);
  showElement(formBtn,false);
  showElement(createBtn,true);
  showElement(cardBtn,true);
}

createBtn.addEventListener("click",buttonCreate);
closeBtn.addEventListener("click",buttonClose);

//   MAIN---------------------------------------------
let placeList1 = document.querySelector("#place-list1");
placeList1.addEventListener("click", deletePlace1);

let placeList = document.querySelector("#place-list2");
placeList.addEventListener("click", deletePlace2);

let addPlace = document.querySelector("#buttonCreate");
addPlace.addEventListener("click", addMorePlace);

let searchPlaceInputLocal = document.getElementById("search-placeLocal");
searchPlaceInputLocal.querySelector("#local");
searchPlaceInputLocal.addEventListener("keyup", searchNamePlace_L);

let searchPlaceInputAbroad = document.getElementById("search-placeAbroad");
searchPlaceInputAbroad.querySelector("#abroad");
searchPlaceInputAbroad.addEventListener("keyup", searchNamePlace_A);