// =====================
// VARIABLES DE JEU
// =====================
let time = 0;
let risk = 50;
let futureRiskFactor = 0;
let alreadyArrested = false;

// Progression
const totalSteps = 8;
let currentStep = 0;

// =====================
// ÉLÉMENTS DOM
// =====================
const gameOverlay = document.getElementById("game");
const startBtn = document.getElementById("startBtn");

const transportEl = document.getElementById("transport");
const environmentEl = document.getElementById("environment");
const timeEl = document.getElementById("time");
const riskIndicator = document.getElementById("risk-indicator");

const progressBar = document.getElementById("progress-bar");
const sceneEl = document.getElementById("scene");

const cardModal = document.getElementById("card-modal");
const cardImage = document.getElementById("card-image");
const cardQuestion = document.getElementById("card-question");
const cardChoices = document.getElementById("card-choices");

const explanationModal = document.getElementById("explanation-modal");
const explanationText = document.getElementById("explanation-text");
const nextStepBtn = document.getElementById("next-step-btn");

const finalScoreDiv = document.getElementById("final-score");
const scoreText = document.getElementById("score-text");

// =====================
// DONNÉES
// =====================
const transports = ["Moto","Trottinette","Vélo"];
const environments = ["Pluie","Nuit","Jour"];

// =====================
// FONCTIONS UI
// =====================
function updateUI(){
    timeEl.textContent = time;
    risk = Math.max(0, Math.min(100, risk));
    riskIndicator.style.left = `${risk}%`;
}

function updateProgress(){
    const percent = (currentStep / totalSteps) * 100;
    progressBar.style.width = `${percent}%`;
}

function updateScene(){
    sceneEl.className = "";
    sceneEl.classList.add(`scene-${currentStep}`);
}

function randomFrom(arr){
    return arr[Math.floor(Math.random() * arr.length)];
}

function chance(prob){
    return Math.random() < prob;
}

// =====================
// CARTES
// =====================
function showCard(img, text, options){
    cardImage.src = img;
    cardQuestion.textContent = text;
    cardChoices.innerHTML = "";

    options.forEach(opt=>{
        const btn = document.createElement("button");
        btn.textContent = opt.text;
        btn.onclick = ()=>{
            cardModal.classList.remove("show");
            setTimeout(opt.action, 300);
        };
        cardChoices.appendChild(btn);
    });

    cardModal.style.display = "flex";
    setTimeout(()=>cardModal.classList.add("show"), 50);
}

// =====================
// EXPLICATION + STEP
// =====================
function showExplanation(text, nextStepFunc){
    explanationText.textContent = text;
    explanationModal.style.display = "flex";

    nextStepBtn.onclick = ()=>{
        explanationModal.style.display = "none";
        currentStep++;
        updateProgress();
        updateScene();
        nextStepFunc();
    };
}

// =====================
// DÉMARRAGE
// =====================
startBtn.onclick = ()=>{
    gameOverlay.style.display = "none";

    currentStep = 0;
    updateProgress();
    updateScene();

    transportEl.textContent = randomFrom(transports);
    environmentEl.textContent = randomFrom(environments);

    if (environmentEl.textContent === "Nuit") {
        document.body.classList.add("night-mode");
    }

    updateUI();
    askHelmet();
};

// =====================
// MISSIONS
// =====================
function askHelmet(){
    showCard("../image/casque.png",
        "Souhaites-tu mettre un casque avant de débuter ton trajet ?",
        [
            { text:"Oui", action:()=>{
                helmetOn = true; // <- on mémorise
                risk += 10;
                updateUI();
                showExplanation("Prudent.", askLight);
            }},
            { text:"Non", action:()=>{
                helmetOn = false; // <- pas de casque
                risk -= 10;
                updateUI();
                showExplanation("Attention ! Sans casque, le risque augmente.", askLight);
            }}
        ]
    );
}


function askLight(){
    showCard("https://via.placeholder.com/400x200","Ta lumière cassée, prend tu le temps de la réparer avant de partir ?",[
        {text:"Réparer", action:()=>{
            lightOn = true;
            risk += 10; time -= 5; updateUI();
            showExplanation("Bonne décision.", ruralStraight);
        }},
        {text:"Ignorer", action:()=>{
            lightOn = false;
            risk -= 10; futureRiskFactor++; updateUI();
            showExplanation("Mauvaise visibilité.", ruralStraight);
        }}
    ]);
}

function ruralStraight(){
    showCard("https://via.placeholder.com/400x200","Respecter la vitesse ?",[
        {text:"Oui", action:()=>{
            risk += 10;
            updateUI();
            showExplanation("Prudent.", busStop);
        }},
        {text:"Non", action:()=>{
            time += 1;
            risk -= 10;

            // Probabilité de l’événement 1
            let probEvent1 = 0.2; // base 20%
            if (!helmetOn) probEvent1 += 0.4; // si pas de casque, +30%
            // donc 50 % au lieu de 20 %

            const r = Math.random();
            let message = "";

            if (r < probEvent1) {
                risk -= 15;
                time -= 20;
                message = "Tu as percuté un lapin !";
            } else {
                message = "Tu as de la chance";
            }

            updateUI();
            showExplanation(message, busStop);
        }}
    ]);
}




function busStop(){
    showCard("https://via.placeholder.com/400x200","Bus bloquant ?",[
        {text:"Attendre", action:()=>{
            time -= 3;
            risk += 10;
            updateUI();
            showExplanation("Sécurité.", chooseStreet);
        }},
        {text:"Dépasser", action:()=>{
            time += 3;
            risk -= 10;

            const r = Math.random();
            let message = "";

            if (r < 0.6) {
                // 60 %
                risk -= 10;
                message = "Tu manques de te faire écraser !";
            } else if (r < 0.9) {
                // 30 %
                risk -= 15;
                message = "Tu manques d’écraser un piéton !";
            } else {
                // 10 %
                risk -= 20;
                time -= 20;
                message = "Une voiture te percute !";
            }

            updateUI();
            showExplanation(message, chooseStreet);
        }}
    ]);
}


function chooseStreet(){
    showCard("https://via.placeholder.com/400x200","Rue interdite ?",[
        {text:"Oui", action:()=>{
            time += 5;
            risk -= 5;
            const r = Math.random();
            let message = "";

            if (r < 0.5) {
                // 50 %
                time -=7
                message = "Tu te fait arreté par la police !";
            } else {
                // 50 %
                message = "Pas de policier préset cette fois, mais attention quand même ! !";
            }

            updateUI();
            showExplanation(message, redLight);
        }},
        {text:"Non", action:()=>{
            time -= 2; risk += 10; updateUI();
            showExplanation("Prudent.", redLight);
        }}
    ]);
}

function redLight(){
    showCard("https://via.placeholder.com/400x200","Feu rouge ?",[
        {text:"S'arrêter", action:()=>{
            time -= 2; risk += 10; updateUI();
            showExplanation("Bonne conduite.", sharedLane);
        }},
        {text:"Griller", action:()=>{
            time += 2; risk -= 20;
            if (alreadyArrested && Math.random() < 0.5){
                alert("Deuxième arrestation !");
                showFinalScore(); return;
            }
            updateUI();
            showExplanation("Très dangereux.", sharedLane);
        }}
    ]);
}

function sharedLane(){
    showCard("https://via.placeholder.com/400x200","Travaux ?",[
        {text:"Attendre", action:()=>{
            time -= 2; risk += 3; updateUI();
            showExplanation("Calme.", raceFriend);
        }},
        {text:"Passer", action:()=>{
            time += 2; risk -= 5; updateUI();
            showExplanation("Audacieux.", raceFriend);
        }}
    ]);
}

function raceFriend(){
    showCard("https://via.placeholder.com/400x200","Course ?",[
        {text:"Suivre", action:()=>{
            time -= 18; risk -= 30; updateUI();
            showExplanation("Adrénaline.", showFinalScore);
        }},
        {text:"Refuser", action:()=>{
            time += 5; risk += 5; updateUI();
            showExplanation("Responsable.", showFinalScore);
        }}
    ]);
}

// =====================
// SCORE FINAL
// =====================
function showFinalScore(){
    finalScoreDiv.style.display = "block";
    scoreText.textContent = `Temps : ${time} min | Risque : ${risk}`;
}

// =====================
// INIT
// =====================
updateUI();
updateProgress();
updateScene();
