const translations = {
    en: { dir: "ltr", correctLabel: "Correct", incorrectLabel: "Incorrect", solveThis: "Solve this!", submitBtn: "SUBMIT", continueBtn: "CONTINUE", historyTitle: "History", historyEmpty: "Start playing!", correctHeading: "Amazing!", incorrectHeading: "Oops!", isIndeed: "is", theAnswerWas: "Correct answer:", yourAnswer: "Yours", resultLabel: "Res", opAddition: "➕ Add", opSubtraction: "➖ Sub", opMultiplication: "✕ Mul", opDivision: "÷ Div" },
    es: { dir: "ltr", correctLabel: "Correcto", incorrectLabel: "Incorrecto", solveThis: "¡Resuelve!", submitBtn: "ENVIAR", continueBtn: "CONTINUAR", historyTitle: "Historial", historyEmpty: "¡Empieza!", correctHeading: "¡Bien!", incorrectHeading: "¡Uy!", isIndeed: "es", theAnswerWas: "Era:", yourAnswer: "Tuya", resultLabel: "Res", opAddition: "➕ Suma", opSubtraction: "➖ Resta", opMultiplication: "✕ Mult", opDivision: "÷ Div" },
    fr: { dir: "ltr", correctLabel: "Correct", incorrectLabel: "Incorrect", solveThis: "Calcule !", submitBtn: "OK", continueBtn: "SUITE", historyTitle: "Historique", historyEmpty: "Jouez !", correctHeading: "Bravo !", incorrectHeading: "Oups !", isIndeed: "est", theAnswerWas: "C'était :", yourAnswer: "Toi", resultLabel: "Res", opAddition: "➕ Add", opSubtraction: "➖ Sous", opMultiplication: "✕ Mult", opDivision: "÷ Div" },
    de: { dir: "ltr", correctLabel: "Richtig", incorrectLabel: "Falsch", solveThis: "Löse das!", submitBtn: "PRÜFEN", continueBtn: "WEITER", historyTitle: "Verlauf", historyEmpty: "Fang an!", correctHeading: "Super!", incorrectHeading: "Hoppla!", isIndeed: "ist", theAnswerWas: "War:", yourAnswer: "Du", resultLabel: "Res", opAddition: "➕ Add", opSubtraction: "➖ Sub", opMultiplication: "✕ Mult", opDivision: "÷ Div" },
    ru: { dir: "ltr", correctLabel: "Верно", incorrectLabel: "Неверно", solveThis: "Реши!", submitBtn: "ОК", continueBtn: "ДАЛЕЕ", historyTitle: "История", historyEmpty: "Начни игру!", correctHeading: "Верно!", incorrectHeading: "Ой!", isIndeed: "это", theAnswerWas: "Ответ:", yourAnswer: "Твой", resultLabel: "Рез", opAddition: "➕ Сложение", opSubtraction: "➖ Вычитание", opMultiplication: "✕ Умножение", opDivision: "÷ Деление" },
    he: { dir: "rtl", correctLabel: "נכון", incorrectLabel: "טעות", solveThis: "פתרו!", submitBtn: "שלח", continueBtn: "המשך", historyTitle: "היסטוריה", historyEmpty: "בואו נשחק!", correctHeading: "כל הכבוד!", incorrectHeading: "אופס!", isIndeed: "זה", theAnswerWas: "התשובה:", yourAnswer: "שלך", resultLabel: "תוצאה", opAddition: "➕ חיבור", opSubtraction: "➖ חיסור", opMultiplication: "✕ כפל", opDivision: "÷ חילוק" },
    az: { dir: "ltr", correctLabel: "Düz", incorrectLabel: "Səhv", solveThis: "Həll et!", submitBtn: "OK", continueBtn: "DAVAM", historyTitle: "Tarixçə", historyEmpty: "Başla!", correctHeading: "Afərin!", incorrectHeading: "Vay!", isIndeed: "budur", theAnswerWas: "Cavab:", yourAnswer: "Sənin", resultLabel: "Nət", opAddition: "➕ Toplama", opSubtraction: "➖ Çıxma", opMultiplication: "✕ Vurma", opDivision: "÷ Bölmə" }
};

let currentLang = 'en';
let currentOperation = 'multiplication';
let correctCount = 0;
let incorrectCount = 0;
let currentProblem = { a: 0, b: 0, answer: 0, operation: '', display: '' };

const elements = {
    viewQuestion: document.getElementById('view-question'),
    viewResult: document.getElementById('view-result'),
    answerInput: document.getElementById('answer-input'),
    equationDisplay: document.getElementById('equation'),
    resultIcon: document.getElementById('result-icon'),
    resultText: document.getElementById('result-text'),
    resultDetails: document.getElementById('result-details'),
    gameCard: document.getElementById('game-card'),
    historyContainer: document.getElementById('history-container'),
    historyEmpty: document.getElementById('history-empty'),
    btnContinue: document.getElementById('btn-continue'),
    scoreCorrect: document.getElementById('score-correct'),
    scoreIncorrect: document.getElementById('score-incorrect'),
    scoreContainer: document.getElementById('score-container'),
    historySection: document.getElementById('history-section')
};

const operationSymbols = {
    addition: '+',
    subtraction: '−',
    multiplication: '×',
    division: '÷'
};

function setLanguage(lang) {
    currentLang = lang;
    const config = translations[lang];
    document.body.dir = config.dir;
    elements.gameCard.dir = config.dir;
    elements.historySection.dir = config.dir;
    elements.scoreContainer.dir = config.dir;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.innerText = config[key];
    });

    document.querySelectorAll('[data-i18n-op]').forEach(el => {
        const key = el.getAttribute('data-i18n-op');
        el.innerText = config[key];
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
        const isActive = btn.getAttribute('data-lang') === lang;
        btn.className = `lang-btn px-2 py-1 rounded-md text-[9px] font-bold transition-colors ${isActive ? 'bg-indigo-600 text-white' : 'bg-slate-700 text-slate-400'}`;
    });
}

function setOperation(operation) {
    currentOperation = operation;
    document.querySelectorAll('.op-btn').forEach(btn => {
        if (btn.getAttribute('data-operation') === operation) {
            btn.className = 'op-btn px-4 py-2 rounded-lg text-sm font-bold transition-colors bg-indigo-600 text-white';
        } else {
            btn.className = 'op-btn px-4 py-2 rounded-lg text-sm font-bold transition-colors bg-slate-700';
        }
    });
    generateProblem();
}

function generateProblem() {
    let a, b, answer, symbol, display;
    
    switch(currentOperation) {
        case 'addition':
            a = Math.floor(Math.random() * 20) + 1;
            b = Math.floor(Math.random() * 20) + 1;
            answer = a + b;
            symbol = '+';
            break;
        case 'subtraction':
            a = Math.floor(Math.random() * 20) + 10;
            b = Math.floor(Math.random() * 10) + 1;
            answer = a - b;
            symbol = '−';
            break;
        case 'multiplication':
            a = Math.floor(Math.random() * 10) + 1;
            b = Math.floor(Math.random() * 10) + 1;
            answer = a * b;
            symbol = '×';
            break;
        case 'division':
            b = Math.floor(Math.random() * 9) + 1;
            answer = Math.floor(Math.random() * 10) + 1;
            a = answer * b;
            symbol = '÷';
            break;
    }
    
    currentProblem = { a, b, answer, operation: currentOperation, display: symbol };
    elements.equationDisplay.innerText = `${a} ${symbol} ${b}`;
    elements.answerInput.value = '';
    setTimeout(() => elements.answerInput.focus(), 50);
}

function checkAnswer() {
    const val = parseInt(elements.answerInput.value);
    if (isNaN(val)) return;
    const isCorrect = val === currentProblem.answer;
    addToHistory(currentProblem.a, currentProblem.b, val, currentProblem.answer, isCorrect);
    if (isCorrect) {
        correctCount++;
        elements.scoreCorrect.innerText = correctCount;
    } else {
        incorrectCount++;
        elements.scoreIncorrect.innerText = incorrectCount;
    }
    showResult(isCorrect);
}

function addToHistory(a, b, userVal, actualVal, isCorrect) {
    elements.historyEmpty.classList.add('hidden');
    const t = translations[currentLang];
    const row = document.createElement('div');
    const isHe = currentLang === 'he';
    const borderClass = isCorrect ? (isHe ? 'border-r-4 border-green-500' : 'border-l-4 border-green-500') : (isHe ? 'border-r-4 border-rose-500' : 'border-l-4 border-rose-500');
    const symbol = currentProblem.display;
    
    row.className = `flex items-center justify-between p-3 rounded-xl bg-slate-800/80 ${borderClass} pop-in text-xs flex-none`;
    row.innerHTML = `
        <div class="flex items-center gap-3">
            <span class="font-bold text-base ${isCorrect ? 'text-green-400' : 'text-rose-400'}">${isCorrect ? '✓' : '✗'}</span>
            <div>
                <p class="font-bold text-sm" dir="ltr">${a} ${symbol} ${b}</p>
                <p class="text-[9px] text-slate-500 uppercase">${t.yourAnswer}: ${userVal}</p>
            </div>
        </div>
        <div class="text-right">
            <span class="text-[10px] font-bold bg-slate-900 px-2 py-1 rounded-full text-slate-300">${actualVal}</span>
        </div>
    `;
    elements.historyContainer.prepend(row);
}

function showResult(isCorrect) {
    elements.viewQuestion.classList.add('hidden');
    elements.viewResult.classList.remove('hidden');
    elements.viewResult.classList.add('pop-in');
    const t = translations[currentLang];
    const symbol = currentProblem.display;
    if (isCorrect) {
        elements.resultIcon.innerText = "🌟";
        elements.resultText.innerText = t.correctHeading;
        elements.resultText.className = "text-3xl md:text-4xl font-black game-font italic text-green-400";
        elements.resultDetails.innerHTML = `<span dir="ltr">${currentProblem.a} ${symbol} ${currentProblem.b}</span> = ${currentProblem.answer}`;
        elements.gameCard.classList.replace('border-slate-900', 'border-green-900');
    } else {
        elements.resultIcon.innerText = "❌";
        elements.resultText.innerText = t.incorrectHeading;
        elements.resultText.className = "text-3xl md:text-4xl font-black game-font italic text-rose-400";
        elements.resultDetails.innerText = `${t.theAnswerWas} ${currentProblem.answer}`;
        elements.gameCard.classList.replace('border-slate-900', 'border-rose-900');
    }
    setTimeout(() => elements.btnContinue.focus(), 10);
}

function nextQuestion() {
    elements.viewResult.classList.add('hidden');
    elements.viewQuestion.classList.remove('hidden');
    elements.gameCard.className = elements.gameCard.className.replace(/border-(green|rose)-900/, 'border-slate-900');
    generateProblem();
}

document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        if (!elements.viewQuestion.classList.contains('hidden')) checkAnswer();
        else if (!elements.viewResult.classList.contains('hidden')) nextQuestion();
    }
});

window.onload = () => { setLanguage('en'); generateProblem(); };
