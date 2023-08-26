const showClock = () =>{
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    document.getElementById("hour").innerHTML=`${hour}:${min}:${sec}`;
}