function updatedate(){
    var date=new Date();
    var set_time=document.getElementById("set_time");
    set_time.innerHTML=date.getHours() +":"+date.getMinutes()+":"+date.getSeconds();

    var date1=document.getElementById("date");
    date1.innerHTML=(parseInt(date.getDate()))+"-"+((parseInt(date.getMonth()))+1)+"-"+date.getFullYear();


}
setInterval(updatedate,100);
setInterval(setColor(),100);
onload=()=>{
    updatedate();
    
}
function getColor(){
    var getcolor=document.getElementById("set_color").value;
    alert(getcolor);
    localStorage.setItem("color",getcolor);
    document.getElementById("time").style.background=localStorage.getItem("color");
    document.getElementById("body").style.background=localStorage.getItem("color");
}
function  setColor(){
    document.getElementById("set_color").value=localStorage.getItem("color");
    document.getElementById("time").style.background=localStorage.getItem("color");
    document.getElementById("body").style.background=localStorage.getItem("color");


}