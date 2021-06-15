const triadGame = new TripleTriadGame(cards)


window.addEventListener('load', (event) => {
    let player1CardsHtml  = '';
    let player2CardsHtml  = '';

    triadGame.cards.forEach((pic) => {
        
        player1CardsHtml += `
            <div class="card frontGreen" style="background-image: url(img/${pic.img})"> </div>`;
        triadGame.player1Cards.push(pic)
        
        player2CardsHtml += `
            <div class="card frontRed" style="background-image: url(img/${pic.img})"> </div>`;
        triadGame.player2Cards.push(pic)
    });
    document.getElementById('player1Cards').innerHTML = player1CardsHtml;
    document.getElementById('player2Cards').innerHTML = player2CardsHtml;

    // Player RED
        let turnCounter = 0
        console.log(turnCounter)
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
                console.log(turnCounter)
            }
            else return false
        })

        // Player BLUE
        document.querySelectorAll('.frontGreen').forEach((card) => {
            card.addEventListener('click', () => {
                if( turnCounter %2 !== 0){
                triadGame.pickedCardBlue.push(card)
                }
            })   
        })
        
        document.getElementById('game-board').addEventListener('click', (arr) => {
            console.log('string.length'+ triadGame.pickedCardBlue.length)
            console.log('turned counter' + turnCounter)
            if( triadGame.pickedCardBlue.length > 0 && turnCounter %2 !== 0){
                
                arr.path[0].appendChild(triadGame.pickedCardBlue[triadGame.pickedCardBlue.length -1]) 
                arr.path[0].querySelector('.frontGreen').classList.remove('card')
                arr.path[0].querySelector('.frontGreen').classList.add('on-board-cards')
                triadGame.pickedCardBlue.length = 0;
                turnCounter++;
                console.log(turnCounter)
            }
            else return false
        })
    

});