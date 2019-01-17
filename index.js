var score, roundScore, activePlayer, gamePlaying;

var dice = Math.floor(Math.random() *6) +1;


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
        var dice = Math.floor(Math.random() *6) +1;
        var diceImg = document.querySelector('.dice');
        diceImg.style.display = 'block';
        diceImg.src ='img/dice-' + dice + '.png';

        if(dice !== 1) {
            roundScore += dice;
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

        if(score[activePlayer] >= 10) {
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
    document.querySelector('.dice').style.display = 'none';
};

