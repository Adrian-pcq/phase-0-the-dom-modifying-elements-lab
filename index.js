// Write your code here!
const del = document.getElementById("main");
del.remove();

const newHeader = document.createElement("h1");
document.body.append(newHeader);

newHeader.setAttribute('id', 'victory');

const text = document.createTextNode("Adrian is the champion");
newHeader.appendChild(text);