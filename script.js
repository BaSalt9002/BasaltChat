document.getElementById("msgBox").innerHTML = "Hello, there!";
  const fs = require('fs');
  function sendMsg() {
    alert("button was clicked!");
    fs.readFile('messages.txt', (err, data) => {
    if (err) throw err;
 
    console.log(data.toString());
    document.getElementById("msgBox").innerHTML = data.toString();
    })
}