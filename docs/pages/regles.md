---
hide:
  - navigation
---

# Voici les règles

## Introduction
### Nombre de joueurs 

Le nombre de joueurs est fixé à 1 joueur par appareil, mais il est tout à fait possible de jouer en même temps sur plusieurs appareils différents, puis de comparer ses résultats à la fin de la partie.  


### Objectif du jeu

Le jeu reprend le concept du jeu de simulation de négociation où le joueur a un nombre limité de jetons qu’il peut décider de répartir comme il le souhaite (ici, il s’agit d’une barre de risque). Il va ainsi décider de la façon dont il souhaite faire varier sa barre de risque en la faisant baisser ou monter. De plus, nous avons décidé de rajouter dans notre fonctionnement de jeu une variable de temps pour le rendre plus intéressant à jouer.

Ainsi, afin de gagner la partie, le joueur ne doit non seulement pas arriver au-delà de 8h15, mais également ne pas dépasser un trop haut niveau de risque. En effet, si un joueur arrive avant 8h15, mais qu’il a pris trop de risques, il aura perdu la partie.

Le joueur doit donc trouver le juste milieu entre arriver dans les temps et une prise de risques. Comme dans le cas d’un retard en temps réel, l’objectif est de contraindre le joueur à prendre des risques à cause du temps. En effet, lorsque l’on est sous pression, nous sommes amenés à prendre des risques, même les plus anodins, qui peuvent parfois entraîner des conséquences importantes. C’est tout l’objet du jeu, montrer au joueur que tous les risques peuvent avoir de lourdes conséquences.

## Déroulement d'une partie

Le jeu se décompose en 2 principales phases, voir 3 selon la météo de la partie. 

### Première phase

La première phase est composée de deux étapes, portant sur les aspects de protection avant le départ (mettre ou non son casque, réparer ou non sa lumière). 

### Seconde phase

La seconde phase est composée de 7 étapes, pour chacune d'entre elles, le joueur a entre 2 à 3 possibilités selon l’étape. Chacune de ces possibilités entraîne des événements particuliers. Chacun de ces événements a des probabilités d’apparitions différentes, et des influences sur le niveau de risque et le temps. Certains événements avec de faibles probabilités peuvent même entraîner la mort du joueur, soit la fin de la partie. 
De plus, une des étapes varie selon le mode de transport de la partie. Par exemple, si l’on est à vélo, toutes les étapes ne seront pas les mêmes que pour un joueur à moto. 

### Phases complémentaires

Les phases complémentaires, elles dépendent de la météo de la partie. S’il pleut, une étape spécifique apparaît au cours de la partie, de même pour la nuit. Seul le jour n’a pas d'étape spécifique. Ainsi, pour une partie où la météo est le jour, la partie sera plus courte d’une étape.   

### Fonctionnement d'une étape

En somme, le jeu se présente de la manière suivante, quelles que soient les étapes : 

  1.	Une question / mise en situation
  2.	Un choix fait par le joueur
  3.	Une réponse s’incarnant par un événement aléatoire qui se produit, selon le choix
  4.	Une mise à jour du niveau de risque pris et du temps gagné ou perdu (dépendant de l'événement qui aura eu lieu).
  5.	Une explication de l'événement, mis en lien avec les aspects éducatifs et de préventions face aux risques, ainsi que quelques statistiques en lien avec l'événement.
 

### Les types de risques, gains et pertes

À l’issue de chaque choix pris par le joueur, plusieurs éléments peuvent entrer en compte selon l’étape :
  -	Gain ou perte de points sur l’échelle de risque 
  -	Gain ou perte de temps
  -	Prise en compte de la réponse qui aura une influence sur les probabilités que certains événements se produisent. Par exemple, si le joueur décide de ne pas mettre de casque, sa réponse est enregistrée, et augmente la probabilité de chute lors des autres étapes.

### Prises en compte d’une éducation :

Au cours de la partie, après chaque choix du joueur, des éléments explicatifs et statistiques sont présentés, dans l’idée d’inclure l’aspect éducatif. De plus, lorsqu'un joueur prend un risque, un popup lui indique quel(s) type(s) de risque(s) il a pris (risque d’autonomie, cathartique, pratique, prestance ou stimulation).

## Contenu du jeu

![Texte alternatif](../image/tuto.png "")

### 1 - Barre de risque

Elle varie du rouge (beaucoup de risques pris) au vert (peu de risques pris), elle indique au joueur si ses actes ont été plus ou moins dangereux. 

### 2 - Heure d’arrivées prévue

Cette horloge indique l’heure d’arrivée prévue, dans le cas où la circulation est fluide et qu’aucun évènement ne vient perturber le trajet. Cette heure d’arrivée changera donc obligatoirement au cours de la partie, puisque les choix faits par le joueur lui feront soit perdre du temps, ce qui augmentera l’heure d'arrivée, ou alors lui faire gagner du temps, ce qui avancera l’heure d’arrivée prévue. C’est donc sur l’heure affichée, que le joueur doit se fixer afin d’évaluer, si, oui ou non, dans l’état actuel de sa partie, il arrive dans les temps. 

### 3 - Fiches questions / situations / choix

C’est ici que les différentes situations sont présentées au joueur ainsi que les boutons des choix qui lui sont proposés.
Après son choix, c’est également à cet emplacement que les explications sur l’événement qui a eu lieu sont présentées, ainsi que les aspects pédagogiques.

### 4 - Progression du trajet

Cette barre indique au joueur son état d’avancement dans la partie. Elle lui permet d’estimer le nombre d’étapes restantes.

### 5 - Météo pour la partie

C’est ici que le joueur peut savoir s'il fait jour, nuit ou s’il pleut.

### 6 - Mode de transport pour la partie

C’est ici que le joueur sait quel mode de transport il utilise pour ce trajet.

### 7 - Images d’illustrations des situations

Cet emplacement affiche, selon les étapes, les images d’illustrations associées. Ces images permettent au joueur de mieux se représenter l’espace, et ainsi de faire les choix qui lui semblent les plus justes. De plus, ces images permettent au joueur de se projeter dans une situation réelle, d’autant plus que toutes les photographies ont été prises dans la ville de Besançon. 

### 8 - Bouton de retour à l’accueil

Ce bouton permet un retour à la page d’accueil.

## Fin de partie

Le jeu se termine à l'issue de l'ensemble des étapes, ou en cas de mort du joueur au cours de la partie. À La fin de la partie, une pop-up transmet les résultats aux joueurs le temps d'arrivée final ainsi que le niveau de risque pris. 

## Jouer

Vous pouvez désormais [lancer le jeu](../pages/jeu.html) !
