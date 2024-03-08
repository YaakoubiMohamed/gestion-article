# Projet Express.js avec Sequelize

Il s'agit d'un projet Express.js structuré pour démontrer l'utilisation de Sequelize ORM pour la base de données MySQL. Le projet inclut des opérations CRUD de base pour gérer les utilisateurs et les publications, ainsi qu'une authentification basée sur JWT.

## Installation

1. Cloner ce dépôt :

    ```
    git clone https://github.com/YaakoubiMohamed/gestion-article
    ```

2. Installer les dépendances :

    ```
    cd <project_folder>
    npm install
    ```

3. Configurer la base de données :
   
   - Mettez à jour `config/config.js` avec vos identifiants de base de données MySQL.
   
4. Générer une clé secrète JWT :

    - Mettez à jour `config/secret.js` avec une clé secrète pour la génération de jeton JWT.

5. Lancer l'application :

    ```
    npm start
    ```

## Utilisation

- L'application fournit des opérations CRUD pour les utilisateurs et les publications.
- L'authentification est mise en œuvre à l'aide de jetons JWT.
- Les points de terminaison sont définis dans les fichiers de route respectifs.
- Les données des utilisateurs et des publications peuvent être préremplies à partir de fichiers JSON situés dans le répertoire `json_data/`.

## Points de Terminaison

### Authentification

- `POST /auth/login` : Connexion avec email et mot de passe pour obtenir un jeton JWT.
- `POST /auth/register` : Enregistrer un nouvel utilisateur.

### Utilisateurs

- `GET /users` : Obtenir une liste d'utilisateurs.
- `GET /users/:id` : Obtenir les détails d'un utilisateur spécifique.
- `PUT /users/:id` : Mettre à jour les détails de l'utilisateur.
- `DELETE /users/:id` : Supprimer un utilisateur.

### Publications

- `GET /publications` : Obtenir une liste de publications.
- `GET /publications/:id` : Obtenir les détails d'une publication spécifique.
- `POST /publications` : Créer une nouvelle publication.
- `PUT /publications/:id` : Mettre à jour les détails de la publication.
- `DELETE /publications/:id` : Supprimer une publication.

## Auteur

[Yaakoubi Mohamed](https://github.com/YaakoubiMohamed)
