Dm proposé par Lucas Lescot, Emma Debs, Alexis Youf

Le but de ce DM est de proposé une ébauche de site de gambling.
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
- Autorise le contrat a recevoir des tokens venant de n'importe qu'elle adresse.
- Affiche le solde du contrat.
- Retirer l'argent mis sur le contrat.

Améliorations futures : 
- Gérer la partie tirage aléatoire via le smart contract.
- Utiliser des frameworks au lieu de faire que du React Native.

Ecran de démarrage :
![image](https://user-images.githubusercontent.com/90262369/200908929-ba36eae8-31df-4b39-ab90-8af25e30a61c.png)

Ecran pour déposer :
![image](https://user-images.githubusercontent.com/90262369/200909149-6f1961ea-a5e9-4d07-96cd-96bab308fde9.png)
![image](https://user-images.githubusercontent.com/90262369/200909437-1277b6d5-6195-4733-ae8f-936d56d7187c.png)

Ecran pour jouer :
![image](https://user-images.githubusercontent.com/90262369/200909485-8b3f54ba-cf09-4a55-b4c3-1b05820a3674.png)

Sources :
https://stackoverflow.com/questions/72716046/cant-seem-to-call-a-smart-contract-function-in-the-ui
https://www.youtube.com/watch?v=QJZUItAsdfg&ab_channel=ArturChmaro
