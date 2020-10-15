

// export class Bombo{    
//     constructor(rootElement){
//         let boles = Array.from({length:90},(_,i) => i + 1);
//         let bolesExtracted = [];
//         let shuffle = () => boles.sort((a,b) => Math.random()-0.5);         
//         this.getExtractedNumbers= () =>  bolesExtracted;
//         this.getRemainingBoles = () => boles;
//         this.pickNumber = () => {
//             shuffle();             
//             boles[0] && bolesExtracted.push(boles[0]);          
//             if (boles[0]) this.render(boles[0])  
//             return (boles.length>0 && boles.splice(0,1))?bolesExtracted[bolesExtracted.length-1]:false;            
//         }
//         this.render = (num) => {
//             let ballDiv = document.createElement('div');
//             ballDiv.className = 'bingoBall';
//             ballDiv.textContent = num;
//             rootElement.appendChild(ballDiv);

//         }
//     }   
// }

export class Bombo {
    constructor(rootElement) {
        let boles = Array.from({ length: 90 }, (_, i) => i + 1);
        boles.forEach(element => render(rootElement, element))
        let bolesExtracted = [];
        let shuffle = () => boles.sort((a, b) => Math.random() - 0.5);
        this.getExtractedNumbers = () => bolesExtracted;
        this.getRemainingBoles = () => boles;
        this.pickNumber = () => {
            shuffle();
            boles[0] && bolesExtracted.push(boles[0]);
            if (boles[0]) { document.getElementById(bolesExtracted[bolesExtracted.length - 1]).className += ' cartelBalls' }
            return (boles.length > 0 && boles.splice(0, 1)) ? bolesExtracted[bolesExtracted.length - 1] : false;
        }
    }
}
let render = (rootElement, num) => {
    let ballDiv = document.createElement('div');
    ballDiv.className = 'bingoBall';
    ballDiv.textContent = num;
    ballDiv.id = num;
    rootElement.appendChild(ballDiv);
}