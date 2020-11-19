


import { docReady, debug } from './core/core.js';
debug('-------------------------------------- INSIDE INDEX.JS----------------------------------')
function index() {
    debug('--------------------------------------- INSIDE FUNCTION INDEX JS---------------12')
    let nickname = prompt("El teu nickname", "HARRY POTTER");
    let DEBUG = true;
    let extractedBalls = [];//where we keep the ball that we are extracting from the bass drum
    let linea = true;   //when a player sings linea
    let player;

    function WebSocketChat() {
        debug('--------------------------------------- entra en WEEEECHAT------------------------------------s')
        if ("WebSocket" in window) {
            if (DEBUG) console.log("WebSocket is supported by your Browser!");
            const socket = io();

            let sendBtn = document.getElementById('send');
            sendBtn.onclick = function () {
                let inputMessage = document.getElementById('message');
                //socket.emit('newMessage',`${nickname}: ${inputMessage.value}`)
                socket.emit('join', nickname);

            }

            //Event triggered every time a user joins a 
            //game where we are enrolled
            socket.on('joined', function (msg) {
                let all_players = [];
                let all;
                let messagesDiv = document.getElementById("chatMessages");
                // console.log('-->',msg)
                //console.log('---->',JSON.parse(msg));
                all = JSON.parse(msg)
                //  console.log('avore ara' ,all.players);
                //INFO TO ALL USERS THAT HOW MANY PLAYERS ARE IN TOTAL IN THE MATCH
                all.players.forEach(m => all_players.push(m.username));
                //  console.log('se añade',all_players);
                // console.log('els players ixos' ,all.players)
                messagesDiv.innerHTML = "<li><b>MATCH PLAYERS:</b> " + all_players + "</li>" + messagesDiv.innerHTML;
            });

            /* Event triggered once a user joins a 
            * game ang get a ramdom card with unique id that 
            * should not ve shared
            */
            socket.on('joined_game', function (infoPlayer) {
                let messagesDiv = document.getElementById("chatMessages");
                //console.log('------>',JSON.parse(infoPlayer))
                player = JSON.parse(infoPlayer)
                console.log('PLAYER INFO', player)
                player.nickname = nickname;
                messagesDiv.innerHTML = "<li style='background-color: red'>" + JSON.stringify(infoPlayer) + "</li>" + messagesDiv.innerHTML;
            });
            //Event notifying starts the game
            socket.on('starts_game', function (msg) {
                //let messagesDiv = document.getElementById("chatMessages");
                console.log(msg);
                //messagesDiv.innerHTML = "";
            });

            /**
             * To keep reporting the numbers that are coming out
             */

            socket.on('new_number', function (number) {
                let messagesDiv = document.getElementById("chatMessages");
                console.log('NUMERO', number);
                console.log('extrated', number);
                console.log('extrated-->', number.num);
                extractedBalls.push(number.num);
                // debugger;
                console.log(extractedBalls);
                messagesDiv.innerHTML = "NUMBER: " + number.num + " playId=" + number.id + "<br>" + messagesDiv.innerHTML;
                checkBingo(player.cardMatrix, extractedBalls, player);
                player.idplay = number.id;
                function checkBingo(cardMatrix, extractedBalls, player) {
                    console.log("entra en -- >checkbingo");
                    //debugger;
                    let bingo = true;
                    cardMatrix.forEach((row) => {
                        console.log("entra en forEach -- >checkbingo");
                        /**
                         * LINEA PROTOCOL
                         */
                        let line = row.filter((val) => { if (extractedBalls.indexOf(val) <= 0) return val }).length;
                        console.log("entra en forEach -- >checkbingo",line);
                        if (line > 0) {
                            console.log('entra if line')
                            bingo = false;
                        }
                        else {
                            console.log(linea);
                            if (linea) {
                                console.log("LINEA----> player", player);
                                socket.emit('LINEA', player);
                            }
                        }
                    })
                    if (bingo) {
                        socket.emit('BINGO', player)
                        console.log("BINGO---->player", player);
                    }
                }
            });

            socket.on('game_over', function (msg) {
                console.log(msg);
            });

            socket.on('LINEA', function (player_linea) {
                console.log(player_linea)
                alert("LINEA DEL JUGADOR "+player_linea.nickname)
                linea=false;
             });
 
             socket.on('BINGO', function (player_bingo) {
                alert("BINGO "+player_bingo.nickname)
             });
        } else {

            // The browser doesn't support WebSocket
            alert("WebSocket NOT supported by your Browser!");
        }

    }//end_WebSocketChat
    WebSocketChat();

}//end_index


docReady(() => index());



