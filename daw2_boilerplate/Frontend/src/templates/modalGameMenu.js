
import { app } from '../index.js';
import { debug, clearModal } from '../js/core/core';
import '../css/modalGameMenu.css';

export const GameMenu = () => {

    const controllers = () => {
        let online_mode = document.getElementById('online_mode');
        let offline_mode = document.getElementById('offline_mode');
        offline_mode.onclick = function () {
            clearModal("modal")
            app.playOffline();
        }
        online_mode.onclick = function () {
            console.log("ONLINE MODE");
            //app.playOnline();
        }
    }

    return {
        template:
            `
            <div id="menu_principal" class="modal_game">
                <!-- Modal content -->
                <div class="modal-content">
                <div class="modal_game__menu">
                    <div class="modal_game__menu__header">
                        <h1>BINGO TWINGO</h1>
                        <br>
                        <h2>ELIGE UN MODO DE JUEGO</h2>
                    </div>
                    <div class="modal_game__menu__buttons">
                        <button id="online_mode" class="button online">Online</button>
                        <button id="offline_mode" class="button offline">Offline</button>
                    </div>
                </div>
                    
                </div>
            </div>`,
        controllers: controllers

    }
}