// =====================
// VARIABLES DE JEU
// =====================
// début du compteur temps à 5
let time = 5;
// début du compteur risque à 50, soit au milieu
let risk = 50;
let alreadyArrested = false;

// Barre de progression
// Nombre total de niveaux
const totalSteps = 8;
// Début de la barre à 0
let currentStep = 0;

// =====================
// ÉLÉMENTS D'APPEL DANS LE HTML
// =====================
const gameOverlay = document.getElementById("game");
// Bouton pour lancer le jeu
const startBtn = document.getElementById("startBtn");

// Pour le mode de tranport
const transportEl = document.getElementById("transport");
// Pour le temps
const environmentEl = document.getElementById("environment");
// Pour le compteur temps
const timeEl = document.getElementById("time");
//Pour la barre de risque
const riskIndicator = document.getElementById("risk-indicator");

// Barre de progression
const progressBar = document.getElementById("progress-bar");
// Les images d'illustrations
const sceneEl = document.getElementById("scene");

// Carte princiaple des choix
const cardModal = document.getElementById("card-modal");
// Carte image dans carte des choix
const cardImage = document.getElementById("card-image");
// Carte des questions dans la carte des choix
const cardQuestion = document.getElementById("card-question");
// Carte des boutons des différents choix, dans la carte des choix
const cardChoices = document.getElementById("card-choices");

// Carte princiaple d'explication des risques
const explanationModal = document.getElementById("explanation-modal");
// Carte texte de l'explication
const explanationText = document.getElementById("explanation-text");
// Carte du bouton pour passer à l'étape suivante
const nextStepBtn = document.getElementById("next-step-btn");

// Carte princiaple du score final
const finalScoreDiv = document.getElementById("final-score");
// Carte du texte du score final
const scoreText = document.getElementById("score-text");

// =====================
// DONNÉES base du jeu
// =====================
// mode de transport
const transports = ["Moto","Trottinette","Vélo"];
// temps dans le jeu
const environments = ["Pluie","Nuit","Jour"];

// =====================
// FONCTIONS des éléments dynamiques
// =====================
// Fonction qui fait appel au compteur temps et risque, les met a jour selon les + ou - appliqués
function updateUI(){
    // définit que l'on appel l'élément temps par "time"
    timeEl.textContent = time;
    // def la barre de risque 
    // Empeche la barre de risque d'être sup à 100 et inférieur à 0
    risk = Math.max(0, Math.min(100, risk));
    // Permet le déplacement  de tant (risk =) de % sur l'idée d'une barre de progression allant de 0 à 100 %
    riskIndicator.style.left = `${risk}%`;
}

// MAJ de la barre de progression
function updateProgress(){
    // passe la progression en % -> (étape actuel / nombre d'étape total) * 100
    const percent = (currentStep / totalSteps) * 100;
    // Permet le déplacement de la barre de progression de tant de % (percent = )
    progressBar.style.width = `${percent}%`;
}

// MAJ des photos d'illustrations
function updateScene(){
    // Supprime l'image précédente
    sceneEl.className = "";
    // Ajoute une nouvelle classe CSS via currentStep
    // Ainsi on a scene-numéro de l'étape lié à l'image, lien de l'image dans le css
    sceneEl.classList.add(`scene-${currentStep}`);
}

// Tirage aléatoire du mode de transport et du temps 
function randomFrom(arr){
    // Math.random -> généère un nb aléatoire entre 0 et x
    // arr -> la liste des différents mode de transport ou temps possibles
    // *arr.lenght -> multiplié par la taille de la liste (le nombre de valeur possibles)
    // Math.florr -> permet d'arondir vers le bas, 0.32 devient 0 donc la première valeur de la liste 
    return arr[Math.floor(Math.random() * arr.length)];
}

// =====================
// affiche les CARTES des questions
// =====================
// La focntion implique l'image, la question et les boutos de choix
function showCard(img, text, options){
    // met a jour l'image (img)
    cardImage.src = img;
    // met a jour la question (text)
    cardQuestion.textContent = text;
    // Affiche la carte
    cardChoices.innerHTML = "";

    // Au début de chaque étape il fait les choses suivantes 
    options.forEach(opt=>{
        // création des boutons selon les options de l'étape
        const btn = document.createElement("button");
        btn.textContent = opt.text;
        // Animation au clic d'un bouton
        btn.onclick = ()=>{
            // Cache la carte, puis attend 300 ms et éxécute l'acion lié au bouton
            cardModal.classList.remove("show");
            setTimeout(opt.action, 300);
        };
        cardChoices.appendChild(btn);
    });

    // affiche la carte
    cardModal.style.display = "flex";
    // ajoute la carte via show
    setTimeout(()=>cardModal.classList.add("show"), 50);
}

// =====================
// Les cartes EXPLICATION
// =====================
// La focntion implique un text, et le passage à l'étape suivante 
function showExplanation(text, nextStepFunc){
    // met à jour le texte
    explanationText.textContent = text;
    // Affiche la carte
    explanationModal.style.display = "flex";

    // Action du bouton 
    nextStepBtn.onclick = ()=>{
        // Ferme la carte explication
        explanationModal.style.display = "none";
        // passe à l'étape suivante
        currentStep++;
        // MAJ de la barre de progression
        updateProgress();
        // MAJ de l'image d'illustration
        updateScene();
        // MAJ de la carte explication, celle de l'étape suivante 
        nextStepFunc();
    };
}

// =====================
// DÉMARRAGE du jeu
// =====================
// Au clic sur le bouton de lancement du jeu 
startBtn.onclick = ()=>{
    // dispariation du bonton de lancement
    gameOverlay.style.display = "none";

    // Commence à l'étape 0
    currentStep = 0;
    // Met les paramètres par défaut de la barre de progression et des images 
    updateProgress();
    updateScene();

    // lance le tirage aléatoire du temps et du mode de transport pour la parie
    transportEl.textContent = randomFrom(transports);
    environmentEl.textContent = randomFrom(environments);
    
    // mise en place du fond selon le tirage 
    document.body.classList.remove("pluie", "nuit", "jour");

switch (environmentEl.textContent) {
    // Si c'est pluie tu met ce qui est associé ...
  case "Pluie":
    document.body.classList.add("pluie");
    break;
  case "Nuit":
    document.body.classList.add("nuit");
    break;
  case "Jour":
    document.body.classList.add("jour");
    break;
}
    // Met les paramètres par defaut de la barre de risque et du ompteur temps 
    updateUI();
    // Affiche la question du casque (soit la première question)
    askHelmet();
};

// =====================
// LKes étapes du jeu
// =====================
// ========================== ETAPE 1 : Le casque
function askHelmet(){
    // montre la carte, met cette image, ce texte et ces boutons
    showCard("../image/casque.png",
        "Souhaites-tu mettre un casque avant de débuter ton trajet ?",
        [
            // DEUX POSSIBILITES : soit Oui, soit Non
            // Texte du bouton, puis ce qu'il fait
            { text:"Oui", action:()=>{
                // On mémorise le fait que l'utilisateur mette un casque 
                helmetOn = true; 
                // Ajout d'un risque de 10
                risk += 10;
                // Met a jour temps et barre de risque
                updateUI();
                // Monte la carte explication, avec ce texte, puis associe le cli du bouton à l'étape suivante, soit la lumière cassée
                showExplanation("Prudent.", askLight);
            }},
            { text:"Non", action:()=>{
                // On mémorise le fait que l'utilisateur ne veut pas mettre un casque
                helmetOn = false; 
                // Ajout d'un risque de -10
                risk -= 10;
                // Met a jour temps et barre de risque
                updateUI();
                // Monte la carte explication, avec ce texte, puis associe le cli du bouton à l'étape suivante, soit la lumière cassée
                showExplanation("Attention ! Sans casque, le risque augmente.", askLight);
            }}
        ]
    );
}

// ========================== ETAPE 2 : La lumière
function askLight(){
    showCard("https://via.placeholder.com/400x200","Ta lumière cassée, prend tu le temps de la réparer avant de partir ?",[
        {text:"Réparer", action:()=>{
            lightOn = true;
            risk += 10; time -= 5; updateUI();
            showExplanation("Bonne décision.", ruralStraight);
        }},
        {text:"Ignorer", action:()=>{
            lightOn = false;
            risk -= 10; updateUI();
            showExplanation("Mauvaise visibilité.", ruralStraight);
        }}
    ]);
}

// ========================== ETAPE 3 : La ligne droite en milieu rural
function ruralStraight(){
    showCard("https://via.placeholder.com/400x200","Respecter la vitesse ?",[
        {text:"Oui", action:()=>{
            risk += 10;
            updateUI();
            showExplanation("Prudent.", busStop);
        }},
        {text:"Non", action:()=>{
            // Ajout de + 1 dans le compteur temps
            time += 1;
            risk -= 10;

            // Probabilité de l’événement 1
            let probEvent1 = 0.2; // 20% de chance de base
            if (!helmetOn) probEvent1 += 0.4; // si pas de casque, +40% de chance que l'événement 1 se produise
            // donc 60 % au lieu de 20 %

            // Tirage aléatoire d'un nombre dont la focntion est applée "r"
            const r = Math.random();
            let message = "";

            // si "r" est inférieur à la valeur de la proba de l'événement 1, alors aplique ca :
            if (r < probEvent1) {
                // Ajout d'un risque de -15
                risk -= 15;
                // Ajout de - 20 minutes dans le compteur temps
                time -= 20;
                // Message affiché dans ce cas 
                message = "Tu as percuté un lapin !";
            // Si r était supérieur à la valeur de la proba de l'événement 1, alors fait ca 
            } else {
                // Affiche simplement ce message 
                message = "Tu as de la chance";
            }

            // Met a jour temps et barre de risque
            updateUI();
            // Montre la carte explication, avec ce texte, puis associe le cli du bouton à l'étape suivante, soit le bus à un arrêt
            showExplanation(message, busStop);
        }}
    ]);
}



// ========================== ETAPE 4 : Le bus qui prend des passagers à un arrêt
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

// ========================== ETAPE 5 : Le choix de la rue interdite ou non
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

// ========================== ETAPE 6 : Le fu rouge
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

// ========================== ETAPE 7 : La voie partagée
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

// ========================== ETAPE 8 : La course avec un/une ami-e
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
// Affichage du SCORE FINAL + bouton rejouer
// =====================
// montrer le score
function showFinalScore(){
    // Création du bloc
    finalScoreDiv.style.display = "block";
    // Affiche le score de a manière suivant, en l'état du niveau du compteur risquue et temps
    scoreText.textContent = `Temps : ${time} min | Risque : ${risk}`;
}