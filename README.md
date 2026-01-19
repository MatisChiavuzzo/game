# Projet de dévellopement d'un jeu en ligne 

Page web jeu interractif portant sur les risques en deux roues. 

Janvier - Février 2026

# Equipe

- Chiavuzzo Matis
- Tuaillon Nion

# Installation des outils de développement

### VSCode

Se rendre sur le site suivant : https://code.visualstudio.com/docs?dv=win.
Placer le fichier sur le bureau, puis l'exécuter.

Une fois VSCode installé, le lancer, puis ajouter l'extension GitHub Pull Requests.
Vous devez maintenant vous connecter au dossier partagé pour pouvoir travailler en coopération.
Avant chaque utilisation, il faut pull le fichier pour le mettre à jour sur notre ordinateur, et quand on a fini, il faut le push pour que les suivants puissent reprendre là où vous vous êtes arrêtés.


### Python

Pour télécharger Python :
Cliquez directement sur ce lien -> https://www.python.org/ftp/python/3.13.2/python-3.13.2-amd64.exe.

S'il ne se télécharge pas lorsque vous cliquez sur le premier lien, essayez de vous rendre sur ce site : https://www.python.org/downloads/release/python-3132/.
Allez en bas de la page et prenez la version recommandée : Windows installer (64-bit).


### PIP 

Pour télécharger PIP / PyPI :
Cliquez directement sur ce lien -> https://files.pythonhosted.org/packages/70/53/b309b4a497b09655cb7e07088966881a57d082f48ac3cb54ea729fd2c6cf/pip-25.0.1.tar.gz.

S'il ne se télécharge pas lorsque vous cliquez sur le premier lien, essayez de vous rendre sur ce site : https://pypi.org/project/pip/#files.
Allez dans "Distribution des sources" et téléchargez la seule version : pip-25.0.1.tar.gz.


### Mkdocs-material

Pour télécharger mkdocs-material :
Cliquez directement sur ce lien -> https://files.pythonhosted.org/packages/10/0a/17557708cfc6a11a1a941199b6b54a8990b297d910db81a43f1082b11e1b/mkdocs_material-9.6.8.tar.gz.

S'il ne se télécharge pas lorsque vous cliquez sur le premier lien, essayez de vous rendre sur ce site : https://pypi.org/project/mkdocs-material/#files.
Allez dans "Distribution des sources" et téléchargez la seule version : mkdocs_material-9.6.8.tar.gz.

# 1. Présentation du projet

# 2. Contexte technique 

## A. Technologies utilisées
- HTML5
- CSS3
- JavaScript ES6
- Mkdocs

## Installation et lancement 
### Télécharger ou cloner le projet
### Ouvrir le projet via la commande suivante dans le terminal : `mkdocs gh-deploy`
### Commit les modifications (depuis le terminal):
- `git add .`
- `git commit -m "Mise à jour de la documentation"`
- `git push origin main`

# 3. Structure des fichiers

## mkdocs.yml : Ce docement permet la focntionnement du site en mkdocs

## docs : Dossier et fichiers constituant le coeur du site, base pour le mkdocs 

### css : Ce dossier contient un CSS pour la page html, portant le même nom que celle-ci
- jeu.css

### image : Ce dossier contient les images utilisées pour le jeu
- 

### js : Ce dossier contient je javascript permttant de faire cfonctionner le jeu
- script.js

### pages : Ce dossier contient les pages explicatives du projet
- regles.md

### index.md : Cette page constitue la page d'accueil du site

### jeu.html : Cette page constitue la page du jeu, coder en html par des soucis de simplicité 

### README.md : La documentation (que vous êtes en train de lire)



