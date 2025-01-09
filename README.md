# Horloge en Direct

Une application React simple qui affiche l'heure actuelle en direct. Cette application met à jour l'heure chaque seconde en utilisant les hooks `useState` et `useEffect` de React.

## Fonctionnalités

- Affichage de l'heure actuelle.
- Mise à jour automatique chaque seconde.

## Prérequis

- [Node.js](https://nodejs.org/) (version 14 ou supérieure)
- [npm](https://www.npmjs.com/) (version 6 ou supérieure)
- [Docker](https://www.docker.com/get-started) (si vous souhaitez exécuter l'application dans un conteneur Docker)

## Installation

### Méthode 1 : En local (sans Docker)

1. Clonez ce repository ou téléchargez le code source.
2. Ouvrez un terminal et accédez au répertoire du projet.
3. Installez les dépendances avec la commande suivante :

   ```bash
   npm install
   ```

4. Démarrez l'application en mode développement :

   ```bash
   npm start
   ```

   Cela démarrera le serveur de développement sur `http://localhost:3000`.

### Méthode 2 : Avec Docker

Si vous souhaitez exécuter l'application dans un conteneur Docker, vous pouvez utiliser le `Dockerfile` fourni pour créer et exécuter l'application dans un conteneur.

#### Étapes pour utiliser Docker

1. **Construire l'image Docker :**

   Assurez-vous que Docker est installé sur votre machine. Ensuite, dans le répertoire du projet, exécutez la commande suivante pour construire l'image Docker :

   ```bash
   docker build -t horloge-en-direct .
   ```

2. **Exécuter l'application dans un conteneur Docker :**

   Une fois l'image construite, vous pouvez démarrer l'application dans un conteneur Docker avec la commande suivante :

   ```bash
   docker run -p 3000:3000 horloge-en-direct
   ```

   L'application sera accessible à l'adresse `http://localhost:3000` dans votre navigateur.
