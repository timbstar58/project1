class TripleTriadGame {

    constructor(cards) {
        this.cards = cards;
        this.playerGreenCards = [];
        this.playerRedCards = [];
        this.pickedCardGreen= [];
        this.pickedCardRed=[]
    }

    checkIfStronger(arg) {
        switch (arg.path[0].classList.value) {
            

            case 'box field-one-one':
                console.log('field-one-one')
    
                if(document.querySelector('.field-two-one .frontRed') !== null && document.querySelector('.field-one-one .on-board-cards').classList.contains('frontGreen')){

                    // console.log(document.querySelector('.field-one-one .on-board-cards').classList.contains('frontGreen'))

                    if(document.querySelector('.field-one-one .frontGreen').dataset.attackbottom > document.querySelector('.field-two-one .frontRed').dataset.attacktop){ console.log('flippy flappy')
                    document.querySelector('.field-two-one .frontRed').classList.add('flip')
                        setTimeout(() => { 
                        document.querySelector('.field-two-one .frontRed').classList.add('frontGreen')
                        document.querySelector('.field-two-one .frontGreen').classList.remove('frontRed')
                        document.querySelector('.field-two-one .frontGreen').classList.remove('flip')
                        }, 300); 
                    }
                }
                if(document.querySelector('.field-one-two .frontRed') !== null && document.querySelector('.field-one-one .on-board-cards').classList.contains('frontGreen')){
                    if(document.querySelector('.field-one-one .frontGreen').dataset.attackright > document.querySelector('.field-one-two .frontRed').dataset.attackleft){console.log('flippy flappy')
                    document.querySelector('.field-one-two .frontRed').classList.add('flip')
                        setTimeout(() => { 
                        document.querySelector('.field-one-two .frontRed').classList.add('frontGreen')
                        document.querySelector('.field-one-two .frontGreen').classList.remove('frontRed')
                        document.querySelector('.field-one-two .frontGreen').classList.remove('flip')
                        }, 300); 
                    }
                }
                if(document.querySelector('.field-two-one .frontGreen') !== null && document.querySelector('.field-one-one .on-board-cards').classList.contains('frontRed')){
                    if(document.querySelector('.field-one-one .frontRed').dataset.attackbottom > document.querySelector('.field-two-one .frontGreen').dataset.attacktop){ console.log('flippy flappy')
                    document.querySelector('.field-two-one .frontGreen').classList.add('flip')
                        setTimeout(() => { 
                        document.querySelector('.field-two-one .frontGreen').classList.add('frontRed')
                        document.querySelector('.field-two-one .frontRed').classList.remove('frontGreen')  
                        document.querySelector('.field-two-one .frontRed').classList.remove('flip') 
                        }, 300); 
                    }
                }
                if(document.querySelector('.field-one-two .frontGreen') !== null && document.querySelector('.field-one-one .on-board-cards').classList.contains('frontRed')){
                    if(document.querySelector('.field-one-one .frontRed').dataset.attackright > document.querySelector('.field-one-two .frontGreen').dataset.attackleft){console.log('flippy flappy')
                    document.querySelector('.field-one-two .frontGreen').classList.add('flip')
                        setTimeout(() => { 
                        document.querySelector('.field-one-two .frontGreen').classList.add('frontRed')
                        document.querySelector('.field-one-two .frontRed').classList.remove('frontGreen') 
                        document.querySelector('.field-one-two .frontRed').classList.remove('flip')
                        }, 300); 
                    }
                }
                break;
         
            case 'box field-one-two':
                console.log('field-one-two')
    
                if(document.querySelector('.field-one-three .frontRed')!== null && document.querySelector('.field-one-two .on-board-cards').classList.contains('frontGreen')){
                    if(document.querySelector('.field-one-two .frontGreen').dataset.attackright > document.querySelector('.field-one-three .frontRed').dataset.attackleft){console.log('flippy flappy')
                    document.querySelector('.field-one-three .frontRed').classList.add('flip')
                        setTimeout(() => { 
                        document.querySelector('.field-one-three .frontRed').classList.add('frontGreen')
                        document.querySelector('.field-one-three .frontGreen').classList.remove('frontRed')
                        document.querySelector('.field-one-three .frontGreen').classList.remove('flip')
                        }, 300); 
                    }
                }
                if(document.querySelector('.field-two-two .frontRed')!== null && document.querySelector('.field-one-two .on-board-cards').classList.contains('frontGreen')){
                    if(document.querySelector('.field-one-two .frontGreen').dataset.attackbottom > document.querySelector('.field-two-two .frontRed').dataset.attacktop){console.log('flippy flappy')
                    document.querySelector('.field-two-two .frontRed').classList.add('flip')
                        setTimeout(() => { 
                        document.querySelector('.field-two-two .frontRed').classList.add('frontGreen')
                        document.querySelector('.field-two-two .frontGreen').classList.remove('frontRed')
                        document.querySelector('.field-two-two .frontGreen').classList.remove('flip')
                        }, 300); 
                    }
                }
                if(document.querySelector('.field-one-one .frontRed')!== null && document.querySelector('.field-one-two .on-board-cards').classList.contains('frontGreen')){
                    if(document.querySelector('.field-one-two .frontGreen').dataset.attackleft > document.querySelector('.field-one-one .frontRed').dataset.attackright){console.log('flippy flappy')
                    document.querySelector('.field-one-one .frontRed').classList.add('flip')
                        setTimeout(() => { 
                        document.querySelector('.field-one-one .frontRed').classList.add('frontGreen')
                        document.querySelector('.field-one-one .frontGreen').classList.remove('frontRed')
                        document.querySelector('.field-one-one .frontGreen').classList.remove('flip')
                        }, 300); 
                    }
                }
                if(document.querySelector('.field-one-three .frontGreen')!== null && document.querySelector('.field-one-two .on-board-cards').classList.contains('frontRed')){
                    if(document.querySelector('.field-one-two .frontRed').dataset.attackright > document.querySelector('.field-one-three .frontGreen').dataset.attackleft){console.log('flippy flappy')
                    document.querySelector('.field-one-three .frontGreen').classList.add('flip')
                        setTimeout(() => { 
                        document.querySelector('.field-one-three .frontGreen').classList.add('frontRed')
                        document.querySelector('.field-one-three .frontRed').classList.remove('frontGreen')
                        document.querySelector('.field-one-three .frontRed').classList.remove('flip')
                        }, 300); 
                    }
                }
                if(document.querySelector('.field-two-two .frontGreen')!== null && document.querySelector('.field-one-two .on-board-cards').classList.contains('frontRed')){
                    if(document.querySelector('.field-one-two .frontRed').dataset.attackbottom > document.querySelector('.field-two-two .frontGreen').dataset.attacktop){console.log('flippy flappy')
                    document.querySelector('.field-two-two .frontGreen').classList.add('flip')
                        setTimeout(() => { 
                        document.querySelector('.field-two-two .frontGreen').classList.add('frontRed')
                        document.querySelector('.field-two-two .frontRed').classList.remove('frontGreen')
                        document.querySelector('.field-two-two .frontRed').classList.remove('flip')
                        }, 300); 
                    }
                }
                if(document.querySelector('.field-one-one .frontGreen')!== null && document.querySelector('.field-one-two .on-board-cards').classList.contains('frontRed')){
                    if(document.querySelector('.field-one-two .frontRed').dataset.attackleft > document.querySelector('.field-one-one .frontGreen').dataset.attackright){console.log('flippy flappy')
                    document.querySelector('.field-one-one .frontGreen').classList.add('flip')
                        setTimeout(() => { 
                        document.querySelector('.field-one-one .frontGreen').classList.add('frontRed')
                        document.querySelector('.field-one-one .frontRed').classList.remove('frontGreen') 
                        document.querySelector('.field-one-one .frontRed').classList.remove('flip')
                        }, 300); 
                    }
                }
                break;

            case 'box field-one-three':
                console.log('field-one-three')
    
                if(document.querySelector('.field-two-three .frontRed')!== null && document.querySelector('.field-one-three .on-board-cards').classList.contains('frontGreen')){
                    if(document.querySelector('.field-one-three .frontGreen').dataset.attackbottom > document.querySelector('.field-two-three .frontRed').dataset.attacktop){console.log('flippy flappy')
                    document.querySelector('.field-two-three .frontRed').classList.add('flip')
                        setTimeout(() => { 
                        document.querySelector('.field-two-three .frontRed').classList.add('frontGreen')
                        document.querySelector('.field-two-three .frontGreen').classList.remove('frontRed')
                        document.querySelector('.field-two-three .frontGreen').classList.remove('flip')
                        }, 300); 
                    }
                }
                if(document.querySelector('.field-one-two .frontRed')!== null && document.querySelector('.field-one-three .on-board-cards').classList.contains('frontGreen')){
                    if(document.querySelector('.field-one-three .frontGreen').dataset.attackleft > document.querySelector('.field-one-two .frontRed').dataset.attackright){console.log('flippy flappy')
                    document.querySelector('.field-one-two .frontRed').classList.add('flip')
                        setTimeout(() => { 
                        document.querySelector('.field-one-two .frontRed').classList.add('frontGreen')
                        document.querySelector('.field-one-two .frontGreen').classList.remove('frontRed') 
                        document.querySelector('.field-one-two .frontGreen').classList.remove('flip')
                        }, 300); 
                    }
                }
                if(document.querySelector('.field-two-three .frontGreen')!== null && document.querySelector('.field-one-three .on-board-cards').classList.contains('frontRed')){
                    if(document.querySelector('.field-one-three .frontRed').dataset.attackbottom > document.querySelector('.field-two-three .frontGreen').dataset.attacktop){console.log('flippy flappy')
                    document.querySelector('.field-two-three .frontGreen').classList.add('flip')
                        setTimeout(() => { 
                        document.querySelector('.field-two-three .frontGreen').classList.add('frontRed')
                        document.querySelector('.field-two-three .frontRed').classList.remove('frontGreen')
                        document.querySelector('.field-two-three .frontRed').classList.remove('flip')
                        }, 300); 
                    }
                }
                if(document.querySelector('.field-one-two .frontGreen')!== null && document.querySelector('.field-one-three .on-board-cards').classList.contains('frontRed')){
                    if(document.querySelector('.field-one-three .frontRed').dataset.attackleft > document.querySelector('.field-one-two .frontGreen').dataset.attackright){console.log('flippy flappy')
                    document.querySelector('.field-one-two .frontGreen').classList.add('flip')
                        setTimeout(() => { 
                        document.querySelector('.field-one-two .frontGreen').classList.add('frontRed')
                        document.querySelector('.field-one-two .frontRed').classList.remove('frontGreen')
                        document.querySelector('.field-one-two .frontRed').classList.remove('flip')
                        }, 300); 
                    }
                }
                break;
    
            case 'box field-two-one' :
                console.log('field-two-one')

                if(document.querySelector('.field-two-two .frontRed')!== null && document.querySelector('.field-two-one .on-board-cards').classList.contains('frontGreen')){
                    if(document.querySelector('.field-two-one .frontGreen').dataset.attackright > document.querySelector('.field-two-two .frontRed').dataset.attackleft){console.log('flippy flappy')
                    document.querySelector('.field-two-two .frontRed').classList.add('flip')
                        setTimeout(() => { 
                        document.querySelector('.field-two-two .frontRed').classList.add('frontGreen')
                        document.querySelector('.field-two-two .frontGreen').classList.remove('frontRed')
                        document.querySelector('.field-two-two .frontGreen').classList.remove('flip')
                        }, 300); 
                    }
                }
                if(document.querySelector('.field-one-one .frontRed')!== null && document.querySelector('.field-two-one .on-board-cards').classList.contains('frontGreen')){
                    if(document.querySelector('.field-two-one .frontGreen').dataset.attacktop > document.querySelector('.field-one-one .frontRed').dataset.attackbottom){console.log('flippy flappy')
                    document.querySelector('.field-one-one .frontRed').classList.add('flip')
                        setTimeout(() => { 
                        document.querySelector('.field-one-one .frontRed').classList.add('frontGreen')
                        document.querySelector('.field-one-one .frontGreen').classList.remove('frontRed')
                        document.querySelector('.field-one-one .frontGreen').classList.remove('flip')
                        }, 300); 
                    }
                }
                if(document.querySelector('.field-three-one .frontRed')!== null && document.querySelector('.field-two-one .on-board-cards').classList.contains('frontGreen')){
                    if(document.querySelector('.field-two-one .frontGreen').dataset.attackbottom > document.querySelector('.field-three-one .frontRed').dataset.attacktop){console.log('flippy flappy')
                    document.querySelector('.field-three-one .frontRed').classList.add('flip')
                        setTimeout(() => { 
                        document.querySelector('.field-three-one .frontRed').classList.add('frontGreen')
                        document.querySelector('.field-three-one .frontGreen').classList.remove('frontRed')
                        document.querySelector('.field-three-one .frontGreen').classList.remove('flip')
                        }, 300); 
                    }
                }
                if(document.querySelector('.field-two-two .frontGreen')!== null && document.querySelector('.field-two-one .on-board-cards').classList.contains('frontRed')){
                    if(document.querySelector('.field-two-one .frontRed').dataset.attackright > document.querySelector('.field-two-two .frontGreen').dataset.attackleft){console.log('flippy flappy')
                    document.querySelector('.field-two-two .frontGreen').classList.add('flip')
                        setTimeout(() => { 
                        document.querySelector('.field-two-two .frontGreen').classList.add('frontRed')
                        document.querySelector('.field-two-two .frontRed').classList.remove('frontGreen')
                        document.querySelector('.field-two-two .frontRed').classList.remove('flip')
                        }, 300); 
                    }
                }
                if(document.querySelector('.field-one-one .frontGreen')!== null && document.querySelector('.field-two-one .on-board-cards').classList.contains('frontRed')){
                    if(document.querySelector('.field-two-one .frontRed').dataset.attacktop > document.querySelector('.field-one-one .frontGreen').dataset.attackbottom){console.log('flippy flappy')
                    document.querySelector('.field-one-one .frontGreen').classList.add('flip')
                        setTimeout(() => { 
                        document.querySelector('.field-one-one .frontGreen').classList.add('frontRed')
                        document.querySelector('.field-one-one .frontRed').classList.remove('frontGreen')
                        document.querySelector('.field-one-one .frontRed').classList.remove('flip')
                        }, 300); 
                    }
                }
                if(document.querySelector('.field-three-one .frontGreen')!== null && document.querySelector('.field-two-one .on-board-cards').classList.contains('frontRed')){
                    if(document.querySelector('.field-two-one .frontRed').dataset.attackbottom > document.querySelector('.field-three-one .frontGreen').dataset.attacktop){console.log('flippy flappy')
                    document.querySelector('.field-three-one .frontGreen').classList.add('flip')
                        setTimeout(() => { 
                        document.querySelector('.field-three-one .frontGreen').classList.add('frontRed')
                        document.querySelector('.field-three-one .frontRed').classList.remove('frontGreen')
                        document.querySelector('.field-three-one .frontRed').classList.remove('flip')
                        }, 300); 
                    }
                }
                break;
    
            case 'box field-two-two':
                console.log('field-two-two')

                if(document.querySelector('.field-two-three .frontRed')!== null && document.querySelector('.field-two-two .on-board-cards').classList.contains('frontGreen')){
                    if(document.querySelector('.field-two-two .frontGreen').dataset.attackright > document.querySelector('.field-two-three .frontRed').dataset.attackleft){console.log('flippy flappy')
                    document.querySelector('.field-two-three .frontRed').classList.add('flip')
                        setTimeout(() => { 
                        document.querySelector('.field-two-three .frontRed').classList.add('frontGreen')
                        document.querySelector('.field-two-three .frontGreen').classList.remove('frontRed')
                        document.querySelector('.field-two-three .frontGreen').classList.remove('flip')
                        }, 300); 
                    }
                }
                if(document.querySelector('.field-one-two .frontRed')!== null && document.querySelector('.field-two-two .on-board-cards').classList.contains('frontGreen')){
                    if(document.querySelector('.field-two-two .frontGreen').dataset.attacktop > document.querySelector('.field-one-two .frontRed').dataset.attackbottom){console.log('flippy flappy')
                    document.querySelector('.field-one-two .frontRed').classList.add('flip')
                        setTimeout(() => { 
                        document.querySelector('.field-one-two .frontRed').classList.add('frontGreen')
                        document.querySelector('.field-one-two .frontGreen').classList.remove('frontRed')
                        document.querySelector('.field-one-two .frontGreen').classList.remove('flip')
                        }, 300); 
                    }
                }
                if(document.querySelector('.field-three-two .frontRed')!== null && document.querySelector('.field-two-two .on-board-cards').classList.contains('frontGreen')){
                    if(document.querySelector('.field-two-two .frontGreen').dataset.attackbottom > document.querySelector('.field-three-two .frontRed').dataset.attacktop){console.log('flippy flappy')
                    document.querySelector('.field-three-two .frontRed').classList.add('flip')
                        setTimeout(() => { 
                        document.querySelector('.field-three-two .frontRed').classList.add('frontGreen')
                        document.querySelector('.field-three-two .frontGreen').classList.remove('frontRed')
                        document.querySelector('.field-three-two .frontGreen').classList.remove('flip')
                        }, 300); 
                    }
                }
                if(document.querySelector('.field-two-one .frontRed')!== null && document.querySelector('.field-two-two .on-board-cards').classList.contains('frontGreen')){
                    if(document.querySelector('.field-two-two .frontGreen').dataset.attackleft > document.querySelector('.field-two-one .frontRed').dataset.attackright){console.log('flippy flappy')
                    document.querySelector('.field-two-one .frontRed').classList.add('flip')
                        setTimeout(() => { 
                        document.querySelector('.field-two-one .frontRed').classList.add('frontGreen')
                        document.querySelector('.field-two-one .frontGreen').classList.remove('frontRed')
                        document.querySelector('.field-two-one .frontGreen').classList.remove('flip')
                        }, 300); 
                    }
                }
                if(document.querySelector('.field-two-three .frontGreen')!== null && document.querySelector('.field-two-two .on-board-cards').classList.contains('frontRed')){
                    if(document.querySelector('.field-two-two .frontRed').dataset.attackright > document.querySelector('.field-two-three .frontGreen').dataset.attackleft){console.log('flippy flappy')
                    document.querySelector('.field-two-three .frontGreen').classList.add('flip')
                        setTimeout(() => { 
                        document.querySelector('.field-two-three .frontGreen').classList.add('frontRed')
                        document.querySelector('.field-two-three .frontRed').classList.remove('frontGreen')
                        document.querySelector('.field-two-three .frontRed').classList.remove('flip')
                        }, 300); 
                    }
                }
                if(document.querySelector('.field-one-two .frontGreen')!== null && document.querySelector('.field-two-two .on-board-cards').classList.contains('frontRed')){
                    if(document.querySelector('.field-two-two .frontRed').dataset.attacktop > document.querySelector('.field-one-two .frontGreen').dataset.attackbottom){console.log('flippy flappy')
                    document.querySelector('.field-one-two .frontGreen').classList.add('flip')
                        setTimeout(() => { 
                        document.querySelector('.field-one-two .frontGreen').classList.add('frontRed')
                        document.querySelector('.field-one-two .frontRed').classList.remove('frontGreen')
                        document.querySelector('.field-one-two .frontRed').classList.remove('flip')
                        }, 300); 
                    }
                }
                if(document.querySelector('.field-three-two .frontGreen')!== null && document.querySelector('.field-two-two .on-board-cards').classList.contains('frontRed')){
                    if(document.querySelector('.field-two-two .frontRed').dataset.attackbottom > document.querySelector('.field-three-two .frontGreen').dataset.attacktop){console.log('flippy flappy')
                    document.querySelector('.field-three-two .frontGreen').classList.add('flip')
                        setTimeout(() => { 
                        document.querySelector('.field-three-two .frontGreen').classList.add('frontRed')
                        document.querySelector('.field-three-two .frontRed').classList.remove('frontGreen')
                        document.querySelector('.field-three-two .frontRed').classList.remove('flip')
                        }, 300); 
                    }
                }
                if(document.querySelector('.field-two-one .frontGreen')!== null && document.querySelector('.field-two-two .on-board-cards').classList.contains('frontRed')){
                    if(document.querySelector('.field-two-two .frontRed').dataset.attackleft > document.querySelector('.field-two-one .frontGreen').dataset.attackright){console.log('flippy flappy')
                    document.querySelector('.field-two-one .frontGreen').classList.add('flip')
                        setTimeout(() => { 
                        document.querySelector('.field-two-one .frontGreen').classList.add('frontRed')
                        document.querySelector('.field-two-one .frontRed').classList.remove('frontGreen')
                        document.querySelector('.field-two-one .frontRed').classList.remove('flip')
                        }, 300); 
                    }
                }
                break
    
            case 'box field-two-three':
                console.log('field-two-three')

                if(document.querySelector('.field-two-two .frontRed') !== null && document.querySelector('.field-two-three .on-board-cards').classList.contains('frontGreen')){
                    if(document.querySelector('.field-two-three .frontGreen').dataset.attackleft > document.querySelector('.field-two-two .frontRed').dataset.attackright){console.log('flippy flappy')
                    document.querySelector('.field-two-two .frontRed').classList.add('flip')
                        setTimeout(() => { 
                        document.querySelector('.field-two-two .frontRed').classList.add('frontGreen')
                        document.querySelector('.field-two-two .frontGreen').classList.remove('frontRed')
                        document.querySelector('.field-two-two .frontGreen').classList.remove('flip')
                        }, 300); 
                    }
                }
                if(document.querySelector('.field-one-three .frontRed')!== null && document.querySelector('.field-two-three .on-board-cards').classList.contains('frontGreen')){
                    if(document.querySelector('.field-two-three .frontGreen').dataset.attacktop > document.querySelector('.field-one-three .frontRed').dataset.attackbottom){console.log('flippy flappy')
                    document.querySelector('.field-one-three .frontRed').classList.add('flip')
                        setTimeout(() => { 
                        document.querySelector('.field-one-three .frontRed').classList.add('frontGreen')
                        document.querySelector('.field-one-three .frontGreen').classList.remove('frontRed')
                        document.querySelector('.field-one-three .frontGreen').classList.remove('flip')
                        }, 300); 
                    }
                }
                if(document.querySelector('.field-three-three .frontRed')!== null && document.querySelector('.field-two-three .on-board-cards').classList.contains('frontGreen')){
                    if(document.querySelector('.field-two-three .frontGreen').dataset.attackbottom > document.querySelector('.field-three-three .frontRed').dataset.attacktop){console.log('flippy flappy')
                    document.querySelector('.field-three-three .frontRed').classList.add('flip')
                        setTimeout(() => { 
                        document.querySelector('.field-three-three .frontRed').classList.add('frontGreen')
                        document.querySelector('.field-three-three .frontGreen').classList.remove('frontRed')
                        document.querySelector('.field-three-three .frontGreen').classList.remove('flip')
                        }, 300); 
                    }
                }
                if(document.querySelector('.field-two-two .frontGreen') !== null && document.querySelector('.field-two-three .on-board-cards').classList.contains('frontRed')){
                    if(document.querySelector('.field-two-three .frontRed').dataset.attackleft > document.querySelector('.field-two-two .frontGreen').dataset.attackright){console.log('flippy flappy')
                    document.querySelector('.field-two-two .frontGreen').classList.add('flip')
                        setTimeout(() => { 
                        document.querySelector('.field-two-two .frontGreen').classList.add('frontRed')
                        document.querySelector('.field-two-two .frontRed').classList.remove('frontGreen')
                        document.querySelector('.field-two-two .frontRed').classList.remove('flip')
                        }, 300); 
                    }
                }
                if(document.querySelector('.field-one-three .frontGreen')!== null && document.querySelector('.field-two-three .on-board-cards').classList.contains('frontRed')){
                    if(document.querySelector('.field-two-three .frontRed').dataset.attacktop > document.querySelector('.field-one-three .frontGreen').dataset.attackbottom){console.log('flippy flappy')
                    document.querySelector('.field-one-three .frontGreen').classList.add('flip')
                        setTimeout(() => { 
                        document.querySelector('.field-one-three .frontGreen').classList.add('frontRed')
                        document.querySelector('.field-one-three .frontRed').classList.remove('frontGreen')
                        document.querySelector('.field-one-three .frontRed').classList.remove('flip')
                        }, 300); 
                    }
                }
                if(document.querySelector('.field-three-three .frontGreen')!== null && document.querySelector('.field-two-three .on-board-cards').classList.contains('frontRed')){
                    if(document.querySelector('.field-two-three .frontRed').dataset.attackbottom > document.querySelector('.field-three-three .frontGreen').dataset.attacktop){console.log('flippy flappy')
                    document.querySelector('.field-three-three .frontGreen').classList.add('flip')
                        setTimeout(() => { 
                        document.querySelector('.field-three-three .frontGreen').classList.add('frontRed')
                        document.querySelector('.field-three-three .frontRed').classList.remove('frontGreen')
                        document.querySelector('.field-three-three .frontRed').classList.remove('flip')
                        }, 300); 
                    }
                }
                break;
            
    
            case 'box field-three-one':
                console.log('field-three-one')

                if(document.querySelector('.field-three-two .frontRed')!== null && document.querySelector('.field-three-one .on-board-cards').classList.contains('frontGreen')){
                    if(document.querySelector('.field-three-one .frontGreen').dataset.attackright > document.querySelector('.field-three-two .frontRed').dataset.attackleft){console.log('flippy flappy')
                    document.querySelector('.field-three-two .frontRed').classList.add('flip')
                        setTimeout(() => { 
                        document.querySelector('.field-three-two .frontRed').classList.add('frontGreen')
                        document.querySelector('.field-three-two .frontGreen').classList.remove('frontRed')
                        document.querySelector('.field-three-two .frontGreen').classList.remove('flip')
                        }, 300); 
                    }
                }
                if(document.querySelector('.field-two-one .frontRed')!== null && document.querySelector('.field-three-one .on-board-cards').classList.contains('frontGreen')){
                    if(document.querySelector('.field-three-one .frontGreen').dataset.attacktop > document.querySelector('.field-two-one .frontRed').dataset.attackbottom){console.log('flippy flappy')
                    document.querySelector('.field-two-one .frontRed').classList.add('flip')
                        setTimeout(() => { 
                        document.querySelector('.field-two-one .frontRed').classList.add('frontGreen')
                        document.querySelector('.field-two-one .frontGreen').classList.remove('frontRed')
                        document.querySelector('.field-two-one .frontGreen').classList.remove('flip')
                        }, 300); 
                    }
                }
                if(document.querySelector('.field-three-two .frontGreen')!== null && document.querySelector('.field-three-one .on-board-cards').classList.contains('frontRed')){
                    if(document.querySelector('.field-three-one .frontRed').dataset.attackright > document.querySelector('.field-three-two .frontGreen').dataset.attackleft){console.log('flippy flappy')
                    document.querySelector('.field-three-two .frontGreen').classList.add('flip')
                        setTimeout(() => { 
                        document.querySelector('.field-three-two .frontGreen').classList.add('frontRed')
                        document.querySelector('.field-three-two .frontRed').classList.remove('frontGreen')
                        document.querySelector('.field-three-two .frontRed').classList.remove('flip')
                        }, 300); 
                    }
                }
                if(document.querySelector('.field-two-one .frontGreen')!== null && document.querySelector('.field-three-one .on-board-cards').classList.contains('frontRed')){
                    if(document.querySelector('.field-three-one .frontRed').dataset.attacktop > document.querySelector('.field-two-one .frontGreen').dataset.attackbottom){console.log('flippy flappy')
                    document.querySelector('.field-two-one .frontGreen').classList.add('flip')
                        setTimeout(() => { 
                        document.querySelector('.field-two-one .frontGreen').classList.add('frontRed')
                        document.querySelector('.field-two-one .frontRed').classList.remove('frontGreen')
                        document.querySelector('.field-two-one .frontRed').classList.remove('flip')
                        }, 300); 
                    }
                }
                break;
    
            case 'box field-three-two':
                console.log('field-three-two')

                if(document.querySelector('.field-three-one .frontRed')!== null && document.querySelector('.field-three-two .on-board-cards').classList.contains('frontGreen')){
                    if (document.querySelector('.field-three-two .frontGreen').dataset.attackleft > document.querySelector('.field-three-one .frontRed').dataset.attackright){console.log('flippy flappy')
                    document.querySelector('.field-three-one .frontRed').classList.add('flip')
                        setTimeout(() => { 
                        document.querySelector('.field-three-one .frontRed').classList.add('frontGreen')
                        document.querySelector('.field-three-one .frontGreen').classList.remove('frontRed')
                        document.querySelector('.field-three-one .frontGreen').classList.remove('flip')
                        }, 300); 
                    }
                }
                if(document.querySelector('.field-two-two .frontRed')!== null && document.querySelector('.field-three-two .on-board-cards').classList.contains('frontGreen')){
                    if(document.querySelector('.field-three-two .frontGreen').dataset.attacktop > document.querySelector('.field-two-two .frontRed').dataset.attackbottom){console.log('flippy flappy')
                    document.querySelector('.field-two-two .frontRed').classList.add('flip')
                        setTimeout(() => { 
                        document.querySelector('.field-two-two .frontRed').classList.add('frontGreen')
                        document.querySelector('.field-two-two .frontGreen').classList.remove('frontRed')
                        document.querySelector('.field-two-two .frontGreen').classList.remove('flip')
                        }, 300); 
                    }
                }
                if(document.querySelector('.field-three-three .frontRed')!== null && document.querySelector('.field-three-two .on-board-cards').classList.contains('frontGreen')){
                    if(document.querySelector('.field-three-two .frontGreen').dataset.attackright > document.querySelector('.field-three-three .frontRed').dataset.attackleft){console.log('flippy flappy')
                    document.querySelector('.field-three-three .frontRed').classList.add('flip')
                        setTimeout(() => { 
                        document.querySelector('.field-three-three .frontRed').classList.add('frontGreen')
                        document.querySelector('.field-three-three .frontGreen').classList.remove('frontRed')
                        document.querySelector('.field-three-three .frontGreen').classList.remove('flip')
                        }, 300); 
                    }
                }
                if(document.querySelector('.field-three-one .frontGreen')!== null && document.querySelector('.field-three-two .on-board-cards').classList.contains('frontRed')){
                    if (document.querySelector('.field-three-two .frontRed').dataset.attackleft > document.querySelector('.field-three-one .frontGreen').dataset.attackright){console.log('flippy flappy')
                    document.querySelector('.field-three-one .frontGreen').classList.add('flip')
                        setTimeout(() => { 
                        document.querySelector('.field-three-one .frontGreen').classList.add('frontRed')
                        document.querySelector('.field-three-one .frontRed').classList.remove('frontGreen')
                        document.querySelector('.field-three-one .frontRed').classList.remove('flip')
                        }, 300); 
                    }
                }
                if(document.querySelector('.field-two-two .frontGreen')!== null && document.querySelector('.field-three-two .on-board-cards').classList.contains('frontRed')){
                    if(document.querySelector('.field-three-two .frontRed').dataset.attacktop > document.querySelector('.field-two-two .frontGreen').dataset.attackbottom){console.log('flippy flappy')
                    document.querySelector('.field-two-two .frontGreen').classList.add('flip')
                        setTimeout(() => { 
                        document.querySelector('.field-two-two .frontGreen').classList.add('frontRed')
                        document.querySelector('.field-two-two .frontRed').classList.remove('frontGreen')
                        document.querySelector('.field-two-two .frontRed').classList.remove('flip')
                        }, 300); 
                    }
                }
                if(document.querySelector('.field-three-three .frontGreen')!== null && document.querySelector('.field-three-two .on-board-cards').classList.contains('frontRed')){
                    if(document.querySelector('.field-three-two .frontRed').dataset.attackright > document.querySelector('.field-three-three .frontGreen').dataset.attackleft){console.log('flippy flappy')
                    document.querySelector('.field-three-three .frontGreen').classList.add('flip')
                        setTimeout(() => { 
                        document.querySelector('.field-three-three .frontGreen').classList.add('frontRed')
                        document.querySelector('.field-three-three .frontRed').classList.remove('frontGreen')
                        document.querySelector('.field-three-three .frontRed').classList.remove('flip')
                        }, 300); 
                    }
                }
                break
    
            case 'box field-three-three':
                console.log('field-three-three')

                if(document.querySelector('.field-three-two .frontRed')!== null && document.querySelector('.field-three-three .on-board-cards').classList.contains('frontGreen')){
                    if(document.querySelector('.field-three-three .frontGreen').dataset.attackleft > document.querySelector('.field-three-two .frontRed').dataset.attackright){console.log('flippy flappy')
                    document.querySelector('.field-three-two .frontRed').classList.add('flip')
                        setTimeout(() => { 
                        document.querySelector('.field-three-two .frontRed').classList.add('frontGreen')
                        document.querySelector('.field-three-two .frontGreen').classList.remove('frontRed')
                        document.querySelector('.field-three-two .frontGreen').classList.remove('flip')
                        }, 300); 
                    }
                }
                if(document.querySelector('.field-two-three .frontRed')!== null && document.querySelector('.field-three-three .on-board-cards').classList.contains('frontGreen')){
                    if(document.querySelector('.field-three-three .frontGreen').dataset.attacktop > document.querySelector('.field-two-three .frontRed').dataset.attackbottom){console.log('flippy flappy')
                    document.querySelector('.field-two-three .frontRed').classList.add('flip')
                        setTimeout(() => { 
                        document.querySelector('.field-two-three .frontRed').classList.add('frontGreen')
                        document.querySelector('.field-two-three .frontGreen').classList.remove('frontRed')
                        document.querySelector('.field-two-three .frontGreen').classList.remove('flip')
                        }, 300); 
                    }
                }
                if(document.querySelector('.field-three-two .frontGreen')!== null && document.querySelector('.field-three-three .on-board-cards').classList.contains('frontRed')){
                    if(document.querySelector('.field-three-three .frontRed').dataset.attackleft > document.querySelector('.field-three-two .frontGreen').dataset.attackright){console.log('flippy flappy')
                    document.querySelector('.field-three-two .frontGreen').classList.add('flip')
                        setTimeout(() => { 
                        document.querySelector('.field-three-two .frontGreen').classList.add('frontRed')
                        document.querySelector('.field-three-two .frontRed').classList.remove('frontGreen')
                        document.querySelector('.field-three-two .frontRed').classList.remove('flip')
                        }, 300); 
                    }
                }
                if(document.querySelector('.field-two-three .frontGreen')!== null && document.querySelector('.field-three-three .on-board-cards').classList.contains('frontRed')){
                    if(document.querySelector('.field-three-three .frontRed').dataset.attacktop > document.querySelector('.field-two-three .frontGreen').dataset.attackbottom){console.log('flippy flappy')
                    document.querySelector('.field-two-three .frontGreen').classList.add('flip')
                        setTimeout(() => { 
                        document.querySelector('.field-two-three .frontGreen').classList.add('frontRed')
                        document.querySelector('.field-two-three .frontRed').classList.remove('frontGreen')
                        document.querySelector('.field-two-three .frontRed').classList.remove('flip')
                        }, 300); 
                    }
                }
                break
            }

    }

    checkIfFinished(arg) {
        console.log('Red'+ document.querySelectorAll('.frontRed').length)
        console.log('Green'+ document.querySelectorAll('.frontGreen').length)
        console.log(arg)
        setTimeout(() => { 
            if (arg === 9){ 
                if (document.querySelectorAll('.frontRed').length + 1 > document.querySelectorAll('.frontGreen').length){
                alert('PlayerRed wins! to play again refresh the website')}
                else  alert('PlayerGreen wins! to play again refresh the website')
            }
        }, 1500); 
    }
}