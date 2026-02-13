---
hide:
  - navigation
---

# Projet de développement d'un jeu en ligne 

Page web d'un jeu interractif portant sur les risques en deux roues (vélo, moto, trottinette électrique). 

Janvier - Février 2026

## Equipe

Chiavuzzo Matis - matis.chiavuzzo@edu.univ-fcomte.fr<br>
Tuaillon Ninon - ninon.tuaillon@edu.univ-fcomte.fr


## Présentation du projet
Le projet a été effectué dans le cadre de notre cours "Société et environnement" donné lors du second semestre de notre troisième année de licence en Géographie et aménagement au sein de l'université Marie et Louis Pasteur. 

Le but était de produire un jeu de rôle inspiré d'un trad-off game basé sur la prise de risque des adolescents en deux roues développé par L.Colbeau-Jusin, S.Depeau et T.Ramadier en 2001.

Pour répondre à cette attente, nous avons développé un jeu à choix inspiré des "visual novels" où le joueur se voit attribuer un moyen de transport (vélo, moto, trottinette électrique) et doit rejoindre son école à temps. Pour cela, le jouer sera confronté tout le long de son trajet à différentes situations face auxquelles il aura un choix à faire. Les choix qu'il décidera de faire influenceront ainsi à la fois son heure d'arrivée mais également sa "barre de prise de risque". Le but final du jeu est ainsi d'arriver à l'heure mais aussi de ne pas finir avec un score trop bas dans la barre de risque.

## Arborescence des fichiers

### Le dossier "docs"

Ce dossier contient tous les fichers servant à construire les pages du site pour l'outil mkdocs, on y retrouve les sous-dossiers suivants : 
    - css : ce dossier contient 2 fichiers de style pour le jeu et l'ensemble des pages
    - image : ce dossier contient toutes les images présentes dans le jeu 
    - js : ce dossier contient 1 fichier .js permettant le fonctionnement du jeu 
    - pages : ce dossier contient les 3 pages .md et 1 page .html liées au site 

### Le dossier "image"

#### Illustration
- logo.png (dessiné par Maë Tuaillon)

#### Photographies et infographies personelles 
- bus.png
- choixvoie.png
- course.png
- ecolebouchons.png
- feurouge.png
- rural.png
- fond.png
- tuto.png
- bandeau.png

#### Photographies issues de canva 
- arret.png
- casque.png
- ecole.png
- feu.png
- finish.png
- interdit.png
- jour.png
- lumière.png
- motodepasse.png
- nuit.png
- partage.png
- paslumiere.png
- pistevelo.png
- pluie.png
- routeglissante.png
- vitesse.png

#### Gifs issus de pixabay 
- sirenes.gif
- warning.gif 

## Description de la structure/composition des fichiers

- <strong>index.md :</strong> 
Ce code en .md, correpond à la page d'accueil du jeu, dans laquelle on trouve des éléments contextes et de présentations du projet. Également, on retrouve un bouton de contact. Il contient un menu de navigation.

- <strong>regles.md :</strong>
Ce code en .md recense les règles détaillées du jeu ainsi que les fins et possibilités. 

- <strong>jeu.html :</strong>
Ce code en .html établit la structure du jeu. 

- <strong>jeu.css :</strong>
Ce code en .css permet de moduler l'apparence de la page du jeu. 

- <strong>extra.css :</strong>
Ce code en .css permet de moduler l'apparence de l'ensemble des pages .md

- <strong>script.js :</strong>
Ce code en javascript, permet le fonctionnement du jeu. Dans ce script, nous pouvons retrouver six blocs d'éléments : 

## Les éléments du jeu

### Le bouton JOUER

- Permet de lancer le jeu.
- Au clic, il disparait et lance les tirages aléatoires du temps et du mode de transport. Également il réinitialise selon la valeur par défaut le compteur temps, la barre de risques et la barre de progression. 
Enfin, il fait appel au lancement de la première étape. 
- Pour y faire appel dans le html, on utilise "startBtn". 

### Le compteur temps

 - Le compteur temps permet d'afficher et gérer via des additions et soustractions les gains et les pertes de temps qui peuvent apparaitre selon les choix du joueur. 
 - Par défaut, le joueur a 5 minutes de retard. 
 - Pour y faire appel dans le html, on utilise "time". 
 - Son fonctionnement est suivant : en partant de la valeur 5, à chaque choix fait par le joueur le compteur se met à jour. 


### La barre de risque 

 - La barre de risque permet d'indiquer au joueur l'intensité du risque qu'il prend, du rouge (beaucoup de risques) au vert (peu de risques).
 - Par défaut, le niveau de risque est fixé à 50.
 - Pour y faire appel dans le html, on utilise "risk-indicator" et "risk-container".
 - Son fonctionnement est le suivant : en partant de la valeur 50, à chaque choix fait par le joueur la barre se met à jour. 

### La barre de progression

 - La barre de progression permet au joueur de visualiser son état d'avancement dans la partie. 
 - Pour y faire appel dans le html, on utilise "progress-bar".
 - Son fonctionnement est le suivant : à chaque fin d'étape, le niveau augmente (d'une longeur proportionnelle à la taillle de la barre, selon le nombre d'étapes au total), de la gauche vers la droite, soit 9 étapes. 
 
### L'indication du temps

 - L'indicateur temps indique la météo durant la partie. 
 - Les valeurs possibles sont les suivantes : Jour, Nuit et Pluie.
 - Chacune des valeurs est associée à une image de fond la représentant. 
 - Pour y faire appel dansle html, on utilise "environnement".
 - Son fonctionnement est le suivant : au lancement de la partie, le script sélectionne aléatoirement l'une des valeurs, puis celle-ci s'affiche dans l'emplacement prévu à cet effet, et l'image de fond se met à jour. 

### L'indicateur du mode de transport

 - L'indicateur du mode de transport indique le mode utilisé pour la partie. Celui-ci influencera les étapes et les choix possibles.
 - Les valeurs possibles sont les suivantes : Vélo, Trottinette, Moto.
 - Pour y faire appel dans le html, on utilise "transport".
 - Son fonctionnement est le suivant : au lancement de la partie, le script sélectionne aléatoirement l'une des valeurs, puis celle-ci s'affiche dans l'emplacement prévu à cet effet et influencera l'apparition de certaines étapes et d'étapes intermédiaires.

### Le fonctionnement des blocs : QUESTIONS + EXPLICATIONS

 - Le bloc des questions contient 3 éléments : une image d'illustration, un texte et les choix possibles (qui prennent la forme de boutons).
 - Le bloc des explications contient 2 éléments : un texte et un bouton permettant de passer à l'étape suivante. 
 - Les textes, illustrations et choix possibles, ainsi que leurs effets (temps, risques ...) sont codés dans chacun des blocs du .js faisant référence aux différentes étapes. Également, certains choix peuvent être enregistrés, influencant les probablités des événements. C'est par exemple le cas pour le choix ou non de mettre un casque. 
 - À la fin de chaque étape, le compteur temps, la barre de risque et la barre de progression sont mises à jour, puis le script fait appel au bloc des explications en définissant le texte, et le nom de l'étape suivante, associée à l'action du bouton. 
 - Ce schéma fonctionne en boucle, sauf pour la dernière étape qui fait appel à l'annonce du score (ou dans le cas d'un choix ayant conduit à un évènement entrainant la mort). 
 - Pour faire appel au bloc des questions dans le html, on utilise "card-modal", avec "card-image", "card-question" et "card-choices".
 - Pour faire appel au bloc des explications dans le html, on utilise "explanation-modal", avec "explanation-text et "next-step-btn". 

### Les images d'illustrations

 - Ces images apparaissent en lien avec l'étape en cours. 
 - Pour y faire appel dans le html, on utilise "scene". 

### Le score final
 - Le score final s'affiche par appel, dans la dernière étape (à la place de la prochaine étape). 
 - Il affiche le temps final, ainsi que le niveau de risque pris. Également, un message cloturant l'expérience de jeu s'affiche selon les deux paramètres cités précedémment ainsi qu'une synthèse des statistiques.  
 - Il offre la possibilité de relancer une partie. 
 - Pour y faire appel dans le html, on utilise "final-score". 