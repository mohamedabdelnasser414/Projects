const days =document.querySelector(".days");
const hours =document.querySelector(".hours");
const minutes =document.querySelector(".minutes");
const seconds =document.querySelector(".seconds");


function countDown(){
const newYear = new Date("2021/01/01")
const currentDate = new Date();
const totalSeconds = (newYear - currentDate)/1000 ;
const remainingDays = Math.floor(totalSeconds / (3600 *24));
const remainingHours = Math.floor ((totalSeconds/ 3600)%24);
const remainingMinutes = Math.floor ((totalSeconds/ 60)%60);
const remainingSeconds = Math.floor (totalSeconds%60);

    days.innerText= formatTime(remainingDays);
    hours.innerText = formatTime(remainingHours);
    minutes.innerText= formatTime(remainingMinutes);
    seconds.innerText= formatTime(remainingSeconds);
}
function formatTime(time){
    return time < 10 ? `0${time}`: time;
}
countDown();

setInterval(countDown, 1000);