/* 

Portfolio javascript functions

*/

let box = document.getElementById('color');
let word = document.getElementById('word');

box.addEventListener("click",function() {
    alert('Welcome');

    let bg = word.style.background;
    if(bg == "white"){
        word.style.background = "black";
        word.style.color = "white";
        
    }
    else { 
        word.style.background = "white";
        word.style.color = "black";
        word.innerHTML = "Tada!"
    }
    
});