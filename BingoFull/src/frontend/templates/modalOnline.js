import { app } from '../index.js';
import { debug, clearModal } from '../js/core/core';
import '../css/OnlineMenu.css';
import { setupBackgroundVideo } from './modalPlayers.js'
import { BingoCardOnline } from '../js/RendersOnline/Card.js';
import {Play_online} from '../js/RendersOnline/Online.js'


export const MenuOnline = (data,socket) => {

    const controllers = () => {
        setupBackgroundVideo();
        let join__room = document.getElementById("join__room")
        /**
         * Function to Validate a regular expresion for the players name
         */
        join__room.onclick = () => {
            let ValidateRegExp = (name) => {
                console.log('eee',name)
                let RegExp = /^[A-Za-z\s]+$/;
                if (RegExp.test(name)) {
                    return true;
                } else {
                    return false;
                }
            }
            /**
             * Check that the function validate return true or false
             * if is true so clear the modal and starts the game
             */
            let player_name = document.getElementById("username_online").value;
            if(player_name){
                if(ValidateRegExp(player_name)){
                    data = player_name;
                    clearModal("modal");
                    app.Game_online(player_name)
                }
            }else{
                document.getElementById('msg--err').innerHTML = "\u26A0  YOU MUST WRITE A VALID NICKNAME"
            }
            
        }
    }

    return {
        template:
            `
            <div id="menu_principal" class="modal modal__online">
                <!-- Modal content -->
                <div class="menu_principal modal__online__form>
                <div class="modal__online__player__body">
                    <div class="modal__online__player__form__header">
                        <h1>NICKNAME</h1>
                        <input class="modal__online__player__form__header__input" placeholder="NICKNAME" type="text" id="username_online" name="username_online">
                    </div>
                    <br>
                    <div class="modal__online__player__form__opt">
                        <button id="join__room" class="button join__room">Join a Room</button>
                    </div>
                    <p class="msg--error" id="msg--err"></p>
                </div> 
                
                </div>
            </div>`,
        controllers: controllers

    }
}

export const RoomsList = (socket) => {
    
  
    const controllers = () => {
        clearModal()
        setupBackgroundVideo();
        let timeleft;
        let TotalPlayers= [];
        debug("CARGA LA LISTA Y SALA MODAL")
        socket.on('joined_game', function (player_info) {
            console.log('tuuuuu')
            console.log(player_info.cardMatrix);
            //BingoCardOnline.render_online_card(player_info.cardMatrix,player_info.username,'card_lobby')
            new BingoCardOnline(player_info.cardMatrix, document.getElementById('bingoCards'));
        
        });
        //Event triggered every time a user joins a 
        //game where we are enrolled
        socket.on('joined', function (Match_info) {
            
            console.log("dentro de joined" , Match_info);
            let info_game = document.getElementById("modal_list_players__main__aside__info");
            let info = JSON.parse(Match_info)
            let last_player = info.players[info.players.length -1];
            console.log(last_player)
            info_game.innerHTML += `<span>${last_player.username} se ha unido!</span><br>`
            timeleft = info.countDown;
        });

      
        socket.on('starts_game', function (data) {
            // console.log('empiza el juego',data)
            clearModal('modal');
            clearModal('bg')
            Play_online(data,socket);
        });
        
    }


    return {
        template:
            `
            <div id="modal_list_players" class="modal modal_list_players">
                <!-- Modal content -->
                <div class="modal-content modal_list_players__content">
                <br>
                <div class="modal_list_players__main">
                    <div class="modal_list_players__main__header">
                        <h1>ROOM</h1>
                    </div>
                    <div class="modal_list_players__main__aside">
                        <div id="modal_list_players__main__aside__player" class="modal_list_players__main__aside__player">
                            <span>Players: <span id="total_players"></span></span>
                            <div id="card_lobby" class="modal_list_players__main__aside__player__BingoCard">
                            </div>
                        </div>
                        <div id="modal_list_players__main__aside__info" class="modal_list_players__main__aside__info">
                        </div>
                    </div>
                </div> 
                </div>
            </div>`,
        controllers: controllers

    }
}