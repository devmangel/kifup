// Class to create rooms and set up all functions itself

class MotherRoom{

    constructor({id,size,description,name,status,level}){
        this.id = id;
        this.size = size;
        this.description = description;
        this.name = name;
        this.status = status;
        this.level = level;
        this.videoId = 0;
    }

    // Method that Create HTML Elements 

    static createDOM(anyId,descrip,level){

        
        const newRoom = document.createElement("div");
        document.getElementById('roomQueue').appendChild(newRoom);
        newRoom.classList.add('room');
        newRoom.setAttribute('id', anyId);
        newRoom.innerHTML = `<div class='room__container'><img src='./images/flag-english.png' alt='english room' class='room-icon'><div class='room-text__container'><h6 class='room-level'>${level}</h6><h6 class='room-description'>${descrip}</h6></div></div><button class='btn__join-room' onclick='openRoom2()'>Join</button></div>`;
    }

}

// Array with the active rooms global scope

const roomList = [];

// Button that create description and level of the room

function createRoom(){

                
        const newRoom = new MotherRoom({status: true});
        roomList.push(newRoom);
        
        for (item of roomList){

            if (item.status && roomList.length < 10){

                
                const descriptionRoom = document.getElementById('roomDescription').value;
                item.description = descriptionRoom;
                var level = document.getElementById("levelList");
                var levelSelected = level.options[level.selectedIndex].text;
                item.level = levelSelected;

                // Create html elements from this method
            
                const idCreated = newId()
                MotherRoom.createDOM(idCreated,item.description,item.level);

            } else {
                
                overlay.classList.remove('active');
	            popup.classList.remove('active');
            }

            overlay.classList.remove('active');
	        popup.classList.remove('active');
            

            // Set status false to avoid loop (for of) change it again

            item.status = false;
        }

    
}

// Counter of Id HTML divs

function idCount(){

    let idCounter = 0;

    function counter(){

        idCounter++

        return idCounter;
    }

    return counter;
}

const newId = idCount();


// Function that call API

function openRoom(){

    fetch('https://us-central1-beeooro-43fb4.cloudfunctions.net/createRoomExternalOp', {
    method: 'POST',
    body: JSON.stringify(dataApi),
    })
        .then(response => response.json())
        .then(data => {

            const idRoom = data.content;

            console.log(idRoom)
            
            })
        .catch((error) => {

            console.log(`We have an error: ${error}`)

            });
}

// Create complementary room

function openRoom2(){

    

}

const dataApi = {
        userName: "jKvU82PZIpKXiQwHnzwN",
        apiKey: "gns6glj2lchf1k5sdfba5bkgrhgs",
        roomName: "Kifup Room",
        roomType: "public",
        adminAccessKey:"jKvU82PZIpKXiQwHnzwN"
};


// Popup script to create a room

var btnAbrirPopup = document.getElementById('btn-abrir-popup'),
	overlay = document.getElementById('overlay'),
	popup = document.getElementById('popup'),
	btnCerrarPopup = document.getElementById('btn-cerrar-popup');

btnAbrirPopup.addEventListener('click', function(){
	overlay.classList.add('active');
	popup.classList.add('active');
});

btnCerrarPopup.addEventListener('click', function(e){
	e.preventDefault();
	overlay.classList.remove('active');
	popup.classList.remove('active');
});

// Popup script to open a videochat static
// Basic room

var btnOpenBasic = document.getElementById('btn-open-popup1'),
	overlayBasic = document.getElementById('basicRoomOverlay'),
	popupBasic = document.getElementById('basicPopupRoom'),
	btnCloseIntermediate = document.getElementById('btn-close-popup1');

btnOpenBasic.addEventListener('click', function(){
	overlayBasic.classList.add('active');
	popupBasic.classList.add('active');
});

btnCloseIntermediate.addEventListener('click', function(e){
	e.preventDefault();
	overlayBasic.classList.remove('active');
	popupBasic.classList.remove('active');
});

// Intermediate room

var btnOpenIntermediate = document.getElementById('btn-open-popup2'),
	overlayIntermediate = document.getElementById('intermediateRoomOverlay');
	popupIntermediate = document.getElementById('intermediatePopupRoom'),
	btnCloseIntermediate = document.getElementById('btn-close-popup2');

btnOpenIntermediate.addEventListener('click', function(){
    overlayIntermediate.classList.add('active');
	popupIntermediate.classList.add('active');
});

btnCloseIntermediate.addEventListener('click', function(e){
	e.preventDefault();
	overlayIntermediate.classList.remove('active');
	popupIntermediate.classList.remove('active');
});


// Advanced room

var btnOpenAdvanced = document.getElementById('btn-open-popup3'),
	overlayAdvanced = document.getElementById('advancedRoomOverlay'),
	popupAdvanced = document.getElementById('advancedPopupRoom'),
	btnCloseAdvanced = document.getElementById('btn-close-popup3');

btnOpenAdvanced.addEventListener('click', function(){
	overlayAdvanced.classList.add('active');
	popupAdvanced.classList.add('active');
});

btnCloseAdvanced.addEventListener('click', function(e){
	e.preventDefault();
	overlayAdvanced.classList.remove('active');
	popupAdvanced.classList.remove('active');
});




//===
// Variables for counter date video session
//===
const DATE_TARGET = new Date('01/21/2022 06:00 PM');
// DOM for render
const SPAN_DAYS = document.querySelector('span#days');
const SPAN_HOURS = document.querySelector('span#hours');
const SPAN_MINUTES = document.querySelector('span#minutes');
const SPAN_SECONDS = document.querySelector('span#seconds');
// Milliseconds for the calculations
const MILLISECONDS_OF_A_SECOND = 1000;
const MILLISECONDS_OF_A_MINUTE = MILLISECONDS_OF_A_SECOND * 60;
const MILLISECONDS_OF_A_HOUR = MILLISECONDS_OF_A_MINUTE * 60;
const MILLISECONDS_OF_A_DAY = MILLISECONDS_OF_A_HOUR * 24;

//===
// FUNCTIONS
//===

/**
 * Method that updates the countdown and the sample
 */
function updateCountdown() {
    // Calcs
    const NOW = new Date()
    const DURATION = DATE_TARGET - NOW;
    const REMAINING_DAYS = Math.floor(DURATION / MILLISECONDS_OF_A_DAY);
    const REMAINING_HOURS = Math.floor((DURATION % MILLISECONDS_OF_A_DAY) / MILLISECONDS_OF_A_HOUR);
    const REMAINING_MINUTES = Math.floor((DURATION % MILLISECONDS_OF_A_HOUR) / MILLISECONDS_OF_A_MINUTE);
    const REMAINING_SECONDS = Math.floor((DURATION % MILLISECONDS_OF_A_MINUTE) / MILLISECONDS_OF_A_SECOND);

    // Render
    SPAN_DAYS.textContent = REMAINING_DAYS;
    SPAN_HOURS.textContent = REMAINING_HOURS;
    SPAN_MINUTES.textContent = REMAINING_MINUTES;
    SPAN_SECONDS.textContent = REMAINING_SECONDS;
}

//===
// INIT
//===
updateCountdown();
// Refresh every second
setInterval(updateCountdown, MILLISECONDS_OF_A_SECOND);

// Alert when subit registration form

function messageConfirmation(){

    let getEmail = document.getElementById("message-5a105").value;
    let getMessage = document.getElementById("message-5a100").value;

        if(getEmail.length != 0 && getMessage.length != 0){

            
            document.getElementById("message-5a105").innerHTML = " ";
            document.getElementById("message-5a100").innerHTML = " ";

            document.getElementById("btn-send").innerHTML = "¡Registro Enviado!";
            alert("¡Registro exitoso!")
            
        }

};

function limpiar(){

    setTimeout('document.formreg.reset()',100);

    return false;
};


