// return an element with an id using getElementBy

const hourE1 = document.getElementById("hour");
const minuteE1 = document.getElementById("minute");
const secondsE1 = document.getElementById("seconds");
const ampmE1 = document.getElementById("ampm");


function updateTime() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

if(h > 12){
    h = h - 12;
    ampm = "PM";
}
h = h < 10? "0" + h : h;
/** this can also be written as 
 * if(h<10){
        return "0" + h;
    } else{
        return h;
    }
 * 
 * 
 */


hourE1.innerText = h;
minuteE1.innerText = m;
secondsE1.innerText = s;
ampmE1.innerText = ampm;

setTimeout( ()=>{
    updateTime()
}, 1000)

}
updateTime();
