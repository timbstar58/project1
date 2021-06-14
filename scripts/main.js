const triadGame = new TripleTriadGame(cards)


window.addEventListener('load', (event) => {
    let player1CardsHtml  = '';
    let player2CardsHtml  = '';
    console.log(document.getElementById('player1Cards'))
    console.log(document.getElementById('player2Cards'))
    console.log(triadGame.cards)
    triadGame.cards.forEach((pic) => {
        player1CardsHtml += `
          <div class="card" ="${pic.name}">
            <div class="back" name="${pic.img}"></div>
            <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
          </div>
        `;
        player2CardsHtml += `
          <div class="card" ="${pic.name}">
            <div class="back" name="${pic.img}"></div>
            <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
          </div>
        `;

      });

    document.getElementById('player1Cards').innerHTML = player1CardsHtml;
    
    document.getElementById('player2Cards').innerHTML = player2CardsHtml;

    document.querySelectorAll('.card').forEach((card) => {
        card.addEventListener('click', () => {

        })   
    })

});