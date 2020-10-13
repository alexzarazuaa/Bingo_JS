import './css/style.css';
import { docReady } from './js/core/core.js';
import './js/card.js';
import { Bombo } from './js/bombo.js';
import { Card } from './js/card.js';
import { pubSub } from './js/pubsub.js'

let app = (() => {
    //let el = document.getElementById("ball");
    let myApp;
    let bombo;
    let myCard = new Card(document.getElementById('bingoCard'));
    let stateApp = "stop"
    //let card2;
  
    console.log(pubSub)

    let play = () => {
        let num = bombo.pickNumber();

        if (num) {
            //document.getElementById('balls').innerHTML = "<h1>"+bombo.getExtractedNumbers()+"</h1>";
            let ballDiv = document.createElement('div');
            ballDiv.className = 'bingoBall';
            ballDiv.textContent = num;
            document.getElementById('balls').appendChild(ballDiv);
            //myCard.renderBingoCard(bombo.getExtractedNumbers());
            pubSub.publish('numberBall', {
                numberballs: bombo.getExtractedNumbers()
            });
            //innerHTML = "<h1>"+bombo.getExtractedNumbers()+"</h1>";

            //innerHTML = renderBingoCard(myCard, card2);
            //document.getElementById('bingoCard').innerHTML = renderBingoCard(myCard, bombo.getExtractedNumbers());
            //document.getElementById('bingoCard').innerHTML = renderBingoCard(generateBingoCard());
        } else {
            stop();
        }
        //document.getElementById('bingoCard').innerHTML = renderBingoCard(generateBingoCard);
    };
    let stop = () => {
        stateApp = "stop";
        clearInterval(myApp);
    }
    let start = () => {
        bombo = new Bombo();
        stateApp = "run";
        //myCard.renderBingoCard(bombo.getExtractedNumbers());
        pubSub.publish('numberBall', {
            numberballs: bombo.getExtractedNumbers()
        });
        myApp = setInterval(play, 210);
    }



    let line = pubSub.subscribe('linea',function (data) {
        pubSub.publish('lineacheck', { data })
        document.getElementById('linea').innerHTML = " <h1>LINEA</h1>";
    });

    let bingo = pubSub.subscribe( 'bingo' ,function (data) {
        document.getElementById('bingo').innerHTML = " <h1>ERES EL GANADOR DEL BINGO</h1>";
        app.stop();
    });




    return {
        start: start,
        toggle: () => {
            (stateApp == "run") ? stop() : start();
        },
        line: line,
        bingo: bingo,
    };

})();

docReady(app.start);

//if (module.hot)       // eslint-disable-line no-undef
//  module.hot.accept() // eslint-disable-line no-undef

export { app };