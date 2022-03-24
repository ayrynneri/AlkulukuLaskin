function clearF() {
    var grab = document.getElementById("inputti");
      if (grab.value !="") {
          grab.value = "";
      }
    }
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }

function GetData() {
    var lista = []
    var x = document.getElementById("inputti").value;
    for (var i = 2; i<x; i++) {
        var b = 0;
        for (var ii = 2; ii<=9; ii++) {
            if (i !== ii && i%ii > 0) {
                b++
            }
        if (b>=7 && i%2 !== 0) {lista.push(i);}}
        console.log(b)
    }
        
lista = lista.filter((item,index) => lista.indexOf(item) === index);
    console.log(lista)
    const text = document.createTextNode(lista);
    const pNode = document.getElementById("vastaus");
    

    pNode.appendChild(text);
    sleep(5000).then(() => {vastaus.parentNode.removeChild(vastaus);})
    clearF()
    sleep(4000).then(() => {location.reload();})
}