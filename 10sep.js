//function clickEventHandller(ev) {
    console.log(ev);
//}

//Event

function doubleclickHandller(ev){
    alert("you clicked me two times");
}

function changeEventHandler(ev){
document.getElementById("output").innerHTML = ev.target.value;
}