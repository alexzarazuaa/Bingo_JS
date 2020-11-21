import { app } from '../index.js';
import { debug, clearModal } from '../js/core/core';
import '../css/OnlineMenu.css';
import { setupBackgroundVideo } from './modalPlayers.js'

export const MenuOnline = () => {

    const controllers = () => {
        setupBackgroundVideo();
        let play_online = document.getElementById("play_online")
        /**
         * Function to Validate a regular expresion for the players name
         */
        play_online.onclick = () => {
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
                console.log('eeeee',player_name)
                if(ValidateRegExp(player_name)){
                    console.log(ValidateRegExp(player_name))
                    console.log(player_name)
                    clearModal("modal");
                    app.start_online(player_name);
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
                <div class=" modal__online__form>
                <div class="modal__online__player__body">
                    <div class="modal__online__player__form__header">
                        <h1>NICKNAME</h1>
                        <input class="modal__online__player__form__header__input" placeholder="NICKNAME" type="text" id="username_online" name="username_online">
                    </div>
                    <br>
                    <div class="modal__online__player__form__opt">
                        <button id="play_online" class="button play__online">START</button>
                    </div>
                    <p class="msg--error" id="msg--err"></p>
                </div> 
                </div>
            </div>`,
        controllers: controllers

    }
}