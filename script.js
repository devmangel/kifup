// Class to create front rooms (just HTML) and set up all functions itself

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


// Class to create new participants

class Participants{

    constructor({name,roomLevel}){
        this.name = name;
        this.roomLevel = roomLevel;
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





// Popup script to open a videochat 'static rooms'

var script = document.createElement("script");
script.type = "text/javascript";

// Basic - setting up video chat room

var	overlayBasic = document.getElementById('basicRoomOverlay'),
	popupBasic = document.getElementById('basicPopupRoom'),
	btnCloseBasic = document.getElementById('btn-close-popup1');

    btnCloseBasic.addEventListener('click', function(e){
    e.preventDefault();
    overlayBasic.classList.remove('active');
    popupBasic.classList.remove('active');

    window.location.reload();
});

 function* startBasicRoom(){
	
    overlayBasic.classList.add('active');
	popupBasic.classList.add('active');

    
    yield;

    document.getElementById('visibility').style.display = 'none';

    const name = document.getElementById('name1').value
    const person = new Participants({name: name, roomLevel: 'Basic'})

    const config = {

        name: person.name || 'Little bird',
        meetingId: "kifup_basic",
        apiKey: "75fcaa7a-c874-4122-9fb4-4541ef22216f",
    
        micEnabled: true,
        webcamEnabled: false,
        participantCanToggleSelfWebcam: true,
        participantCanToggleSelfMic: true,
    
        chatEnabled: true,
        screenShareEnabled: true,
    
        pollEnabled: true,
        whiteBoardEnabled: true,
        raiseHandEnabled: true,
    
        brandingEnabled: true,
        brandLogoURL: "https://kifup.club/images/logo.png",
        brandName: "Kifup",
        poweredBy: false,
    
        participantCanLeave: false,
      };
    
      const basic = new VideoSDKMeeting();
      roomList.push(basic);
      basic.init(config);
    
};

const basicStart = startBasicRoom();

// Intermediate - setting up video chat room

var	overlayIntermediate = document.getElementById('intermediateRoomOverlay');
	popupIntermediate = document.getElementById('intermediatePopupRoom'),
	btnCloseIntermediate = document.getElementById('btn-close-popup2');

btnCloseIntermediate.addEventListener('click', function(e){
	e.preventDefault();
	overlayBasic.classList.remove('active');
	popupBasic.classList.remove('active');

    window.location.reload();
});

function* startInterRoom(){

    overlayIntermediate.classList.add('active');
	popupIntermediate.classList.add('active');

    yield;

    document.getElementById('visibility2').style.display = 'none';

    const name = document.getElementById('name2').value
    const person = new Participants({name: name, roomLevel: 'Basic'})

    const config = {

        name: person.name || 'Little bird',
        meetingId: "kifup_intermediate",
        apiKey: "75fcaa7a-c874-4122-9fb4-4541ef22216f",

        containerId: null,
    
        micEnabled: true,
        webcamEnabled: false,
        participantCanToggleSelfWebcam: true,
        participantCanToggleSelfMic: true,
    
        chatEnabled: true,
        screenShareEnabled: true,
    
        pollEnabled: true,
        whiteBoardEnabled: true,
        raiseHandEnabled: true,
    
        brandingEnabled: true,
        brandLogoURL: "https://kifup.club/images/logo.png",
        brandName: "Kifup",
        poweredBy: false,
    
        participantCanLeave: false,
      };
    
      const intermediate = new VideoSDKMeeting();
      roomList.push(intermediate);
      intermediate.init(config);

};

const interStart = startInterRoom()


// Advanced - setting up video chat room


var	overlayAdvanced = document.getElementById('advancedRoomOverlay'),
	popupAdvanced = document.getElementById('advancedPopupRoom'),
	btnCloseAdvanced = document.getElementById('btn-close-popup3');


btnCloseAdvanced.addEventListener('click', function(e){
	e.preventDefault();
	overlayAdvanced.classList.remove('active');
	popupAdvanced.classList.remove('active');
    window.location.reload();
});

function* startAdvancedRoom(){

    overlayAdvanced.classList.add('active');
    popupAdvanced.classList.add('active');

    yield;

    document.getElementById('visibility3').style.display = 'none';

    const name = document.getElementById('name3').value
    const person = new Participants({name: name, roomLevel: 'Basic'})

    const config = {

    name: person.name || 'Little bird',
    meetingId: "kifup_advanced",
    apiKey: "75fcaa7a-c874-4122-9fb4-4541ef22216f",

    micEnabled: true,
    webcamEnabled: false,
    participantCanToggleSelfWebcam: true,
    participantCanToggleSelfMic: true,

    chatEnabled: true,
    screenShareEnabled: true,

    pollEnabled: true,
    whiteBoardEnabled: true,
    raiseHandEnabled: true,

    brandingEnabled: true,
    brandLogoURL: "https://kifup.club/images/logo.png",
    brandName: "Kifup",
    poweredBy: false,

    participantCanLeave: false,
  };

  const advanced = new VideoSDKMeeting();
  roomList.push(advanced);
  advanced.init(config);

};

const advancedStart = startAdvancedRoom();


// Spanish - setting up video chat room

var	overlaySpanish = document.getElementById('spanishOverlay'),
	popupSpanish = document.getElementById('spanishPopupRoom'),
	btnCloseSpanish = document.getElementById('btn-close-popup4');

btnCloseSpanish.addEventListener('click', function(e){
	e.preventDefault();
	overlaySpanish.classList.remove('active');
	popupSpanish.classList.remove('active');
    window.location.reload();
});

function* startSpanishRoom(){

    overlaySpanish.classList.add('active');
    popupSpanish.classList.add('active');

    yield;

    document.getElementById('visibility4').style.display = 'none';

    const name = document.getElementById('name4').value
    const person = new Participants({name: name, roomLevel: 'Basic'})

    const config = {

    name: person.name || 'Little bird',
    meetingId: "kifup_spanish",
    apiKey: "75fcaa7a-c874-4122-9fb4-4541ef22216f",

    micEnabled: true,
    webcamEnabled: false,
    participantCanToggleSelfWebcam: true,
    participantCanToggleSelfMic: true,

    chatEnabled: true,
    screenShareEnabled: true,

    pollEnabled: true,
    whiteBoardEnabled: true,
    raiseHandEnabled: true,

    brandingEnabled: true,
    brandLogoURL: "https://kifup.club/images/logo.png",
    brandName: "Kifup",
    poweredBy: false,

    participantCanLeave: false,
  };

  const spanish = new VideoSDKMeeting();
  roomList.push(spanish);
  spanish.init(config);

};

const spanishStart = startSpanishRoom();


// Frennch - setting up video chat room

var	overlayFrench = document.getElementById('frenchOverlay'),
	popupFrench = document.getElementById('frenchPopupRoom'),
	btnCloseFrench = document.getElementById('btn-close-popup5');

    btnCloseFrench.addEventListener('click', function(e){
	e.preventDefault();
	overlayFrench.classList.remove('active');
	popupFrench.classList.remove('active');
    window.location.reload();
});

function* startFrenchRoom(){

    overlayFrench.classList.add('active');
    popupFrench.classList.add('active');

    yield;

    document.getElementById('visibility5').style.display = 'none';

    const name = document.getElementById('name5').value
    const person = new Participants({name: name, roomLevel: 'Basic'})

    const config = {

    name: person.name || 'Little bird',
    meetingId: "kifup_french",
    apiKey: "75fcaa7a-c874-4122-9fb4-4541ef22216f",

    micEnabled: true,
    webcamEnabled: false,
    participantCanToggleSelfWebcam: true,
    participantCanToggleSelfMic: true,

    chatEnabled: true,
    screenShareEnabled: true,

    pollEnabled: true,
    whiteBoardEnabled: true,
    raiseHandEnabled: true,

    brandingEnabled: true,
    brandLogoURL: "https://kifup.club/images/logo.png",
    brandName: "Kifup",
    poweredBy: false,

    participantCanLeave: false,
  };

  const french = new VideoSDKMeeting();
  roomList.push(french);
  french.init(config);

};

const frenchStart = startFrenchRoom();

// Arabic - setting up video chat room

var	overlayArabic = document.getElementById('arabicOverlay'),
	popupArabic = document.getElementById('arabicPopupRoom'),
	btnCloseFrench = document.getElementById('btn-close-popup6');

    btnCloseFrench.addEventListener('click', function(e){
	e.preventDefault();
	overlayArabic.classList.remove('active');
	popupArabic.classList.remove('active');
    window.location.reload();
});

function* startArabicRoom(){

    overlayArabic.classList.add('active');
    popupArabic.classList.add('active');

    yield;

    document.getElementById('visibility6').style.display = 'none';

    const name = document.getElementById('name6').value
    const person = new Participants({name: name, roomLevel: 'Arabic'})

    const config = {

    name: person.name || 'Little bird',
    meetingId: "kifup_arabe",
    apiKey: "75fcaa7a-c874-4122-9fb4-4541ef22216f",

    micEnabled: true,
    webcamEnabled: false,
    participantCanToggleSelfWebcam: true,
    participantCanToggleSelfMic: true,

    chatEnabled: true,
    screenShareEnabled: true,

    pollEnabled: true,
    whiteBoardEnabled: true,
    raiseHandEnabled: true,

    brandingEnabled: true,
    brandLogoURL: "https://kifup.club/images/logo.png",
    brandName: "Kifup",
    poweredBy: false,

    participantCanLeave: false,
  };

  const arabic = new VideoSDKMeeting();
  roomList.push(arabic);
  arabic.init(config);

};

const arabicStart = startArabicRoom();

// Add source to videos script on <head> selector

script.src = "/videosdk.js";
document.getElementsByTagName("head")[0].appendChild(script);


//===
// Variables for counter date video session
//===
const DATE_TARGET = new Date('02/04/2022 06:00 PM');
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


