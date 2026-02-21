console.log("machine.js loaded");

function getValue(id) {
    const element = document.getElementById(id);
    const value = element.value;
    console.log( id,value);
    return value;
}