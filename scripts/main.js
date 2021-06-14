const triadGame = new TripleTriadGame(cards)


window.addEventListener('load', (event) => {
    let player1CardsHtml  = '';
    let player2CardsHtml  = '';
    // console.log(document.getElementById('player1Cards'))
    // console.log(document.getElementById('player2Cards'))
    console.log(triadGame.pickedCard[0])

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


    document.querySelectorAll('.card').forEach((card) => {
        card.addEventListener('click', () => {
            if( triadGame.pickedCard.length === 0){
            triadGame.pickedCard.push(card)
            }
            console.log(triadGame.pickedCard[0])
        })   
    })
    
    document.getElementById('game-board').addEventListener('click', (arr) => {
        console.log(triadGame.pickedCard[0])
        console.log(arr.path[0])
        console.log(arr.path[0]) 
        if( triadGame.pickedCard.length === 1){
            arr.path[0].appendChild(triadGame.pickedCard[0]) 
            arr.path[0].querySelector('.frontRed').classList.remove('card')
            arr.path[0].querySelector('.frontRed').classList.add('on-board-cards')
            // arr.path[0].querySelector('.frontGreen').classList.remove('card')
            // arr.path[0].querySelector('.frontGreen').classList.add('on-board-cards')
            triadGame.pickedCard.pop();
            console.log(triadGame.pickedCard[0])
        }
    })


   

});