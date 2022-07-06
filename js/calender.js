var date = new Date();

var mDays = document.querySelector('.days')

var lDay = new Date(date.getFullYear(),date.getMonth()+1,0).getDate();


var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

var currentMonth = date.getMonth();

document.querySelector('.date h1').innerHTML =months[currentMonth]

document.querySelector(".date p").innerHTML = date.toDateString();

let days = "";

for(var i = 1;i <= lDay;i++){
    days += `<div>${i}</div>`;
    mDays.innerHTML = days;

};
