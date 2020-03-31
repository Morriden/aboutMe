import isYes from '/src/is-yes.js';

const actionButton = document.getElementById('action-button');
const result = document.getElementById('quiz-result');

function launchQuiz() {
    let correctAnswers = 0;
    let name = '';

    alert('Hello! it is me Jaskier!');

    const confirmed = confirm('Are you sure you want to take my test?');
    if (confirmed === false) {
        return;
    }

    const emptyString = '';    //why do i need this?

    const firstName = prompt("What's your first name?");
    name = firstName;

    const lastName = prompt("what's your last name?");
    name = name + '' + lastName;

    const geraltWitcher = prompt('Is Geralt of Rivia a Witcher (Yes/No)?');

    if (isYes(geraltWitcher) === true) {
        correctAnswers++;
    }

    const doppler = prompt('Is a Doppler the most dangerous creature on the list (Yes/No)?');

    if (isYes(doppler) === true) {
        correctAnswers++;
    }

    const tossCoin = prompt('Should you toss a coin to your Witcher (Yes/No)?');

    if (isYes(tossCoin) === true) {
        correctAnswers++;
    }

    let response = 'Your name is ' + name;

    if (correctAnswers >= 3) {
        response += ' and you have been listening to my tales!';
    } else {
        response += ' Tsk tsk I see you havent been listening...';
    }

    result.textContent = response;
}

actionButton.addEventListener('click', launchQuiz);