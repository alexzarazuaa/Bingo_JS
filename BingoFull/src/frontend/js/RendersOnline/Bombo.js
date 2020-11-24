

/**
 * In the Bombo class is where we have all the balls of the bingo in const templateBombo, there storatge the 90 balls in an array
 * en boles.
 * 
 * We store a copy of the templatebombo array so as not to have to modify the original, 
 * so in all the actions that we use the balls of the bombo we do it with the copy of the array.
 * 
 * And also  we extract the balls randomly using the pickNumber method
 * 
 * Let render is used to paint the balls of the bombo
 */

 /**
  *  HACER LO DE LA HERENCIA PARA EL BOMBO PADRE Y LAS CLASES ONLINE Y OFFLINE
  * 
  */

export class BomboOnline{    
    constructor(){

        let lastBall;
        this.RenderOnline = (num) => {
            console.log('jaja',num);
                     
            if (num){
                console.log('jaja en if',num);
                //si existe una ultima bola le quitamos la animacion
                if(lastBall){
                    console.log('jaja last ',lastBall)
                    document.getElementById(lastBall).className = 'bingoBall';
                }
                //a la bola actual le ponemos la animacion
                document.getElementById(num).className = 'bingoBall blink';
              

                lastBall = num;
            }               
               
        }
     
    }   
}