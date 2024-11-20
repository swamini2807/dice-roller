function rollDice(){
    const min =1;
    const max=7;
    const num=Math.floor(Math.random()*(max-min))+min;
    const diceElement = document.getElementById('dice');
    if(num===1){
        diceElement.src='./Img/dice(1).png';
    }
    else if(num===2){
        diceElement.src = './Img/dice (2).png'
    }
    else if(num===3){
        diceElement.src = './Img/dice (3).png'
    }
    else if(num===4){
        diceElement.src = './Img/dice (4).png'
    }
    else if(num===5){
        diceElement.src = './Img/dice (5).png'
    }
    else if(num===6){
        diceElement.src = './Img/dice (6).png'
    }
    }