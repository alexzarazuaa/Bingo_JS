

import { BomboOnline } from '../RendersOnline/Bombo.js';
import { Bombo } from '../bombo.js'
import { BingoCardOnline } from './Card.js';
import { app } from '../../index.js';



export let Play_online = (data, socket) => {

    console.log(data);

    let bombo_online;
    let bombo;
    /* Basic template where we are going to render bingo play */
    let doc = new DOMParser().parseFromString(`
            <div class="gameLayout">
                <div id="bingoCards" class="cards"></div>
                <div class="panel">
                    <div id="balls" class="balls__grid"></div>
                </div>
            </div>
        `, 'text/html');

    let layout = doc.body.firstChild;
    document.getElementById('main').appendChild(layout);

    /* Layer where initial background video has been loaded we
    need to remove it as we are going to start playing */
    let videoEl = document.getElementById('videoBackground');
    if (videoEl) videoEl.remove();

    bombo = new Bombo(document.getElementById('balls'));
    bombo_online = new BomboOnline();



    document.getElementById('bingoCards').innerHTML = ""
    /* Create one bingo card for every bingo player */
    console.log(data, 'data');
    let players = JSON.parse(data);
    console.log(players.players);

    let CardOnline = BingoCardOnline();

    players.players.forEach(player => {
        console.log(player)
     
        console.log(CardOnline)
        CardOnline.renderCardOnlie(player.username,player.card,'bingoCards')
        //BingoCardOnline.renderCardOnlie(player.username,player.card,'bingoCard');
    });

    let extractedBalls = [];
      // Render bingo card again when a new number is announced
    socket.on('new_number', function (number) {
        console.log('Numero-------->', number.num)

        bombo_online.RenderOnline(number.num);
       CardOnline.RendenOnlineCard(number.num)
    });

     


    /* Start throwing first ball from bombo. Here we go */
debugger
}