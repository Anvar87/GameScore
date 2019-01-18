var score, roundScore, activePlayer, gamePlaying;




init();

function init() {
    score = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    diceDisplayNone()

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.add('active');

}


document.querySelector('.btn-roll').addEventListener('click', function() {
    
    
    if(gamePlaying) {
        var dice1 = Math.floor(Math.random() *6) +1;
        var dice2 = Math.floor(Math.random() *6) +1;

        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
    
        document.getElementById('dice-1').src ='img/dice-' + dice1 + '.png';
        document.getElementById('dice-2').src ='img/dice-' + dice2 + '.png';

        if(dice1 !== 1 && dice2 !==1) {
            roundScore = dice1 + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            nextPlayer()
        }
    }
    

});


document.querySelector('.btn-hold').addEventListener('click', function() {

    if(gamePlaying) {
        score[activePlayer] += roundScore;
        document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];

        var input = document.querySelector('.final-score').value;
        var winScore;

        if(input) {
            winScore = input;
        } else {
            winScore = 100;
        }

        if(score[activePlayer] >= winScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winer!';
            diceDisplayNone()
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            nextPlayer();
        }
    }

});

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent ='0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    diceDisplayNone()
}

document.querySelector('.btn-new').addEventListener('click', init);

function diceDisplayNone() {
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
};

