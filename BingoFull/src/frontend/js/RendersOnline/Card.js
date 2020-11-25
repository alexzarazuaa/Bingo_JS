export let  BingoCardOnline= () => {

    let renderCardOnlie = (username,card,divRoot,extractedBalls=[],) => {
        console.log(card)

        divRoot = document.getElementById(divRoot)

        let out = `<h1>Player ${username}</h1>
            <table class='bingoCard'>
               
                `+
            card.map((value) =>
            "<tr>"+value.map((val) =>{
                if (val==null){
                     return "<th class='nulo'></th>"
                }else{
                     if (extractedBalls && extractedBalls.indexOf(val) >= 0){
                          return "<th class='extracted'>"+val+"</th>";                                  
                     }else{
                          return "<th class='numbers"+val+"'>"+val+"</th>"
                     }
                }}).join("")
           +"</tr>"                          
           ).join("")+
      `</table>`;

        

        divRoot.innerHTML = out;
    }
    //INTERNTAR HACER QUE EN EL CARD TAMBIEN PARPADEE EL ULTIMO NUMERO LAST BALL PARPADEO O COLOCAR EL ULTIMO NUMERO EN GRANDE
    let RendenOnlineCard = (num)=>{
     let numbers = document.getElementsByClassName("numbers"+num);
     console.log(numbers);
     for(let i = 0; i < numbers.length; i++) {
          numbers[i].classList.add("extracted");
     }
}

    return {renderCardOnlie:renderCardOnlie , RendenOnlineCard:RendenOnlineCard};
}

