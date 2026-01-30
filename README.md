# Projet de développement d'un jeu en ligne 

Page web d'un jeu interractif portant sur les risques en deux roues (vélo, moto, trotinette électrique). 

Janvier - Février 2026

# Equipe

- Chiavuzzo Matis
- Tuaillon Ninon

# Installation des outils de développement

## VSCode

Se rendre sur le site suivant : https://code.visualstudio.com/docs?dv=win.
Placer le fichier sur le bureau, puis l'exécuter.

Une fois VSCode installé, le lancer, puis ajouter l'extension GitHub Pull Requests.
Vous devez maintenant vous connecter au dossier partagé pour pouvoir travailler en coopération.
Avant chaque utilisation, il faut pull le fichier pour le mettre à jour sur notre ordinateur, et quand on a fini, il faut le push pour que les suivants puissent reprendre là où vous vous êtes arrêtés.


## Python

Pour télécharger Python :
Cliquez directement sur ce lien -> https://www.python.org/ftp/python/3.13.2/python-3.13.2-amd64.exe.

S'il ne se télécharge pas lorsque vous cliquez sur le premier lien, essayez de vous rendre sur ce site : https://www.python.org/downloads/release/python-3132/.
Allez en bas de la page et prenez la version recommandée : Windows installer (64-bit).


## PIP 

Pour télécharger PIP / PyPI :
Cliquez directement sur ce lien -> https://files.pythonhosted.org/packages/70/53/b309b4a497b09655cb7e07088966881a57d082f48ac3cb54ea729fd2c6cf/pip-25.0.1.tar.gz.

S'il ne se télécharge pas lorsque vous cliquez sur le premier lien, essayez de vous rendre sur ce site : https://pypi.org/project/pip/#files.
Allez dans "Distribution des sources" et téléchargez la seule version : pip-25.0.1.tar.gz.


## Mkdocs-material

Pour télécharger mkdocs-material :
Cliquez directement sur ce lien -> https://files.pythonhosted.org/packages/10/0a/17557708cfc6a11a1a941199b6b54a8990b297d910db81a43f1082b11e1b/mkdocs_material-9.6.8.tar.gz.

S'il ne se télécharge pas lorsque vous cliquez sur le premier lien, essayez de vous rendre sur ce site : https://pypi.org/project/mkdocs-material/#files.
Allez dans "Distribution des sources" et téléchargez la seule version : mkdocs_material-9.6.8.tar.gz.

# 1. Présentation du projet
Le projet a été effectué dans le cadre de notre cours "Société et environnement" donné lors du second semestre de notre troisième année de licence en Géographie et aménagement au sein de l'université Marie et Louis Pasteur. 

Le but était de produire un jeu de rôle inspiré d'un trad-off game basé sur la prise de risque des adolescents en deux roues développé par L.Colbeau-Jusin, S.Depeau et T.Ramadier en 2001.

Pour répondre à cette attente, nous avons développé un jeu à choix inspiré des "visual novels" où le joueur se voit attribué un moyen de transport (vélo, moto, trotinette électrique) et doit rejoindre son école à temps. Pour cela, le jouer sera confronté tout le long de son trajet à différentes situations face auxquelles il aura un choix à faire. Les choix qu'il décidera de faire influenceront ainsi à la fois son heure d'arrivée mais également sa "barre de prise de risque". Le but final du jeu est ainsi d'arriver à l'heure mais aussi de ne pas finir avec un score trop bas dans la barre de risque.

# 2. Contexte technique 

## Technologies utilisées
- HTML5
- CSS3
- JavaScript ES6
- Mkdocs

## Installation et lancement 

### Télécharger ou cloner le projet

### Ouvrir le projet en local via la commande suivante dans le terminal :
- `mkdocs serve`

### Publier le projet via la commande suivante dans le terminal :
- `mkdocs gh-deploy`

### Commit les modifications (depuis le terminal):
- `git add .`
- `git commit -m "Mise à jour de la documentation"`
- `git push origin main`

# 3. Arboresance des fichiers

## Dossier "docs" :

Ce dossier contient tous les fichers servant à  , on y retrouve les sous-dossiers suivants : 
    - css : 
    - image : 
    - js : 
    - pages : 

## Dossier "site" :

Ce dossier contient tous les fichiers servant à , on y retrouve les sous-dossiers suivants : 
    - assets : 
    - css
    - js : 
    - pages : 
    - search : 


# 4. Description de la structure/composition des fichiers

## index.md

Ce code en .md, correpond à la page d'accueil du jeu. Il contient un menu de navigation renvoyant vers : 
- Acuueil : page principal, dans laquelle on trouve des éléments contextes et de présentations du projet. Egalement, on retrouve un bouton de contact. 
- Règles du jeu :  Renvoi vers une autre page contenant les règles du jeu (page regles.md).
- Jeu : Renvoi vers le jeu (page jeu.html).

## regles.md
Ce code en .md recense les règles détaillées du jeu ainsi que les fins et possibilité possibles. 

## jeu.html
Ce code en .html permet de . 

## jeu.css
Ce code en .css permet de moduler l'apparence de l'ensemble de la page du jeu. 

## script.js

Ce code en javascript, permet le fonctionnement du jeu. Dans ce script, nous pouvons retrouver six blocs d'éléments. 

### Le bouton PLAY
- Permet de lancer le jeu.
- Au clic, il disparait et lance les tirages aléatoires du temps et du mode de transport. Egalement il réinitialise selon la valeur par défaut le compteur temps, la barre de risques et la barre de progression. Enfin, il fait appel au lancement de la première étape. 
- Pour y faire appel dans le html, on utilise "startBtn". 

### Le compteur temps
 - Le compteur temps permet d'afficher et gérer via des additions et soustractions les gains et les pertes de temps qui peuvent apparitre selon les choix du joueur. 
 - Par defaut, le joueur à 5 minutes de retard. 
 - Pour y faire appel dans le html, on utilise "time". 
 - Son fonctionnement est simple, en partant de la valeur 5, à chaque choix fait par le joueur, le compteur se met à jour. 

 ### La barre de risque 
 - La barre de risque permet d'indiquer au joueur l'intensité du risque qu'il prend, du rouge (beaucoup de risques) au vert (peu de risques).
 - Par defaut, le niveau de risque est fixé à 0.
 - Pour y faire appel dans le html, on utilise "risk-indicator".
 - Son fonctionnement est simple, en partant de la valeur 0, à chaque choix fait par le joueur, la barre se met à jour. 

 ### La barre de progression
 - La barre de progression permet au joueur de visualiser son état d'avancement dans la partie. 
 - Pour y faire appel dans le html, on utilise "progress-bar".
 - Son fonctionnement est simple, à chaque fin d'étape, le niveau augmente (d'une longeur proportionnel à la taillle de la barre, selon le nombre d'étapes au total), de la gauche vers la droite. 
 
 ### L'indication du temmps
 - L'indicateur temps indique la météo durant la partie. 
 - Les valeurs possibles sont les suivantes : Jour, Nuit et Pluie.
 - Chacune des valeurs est associés à une image de fond la représentant. 
 - Pour y faire appel dansle html, on utilise "environnement".
 - Son fonctionnement est simple, au lancement de la partie, le script sélectionne aléatoire l'une des valeurs, puis celle-ci s'affiche dans l'emplacement prévu à cet effet, et l'image de fond se met a jour. 

 ### L'indicateur du mode de transport
 - L'indicateur du mode de transport indique le mode utilisé pour la partie. Celui-ci influencera les étapes et les choix possibels.
 - Les valeurs possibles sont les suivantes : Vélo, Trotinette, Moto.
 - Pour y faire appel dans le html, on utilise "transport".
 - Son fonctionnement est simple, au lancement de la partie, le script sélectionne aléatoire l'une des valeurs, puis celle-ci s'affiche dans l'emplacement prévu à cet effet.

 ### Le fonctionnement des blocs : QUESTIONS + EXPLICATIONS
 - Le bloc des questions contient 3 éléments : une image d'illustration, un texte et les choix possibles (qui prennent la forme de boutons).
 - Le bloc des explications contient 2 éléments : un texte et un bouton permettant de passer à l'étape suivante. 
 - Les textes, illustrations et choix possibles, ainsi que leurs effets (temps, risques ...) sont codés dans chacun des blocs du js faisant référence aux différentes étapes. 
 De plus, certains choix peuvent être enregistrés, influencant les probablités des événements. C'est par exemple le cas pour le choix ou non de mettre un casque. 
 - À la fin de chaque étapes, le compteur temps, la barre de risque et la barre de progression sont mis à jour, puis le script fait appel au bloc des explications en déffinissant le texte, et le nom de l'étape suivant, associé à l'action du bouton. 
 - Ce schéma fonctionne en boucle, sauf pour la dernière étape qui fait appel à l'annonce du score. 
 - Pour faire appel au bloc des questions dans le html, on utilise "card-modal", avec "card-image", "card-question" et "card-choices".
 - pour faire appel au bloc des explications dans le html, on utilise "explanation-mmodal", avec "explanation-text et "next-step-btn". 

 ### Les images d'illustrations
 - À chaque nouvelle étape, le code permet d'appeler la bonne image corresspondante.

### Le score final
 - Le score final s'affiche par appel, dans la dernière étape (à la place de la prochaine étape pour l'ensemble des autres étapes). 
 - Il affiche le temps final, ainsi que le niveau de risque. 
 - Il offre la possibilité de relancer une partie. 
 - Pour y faire appel dans le html, on utilise "final-score". 




