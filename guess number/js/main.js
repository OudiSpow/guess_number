var inputNumber = document.getElementById("input-number");
var alert = document.getElementById("alert");
secreNumber = 10;

inputNumber.onkeyup = function(event){
    if(event.key === "Enter"){
        var guess = parseFloat(event.target.value);
        var alert = document.getElementById("alert");

        if(guess === secreNumber){
            alert.innerText = "Gefeliciteerd";
            alert.style.display = "block";
        }else if (guess > secreNumber){
            alert.innerText = "hoog";
            alert.style.display = "block";
        }else{
            alert.innerText = "laag";
            alert.style.display = "block";
        }

    }
}