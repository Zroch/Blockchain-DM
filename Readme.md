Dm proposé par Lucas Lescot, Emma Debs, Alexis Youf

Le but de ce DM est de proposer une ébauche de site de gambling.
Nous avons mis en avant :
- La connection au wallet
- Dépôt de fonds sur le smart contract
- Jeu pile ou face
- Retirer les gains

Installation :

cd gamblingece
npm install
npm install --save ethers
npm install react-router-dom

Build :
npm start

Pour rejouer relancez l'application.

Le contrat solidity : 
L'interêt de la blockchain est ici de proposer un moyen simple de jouer et sécurisé pour son argent.
- Autorise le contrat a recevoir des tokens venant de n'importe qu'elle adresse.
- Affiche le solde du contrat.
- Retirer l'argent mis sur le contrat.

Améliorations futures : 
- Gérer la partie tirage aléatoire via le smart contract.
- Utiliser des frameworks au lieu de faire que du React Native.

Ecran de démarrage :
![image](https://user-images.githubusercontent.com/90262369/200940016-be2f6a3b-c775-4ae5-8d48-a48b23ccad72.png)

Ecran pour déposer :
![image](https://user-images.githubusercontent.com/90262369/200940205-bd0c450b-c3e6-46c7-830d-261ed070d459.png)
![image](https://user-images.githubusercontent.com/90262369/200940237-eeb0ffc0-7ffc-4e8a-9e9e-b923fb5370f8.png)

Ecran pour jouer :
![image](https://user-images.githubusercontent.com/90262369/200940447-d84021ff-b6d0-4f06-8473-6ca8499da0ab.png)
![image](https://user-images.githubusercontent.com/90262369/200940483-ec5a08cc-108d-4b5a-92a2-69415d17cd2f.png)

Là où l'on peut rencontrer un bug :
Lorsque l'on gagne, la variable qui contient l'argent du joueur reste à 0 et ne permet pas de retirer son argent.

Sources :
https://stackoverflow.com/questions/72716046/cant-seem-to-call-a-smart-contract-function-in-the-ui
https://www.youtube.com/watch?v=QJZUItAsdfg&ab_channel=ArturChmaro
