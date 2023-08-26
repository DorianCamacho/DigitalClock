const showClock = () =>{
    let date = new Date();
    let hour = hourFormat(date.getHours());
    let min = hourFormat(date.getMinutes());
    let sec = hourFormat(date.getSeconds());
    document.getElementById("hour").innerHTML=`${hour}:${min}:${sec}`;

    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let dayWeek = days[date.getDay()];
    let day = date.getDay();
    let month = months[date.getMonth()];
    let dateText = `${dayWeek}, ${day} ${month}`;
    document.getElementById("date").innerHTML = dateText;

    document.getElementById("container").classList.toggle("animate");
}

const hourFormat = (hour) =>{
    if(hour<10){
        hour = "0"+hour;
    }
    return hour;
}

setInterval(showClock, 1000);