
//comprobar que cante be el bingo y la //arreglar el render que pinta la linea y el bingo
//implementar el unsubscriber en la linea,borrar el que estiguen suscrits a linea

import { pubSub } from './pubsub.js'
import { app } from '../index.js'


export class Card {

    constructor(element) {
        let templateRow = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        let cardMatrix = [
            [...templateRow],
            [...templateRow],
            [...templateRow]
        ];
        let linea = false;
        let bingo = false;

        //Transpose matrix to fullfill all cells with random numbers
        let transposedCardMatrix = transpose(cardMatrix);
        transposedCardMatrix.forEach((colCard, index) => {
            transposedCardMatrix[index] = getRandomArbitrary(index * 10, (index * 10) + 10, 3);
        });
        //Again transpose to get original shape
        cardMatrix = transpose(transposedCardMatrix);

        let row1Blanks = getBlanks(cardMatrix[0]); //Get four empty cells
        let row2Blanks = getBlanks(cardMatrix[1]); //Get four empty cells
        //Pass two arrays eliminate numbers duplicates on both and from resulting array pick only an array of 4 elements
        let duplicatesNonSelectable = row1Blanks.filter(function (i) { return row2Blanks.indexOf(i) >= 0; });
        let templateRow1 = [...cardMatrix[2]];
        duplicatesNonSelectable.forEach((elem) => templateRow1[elem] = null);
        let row3Blanks = getBlanks(templateRow1.filter((elem) => elem != null));
        let card2 = cardMatrix.map((_, colIndex) => (cardMatrix[colIndex]).filter((_, element) => ((cardMatrix[colIndex][element]) !== null)))
        row1Blanks.forEach((elem) => cardMatrix[0][elem] = null); //Put a null in every empty picked cell row1
        row2Blanks.forEach((elem) => cardMatrix[1][elem] = null); //Put a null in every empty picked cell row2
        row3Blanks.forEach((elem) => cardMatrix[2][elem] = null);



        //suscrbimos los numeros que se van extrayendo del bombo.
        let renderBingoCard = pubSub.subscribe('numberBall', function (data, extractedBalls) {
            //this.renderBingoCard = function(extractedBalls){
            let out = "<table class='bingoCard'>"
            extractedBalls = data.numberballs;
            let extractedball;
            console.log(extractedBalls)
            console.log(data.numberballs)

            cardMatrix.forEach((row) => {

                // console.log(cardMatrix);
                row = (row.length == 10) ? row.splice(-1, 1) : row

                out += "<tr>"
                row.forEach((cellValue) => {
                    console.log(cellValue)

                    // console.log(cellValue)
                    if (cellValue == null) {
                        console.log('celda null')
                        out += "<th class='nulo'></th>";
                    } else {
                        if (extractedBalls && extractedBalls.indexOf(cellValue) >= 0) {

                            extractedball = (extractedBalls[extractedBalls.length - 1])


                            out += "<th class='extracted'>" + cellValue + "</th>";
                        } else {
                            out += "<th>" + cellValue + "</th>";
                        }
                    }
                });
                out += "</tr>";
            })
            out += "</table>";


            element.innerHTML = out;
            // line(card2,extractedball);
            // cuando hay linea es igual a true y esta a la espera del publish de linea
            pubSub.subscribe('lineacheck', function (data) {
                //line(card2,extractedball);
                linea = true;
            })
            if (linea == false) line(card2, extractedball);
            if (bingo == false) line(card2, extractedball);




        });//end_this_render

    } //end_constructor



}//class card


//Pass an array and we ramdomly pick only an array of 4 elements supposed to be blanks
function getBlanks([...ai]) {
    let iterator = Array.apply(null, Array(ai.length - 4));
    iterator.forEach((el) => {
        ai.splice(Math.floor(Math.random() * ai.length), 1);
    });
    return ai.map((elem) => Math.floor(elem / 10))
}
/**
 * Returns count random numbers between min (inclusive) and max (exclusive)
 */
function getRandomArbitrary(min, max, count) {
    let arr3 = []
    min = (min == 0) ? 1 : min
    max = (max == 90) ? 91 : max

    do {
        let randN = Math.floor(Math.random() * (max - min) + min);
        if (!arr3.includes(randN)) arr3.push(randN);
    } while (arr3.length != count)
    return arr3.sort();
}

// Transpose a matrix
function transpose(matrix) {
    return matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
}


//function to check line bingo

function line(card2, extractedball) {
    //let pubSub = pubSub();
    console.log('function check linea', extractedball)
    card2.forEach(row => {
        row.forEach(element => {
            console.log(element)

            if (element == extractedball) {
                console.log('primera linea')
                let index = (row.indexOf(element));
                row.splice(index, 1);

                let int = 0;
                if (row.length == 0) {
                    card2.forEach(row => {
                        if (row.length == 0) {
                            int = int + 1;
                        }
                    })

                        //if que comprueba cuando salta la primera linea para que no salte en las dos siguientes
                        //if que comprueba cuando es bingo
                    if (int == 1) {
                        alert('int 1')
                        pubSub.publish('linea');
                    }
                     if (int == 3) {
                        alert('YEES BINGO')
                        pubSub.publish('bingo');
                    }

                }


            }
        })
    })

}
