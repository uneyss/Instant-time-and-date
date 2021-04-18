// Name Section Start

let name = prompt("Lütfen İsminizi Giriniz")
let myName = document.querySelector("#myName")
myName.innerHTML = `${myName.innerHTML} ${name}`

// Name Section End

// Clock Function Start

function clock() {
    let hours = document.querySelector("#hours")
    let minutes = document.querySelector("#minutes")
    let seconds = document.querySelector("#seconds")
    

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
}
var interval = setInterval(clock, 1000);

// Clock Function End

// Date Function Start

function date(){
    let year = document.querySelector("#year")
    let month = document.querySelector("#month")
    let day = document.querySelector("#day")

    let y = new Date().getUTCFullYear();
    let m = new Date().getMonth();
    m+=1
    let d = new Date().getDate();

    year.innerHTML = y;
    month.innerHTML = m;
    day.innerHTML = d;


}
var interval_1 = setInterval(date);

// Date Function End

