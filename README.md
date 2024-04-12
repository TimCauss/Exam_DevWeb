# Projet : Galerie de Photos de Renards

## Introduction à l'API

L'API RandomFox (https://randomfox.ca/floof) vous permet d'obtenir une URL d'image d'un renard aléatoire. Chaque requête à l'API vous renvoie un objet JSON contenant une clé `image` qui donne l'URL d'une image de renard. Voici un exemple de réponse de l'API :

```json
{
  "image": "https://randomfox.ca/images/1.jpg",
  "link": "https://randomfox.ca/?i=1"
}
```

Vous utiliserez la clé `image` pour afficher les images dans votre galerie.

## Instructions du Projet

Le projet est divisé en plusieurs étapes. Chaque étape vise à développer progressivement votre application web jusqu'à la réalisation d'une galerie interactive de photos de renards.

L'originalité, la créativité, le "sémantiquement correct" du HTML, et la propreté du code en général seront valorisés.

### Étape 1: Afficher 1 image de renard (4)

1. **Objectif** : Affichez une seule image de renard.
2. **Tâches** :
   - Créez une page HTML basique.
   - Récupérez l'url d'une image de renard grâce à l'API.
   - Affichez cette image dans votre page HTML.

### Étape 2: Afficher 5 images de renards côte à côte (4)

1. **Objectif** : Modifiez votre page pour afficher 5 images de renards, toutes affichées côte à côte.
2. **Tâches** :
   - Adaptez votre code pour afficher 5 images différentes.
   - Utilisez CSS pour les afficher côte à côte (par exemple, en utilisant Flexbox).

### Étape 3: Afficher 15 images de renards en grille (4)

1. **Objectif** : Organisez 15 images de renards en grille (par exemple, 3 lignes de 5 images).
2. **Tâches** :
   - Augmentez le nombre d'images affichées à 15.
   - Modifiez votre CSS pour arranger les images en grille.

### Étape 4: Créer un bouton qui ajoute une image de renard aléatoire à la grille (4)

1. **Objectif** : Ajoutez un bouton qui, lorsqu'on le clique, ajoute une nouvelle image de renard à la grille.
2. **Tâches** :
   - Ajoutez un bouton à votre page.
   - Écrivez du JavaScript pour que, lorsqu'on clique sur ce bouton, une nouvelle image soit chargée de l'API et ajoutée à la grille.

### Étape 5: Faire en sorte que le clic d'une image de renard la remplace par une nouvelle image tirée aléatoirement (4)

1. **Objectif** : Permettez aux utilisateurs de cliquer sur une image de renard dans la grille pour la remplacer par une nouvelle image tirée aléatoirement de l'API.
2. **Tâches** :
   - Modifiez votre JavaScript pour ajouter un gestionnaire d'événements `click` à chaque image.
   - Lorsqu'une image est cliquée, chargez une nouvelle image de l'API et remplacez l'ancienne image par la nouvelle.

## Conseils

- **Utilisez `fetch` pour les requêtes API** : La méthode `fetch` en JavaScript est idéale pour faire des requêtes HTTP asynchrones.
- **Inspectez la réponse de l'API** : Utilisez les outils de développement de votre navigateur pour inspecter la réponse de l'API et comprendre comment accéder aux données dont vous avez besoin.
- **Expérimentez avec le CSS** : Ne vous contentez pas de fonctionnalités basiques. Essayez différentes méthodes pour rendre votre galerie visuellement attrayante.

## Ressources

- [Documentation de Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [Guide Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)s