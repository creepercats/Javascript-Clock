const CHILDREN = document.getElementById('days').children;
const TIME = document.getElementById('time');
const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const TWENTY_FOUR_HOUR_BUTTON = document.getElementById('twenty-four-hour');
const TWELVE_HOUR_BUTTON = document.getElementById('twelve-hour');

let date = new Date();
let display24Hour = true;

function UpdateDisplay(){
    date = new Date();

    SetCurrentDay();

    if(display24Hour){
        SetCurrentTime24Hour();
    }
    else{
        SetCurrentTime12Hour();
    }
    

    setTimeout(UpdateDisplay, 1000);
}

function SetCurrentDay(){
    let currentDay = DAYS[date.getDay()];

    for (let i = 0; i < CHILDREN.length; i++){
        CHILDREN[i].classList.remove('selected');

        if(CHILDREN[i].textContent === currentDay){

            CHILDREN[i].classList.add('selected');
        }
    }
}

function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

function SetCurrentTime24Hour(){
    let hours = addZero(date.getHours());
    let minutes = addZero(date.getMinutes());
    let seconds = addZero(date.getSeconds());

    let currentTime = hours + ':' + minutes + ':' + seconds;
    TIME.innerHTML = currentTime;
}

function SetCurrentTime12Hour(){
    let hours = date.getHours();
    let minutes = addZero(date.getMinutes());
    let seconds = addZero(date.getSeconds());
    let ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;

    let strTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    TIME.innerHTML = strTime;
}

function SetDisplayTime24Hours(){
    display24Hour = true;

    TWELVE_HOUR_BUTTON.classList.remove('selected');
    TWENTY_FOUR_HOUR_BUTTON.classList.remove('selected');
    TWENTY_FOUR_HOUR_BUTTON.classList.add('selected');

    SetCurrentTime24Hour();
}

function SetDisplayTime12Hours(){
    display24Hour = false;

    TWENTY_FOUR_HOUR_BUTTON.classList.remove('selected');
    TWELVE_HOUR_BUTTON.classList.remove('selected');
    TWELVE_HOUR_BUTTON.classList.add('selected');

    SetCurrentTime12Hour();
}

UpdateDisplay();