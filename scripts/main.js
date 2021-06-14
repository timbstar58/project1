const triadGame = new TripleTriadGame(cards)


window.addEventListener('load', (event) => {
    let player1CardsHtml  = '';
    let player2CardsHtml  = '';
    console.log(document.getElementById('player1Cards'))
    console.log(document.getElementById('player2Cards'))
    triadGame.cards.forEach((pic) => {
        player1CardsHtml += `
            <div class="card">
            <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
            </div>`;
        triadGame.player1Cards.push(pic)
        
        player2CardsHtml += `
            <div class="card">
            <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
            </div>`;
        triadGame.player2Cards.push(pic)
    });
    document.getElementById('player1Cards').innerHTML = player1CardsHtml;
    
    document.getElementById('player2Cards').innerHTML = player2CardsHtml;

    document.querySelectorAll('.card').forEach((card) => {
        card.addEventListener('click', () => {

        })   
    })

    document.querySelectorAll('.card').forEach((card) => {
        card.addEventListener('click', () => {

});