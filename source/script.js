




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
      basic.init(config);
      addVisitor(keyword);
    
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

const dinamicKey = '621a79cd34fd621565858a02';

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

let visits = 0;

async function addVisitor(level){

    let request;

    switch (level) {
        case 'basic':
            request = 'basic';
          break;
    }

    await fetch("https://kifup-bc91.restdb.io/rest/visits",{
        method: 'GET',
        "content-type": "application/json",
        headers: {'x-apikey':dinamicKey}
    })

    .then(response => response.json())
    .then(data => {
        visits = data[0].request;
        console.log(visits)
    })
    .then(visits + 1)

    let data = {
        level: visits
    }

    // await fetch("https://kifup-bc91.restdb.io/rest/visits/621a6e860f9df716000dba46",{
    //     method: 'PUT',
    //     "content-type": "application/json",
    //     headers: {'x-apikey': dinamicKey},
    //     body: JSON.stringify(data)
    
    //     })
    }
