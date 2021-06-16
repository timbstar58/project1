class TripleTriadGame {

    constructor(cards) {
        this.cards = cards;
        this.playerGreenCards = [];
        this.playerRedCards = [];
        this.pickedCardGreen= [];
        this.pickedCardRed=[]
    }




    checkIfStronger(arg) {
        
        // let oneOneAttackRight = document.querySelector('.field-one-one .on-board-cards').dataset.attackright
        // let oneOneAttackBottom = document.querySelector('.field-one-one .on-board-cards').dataset.attackbottom
        // let oneTwoAttackRight = document.querySelector('.field-one-two .on-board-cards').dataset.attackright
        // let oneTwoAttackBottom = document.querySelector('.field-one-two .on-board-cards').dataset.attackbottom
        // let oneTwoAttackLeft = document.querySelector('.field-one-two .on-board-cards').dataset.attackleft
        // let oneThreeAttackLeft = document.querySelector('.field-one-three .on-board-cards').dataset.attackleft
        // let oneThreeAttackBottom = document.querySelector('.field-one-three .on-board-cards').dataset.attackbottom

        // let twoOneAttackTop = document.querySelector('.field-two-one .on-board-cards').dataset.attacktop
        // let twoOneAttackRight = document.querySelector('.field-two-one .on-board-cards').dataset.attackright
        // let twoOneAttackBottom = document.querySelector('.field-two-one .on-board-cards').dataset.attackbottom
        // let twoTwoAttackTop = document.querySelector('.field-two-two .on-board-cards').dataset.attacktop
        // let twoTwoAttackRight = document.querySelector('.field-two-two .on-board-cards').dataset.attackright
        // let twoTwoAttackBottom = document.querySelector('.field-two-two .on-board-cards').dataset.attackbottom
        // let twoTwoAttackLeft = document.querySelector('.field-two-two .on-board-cards').dataset.attackleft
        // let twoThreeAttackTop = document.querySelector('.field-two-three .on-board-cards').dataset.attacktop
        // let twoThreeAttackBottom = document.querySelector('.field-two-three .on-board-cards').dataset.attackbottom
        // let twoThreeAttackLeft = document.querySelector('.field-two-three .on-board-cards').dataset.attackleft

        // let threeOneAttackTop = document.querySelector('.field-three-one .on-board-cards').dataset.attacktop
        // let threeOneAttackRight = document.querySelector('.field-three-one .on-board-cards').dataset.attackright
        // let threeTwoAttackLeft = document.querySelector('.field-three-two .on-board-cards').dataset.attackleft
        // let threeTwoAttackTop = document.querySelector('.field-three-two .on-board-cards').dataset.attacktop
        // let threeTwoAttackRight = document.querySelector('.field-three-two .on-board-cards').dataset.attackright
        // let threeThreeAttackLeft = document.querySelector('.field-three-three .on-board-cards').dataset.attackleft
        // let threeThreeAttackTop = document.querySelector('.field-three-three .on-board-cards').dataset.attacktop
        // console.log(arg.path[0].classList.value)
        
        switch (arg.path[0].classList.value) {
            case 'box field-one-one':
                console.log('field-one-one')
                console.log(document.querySelector('.field-two-one .on-board-cards'))
                console.log(document.querySelector('.field-one-two .on-board-cards'))
    
                if(document.querySelector('.field-two-one .on-board-cards') !== null){
                    if(document.querySelector('.field-one-one .on-board-cards').dataset.attackbottom > document.querySelector('.field-two-one .on-board-cards').dataset.attacktop){ console.log('flippy flappy')
                    }
                }
                else if(document.querySelector('.field-one-two .on-board-cards') !== null){
                    if(document.querySelector('.field-one-one .on-board-cards').dataset.attackright > document.querySelector('.field-one-two .on-board-cards').dataset.attackleft){console.log('flippy flappy')
                    }
                }
                break;
         
            case 'box field-one-two':
                console.log('field-one-two')
                console.log(document.querySelector('.field-one-three .on-board-cards'))
                console.log(document.querySelector('.field-two-two .on-board-cards'))
                console.log(document.querySelector('.field-one-one .on-board-cards'))
    
                if(document.querySelector('.field-one-three .on-board-cards') !== null){
                    if(document.querySelector('.field-one-two .on-board-cards').dataset.attackright > document.querySelector('.field-one-three .on-board-cards').dataset.attackleft){console.log('flippy flappy')
                    }
                }
                if(document.querySelector('.field-two-two .on-board-cards') !== null){
                    if(document.querySelector('.field-one-two .on-board-cards').dataset.attackbottom > document.querySelector('.field-two-two .on-board-cards').dataset.attacktop){console.log('flippy flappy')
                    }
                }
                if(document.querySelector('.field-one-one .on-board-cards') !== null){
                    if(document.querySelector('.field-one-two .on-board-cards').dataset.attackleft > document.querySelector('.field-one-one .on-board-cards').dataset.attackright){console.log('flippy flappy')
                    }
                }
                break;

            case 'box field-one-three':
                console.log('field-one-three')
                console.log(document.querySelector('.field-two-three .on-board-cards'))
                console.log(document.querySelector('.field-one-two .on-board-cards'))
    
                if(document.querySelector('.field-two-three .on-board-cards') !== null){
                    if(document.querySelector('.field-one-three .on-board-cards').dataset.attackbottom > document.querySelector('.field-two-three .on-board-cards').dataset.attacktop){console.log('flippy flappy')
                    }
                }
                if(document.querySelector('.field-one-two .on-board-cards') !== null){
                    if(document.querySelector('.field-one-three .on-board-cards').dataset.attackleft > document.querySelector('.field-one-two .on-board-cards').dataset.attackright){console.log('flippy flappy')
                    }
                }
                break;
    
            case 'box field-two-one' :
                console.log('field-two-one')
                if(document.querySelector('.field-two-two .on-board-cards') !== null){
                    if(document.querySelector('.field-two-one .on-board-cards').dataset.attackright > document.querySelector('.field-two-two .on-board-cards').dataset.attackleft){console.log('flippy flappy')
                    }
                }
                if(document.querySelector('.field-one-one .on-board-cards')!== null){
                    if(document.querySelector('.field-two-one .on-board-cards').dataset.attacktop > document.querySelector('.field-one-one .on-board-cards').dataset.attackbottom){console.log('flippy flappy')
                    }
                }
                if(document.querySelector('.field-three-one .on-board-cards')!== null){
                    if(document.querySelector('.field-two-one .on-board-cards').dataset.attackbottom > document.querySelector('.field-three-one .on-board-cards').dataset.attacktop){console.log('flippy flappy')
                    }
                }
                break;
    
            case 'box field-two-two':
                console.log('field-two-two')
                if(document.querySelector('.field-two-three .on-board-cards')!== null){
                    if(document.querySelector('.field-two-two .on-board-cards').dataset.attackright > document.querySelector('.field-two-three .on-board-cards').dataset.attackleft){console.log('flippy flappy')
                    }
                }
                if(document.querySelector('.field-one-two .on-board-cards')!== null){
                    if(document.querySelector('.field-two-two .on-board-cards').dataset.attacktop > document.querySelector('.field-one-two .on-board-cards').dataset.attackbottom){console.log('flippy flappy')
                    }
                }
                if(document.querySelector('.field-three-two .on-board-cards')!== null){
                    if(document.querySelector('.field-two-two .on-board-cards').dataset.attackbottom > document.querySelector('.field-three-two .on-board-cards').dataset.attacktop){console.log('flippy flappy')
                    }
                }
                if(document.querySelector('.field-two-one .on-board-cards')!== null){
                    if(document.querySelector('.field-two-two .on-board-cards').dataset.attackleft > document.querySelector('.field-two-one .on-board-cards').dataset.attackright){console.log('flippy flappy')
                    }
                }
                break
    
            case 'box field-two-three':
                console.log('field-two-three')
                if(document.querySelector('.field-two-two .on-board-cards') !== null){
                    if(document.querySelector('.field-two-three .on-board-cards').dataset.attackleft > document.querySelector('.field-two-two .on-board-cards').dataset.attackright){console.log('flippy flappy')
                    }
                }
                if(document.querySelector('.field-one-three .on-board-cards')!== null){
                    if(document.querySelector('.field-two-three .on-board-cards').dataset.attacktop > document.querySelector('.field-one-three .on-board-cards').dataset.attackbottom){console.log('flippy flappy')
                    }
                }
                if(document.querySelector('.field-three-three .on-board-cards')!== null){
                    if(document.querySelector('.field-two-three .on-board-cards').dataset.attackbottom > document.querySelector('.field-three-three .on-board-cards').dataset.attacktop){console.log('flippy flappy')
                    }
                }
                break;
            
    
            case 'box field-three-one':
                console.log('field-three-one')
                if(document.querySelector('.field-three-two .on-board-cards')!== null){
                    if(document.querySelector('.field-three-one .on-board-cards').dataset.attackright > document.querySelector('.field-three-two .on-board-cards').dataset.attackleft){console.log('flippy flappy')
                    }
                }
                if(document.querySelector('.field-two-one .on-board-cards')!== null){
                    if(document.querySelector('.field-three-one .on-board-cards').dataset.attacktop > document.querySelector('.field-two-one .on-board-cards').dataset.attackbottom){console.log('flippy flappy')
                    }
                }
                break;
    
            case 'box field-three-two':
                console.log('field-three-two')
                if(document.querySelector('.field-three-one .on-board-cards')!== null){
                    if (document.querySelector('.field-three-two .on-board-cards').dataset.attackleft > document.querySelector('.field-three-one .on-board-cards').dataset.attackright){console.log('flippy flappy')
                    }
                }
                if(document.querySelector('.field-two-two .on-board-cards')!== null){
                    if(document.querySelector('.field-three-two .on-board-cards').dataset.attacktop > document.querySelector('.field-two-two .on-board-cards').dataset.attackbottom){console.log('flippy flappy')
                    }
                }
                if(document.querySelector('.field-three-three .on-board-cards')!== null){
                    if(document.querySelector('.field-three-two .on-board-cards').dataset.attackright > document.querySelector('.field-three-three .on-board-cards').dataset.attackleft){console.log('flippy flappy')
                    }
                }
                break
    
            case 'box field-three-three':
                console.log('field-three-three')
                if(document.querySelector('.field-three-two .on-board-cards')!== null){
                    if(document.querySelector('.field-three-three .on-board-cards').dataset.attackleft > document.querySelector('.field-three-two .on-board-cards').dataset.attackright){console.log('flippy flappy')
                    }
                }
                if(document.querySelector('.field-two-three .on-board-cards')!== null){
                    if(document.querySelector('.field-three-three .on-board-cards').dataset.attacktop > document.querySelector('.field-two-three .on-board-cards').dataset.attackbottom){console.log('flippy flappy')
                    }
                }
                break
            }

        
        // Field 1-1
        // console.log(document.querySelector('.field-one-three .on-board-cards').dataset.attackbottom)

        // if (parseInt.oneOneAttackBottom > parseInt.twoOneAttackTop || undefined){ console.log('flippy flappy')
        // }
        // else if (parseInt.oneOneAttackRight > parseInt.oneTwoAttackLeft || undefined){console.log('flippy flappy')
        // }
        // // Field 1-2
        // else if (parseInt.oneTwoAttackRight > parseInt.oneThreeAttackLeft || undefined){console.log('flippy flappy')
        // }
        // else if (parseInt.oneTwoAttackBottom > parseInt.twoTwoAttackTop || undefined){console.log('flippy flappy')
        // }
        // // Field 1-3
        // else if (parseInt.oneThreeAttackBottom > parseInt.twoThreeAttackTop|| undefined){console.log('flippy flappy')
        // }
        // // Field 2-1
        // else if (parseInt.twoOneAttackRight > parseInt.twoTwoAttackLeft|| undefined ){console.log('flippy flappy')
        // }
        // else if (parseInt.twoOneAttackBottom > parseInt.threeOneAttackTop || undefined){console.log('flippy flappy')
        // }
        // // Field 2-2
        // else if (parseInt.twoTwoAttackRight > parseInt.twoThreeAttackLeft || undefined){console.log('flippy flappy')
        // }
        // else if (parseInt.twoTwoAttackBottom > parseInt.threeTwoAttackTop || undefined){console.log('flippy flappy')
        // }
        // // Field 2-3
        // else if (parseInt.twoThreeAttackBottom > parseInt.threeThreeAttackTop || undefined){console.log('flippy flappy')
        // }
        // // Field 3-1
        // else if (parseInt.threeOneAttackRight > parseInt.threeTwoAttackLeft|| undefined ){ console.log('flippy flappy')
        // }
        // // Field 3-2
        // else if (parseInt.threeTwoAttackRight > parseInt.threeThreeAttackLeft || undefined ){  console.log('flippy flappy')
        // }

    }

    checkIfFinished() {
       
    }
}