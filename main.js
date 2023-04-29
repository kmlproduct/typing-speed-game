let words = [
    "pro",
    "java",
    "javascript",
    "html",
    "frontend"
    // "backend",
    // "python",
    // "c++",
    // "css",
    // "morocco",
    // "london",
    // "machine learning",
    // 'type scripte',
    // 'react js',
    // "oop",
    // 'data type'
];

let levels = {
    easy: '4',
    normal: '5',
    hard: '4'

}
let defaultNameLevel = ' easy';
let defaultValueSeconds = levels.easy
let theLevelName = document.querySelector('.container-game .level-name');
let theTiming = document.querySelector('.container-game .seconds');
let theBtn = document.querySelector('.start-game');
let input = document.querySelector('input')
let theWord = document.querySelector('.theword');
let upComingWords = document.querySelector('.words')
let leftSpan = document.querySelector('.left-span span')
let theScore = document.querySelector('.score')
let theScoreFrom = document.querySelector('.score-from')


theLevelName.innerHTML = 'easy';
theTiming.innerHTML = defaultValueSeconds;
theScoreFrom.innerHTML = words.length


theBtn.onclick = function () {
    input.focus()
    input.value = ''
    input.placeholder = ''


    generateWords()

}


function generateWords() {

    let randomWord = words[Math.floor(Math.random() * words.length)]
    let getIndexRandomWord = words.indexOf(randomWord)
    words.splice(getIndexRandomWord, 1)
    theWord.innerHTML = randomWord;
    upComingWords.innerHTML = '';
    for (var i = 0; i < words.length; i++) {
        let span = document.createElement('span')
        let txt = document.createTextNode(words[i])
        span.appendChild(txt)
        upComingWords.appendChild(span)
    }

    startInterval()







}

startInterval = function () {
    leftSpan.innerHTML = defaultValueSeconds

    let start = setInterval(() => {

        leftSpan.innerHTML--
        if (leftSpan.innerHTML === '0') {
            clearInterval(start)
            leftSpan.innerHTML = '0'
            if (theWord.innerHTML.toLocaleLowerCase() === input.value.toLocaleLowerCase()) {

                input.value = ''
                theScore.innerHTML++
                if (words.length > 0) {
                    generateWords()
                } else {
                    upComingWords.innerHTML = `
                    <div class='win'>
                    <p class='good'>Congalutaion!</p>
                    <span class='next-level good'>Next Level</span>
                    </div>
                  `
                    theWord.innerHTML = ''
                    document.querySelector('.next-level').addEventListener('click', function () {
                        window.onload()

                    })
                }

            }

        }
    }, 1000);
}