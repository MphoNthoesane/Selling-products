let soap = 15
let lotion = 32
let spray = 65
let numsoap = 0
let numlotion = 0
let numspray = 0
let moneysoap
let moneylotion
let moneyspray
let total

document.getElementById("soap").onclick = function(){
    numsoap++
    moneysoap = numsoap * soap
    document.getElementById("numsoaps").innerHTML = "Soap Quantity: " + numsoap
    document.getElementById("pricesoap").innerHTML = "R"+moneysoap
}
document.getElementById("lotion").onclick = function(){
    numlotion++
    moneylotion = numlotion * lotion
    document.getElementById("numlotion").innerHTML = "Lotion Quantity: " + numlotion
    document.getElementById("pricelotion").innerHTML = "R"+moneylotion
}
document.getElementById("spray").onclick = function(){
    numspray++
    moneyspray = numspray * spray
    document.getElementById("numspray").innerHTML = "Spray Quantity: " + numspray
    document.getElementById("pricespray").innerHTML = "R"+moneyspray
}
document.getElementById("quotation").onclick = function(){
    total = moneylotion + moneysoap + moneyspray
    document.getElementById("total").innerHTML = "R" + total
}