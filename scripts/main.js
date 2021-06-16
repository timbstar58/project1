const triadGame = new TripleTriadGame(cards)


window.addEventListener('load', (event) => {
    let playerGreenHtml  = '';
    let playerRedHtml  = '';

    triadGame.cards.forEach((pic) => {
        
        playerGreenHtml += `
            <div class="card frontGreen" style="background-image: url(img/${pic.img})" 
                data-attackTop = "${pic.topAtk}"
                data-attackRight = "${pic.rightAtk}"
                data-attackBottom = "${pic.bottomAtk}"
                data-attackLeft = "${pic.leftAtk}"
            > </div>`
            ;
            
        triadGame.playerGreenCards.push(pic)
        
        playerRedHtml += `
            <div class="card frontRed" style="background-image: url(img/${pic.img})"
                data-attackTop = "${pic.topAtk}"
                data-attackRight = "${pic.rightAtk}"
                data-attackBottom = "${pic.bottomAtk}"
                data-attackLeft = "${pic.leftAtk}"
            > </div>`
            ;
        triadGame.playerRedCards.push(pic)
    });
    document.getElementById('playerGreenCards').innerHTML = playerGreenHtml;
    document.getElementById('playerRedCards').innerHTML = playerRedHtml;

    // Player RED ---------------------------------------------------
        let turnCounter = 0
        // console.log(turnCounter)
        document.querySelectorAll('.frontRed').forEach((card) => {
            card.addEventListener('click', () => {
                if( turnCounter %2 === 0){
                triadGame.pickedCardRed.push(card)
                }
            })   
        })
    
        document.getElementById('game-board').addEventListener('click', (arr) => {
            if( triadGame.pickedCardRed.length > 0 && turnCounter %2 === 0){
                arr.path[0].appendChild(triadGame.pickedCardRed[triadGame.pickedCardRed.length -1]) 
                arr.path[0].querySelector('.frontRed').classList.remove('card')
                arr.path[0].querySelector('.frontRed').classList.add('on-board-cards')
                triadGame.pickedCardRed.length = 0;
                turnCounter++;
                triadGame.checkIfStronger(arr);
            }
            else return false
        })

    // Player Green---------------------------------------------------
        document.querySelectorAll('.frontGreen').forEach((card) => {
            card.addEventListener('click', () => {
                if( turnCounter %2 !== 0){
                triadGame.pickedCardGreen.push(card)
                }
            })   
        })
        
        document.getElementById('game-board').addEventListener('click', (arr) => {
            if( triadGame.pickedCardGreen.length > 0 && turnCounter %2 !== 0){     
                arr.path[0].appendChild(triadGame.pickedCardGreen[triadGame.pickedCardGreen.length -1]) 
                arr.path[0].querySelector('.frontGreen').classList.remove('card')
                arr.path[0].querySelector('.frontGreen').classList.add('on-board-cards')
                triadGame.pickedCardGreen.length = 0;
                turnCounter++;
                triadGame.checkIfStronger(arr);
            }
            else return false
        })
    

});