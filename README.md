# Projet : TodoList
C'est une Todolist en React qui consistera en un crud basique (create, read, update, delete). L'interface vous montrera ce que vous devez faire et ce qui a été fait, ainsi que l'heure de mise à jour correspondante. Vous pouvez gérer votre liste de tâches via cette interface.
  
## Pour commencer
Ce projet utilise `create-react-app` qui peut vous aider à créer automatiquement le modèle de projet React le plus simple basé sur Webpack + ES6.

#### Conditions préalables
Vous devriez entrer le code `$ npm -v` dans le terminal pour vous assurer que vous avez installé npm, sinon l'installer


#### Démarrage
Au début, installer le modèle de create-react-app par les codes suivants
````
$ npm intall
$ npm start
````

## La structure de projet
````
.
├── src                 
|   |   
|   |   
|   ├── components 
|   |   |   
|   |   ├── app        #component total         
|   |   |   |
|   |   |   └── app.jsx
|   |   |
|   |   ├── addTodo    #component pour ajouter les tâches
|   |   |   |
|   |   |   └── addTodo.jsx
|   |   |  
|   |   ├── list       #component pour la liste
|   |   |   |
|   |   |   ├── list.jsx
|   |   |   |
|   |   |   └── list.css
|   |   |
|   |   └── itemTodo   #component pour les tâches dans la liste 
|   |       |
|   |       ├── itemTodo.jsx
|   |       |
|   |       └── itemTodo.css
|   |   
|   └── index.js       
|      
├── build               
├── public
├── node_modules       
├── .gitignore      
├── package-lock.json
├── package.json        
└── README.md           

````

## Pour tester
Pour tester les fonctionnements principals, vous devriez d'abord exécuter le code `$ npm start` dans le dossier du projet. Ensuite, ouvrier l'adresse <http://localhost:3000/> dans le browser.
   
Après avoir réussi à entrer le site, vous pouvez facilement tester les fonctionnements correspondants.

## Construit avec
* **create-react-app**
* **npm** (Node.js)
    * Outil de gestion de paquets par défaut pour la plate-forme Node.js
* **axios** 
    * Bibliothèque HTTP basée sur des promesses
* **prop-types**
    * Bibliothèque de détection de type correspondant à React
* **boootstrap** 
    * Boîte à outils Open Source pour le développement frontal

## Version
* **Version originale** (téléchargé à 26/11/2018)
* **Version 2** (téléchargé à 26/11/2018)
    * Faciliter les codes
    * Détecter et résoudre les warnings sur le page Web
    * Renforcer la convivialité

## Reference
* Syntaxe sur axios : <https://npm.runkit.com/axios>
* Tutorial sur github : <https://www.cnblogs.com/liuboyingblog/p/8260233.html>
* Documents et tutorial sur React : <https://reactjs.org/>

