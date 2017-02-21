// without a closure
/*var count = 0;
window.onload = function() {
    var button = document.getElementById("clickme");
    button.onclick = handleClick;
};

function handleClick() {
    var message = "You click me ";
    var div = document.getElementById("message");
    count++;
    div.innerHTML = message + count + " times";
}
*/
//WITH a closure
window.onload = function() {
    var count = 0; 
    var message = "You click me ";
    var div = document.getElementById("message");
    
    var button = document.getElementById("clickme");
    button.onclick = function() {
        count++;
        div.innerHTML = message + count + " times";
    };
    
};