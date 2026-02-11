
// let hourEl = document.getElementById('hour');
// let minutesEl = document.getElementById('minutes');
// let secondEl = document.getElementById('second');
// let ampmEl = document.getElementById('ampm');

// function digiclock() {
//     let hour = new Date().getHours();
//     let minutes = new Date().getMinutes();
//     let second = new Date().getSeconds();
//     let ampm = 'AM'


//     if (hour > 12) {
//         hour -= 12;
//         ampm = "PM"
//     }


//     hour = hour < 10 ? "0" + hour : hour;
//     minutes = minutes < 10 ? "0" + minutes : minutes;
//     second = second < 10 ? "0" + second : second;

//     hourEl.innerText = hour;
//     minutesEl.innerText = minutes;
//     secondEl.innerText = second;
//     ampmEl.innerText = ampm;

//     setTimeout(digiclock, 1000)
// }
// digiclock();

// ==================================================================

let hourEl = document.getElementById('hour');
let minutesEl = document.getElementById('minutes');
let secondEl = document.getElementById('second');
let ampmEl = document.getElementById('ampm');

function digiclock() {
    let hour = new Date().getHours();
    let minute = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    let ampm = "PM";
    
    // if(hour<12){
    //     ampm="PM"

    // }
    if (hour > 12) {
        hour -= 12;
        ampm="PM"
    }
    // create zero behind number ;
    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    //  وصل کردن نمبری های ساعت از ابچ تی ام ال به ساعت اصلی
    hourEl.innerText = hour;
    minutesEl.innerText = minute;
    secondEl.innerText = seconds;
    ampmEl.innerText=ampm;

    //  تنظیم ثانییه 
    setTimeout(digiclock, 1000)

}
digiclock();



