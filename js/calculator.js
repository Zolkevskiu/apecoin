const receive = document.querySelectorAll('.calculator-apcoin-receive')
const send = document.querySelectorAll('.calculator-apcoin-send')
const receiveEter = document.querySelectorAll('.calculator-etereum-receive')
const sendEter = document.querySelectorAll('.calculator-etereum-send')

let inputeApecoin = () => {
    send[0].value = send[0].value.replace(/[^1-9]/,'');
    receive[0].innerHTML = `${send[0].value * 2}<img src="img/etereum.png" class="img-eter">`
    //media for mobile
    send[1].value = send[1].value.replace(/[^1-9]/,'');
    receive[1].innerHTML = `${send[1].value * 2}<img src="img/etereum.png" class="img-eter">`
 }
let inputeEter = () => {
    sendEter[0].value = sendEter[0].value.replace(/[^1-9]/,'');
    receiveEter[0].innerHTML = `${sendEter[0].value * 2}<img src="img/etereum.png" class="img-eter">`
    //media for mobile
    sendEter[1].value = sendEter[1].value.replace(/[^1-9]/,'');
    receiveEter[1].innerHTML = `${sendEter[1].value * 2}<img src="img/etereum.png" class="img-eter">`
 }