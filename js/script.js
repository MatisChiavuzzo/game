// =====================
// VARIABLES DE JEU
// =====================
// début du compteur temps à 5, pour départ à 8h05
let time = 5;
// début du compteur risque à 50, soit au milieu
let risk = 50;
let alreadyArrested = false;

// Barre de progression
// Nombre total de niveaux
const totalSteps = 9;
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

const motsText = document.getElementById("mots_fin");

// =====================
// DONNÉES base du jeu
// =====================
// mode de transport
const transports = ["Moto", "Trottinette", "Vélo"];
// temps dans le jeu
const environments = ["Pluie", "Nuit", "Jour"];

// =====================
// FONCTIONS des éléments dynamiques
// =====================

// Heures
function formatTime(totalMinutes) {
    const startHour = 8;

    // Conversion en minutes absolues depuis 0h00
    let total = startHour * 60 + totalMinutes;

    // Empêche d'aller avant 00h00 (optionnel)
    total = Math.max(0, total);

    const hours = Math.floor(total / 60);
    const minutes = total % 60;

    const paddedMinutes = minutes.toString().padStart(2, "0");

    return `${hours}h${paddedMinutes}`;
}

// Fonction qui fait appel au compteur temps et risque, les met a jour selon les + ou - appliqués
function updateUI() {
    // définit que l'on appel l'élément temps par "time"
    timeEl.textContent = formatTime(time);
    // def la barre de risque 
    // Empeche la barre de risque d'être sup à 100 et inférieur à 0
    risk = Math.max(0, Math.min(100, risk));
    // Permet le déplacement  de tant (risk =) de % sur l'idée d'une barre de progression allant de 0 à 100 %
    riskIndicator.style.left = `${risk}%`;
}

// MAJ de la barre de progression
function updateProgress() {
    // passe la progression en % -> (étape actuel / nombre d'étape total) * 100
    const percent = (currentStep / totalSteps) * 100;
    // Permet le déplacement de la barre de progression de tant de % (percent = )
    progressBar.style.width = `${percent}%`;
}

// MAJ des photos d'illustrations
function updateScene() {
    // Supprime l'image précédente
    sceneEl.className = "";
    // Ajoute une nouvelle classe CSS via currentStep
    // Ainsi on a scene-numéro de l'étape lié à l'image, lien de l'image dans le css
    sceneEl.classList.add(`scene-${currentStep}`);
}

// Tirage aléatoire du mode de transport et du temps 
function randomFrom(arr) {
    // Math.random -> généère un nb aléatoire entre 0 et x
    // arr -> la liste des différents mode de transport ou temps possibles
    // *arr.lenght -> multiplié par la taille de la liste (le nombre de valeur possibles)
    // Math.florr -> permet d'arondir vers le bas, 0.32 devient 0 donc la première valeur de la liste 
    return arr[Math.floor(Math.random() * arr.length)];
}

function modes() {
    const transport = transportEl.textContent;

    if (transport === "Vélo") {
        chooseStreet();
    } else if (transport === "Moto" || transport === "Trottinette") {
        chooseStreet();
    }
}

function modes2() {
    const transport = transportEl.textContent;

    if (transport === "Moto") {
        chooseStreet();
    } else if (transport === "Vélo" || transport === "Trottinette") {
        chooseStreet();
    }
}

function night() {
    const currentEnv = environmentEl.textContent; 
    if (currentEnv === "Nuit") {
        slownight();  
    } else if (currentEnv === "Pluie" || currentEnv === "Jour") {
        busStop();   
    }
} 

function rain() {
    const currentEnv = environmentEl.textContent; 
    if (currentEnv === "Nuit" || currentEnv === "Jour") {
        redLight();  
    } else if (currentEnv === "Pluie") {
        fallrain();   
    }
}

// =====================
// affiche les CARTES des questions
// =====================
// La focntion implique l'image, la question et les boutos de choix
function showCard(img, text, options) {
    // met a jour l'image (img)
    cardImage.src = img;
    // met a jour la question (text)
    cardQuestion.textContent = text;
    // Affiche la carte
    cardChoices.innerHTML = "";

    // Au début de chaque étape il fait les choses suivantes 
    options.forEach(opt => {
        // création des boutons selon les options de l'étape
        const btn = document.createElement("button");
        btn.textContent = opt.text;
        // Animation au clic d'un bouton
        btn.onclick = () => {
            // Cache la carte, puis attend 300 ms et éxécute l'acion lié au bouton
            cardModal.classList.remove("show");
            setTimeout(opt.action, 300);
        };
        cardChoices.appendChild(btn);
    });

    // affiche la carte
    cardModal.style.display = "flex";
    // ajoute la carte via show
    setTimeout(() => cardModal.classList.add("show"), 50);
}

// =====================
// Les cartes EXPLICATION
// =====================
// La focntion implique un text, et le passage à l'étape suivante 
function showExplanation(text, nextStepFunc) {
    // met à jour le texte
    explanationText.textContent = text;
    // Affiche la carte
    explanationModal.style.display = "flex";

    // Action du bouton 
    nextStepBtn.onclick = () => {
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

function motsdefin(text) {
    motsText.textContent = text;
}
// =====================
// DÉMARRAGE du jeu
// =====================
// Au clic sur le bouton de lancement du jeu 
startBtn.onclick = () => {
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
function askHelmet() {
    // montre la carte, met cette image, ce texte et ces boutons
    showCard("../image/casque.png",
        "Souhaites-tu mettre ton casque avant de partir ?",
        [
            // DEUX POSSIBILITES : soit Oui, soit Non
            // Texte du bouton, puis ce qu'il fait
            {
                text: "Oui", action: () => {
                    // On mémorise le fait que l'utilisateur mette un casque 
                    helmetOn = true;
                    // Ajout d'un risque de 10
                    risk += 5;
                    time += 1;
                    // Met a jour temps et barre de risque
                    updateUI();
                    // Monte la carte explication, avec ce texte, puis associe le cli du bouton à l'étape suivante, soit la lumière cassée
                    showExplanation("Tu as bien fait de mettre ton casque !", askLight);
                }
            },
            {
                text: "Non", action: () => {
                    // On mémorise le fait que l'utilisateur ne veut pas mettre un casque
                    helmetOn = false;
                    // Ajout d'un risque de -10
                    risk -= 5;
                    // Met a jour temps et barre de risque
                    updateUI();
                    // Monte la carte explication, avec ce texte, puis associe le cli du bouton à l'étape suivante, soit la lumière cassée
                    showExplanation("Tu as pris un risque d’autonomie et de prestance. Ne pas mettre de casque te rend peut-être plus cool mais tu augmente les risques de", askLight);
                }
            }
        ]
    );
}

// ========================== ETAPE 2 : La lumière
function askLight() {
    showCard("../image/lumière.png", "Il est déjà tard et ta lumière ne marche plus… la répares-tu avant de partir ?", [
        {
            text: "Oui", action: () => {
                lightOn = true;
                risk += 5; time += 3; updateUI();
                showExplanation("Bon choix, tu as peut-être perdu du temps mais tu assure ta protection sur la route vis à vis des autres usagers.", school);
            }
        },
        {
            text: "Non", action: () => {
                lightOn = false;
                risk -= 5; updateUI();
                showExplanation("Tu as pris un risque pratique. Tu n’as pas perdu de temps mais les autres utilisateurs de la route risquent de ne pas te voir et inversement.", school);
            }
        }
    ]);
}

// ========================== ETAPE 3 : L'école../image/bus.jpg../image/bus.jpg
function school() {
    showCard("../image/ecole.png", "Tu voulais filer, mais tu habites juste à côté d’une école. Les deux voies sont bloquées par les voitures des parents. \n Que fais-tu ?", [
                {
            text: "Tu attends", action: () => {
                lightOn = false;
                risk += 4; time += 3; updateUI();
                showExplanation("Tant mieux ! Tu perds du temps, mais on ne rigole pas avec la sécurité des gens et encore plus avec celles des enfants qui peuvent avoir des comportements très imprévisibles.", ruralStraight);
            }
        },
                {
            text: "Tu met un pied à terre, et passe", action: () => {
                lightOn = false;
                risk += 2; time += 1; updateUI();
                showExplanation("Un enfant traverse la route sans regarder. Tu manques de l’écraser. Heureusement tu ne roulais pas vite mais en prenant ce risque pratique tu aurais pu l’écraser.", ruralStraight);
            }
        },
                {
            text: "Tu maintient ton allur, avec la petite taille de ton véhicule ça va passer", action: () => {
                lightOn = true;
                risk -= 4; updateUI();
                showExplanation("Un enfant a ouvert la porte de sa voiture au moment où tu arrivais. Tu te la prends en pleine face et dégringole devant tous les enfants qui se moquent de toi.", ruralStraight);
            }
        }
    ]);
}

// ========================== ETAPE 4 : La ligne droite en milieu rural
function ruralStraight() {
    showCard("../image/vitesse.png", "Enfin ! Tu es sorti des bouchons et une longue ligne droite est devant toi. \n Respectes-tu la vitesse ?", [
        {
            text: "Oui", action: () => {
                risk += 3;
                updateUI();
                showExplanation("Tu restes prudent, c’est bien ! Surtout que tu te serais exposé à des risques qui auraient pu te faire perdre plus de temps au final.", rain);
            }
        },
        {
            text: "Non", action: () => {
                // Ajout de + 1 dans le compteur temps
                time -= 2;
                risk -= 3;

                // Probabilité de l’événement 1
                let probEvent1 = 0.2; // 20% de chance de base
                if (!helmetOn) probEvent1 += 0.2; // si pas de casque, +40% de chance que l'événement 1 se produise
                // donc 60 % au lieu de 20 %

                // Tirage aléatoire d'un nombre dont la focntion est applée "r"
                const r = Math.random();
                let message = "";

                // si "r" est inférieur à la valeur de la proba de l'événement 1, alors aplique ca :
                if (r < probEvent1) {
                    // Ajout d'un risque de -15
                    risk -= 15;
                    // Ajout de - 20 minutes dans le compteur temps
                    time += 3;
                    // Message affiché dans ce cas 
                    message = "Tu as pris un risque cathartique et tu as percuté un lapin !";
                    // Si r était supérieur à la valeur de la proba de l'événement 1, alors fait ca 
                } else {
                    // Affiche simplement ce message 
                    message = "Tu as eu de la chance, tu as pris un risque cathartique mais il ne t'est rien arrivé ! Malgré tout, tu aurais pu croiser la route d’animaux ou d’autres usagers de la route que tu n’avais pas vu.";
                }

                // Met a jour temps et barre de risque
                updateUI();
                // Montre la carte explication, avec ce texte, puis associe le cli du bouton à l'étape suivante, soit le bus à un arrêt
                showExplanation(message, rain);
            }
        }
    ]);
}

function rain() {
    showCard("../image/casque.png",
        "Il pleut fort et la route est glissante. Que fais-tu ?",
        [
            {
                text: "Je ralentis", 
                action: () => {
                    risk += 5;   
                    time += 1;   
                    updateUI();
                    showExplanation("Tu adaptes ta vitesse à la pluie. Tu restes maître de ton véhicule malgré la route glissante.", redLight);
                }
            },
            {
                text: "Je maintient mon allure", 
                action: () => {
                    let probFall = 0.5; // 50% de base
                    if (!helmetOn) probFall += 0.2; // +20% si le casque n'est pas porté
                    const r = Math.random();

                    if (r < probFall) {
                        risk -= 5;  // chute → augmente le risque négatif
                        time += 2;   // perd plus de temps
                        updateUI();
                        showExplanation("La pluie rend la route glissante et tu as perdu le contrôle ! Tu tombes et perds du temps, puis reprend la route !", redLight);
                    } else {
                        risk -= 5;  
                        time -= 1;
                        updateUI();
                        showExplanation("Tu as eu de la chance ! Tu gardes ton allure sans tomber, mais le risque reste présent sur la route glissante.", redLight);
                    }
                }
            }
        ]
    );
}


// ========================== ETAPE 5 : Le feu rouge
function redLight() {
    showCard("../image/feu.png", "Le feu passe au rouge juste devant toi. \n Que fais-tu ?", [
        {
            text: "Tu attends patiemment", action: () => {
                time += 2; risk += 2; updateUI();
                showExplanation("Encore heureux ! C’est bien la base du code de la route que de ne pas griller les feux rouges.", night);
            }
        },
        {
            text: "Tu le grilles", action: () => {
                risk -= 5;

                const r = Math.random();
                let message = "";

                if (r < 0.6) {
                    // 60 %
                    message = "C’était super dangereux ! Mais tu as eu de la chance et il ne t'est rien arrivé";
                } else if (r < 0.9) {
                    // 30 %
                    time += 4;
                    message = "Oups ! Tu as pris un risque de stimulation mais la police était cachée à côté. Tu te fais arrêter, perds du temps et prends une amende.";
                } else {
                    // 10 % — MORT
                    risk -= 50;
                    updateUI();
                    showExplanation(
                        "Un tram est arrivé au même moment. Tu es mort et tu as traumatisé le chauffeur et tous les passagers !",
                        showFinalScore
                    );
                    return;
                }
                updateUI();
                showExplanation(message, night);
            }
        }
    ]);
}

function slownight() {
    showCard("../image/casque.png",
        "Il fait nuit et l'éclairage public est en panne. Tu vois mal la route. Que fais-tu ?",
        [
            {
                text: "Je ralentis", 
                action: () => {
                    risk += 5;  
                    time += 1;   
                    updateUI();
                    showExplanation("Tu ralentis et gardes le contrôle malgré la pénombre. Bonne décision !", busStop);
                }
            },
            {
                text: "Je maintient mon allure", 
                action: () => {
                    // Calcul aléatoire : 50% de chance de tomber
                    let probFall = 0.5; // 50%
                    if (!lightOn) probFall += 0.2; // +20% si la lumière n'est pas réparée
                    const r = Math.random();

                    if (r < probFall) {
                        // le joueur tombe
                        risk -= 4;  
                        time += 2;   
                        updateUI();
                        showExplanation("Tu ne voyais pas bien et tu as perdu le contrôle ! Tu tombes et perds du temps, puis reprend la route", busStop);
                    } else {
                        risk -= 4;
                        time -= 1;
                        updateUI();
                        showExplanation("Tu as eu de la chance ! Tu gardes ton allure sans tomber, mais tu restes exposé au risque.", busStop);
                    }
                }
            }
        ]
    );
}

// ========================== ETAPE 6 : Le bus qui prend des passagers à un arrêt
function busStop() {
    showCard("../image/arret.png", "Le bus juste devant toi s’arrête pour faire monter des passagers. \n Quelle est ta réaction ?", [
        {
            text: "J'attend", action: () => {
                time += 2;
                risk += 4;
                updateUI();
                showExplanation("Bon choix, le bus est vite reparti et tu as évité un risque d’accident.", modes);
            }
        },
        {
            text: "Je le dépasse", action: () => {
                time -= 1;
                risk -= 4;

                let probEvent1 = 0.1; // 20% de chance de base
                if (!helmetOn) probEvent1 += 0.4; // si pas de casque, +40% de chance que l'événement 1 se produise
                // donc 50 % au lieu de 10 %

                const r = Math.random();
                let message = "";

                if (r < probEvent1) {
                    // 10 %
                    time += 10;
                    message = "Catastrophe ! Tu t’es fait renverser par une voiture qui arrivait en face et que tu n’avais pas vu. Tu as pris un risque pratique mais tu t’es fait très mal et tu as perdu du temps.";
                } else if (r < 0.5) {
                    // 40 %
                    message = "Attention !!! Tu as failli te faire écraser par une voiture qui arrivait en face et que tu n’avais pas vu. Tu as pris un risque pratique et tu t’es mis en danger.";
                } else {
                    // 10 %
                    message = "Tu as failli rentrer dans un piéton que tu n’avais pas vu ! Tu as pris un risque pratique mais tu t’es mis en danger toi et les autres usagers de la route.";
                }

                updateUI();
                showExplanation(message, modes);
            }
        }
    ]);
}

// ========================== ETAPE 7 : Le choix de la rue interdite ou non
function chooseStreet() {
    showCard("../image/interdit.png", "Tu arrives devant la Grande Rue, mais un arrêté interdit la circulation des motos et trottinettes électriques. \n Que fait tu ?", [
        {
            text: "Je passa quand même par la Grande Rue (interdite)", action: () => {
                risk -= 6;
                const r = Math.random();
                let message = "";

                if (r < 0.5) {
                    // 50 %
                    time += 5
                    message = "Malheur ! Tu t’es fait arrêté par la police. Ce risque d’autonomie a de lourdes conséquences. Tu perds 5 minutes, tu te prends AMENDES et en plus ils t’ont humiliés en te filmant pour publier sur les réseaux sociaux pour faire de toi un exemple.";
                } else {
                    // 50 %
                    message = "Tu as de la chance, tu as pris un risque d’autonomie et il ne t'est rien arrivé. Tu aurais pu te faire arrêter par la police ou renverser quelqu’un.";
                }

                updateUI();
                showExplanation(message, modes2);
            }
        },
        {
            text: "Je fait le détour par une rue parrallèle (autorisée)", action: () => {
                time += 2; risk += 4; updateUI();
                showExplanation("Félicitations ! Tu as perdu du temps mais tu as évité de te faire arrêter par la police ou de renverser quelqu’un.", modes2);
            }
        }
    ]);
}

// ========================== ETAPE 8 : La voie partagée
function sharedLane() {
    showCard("../image/partage.png", "La voie partagée que tu prends habituellement est entravée par des travaux, réduisant la largeur de la route. \n Pour couronner le tout, un vélo est devant toi et avance très lentement. \n Que fait-tu ?", [
        {
            text: "Tu zigzague dans la zone en travaux", action: () => {
                risk -= 5;
                time += 1;
                const r = Math.random();
                let message = "";

                if (r < 0.95) {
                    message = "Tu as énormément de chance...";
                } else {
                    risk -= 50;
                    updateUI();
                    showExplanation(
                        "Tu tombes dans un trou et es enseveli...",
                        () => showFinalScore() 
                    );
                }

                updateUI();
                showExplanation(message, raceFriend);
            }
        },

        {
            text: "Tu dépasse le vélo", action: () => {
                risk -= 5; updateUI();
                showExplanation("Tu as gagné du temps en prenant ce risque pratique. Mais tu t’es fait insulter par le cycliste qui a failli tomber à cause de toi", raceFriend);
            }
        },
        {
            text: "Tu attends patiemment derrière le vélo.", action: () => {
                time += 2; risk += 5; updateUI();
                showExplanation("Quelle chance ! Tu réalises que c’est ton prof devant toi ! Il est donc tout aussi en retard que toi.", raceFriend);
            }
        }
    ]);
}

// ========================== ETAPE 8 : La course avec un/une ami-e
function raceFriend() {
    showCard("../image/finish.png", "Tu es presque arrivé quand tu croises un ami, lui aussi en deux-roues. Il te propose de faire la course sur cette dernière portion de route.", [
        {
            text: "Tu accepte le défi !", action: () => {
                risk -= 5;
                time -= 2
                const r = Math.random();
                let message = "";

                if (r < 0.7) {
                    // 0 %
                    time += 5
                    message = "Tu as pris un risque de prestance en voulant t’amuser avec ton ami. Tu rentres dans une poubelle juste devant ton établissement et t’étales devant tout le monde. Tu arrives en un seul morceau mais on t’appellera “La poubelle sur roues” jusqu’à la fin de ta scolarité.";
                } else {
                    // 30 %
                    message = "Tu as pris un risque de prestance en voulant fanfaronner devant ton ami. Tu gagnes la course mais ton prof qui était en vélo juste derrière vous vous a vu. Il vous réprimande et refuse de vous accepter dans son cours.";
                }

                updateUI();
                showExplanation(message, showFinalScore);
            }
        },
        {
            text: "Tu refuse", action: () => {
                risk += 3; updateUI();
                showExplanation("Tu as bien fait de ne pas accepter, ton prof était à vélo juste derrière vous. Il a vu ton ami et manquer de renverser quelqu’un en faisant n’importe quoi et il l’a exclu de son cours !", showFinalScore);
            }
        }
    ]);
}

// =====================
// Affichage du SCORE FINAL + bouton rejouer
// =====================
// montrer le score
function showFinalScore() {
    // Création du bloc
    finalScoreDiv.style.display = "block";
    // Affiche le score de a manière suivant, en l'état du niveau du compteur risquue et temps
    scoreText.textContent = `Temps : ${time} min | Risque : ${risk}`;
    messagefin();
}


function messagefin() {
    if (time <= 5 && risk > 50) {
        motsdefin("");
    } else if (time > 5 && risk > 50) {
        motsdefin("");
    } else if (time <= 5 && risk <= 50) {
        motsdefin("");
    } else {
        motsdefin("");
    }
}
