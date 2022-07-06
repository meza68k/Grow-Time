
//literally took me an hour to find out Date() is a function
var date = new Date();

var setCalender = function(){
date.setDate(1);

var mDays = document.querySelector('.days')
//grabs the last dat of the current month
var lDay = new Date(date.getFullYear(),date.getMonth()+1,0).getDate();
//grabs the last day of the previous month
var prevDay = new Date(date.getFullYear(),date.getMonth(),0).getDate();
//grabs the first day of the set months index 
var firstDay = date.getDay();
//grabs the lsat day of the months index
var lastDay = new Date(date.getFullYear(),date.getMonth()+1,0).getDay();
//sets how many days to display after the current month
var nextDays = 7-lastDay-1;
//by putting them in an array i can pull them dynamically
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
//grabs the month index which happens to equal my array 
var currentMonth = date.getMonth();
//auto sets the month to present time
document.querySelector('.date h1').innerHTML =months[currentMonth];
//auto sets the date
document.querySelector(".date p").innerHTML = date.toDateString();

let days = "";
//by placing the first day loop, first it auto generates the month that is set based off the first days index number
//sun = 0 monday = 1 and so on and so on 
for(var d= firstDay;d > 0;d--){
    days += `<div class="prev-date">${prevDay-d+1}</div>`;
}
//this generates the numbers and stops at the last day of the set month 
for(var i = 1;i <= lDay;i++){
    if(i === new Date().getDate()&& date.getMonth()=== new Date().getMonth()){
        days += `<div class="today">${i}</div>`;
    }else{
        days += `<div>${i}</div>`;
        mDays.innerHTML = days;
    }

};
//this generates the last couple of days if theres room
for(var n = 1;n <= nextDays;n++){
    days += `<div class="next-date">${n}</div>`;
    mDays.innerHTML = days;
};

}


//arrow buttons
document.querySelector('.prev').addEventListener('click',()=>{
    date.setMonth(date.getMonth()-1)
    setCalender();
});
document.querySelector('.next').addEventListener('click',()=>{
    date.setMonth(date.getMonth()+1)
    setCalender();
});

setCalender();


