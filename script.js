const translations = {
    en: { dir: "ltr", correctLabel: "Correct", incorrectLabel: "Incorrect", solveThis: "Solve this!", submitBtn: "SUBMIT", continueBtn: "CONTINUE", historyTitle: "History", historyEmpty: "Start playing!", correctHeading: "Amazing!", incorrectHeading: "Oops!", isIndeed: "is", theAnswerWas: "Correct answer:", yourAnswer: "Yours", resultLabel: "Res", opAddition: "➕ Addition", opSubtraction: "➖ Subtraction", opMultiplication: "✕ Multiplication", opDivision: "÷ Division", leaderboardBtn: "🏆 Leaderboard", leaderboardTitle: "🏆 Leaderboard", leaderboardEmpty: "No scores yet. Play and get on the board!", playerName: "Player Name", score: "Score", operation: "Operation", enterName: "Enter your name", saveScore: "Save Score", backBtn: "← Back to Game", rank: "Rank", date: "Date", soundToggle: "🔊 Sound ON", timedModeBtn: "⏱️ Timed Mode OFF", timeUp: "Time's Up!", finalScore: "Final Score", difficultyBtn: "📊 Difficulty", difficultyEasy: "Easy", difficultyMedium: "Medium", difficultyHard: "Hard", achievementsBtn: "🎖️ Achievements", achievementsTitle: "🎖️ Achievements", achievementUnlocked: "Achievement Unlocked!", achievementsEmpty: "No achievements yet. Keep playing!", achievementLocked: "🔒 Locked", achievementProgress: "Progress" },
    es: { dir: "ltr", correctLabel: "Correcto", incorrectLabel: "Incorrecto", solveThis: "¡Resuelve!", submitBtn: "ENVIAR", continueBtn: "CONTINUAR", historyTitle: "Historial", historyEmpty: "¡Empieza!", correctHeading: "¡Bien!", incorrectHeading: "¡Uy!", isIndeed: "es", theAnswerWas: "Era:", yourAnswer: "Tuya", resultLabel: "Res", opAddition: "➕ Suma", opSubtraction: "➖ Resta", opMultiplication: "✕ Multiplicación", opDivision: "÷ División", leaderboardBtn: "🏆 Tabla de Líderes", leaderboardTitle: "🏆 Tabla de Líderes", leaderboardEmpty: "Sin puntuaciones. ¡Juega y sube al podio!", playerName: "Nombre del Jugador", score: "Puntuación", operation: "Operación", enterName: "Ingresa tu nombre", saveScore: "Guardar Puntuación", backBtn: "← Volver al Juego", rank: "Rango", date: "Fecha", soundToggle: "🔊 Sonido ON", timedModeBtn: "⏱️ Modo Temporizador DESACTIVADO", timeUp: "¡Se acabó el tiempo!", finalScore: "Puntuación Final", difficultyBtn: "📊 Dificultad", difficultyEasy: "Fácil", difficultyMedium: "Medio", difficultyHard: "Difícil", achievementsBtn: "🎖️ Logros", achievementsTitle: "🎖️ Logros", achievementUnlocked: "¡Logro Desbloqueado!", achievementsEmpty: "Sin logros. ¡Sigue jugando!", achievementLocked: "🔒 Bloqueado", achievementProgress: "Progreso" },
    fr: { dir: "ltr", correctLabel: "Correct", incorrectLabel: "Incorrect", solveThis: "Calcule !", submitBtn: "OK", continueBtn: "SUITE", historyTitle: "Historique", historyEmpty: "Jouez !", correctHeading: "Bravo !", incorrectHeading: "Oups !", isIndeed: "est", theAnswerWas: "C'était :", yourAnswer: "Toi", resultLabel: "Res", opAddition: "➕ Addition", opSubtraction: "➖ Soustraction", opMultiplication: "✕ Multiplication", opDivision: "÷ Division", leaderboardBtn: "🏆 Classement", leaderboardTitle: "🏆 Classement", leaderboardEmpty: "Aucun score. Jouez et montez au classement!", playerName: "Nom du Joueur", score: "Score", operation: "Opération", enterName: "Entrez votre nom", saveScore: "Enregistrer Score", backBtn: "← Retour au Jeu", rank: "Rang", date: "Date", soundToggle: "🔊 Son ON", timedModeBtn: "⏱️ Mode Chrono ARRÊT", timeUp: "Temps écoulé!", finalScore: "Score Final", difficultyBtn: "📊 Difficulté", difficultyEasy: "Facile", difficultyMedium: "Moyen", difficultyHard: "Difficile", achievementsBtn: "🎖️ Succès", achievementsTitle: "🎖️ Succès", achievementUnlocked: "Succès Débloqué!", achievementsEmpty: "Pas de succès. Continuez!", achievementLocked: "🔒 Verrouillé", achievementProgress: "Progrès" },
    de: { dir: "ltr", correctLabel: "Richtig", incorrectLabel: "Falsch", solveThis: "Löse das!", submitBtn: "PRÜFEN", continueBtn: "WEITER", historyTitle: "Verlauf", historyEmpty: "Fang an!", correctHeading: "Super!", incorrectHeading: "Hoppla!", isIndeed: "ist", theAnswerWas: "War:", yourAnswer: "Du", resultLabel: "Res", opAddition: "➕ Addition", opSubtraction: "➖ Subtraktion", opMultiplication: "✕ Multiplikation", opDivision: "÷ Division", leaderboardBtn: "🏆 Rangliste", leaderboardTitle: "🏆 Rangliste", leaderboardEmpty: "Keine Punktzahl. Spiel und steige in die Liste auf!", playerName: "Spielername", score: "Punkte", operation: "Operation", enterName: "Gib deinen Namen ein", saveScore: "Punktzahl Speichern", backBtn: "← Zurück zum Spiel", rank: "Rang", date: "Datum", soundToggle: "🔊 Ton AN", timedModeBtn: "⏱️ Zeitmodus AUS", timeUp: "Zeit vorbei!", finalScore: "Endscore", difficultyBtn: "📊 Schwierigkeit", difficultyEasy: "Einfach", difficultyMedium: "Mittel", difficultyHard: "Schwer", achievementsBtn: "🎖️ Erfolge", achievementsTitle: "🎖️ Erfolge", achievementUnlocked: "Erfolg Freigeschaltet!", achievementsEmpty: "Keine Erfolge. Spiel weiter!", achievementLocked: "🔒 Gesperrt", achievementProgress: "Fortschritt" },
    ru: { dir: "ltr", correctLabel: "Верно", incorrectLabel: "Неверно", solveThis: "Реши!", submitBtn: "ОК", continueBtn: "ДАЛЕЕ", historyTitle: "История", historyEmpty: "Начни игру!", correctHeading: "Верно!", incorrectHeading: "Ой!", isIndeed: "это", theAnswerWas: "Ответ:", yourAnswer: "Твой", resultLabel: "Рез", opAddition: "➕ Сложение", opSubtraction: "➖ Вычитание", opMultiplication: "✕ Умножение", opDivision: "÷ Деление", leaderboardBtn: "🏆 Таблица Лидеров", leaderboardTitle: "🏆 Таблица Лидеров", leaderboardEmpty: "Нет результатов. Играй и поднимись в таблицу!", playerName: "Имя Игрока", score: "Очки", operation: "Операция", enterName: "Введи своё имя", saveScore: "Сохранить Результат", backBtn: "← Вернуться в Игру", rank: "Место", date: "Дата", soundToggle: "🔊 Звук ВКЛ", timedModeBtn: "⏱️ Режим Времени ВЫКЛ", timeUp: "Время истекло!", finalScore: "Финальный счёт", difficultyBtn: "📊 Сложность", difficultyEasy: "Легко", difficultyMedium: "Средне", difficultyHard: "Сложно", achievementsBtn: "🎖️ Достижения", achievementsTitle: "🎖️ Достижения", achievementUnlocked: "Достижение Получено!", achievementsEmpty: "Нет достижений. Продолжай!", achievementLocked: "🔒 Заблокировано", achievementProgress: "Прогресс" },
    he: { dir: "rtl", correctLabel: "נכון", incorrectLabel: "טעות", solveThis: "פתרו!", submitBtn: "שלח", continueBtn: "המשך", historyTitle: "היסטוריה", historyEmpty: "בואו נשחק!", correctHeading: "כל הכבוד!", incorrectHeading: "אופס!", isIndeed: "זה", theAnswerWas: "התשובה:", yourAnswer: "שלך", resultLabel: "תוצאה", opAddition: "➕ חיבור", opSubtraction: "➖ חיסור", opMultiplication: "✕ כפל", opDivision: "÷ חילוק", leaderboardBtn: "🏆 לוח הדירוג", leaderboardTitle: "🏆 לוח הדירוג", leaderboardEmpty: "אין ניקוד. שחק והיות בלוח!", playerName: "שם השחקן", score: "ניקוד", operation: "פעולה", enterName: "הכנס את שמך", saveScore: "שמור ניקוד", backBtn: "← חזור למשחק", rank: "דירוג", date: "תאריך", soundToggle: "🔊 צליל ON", timedModeBtn: "⏱️ מצב זמון כבוי", timeUp: "הזמן אזל!", finalScore: "ניקוד סופי", difficultyBtn: "📊 רמת קושי", difficultyEasy: "קל", difficultyMedium: "בינוני", difficultyHard: "קשה", achievementsBtn: "🎖️ הישגים", achievementsTitle: "🎖️ הישגים", achievementUnlocked: "הישג נפתח!", achievementsEmpty: "אין הישגים. המשך!", achievementLocked: "🔒 נעול", achievementProgress: "התקדמות" },
    az: { dir: "ltr", correctLabel: "Düz", incorrectLabel: "Səhv", solveThis: "Həll et!", submitBtn: "OK", continueBtn: "DAVAM", historyTitle: "Tarixçə", historyEmpty: "Başla!", correctHeading: "Afərin!", incorrectHeading: "Vay!", isIndeed: "budur", theAnswerWas: "Cavab:", yourAnswer: "Sənin", resultLabel: "Nət", opAddition: "➕ Toplama", opSubtraction: "➖ Çıxma", opMultiplication: "✕ Vurma", opDivision: "÷ Bölmə", leaderboardBtn: "🏆 Lider Taxtası", leaderboardTitle: "🏆 Lider Taxtası", leaderboardEmpty: "Nəticə yoxdur. Oyna və lider taxtasına çıx!", playerName: "Oyunçu Adı", score: "Xal", operation: "Əməliyyat", enterName: "Adınızı daxil edin", saveScore: "Nəticəni Yadda Saxla", backBtn: "← Oyuna Qayıt", rank: "Rütbə", date: "Tarix", soundToggle: "🔊 Səs ON", timedModeBtn: "⏱️ Zaman Rejimi SOFF", timeUp: "Vaxt bitdi!", finalScore: "Son Nəticə", difficultyBtn: "📊 Çətinlik", difficultyEasy: "Asan", difficultyMedium: "Orta", difficultyHard: "Çətin", achievementsBtn: "🎖️ Nailiyyətlər", achievementsTitle: "🎖️ Nailiyyətlər", achievementUnlocked: "Nailiyyət Açıldı!", achievementsEmpty: "Nailiyyət yoxdur. Davam et!", achievementLocked: "🔒 Kilidli", achievementProgress: "İrəliləyiş" }
};

let currentLang = 'en';
let currentOperation = 'multiplication';
let correctCount = 0;
let incorrectCount = 0;
let currentProblem = { a: 0, b: 0, answer: 0, operation: '', display: '' };
let leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
let soundEnabled = JSON.parse(localStorage.getItem('soundEnabled')) !== false;
let audioContext = null;
let timedModeEnabled = JSON.parse(localStorage.getItem('timedModeEnabled')) !== false;
let timerInterval = null;
let timeRemaining = 60;
const TIMED_MODE_DURATION = 60; // 60 seconds
let difficulty = localStorage.getItem('difficulty') || 'medium';
let consecutiveCorrect = 0;
let totalProblemsAnswered = 0;
let languagesUsed = JSON.parse(localStorage.getItem('languagesUsed')) || [];
let operationsCompleted = JSON.parse(localStorage.getItem('operationsCompleted')) || [];

// Achievement definitions
const achievementsList = [
    { id: 'first_steps', icon: '👶', nameKey: 'First Steps', descKey: 'Solve your first problem', condition: () => totalProblemsAnswered >= 1 },
    { id: 'fast_learner', icon: '🎯', nameKey: 'Fast Learner', descKey: 'Solve 10 problems', condition: () => totalProblemsAnswered >= 10 },
    { id: 'math_expert', icon: '🧠', nameKey: 'Math Expert', descKey: 'Solve 50 problems', condition: () => totalProblemsAnswered >= 50 },
    { id: 'century_club', icon: '💯', nameKey: 'Century Club', descKey: 'Solve 100 problems', condition: () => totalProblemsAnswered >= 100 },
    { id: 'perfect_streak', icon: '⭐', nameKey: 'Perfect Streak', descKey: '10 correct answers in a row', condition: () => consecutiveCorrect >= 10 },
    { id: 'polyglot', icon: '🌍', nameKey: 'Polyglot', descKey: 'Use all 7 languages', condition: () => languagesUsed.length >= 7 },
    { id: 'master_of_all', icon: '🏆', nameKey: 'Master of All', descKey: 'Complete problems in all 4 operations', condition: () => operationsCompleted.length >= 4 },
    { id: 'accuracy_king', icon: '👑', nameKey: 'Accuracy King', descKey: 'Achieve 90% accuracy over 20 problems', condition: () => totalProblemsAnswered >= 20 && (correctCount / totalProblemsAnswered) >= 0.9 }
];

let achievements = JSON.parse(localStorage.getItem('achievements')) || {};

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

    // Track language used for achievement
    trackLanguageUsed(lang);

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
        btn.className = `lang-btn flex-1 px-3 py-3 rounded-lg text-base font-bold transition-colors hover:bg-slate-600 truncate ${isActive ? 'bg-indigo-600 text-white' : 'bg-slate-700 text-slate-400'}`;
    });
    
    // Update timed mode button with new language
    updateTimedModeButton();
    updateDifficultyButton();
    
    // Update difficulty display in stats
    const levelKey = `difficulty${difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}`;
    document.getElementById('difficulty-display').innerText = config[levelKey];
    
    // Update leaderboard display if it's open
    if (!document.getElementById('leaderboard-modal').classList.contains('hidden')) {
        displayLeaderboard();
    }
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
    let maxNum = 10;
    
    // Adjust difficulty
    if (difficulty === 'easy') maxNum = 5;
    else if (difficulty === 'medium') maxNum = 10;
    else if (difficulty === 'hard') maxNum = 15;
    
    switch(currentOperation) {
        case 'addition':
            a = Math.floor(Math.random() * maxNum * 2) + 1;
            b = Math.floor(Math.random() * maxNum * 2) + 1;
            answer = a + b;
            symbol = '+';
            break;
        case 'subtraction':
            a = Math.floor(Math.random() * (maxNum * 2)) + maxNum;
            b = Math.floor(Math.random() * maxNum) + 1;
            answer = a - b;
            symbol = '−';
            break;
        case 'multiplication':
            a = Math.floor(Math.random() * maxNum) + 1;
            b = Math.floor(Math.random() * maxNum) + 1;
            answer = a * b;
            symbol = '×';
            break;
        case 'division':
            b = Math.floor(Math.random() * Math.min(9, maxNum - 1)) + 1;
            answer = Math.floor(Math.random() * maxNum) + 1;
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
    
    totalProblemsAnswered++;
    
    if (isCorrect) {
        correctCount++;
        consecutiveCorrect++;
        elements.scoreCorrect.innerText = correctCount;
        playCorrectSound();
    } else {
        incorrectCount++;
        consecutiveCorrect = 0; // Reset streak on wrong answer
        elements.scoreIncorrect.innerText = incorrectCount;
        playIncorrectSound();
    }
    
    // Track operation completion
    trackOperationCompleted(currentOperation);
    
    // Check for new achievements
    checkAchievements();
    
    updateStats();
    showResult(isCorrect);
}

function updateStats() {
    const total = correctCount + incorrectCount;
    const accuracy = total === 0 ? 0 : Math.round((correctCount / total) * 100);
    document.getElementById('accuracy-display').innerText = `${accuracy}%`;
    document.getElementById('total-display').innerText = total;
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

// Sound Effects
function initAudioContext() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
    return audioContext;
}

function playCorrectSound() {
    if (!soundEnabled || !audioContext) return;
    const ctx = initAudioContext();
    const now = ctx.currentTime;
    
    // Create a pleasant "correct" sound - ascending tones
    const frequencies = [523, 659, 784]; // C5, E5, G5 - happy chord
    frequencies.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3 + i * 0.05);
        osc.start(now + i * 0.05);
        osc.stop(now + 0.3 + i * 0.05);
    });
}

function playIncorrectSound() {
    if (!soundEnabled || !audioContext) return;
    const ctx = initAudioContext();
    const now = ctx.currentTime;
    
    // Create a dramatic "buzz" effect - rapid vibration
    const buzzOsc = ctx.createOscillator();
    const buzzGain = ctx.createGain();
    buzzOsc.connect(buzzGain);
    buzzGain.connect(ctx.destination);
    buzzOsc.frequency.value = 150; // Low buzz tone
    buzzOsc.type = 'sawtooth';
    buzzGain.gain.setValueAtTime(0.3, now);
    buzzGain.gain.exponentialRampToValueAtTime(0.01, now + 0.6);
    buzzOsc.start(now);
    buzzOsc.stop(now + 0.6);
}

function playBackgroundMusic() {
    if (!soundEnabled || !audioContext) return;
    const ctx = initAudioContext();
    const now = ctx.currentTime;
    
    // Simple looping background melody - upbeat and fun
    const playNote = (freq, duration, startTime) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.frequency.value = freq;
        osc.type = 'sine';
        gain.gain.setValueAtTime(0.1, startTime);
        gain.gain.exponentialRampToValueAtTime(0.01, startTime + duration * 0.9);
        osc.start(startTime);
        osc.stop(startTime + duration);
    };
    
    // Play a simple melody
    const notes = [
        { freq: 523, dur: 0.3 },  // C5
        { freq: 587, dur: 0.3 },  // D5
        { freq: 659, dur: 0.3 },  // E5
        { freq: 784, dur: 0.6 }   // G5
    ];
    
    let time = now;
    notes.forEach(note => {
        playNote(note.freq, note.dur, time);
        time += note.dur;
    });
}

function toggleSound() {
    soundEnabled = !soundEnabled;
    localStorage.setItem('soundEnabled', soundEnabled);
    
    const btn = document.getElementById('sound-toggle-btn');
    if (soundEnabled) {
        btn.textContent = '🔊 Sound ON';
        btn.className = 'flex-1 px-3 py-3 rounded-lg text-base font-bold transition-colors bg-green-600 hover:bg-green-500 text-white truncate';
        playBackgroundMusic();
    } else {
        btn.textContent = '🔇 Sound OFF';
        btn.className = 'flex-1 px-3 py-3 rounded-lg text-base font-bold transition-colors bg-red-600 hover:bg-red-500 text-white truncate';
    }
    
    // Update translations
    const t = translations[currentLang];
    if (btn.hasAttribute('data-i18n')) {
        if (soundEnabled) {
            btn.textContent = t.soundToggle.replace('OFF', 'ON');
        } else {
            btn.textContent = t.soundToggle.replace('ON', 'OFF');
        }
    }
}

// Leaderboard Functions
function showLeaderboard() {
    document.getElementById('leaderboard-modal').classList.remove('hidden');
    displayLeaderboard();
    document.getElementById('player-name-input').focus();
}

function hideLeaderboard() {
    document.getElementById('leaderboard-modal').classList.add('hidden');
}

function saveCurrentScore() {
    const nameInput = document.getElementById('player-name-input');
    const playerName = nameInput.value.trim();
    
    if (!playerName) {
        alert(currentLang === 'en' ? 'Please enter your name' : 'Ingresa tu nombre');
        return;
    }
    
    const score = correctCount;
    const operation = currentOperation;
    const date = new Date().toLocaleDateString();
    
    leaderboard.push({
        name: playerName,
        score: score,
        operation: operation,
        date: date,
        lang: currentLang
    });
    
    leaderboard.sort((a, b) => b.score - a.score);
    localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
    
    nameInput.value = '';
    displayLeaderboard();
}

function displayLeaderboard() {
    const container = document.getElementById('leaderboard-container');
    const empty = document.getElementById('leaderboard-empty');
    const t = translations[currentLang];
    
    if (leaderboard.length === 0) {
        container.innerHTML = '';
        empty.classList.remove('hidden');
        return;
    }
    
    empty.classList.add('hidden');
    container.innerHTML = '<div class="space-y-2">';
    
    leaderboard.slice(0, 20).forEach((entry, index) => {
        const opLabel = t[`op${entry.operation.charAt(0).toUpperCase() + entry.operation.slice(1)}`] || entry.operation;
        const row = document.createElement('div');
        row.className = 'flex items-center justify-between p-3 rounded-lg bg-slate-800 border-l-4 border-amber-500 text-sm';
        row.innerHTML = `
            <div class="flex items-center gap-3">
                <span class="font-black text-amber-400 text-lg w-8 text-center">${index + 1}</span>
                <div>
                    <p class="font-bold text-white">${entry.name}</p>
                    <p class="text-[9px] text-slate-400">${entry.date}</p>
                </div>
            </div>
            <div class="text-right">
                <p class="font-black text-lg text-amber-400">${entry.score}</p>
                <p class="text-[9px] text-slate-400">${opLabel}</p>
            </div>
        `;
        container.appendChild(row);
    });
    
    container.innerHTML += '</div>';
}

function updateLeaderboardText() {
    const t = translations[currentLang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) el.innerText = t[key];
    });
}

// Timed Mode Functions
function toggleTimedMode() {
    timedModeEnabled = !timedModeEnabled;
    localStorage.setItem('timedModeEnabled', JSON.stringify(timedModeEnabled));
    updateTimedModeButton();
    if (timedModeEnabled) {
        startTimedGame();
    } else {
        stopTimer();
    }
}

// Difficulty Functions
function setDifficulty(level) {
    difficulty = level;
    localStorage.setItem('difficulty', difficulty);
    updateDifficultyButton();
    closeDifficultyMenu();
    generateProblem();
}

function updateDifficultyButton() {
    const btn = document.getElementById('difficulty-btn');
    const t = translations[currentLang];
    const levelKey = `difficulty${difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}`;
    btn.innerHTML = `📊 ${t[levelKey]}`;
}

function closeDifficultyMenu() {
    document.getElementById('difficulty-menu').classList.add('hidden');
}

// Toggle difficulty menu
document.addEventListener('click', (e) => {
    const menu = document.getElementById('difficulty-menu');
    const btn = document.getElementById('difficulty-btn');
    if (e.target === btn || btn.contains(e.target)) {
        menu.classList.toggle('hidden');
    } else if (!menu.contains(e.target)) {
        menu.classList.add('hidden');
    }
});

function toggleTimedMode() {
    timedModeEnabled = !timedModeEnabled;
    localStorage.setItem('timedModeEnabled', JSON.stringify(timedModeEnabled));
    updateTimedModeButton();
    if (timedModeEnabled) {
        startTimedGame();
    } else {
        stopTimer();
    }
}

function updateTimedModeButton() {
    const btn = document.getElementById('timed-mode-btn');
    const t = translations[currentLang];
    const baseText = t.timedModeBtn;
    if (timedModeEnabled) {
        btn.textContent = baseText.replace('OFF', 'ON');
        btn.className = 'flex-1 px-3 py-3 rounded-lg text-base font-bold transition-colors bg-blue-600 hover:bg-blue-500 text-white truncate';
    } else {
        btn.textContent = baseText.replace('ON', 'OFF');
        btn.className = 'flex-1 px-3 py-3 rounded-lg text-base font-bold transition-colors bg-slate-700 hover:bg-slate-600 text-white truncate';
    }
}

function startTimedGame() {
    timeRemaining = TIMED_MODE_DURATION;
    correctCount = 0;
    incorrectCount = 0;
    elements.scoreCorrect.innerText = '0';
    elements.scoreIncorrect.innerText = '0';
    elements.historyContainer.innerHTML = '';
    elements.historyEmpty.classList.remove('hidden');
    document.getElementById('timer-display').classList.remove('hidden');
    generateProblem();
    startTimer();
}

function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timeRemaining--;
        document.getElementById('timer-seconds').innerText = timeRemaining;
        
        // Change color as time runs low
        const timerDisplay = document.getElementById('timer-display');
        if (timeRemaining <= 10) {
            timerDisplay.classList.add('text-red-400');
            timerDisplay.classList.remove('text-yellow-400');
        } else {
            timerDisplay.classList.add('text-yellow-400');
            timerDisplay.classList.remove('text-red-400');
        }
        
        if (timeRemaining <= 0) {
            endTimedGame();
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
    document.getElementById('timer-display').classList.add('hidden');
}

function endTimedGame() {
    stopTimer();
    elements.viewQuestion.classList.add('hidden');
    elements.viewResult.classList.remove('hidden');
    elements.viewResult.classList.add('pop-in');
    
    const t = translations[currentLang];
    elements.resultIcon.innerText = "⏱️";
    elements.resultText.innerText = t.timeUp;
    elements.resultText.className = "text-3xl md:text-4xl font-black game-font italic text-blue-400";
    elements.resultDetails.innerHTML = `<p class="text-2xl font-black text-white">${t.finalScore}: ${correctCount}</p>`;
    elements.gameCard.classList.replace('border-slate-900', 'border-blue-900');
    
    const btnContinue = elements.btnContinue;
    btnContinue.setAttribute('data-i18n', 'continueBtn');
    btnContinue.innerText = t.continueBtn;
    btnContinue.onclick = () => {
        elements.viewResult.classList.add('hidden');
        elements.viewQuestion.classList.remove('hidden');
        elements.gameCard.className = elements.gameCard.className.replace(/border-(green|rose|blue)-900/, 'border-slate-900');
        startTimedGame();
    };
    
    setTimeout(() => btnContinue.focus(), 10);
}

// Achievement System Functions
function showAchievements() {
    const modal = document.getElementById('achievements-modal');
    modal.classList.remove('hidden');
    renderAchievements();
}

function hideAchievements() {
    const modal = document.getElementById('achievements-modal');
    modal.classList.add('hidden');
}

function renderAchievements() {
    const container = document.getElementById('achievements-container');
    const t = translations[currentLang];
    
    container.innerHTML = achievementsList.map(ach => {
        const isUnlocked = achievements[ach.id];
        const unlockDate = isUnlocked ? new Date(isUnlocked).toLocaleDateString() : '';
        
        return `
            <div class="bg-slate-800 rounded-xl p-4 border-2 ${isUnlocked ? 'border-amber-500' : 'border-slate-700'} transition-all">
                <div class="flex items-start gap-3">
                    <div class="text-4xl ${isUnlocked ? '' : 'grayscale opacity-30'}">${ach.icon}</div>
                    <div class="flex-1">
                        <h3 class="font-black text-lg ${isUnlocked ? 'text-amber-400' : 'text-slate-500'}">${ach.nameKey}</h3>
                        <p class="text-sm text-slate-400 mb-2">${ach.descKey}</p>
                        ${isUnlocked 
                            ? `<p class="text-xs text-amber-500 font-bold">✓ Unlocked ${unlockDate}</p>` 
                            : `<p class="text-xs text-slate-600">${t.achievementLocked}</p>`
                        }
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function checkAchievements() {
    achievementsList.forEach(ach => {
        if (!achievements[ach.id] && ach.condition()) {
            unlockAchievement(ach.id, ach.nameKey);
        }
    });
}

function unlockAchievement(id, name) {
    achievements[id] = Date.now();
    localStorage.setItem('achievements', JSON.stringify(achievements));
    showAchievementNotification(name);
    playCorrectSound(); // Play a celebratory sound
}

function showAchievementNotification(name) {
    const notification = document.getElementById('achievement-notification');
    const textEl = document.getElementById('achievement-notification-text');
    
    textEl.textContent = name;
    notification.classList.remove('hidden');
    
    setTimeout(() => {
        notification.classList.add('hidden');
    }, 4000);
}

function trackLanguageUsed(lang) {
    if (!languagesUsed.includes(lang)) {
        languagesUsed.push(lang);
        localStorage.setItem('languagesUsed', JSON.stringify(languagesUsed));
    }
}

function trackOperationCompleted(operation) {
    if (!operationsCompleted.includes(operation)) {
        operationsCompleted.push(operation);
        localStorage.setItem('operationsCompleted', JSON.stringify(operationsCompleted));
    }
}

window.onload = () => { 
    setLanguage('en'); 
    generateProblem();
    initAudioContext();
    updateTimedModeButton();
    updateDifficultyButton();
    
    const soundBtn = document.getElementById('sound-toggle-btn');
    const t = translations['en'];
    if (soundEnabled) {
        soundBtn.textContent = t.soundToggle.replace('OFF', 'ON');
        soundBtn.className = 'flex-1 px-3 py-3 rounded-lg text-base font-bold transition-colors bg-green-600 hover:bg-green-500 text-white truncate';
    } else {
        soundBtn.textContent = t.soundToggle.replace('ON', 'OFF');
        soundBtn.className = 'flex-1 px-3 py-3 rounded-lg text-base font-bold transition-colors bg-red-600 hover:bg-red-500 text-white truncate';
    }
};
