$(document).ready( function(){
    let correctNumber; 

    function getRandomNumber(){
        correctNumber = Math.floor((Math.random() * 100) + 1);  
        console.log(correctNumber);  
    }
    
    function checkNumber(){
        let guessedNumber = $('#number-guess').val();
        
        if(guessedNumber != ''){
            if(guessedNumber == correctNumber){
                $('#result').removeClass('alert-warning');
                $('#result').addClass('alert alert-success');
                $('#result').html('Awesome! You got it.');
            } else if (guessedNumber > correctNumber){
                $('#result').addClass('alert alert-warning');
                $('#result').html('Too high!');
                updateHistory(guessedNumber);
            } else {
                $('#result').addClass('alert alert-warning');
                $('#result').html('Too low!');
                updateHistory(guessedNumber);
            }
        } 
    }
    
    function restartGame(){
        getRandomNumber();
        $('#result').removeClass('alert alert-warning alert-success');
        $('#result').html('');

        $('#history').html('');
    
    }

    function updateHistory(guessedNumber){
        $('#history').append('<li class="list-group-item"> You guessed ' + guessedNumber + '</li>');
    }

    getRandomNumber();

    $('#submit-number').click(checkNumber);
    $('#restart-game').click(restartGame);
});

