function sendMsg() {
    alert("button was clicked!");
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function() {
        const myObj = JSON.parse(this.responseText);
        document.getElementById("msgBox").innerHTML = myObj.name;
    };
    xmlhttp.open("GET", "messages.txt");
    xmlhttp.send();
}