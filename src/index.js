import { carton } from './js/bingo_card.js';
import Bombo from './js/bombo.js';

function startbingo() {
    let bombo = new Bombo()
    let number = bombo.pickNumber()
    console.log('numero', number);

    document.getElementById('num').innerHTML = number;
}


setInterval(() => {
    startbingo();

}, 2000);
setInterval(() => {
    carton();
}, 2000);