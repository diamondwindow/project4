function updatedate(){
    var date = new Date();
    var setTime =document.getElementById("setTime");
    setTime .innerHTML=date.getHours() +":"+ date.getMinutes ()+":"+date.getSeconds();
    var setDate = document.getElementById("setDate");
    setDate.innerHTML= date.getDate() +"-"+  parseInt(date.getMonth() +1) +"-"+ date.getFullYear()

}
setInterval(updatedate,50) 
onload = updatedate();

function getColor(){

var getColor= document.getElementById("setColor",getColor).value;
localStorage.setItem("Color",getColor );
document.getElementById("time").style.background=localStorage.getItem("Color")
document.getElementById("body").style.background=localStorage.getItem("Color")
}

function setColor(){
document.getElementById("setColor").value=localStorage.setItem("Color")

document.getElementById("time").style.background=localStorage.getItem("Color")
document.getElementById("body").style.background=localStorage.getItem("Color")
}

setInterval(setColor,20000);