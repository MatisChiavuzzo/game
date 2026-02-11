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

Pour répondre à cette attente, nous avons développé un jeu à choix inspiré des "visual novels" où le joueur se voit attribuer un moyen de transport (vélo, moto, trottinette électrique) et doit rejoindre son école à temps. Pour cela, le jouer sera confronté tout le long de son trajet à différentes situations face auxquelles il aura un choix à faire. Les choix qu'il décidera de faire influenceront ainsi à la fois son heure d'arrivée mais également sa "barre de prise de risque". Le but final du jeu est ainsi d'arriver à l'heure mais aussi de ne pas finir avec un score trop bas dans la barre de risque.

# 2. Contexte technique 

## Technologies utilisées
- HTML5
- CSS3
- JavaScript ES6
- Mkdocs

## Installation et lancement 

### Télécharger ou cloner le projet

### Ouvrir le projet en local via la commande suivante dans le terminal :
- `mkdocs serve --livereload`

### Publier le projet via la commande suivante dans le terminal :
- `mkdocs gh-deploy`

### Commit les modifications (depuis le terminal):
- `git add .`
- `git commit -m "Mise à jour de la documentation"`
- `git push`

# 3. Arborescence des fichiers

## Dossier "docs" :

Ce dossier contient tous les fichers servant à construire les pages du site pour l'outil mkdocs, on y retrouve les sous-dossiers suivants : 
    - css : ce dossier contient 2 fichiers de style pour le jeu et l'ensemble des pages
    - image : ce dossier contient toutes les images présentes dans le jeu 
    - js : ce dossier contient 1 fichier .js permettant le fonctionnement du jeu 
    - pages : ce dossier contient les 3 pages .md et 1 page .html liées au site 


# 4. Description de la structure/composition des fichiers

## index.md
Ce code en .md, correpond à la page d'accueil du jeu. Il contient un menu de navigation renvoyant vers : 
- Accueil : page principale, dans laquelle on trouve des éléments contextes et de présentations du projet. Également, on retrouve un bouton de contact. 
- Règles du jeu :  Renvoie vers une autre page contenant les règles du jeu (regles.md).
- Jeu : Renvoie vers le jeu (jeu.html).
- Documentation : Renvoie vers la documentation (documentation.md)
- Sources : Renvoie vers l'ensemble des sources statistiques utilisées dans le jeu (sources.md)

## regles.md
Ce code en .md recense les règles détaillées du jeu ainsi que les fins et possibilité possibles. 

## jeu.html
Ce code en .html établit la structure du jeu. . 

## jeu.css
Ce code en .css permet de moduler l'apparence de l'ensemble de la page du jeu. 

## extra.css
Ce code en .css permet de moduler l'apparence de l'ensemble des pages .md

## script.js
Ce code en javascript, permet le fonctionnement du jeu. Dans ce script, nous pouvons retrouver y six blocs d'éléments (dont le fonctionnement est détaillé dans la documentation). 



