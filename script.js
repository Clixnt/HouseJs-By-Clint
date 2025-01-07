// Code By Clint Justine Lorenzo
// • Container 
const wallDsgn = document.getElementById("wallDsgn");
const roofDsgn = document.getElementById("roofDsgn");
const windowDsgn = document.getElementById("windowDsgn");
const doorDsgn = document.getElementById("doorDsgn");
const GrassDsgn = document.getElementById("GrassDsgn");

// • Buttons
const reset = document.getElementById("resetLorenzo");
const roof = document.getElementById("roof");
const wall = document.getElementById("wall");
const door = document.getElementById("door");
const windows = document.getElementById("windows");
const ediwaw = document.getElementById("ediwaw");


reset.onclick = function() {
    roofDsgn.style.display = "none";
    wallDsgn.style.display = "none";
    GrassDsgn.style.display = "none";
    doorDsgn.style.display = "none";
    windowDsgn.style.display = "none";
};

roof.onclick = function() {
    roofDsgn.style.display = "block"
};

wall.onclick = function() {
    wallDsgn.style.display = "block";
    GrassDsgn.style.display = "block";
};

door.onclick = function() {
    doorDsgn.style.display = "block";
};

windows.onclick = function() {
    windowDsgn.style.display = "block";
};

ediwaw.onclick = function() {
    roofDsgn.style.display = "block";
    wallDsgn.style.display = "block";
    GrassDsgn.style.display = "block";
    doorDsgn.style.display = "block";
    windowDsgn.style.display = "block";
}