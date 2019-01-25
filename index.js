const STORE = [
    {
      question: 'When was Fortnite Battle Royale released?',
      answers: [
        'September 2017',
        'June 2017',
        'April 2016',
        'October 2017'
        ],
      correctAnswer: 'September 2017',
    },
    {
      question: 'What was the first cosmetic item a player could get?',
      answers: [
        'Pickaxe',
        'Umbrella',
        'Glider',
        'Character Skin'
        ],
        correctAnswer: 'Umbrella',
        icon: 'https://i.imgur.com/iQ0FBhB.png',
        alt: 'shield for 10 essentials icon'
    },
    {
      question: 'How much damage does a headshot from a Golden Scar deal',
      answers: [
        '50',
        '64',
        '72',
        '70'
        ],
        correctAnswer: '72',
        icon: 'https://i.imgur.com/uXukVjk.png',
        alt: 'weight icon'
    },
    {
      question: 'Who won the Fall Skirmish',
      answers: [
        'Zexrow and Vinny1',
        'Tfue & Cloakzy',
        'Nate Hill & FunkBomb',
        '72hrs & Chap'
        ],
      correctAnswer: 'Tfue & Cloakzy',
      icon: 'https://i.imgur.com/i0Q515j.png',
      alt: 'bear paw icon'
    },
    {
      question: 'How many different shotguns have there been throughout all of fortnite?',
      answers: [
        '3',
        '8',
        '5',
        '4'
        ],
      correctAnswer: '5',
      icon: 'https://i.imgur.com/LHRMcBd.png',
      alt: 'hat icon'
    },
    {
      question: 'What season was the Reaper skin from?',
      answers: [
        'Season 1',
        'Season 2',
        'Season 3',
        'Season 4'
        ],
      correctAnswer: 'Season 3',
      icon: 'https://i.imgur.com/XEwf3tK.png',
      alt: 'water bottle icon'
    },
    {
      question: 'How many different snipers have there been throughout all of fortnite?',
      answers: [
      '3',
      '4',
      '5',
      '8'
      ],
      correctAnswer: '5',
      icon: 'https://i.imgur.com/Kk9t3qL.png',
      alt: 'stream icon'
    },
    {
      question: 'What was the community given name for the purple Cube from season 5?',
      answers: [
        'Eric',
        'Kevin',
        'Waldo',
        'Ralph'
      ],
      correctAnswer: 'Kevin',
      icon: 'https://i.imgur.com/A2cWS88.png',
      alt: 'compass icon'
    },
    {
      question: 'What season was the Mako glider released?',
      answers: [
      'Season 1',
      'Season 2',
      'Season 3',
      'Season 4'
      ],
      correctAnswer: 'Season 1',
      icon: 'https://i.imgur.com/VwFRlXL.png',
      alt: 'bear head icon'
    },
    {
      question: 'What was the first gun ever ‘vaulted’ in Fortnite Battle Royale?',
      answers: [
        'Zaptron',
        'Submachine gun',
        'Crossbow',
        'Smoke Grenades'
    ],
    correctAnswer: 'Zaptron',
    icon: 'https://i.imgur.com/YdcTVPW.png',
    alt: 'skull and crossbones icon'
    }
];

let questionNumber = 0;
let score = 0;

//generate question html
function generateQuestion () {
    console.log(questionNumber);
  if (questionNumber < STORE.length) {
    return `<div class="question-${questionNumber}">
    <h2>${STORE[questionNumber].question}</h2>
    <form>
    <fieldset>
    <label class="answerOption">
    <input type="radio" value="${STORE[questionNumber].answers[0]}" name="answer" required>
    <span>${STORE[questionNumber].answers[0]}</span>
    </label>
    <label class="answerOption">
    <input type="radio" value="${STORE[questionNumber].answers[1]}" name="answer" required>
    <span>${STORE[questionNumber].answers[1]}</span>
    </label>
    <label class="answerOption">
    <input type="radio" value="${STORE[questionNumber].answers[2]}" name="answer" required>
    <span>${STORE[questionNumber].answers[2]}</span>
    </label>
    <label class="answerOption">
    <input type="radio" value="${STORE[questionNumber].answers[3]}" name="answer" required>
    <span>${STORE[questionNumber].answers[3]}</span>
    </label>
    <button type="submit" class="submitButton">Submit</button>
    </fieldset>
    </form>
    </div>`;
} else {
    renderResults();
    restartQuiz();
    $('.questionNumber').text(10)
  }
}
//generate start quix element
function generateStartQuiz() {
    return `<div class="quizStart">
    <h1>Let's see you get THIS Fortnite dub?</h1>
    <button type="button" class="startButton">Jump In!</button>
  </div>`;
}

//increment question number
function changeQuestionNumber () {
  //if (questionNumber < STORE.length) {
    questionNumber ++;
  //}
  $('.questionNumber').text(questionNumber+1);
}

//increment score
function changeScore () {
  score ++;
}

//start quiz
//on startQuizButton click hide start div
//unhide quiz form div
function startQuiz () {
  $('main').on('click', '.startButton', function (event) {
    $('.quizStart').remove();
    $('.questionAnswerForm').css('display', 'block');
    $('.questionNumber').text(1);
});
}

// render question in DOM
function renderQuestion () {
  $('.questionAnswerForm').html(generateQuestion());
}

//user selects answer on submit run user feedback
function userSelectAnswer () {
  $('main').on('submit', 'form', function (event) {
    event.preventDefault();
    let selected = $('input:checked');
    let answer = selected.val();
    let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
    if (answer === correctAnswer) {
      selected.parent().addClass('correct');
      ifAnswerIsCorrect();
    } else {
      selected.parent().addClass('wrong');
      ifAnswerIsWrong();
    }
  });
}

function ifAnswerIsCorrect () {
  userAnswerFeedbackCorrect();
  updateScore();
}

function ifAnswerIsWrong () {
  userAnswerFeedbackWrong();
}

//user feedback for correct answer
function userAnswerFeedbackCorrect () {
  $('.questionAnswerForm').html(`<div class="correctFeedback"><p><b>You got it right!</b></p><button type=button class="nextButton">Next</button></div>`);
}

//user feedback for wrong answer
function userAnswerFeedbackWrong () {
  let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
  // let iconImage = `${STORE[questionNumber].icon}`;
  $('.questionAnswerForm').html(`<div class="correctFeedback"><div class="icon"><p><b>You got it wrong</b><br>the correct answer is <span>"${correctAnswer}"</span></p><button type=button class="nextButton">Next</button></div>`);
}

//update score text
function updateScore () {
  changeScore();
  $('.score').text(score);
}

//when quiz is over this is the html for the page
function renderResults () {
  if (score >= 8) {
    $('.questionAnswerForm').html(`<div class="results correctFeedback"><h3>You're on fire!</h3><img src="https://d1u5p3l4wpay3k.cloudfront.net/fortnite_gamepedia/1/1d/Victory_royale_2.png" alt="victory royle icon"/><p>You got ${score} / 10</p><p>You're a Fortnite Pro!</p><button class="restartButton">Restart Quiz</button></div>`);
  } else if (score < 8 && score >= 5) {
    $('.questionAnswerForm').html(`<div class="results correctFeedback"><h3>Almost there!</h3><p>You got ${score} / 10</p><p>Head back to the lobby and try again.</p><button class="restartButton">Restart Quiz</button></div>`);
  } else {
    $('.questionAnswerForm').html(`<div class="results correctFeedback"><h3>Uninstall Fortnite!</h3><p>You got ${score} / 10</p><p>You need a new game.</p><button class="restartButton">Restart Quiz</button></div>`);
  }
}

//what happens when the user clicks next
function renderNextQuestion () {
  $('main').on('click', '.nextButton', function (event) {
    changeQuestionNumber();
    renderQuestion();
  });
}

//restart quiz function - reloads page to start quiz over
function restartQuiz () {
  $('main').on('click', '.restartButton', function (event) {
    resetQuiz();
  });
}

function resetQuiz () {
    $('.questionAnswerForm').css('display', 'none');
    $('main').append(generateStartQuiz());
    $('.questionNumber').text(0);
    $('.score').text(0);
    questionNumber = 0;
    score = 0;
    $('.questionAnswerForm').html(generateQuestion());
}

//run quiz functions
function createQuiz () {
  startQuiz();
  renderQuestion();
  userSelectAnswer();
  renderNextQuestion();
}

$(createQuiz);
