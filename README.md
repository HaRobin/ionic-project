# Projet IONIC - CRUD avec Firebase

## Installation

1. Clonez ce dépôt :

   ```bash
   git clone <lien-du-dépôt>
   cd <nom-du-dossier>
   ```

2. Installez les dépendances avec l'option `--legacy-peer-deps` pour résoudre les conflits :

   ```bash
   npm install --legacy-peer-deps
   ```

## Configuration Firebase

Ce projet utilise une base de données **Firestore** pour la gestion des données CRUD.
Malheureusement, il n'a pas été possible de configurer un fichier `.env` pour sécuriser les clés API malgré les efforts déployés. Les clés API Firebase sont actuellement configurées directement dans le fichier `environment.ts`.

Voici un exemple de la configuration Firebase utilisée :

```typescript
export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'VOTRE_API_KEY',
    authDomain: 'VOTRE_AUTH_DOMAIN',
    projectId: 'VOTRE_PROJECT_ID',
    storageBucket: 'VOTRE_STORAGE_BUCKET',
    messagingSenderId: 'VOTRE_MESSAGING_SENDER_ID',
    appId: 'VOTRE_APP_ID',
  },
};
```

---

## Fonctionnalités Réalisées et Manquantes

### Fonctionnalités Réalisées

- **Création du projet IONIC**
- **Création des pages** :
  - Page d'accueil (Home)
  - Liste des produits
  - Création d'un produit
  - Modification d'un produit
- **CRUD avec Firebase** :
  - Création
  - Récupération de tous les produits
  - Récupération d'un produit unique
  - Modification
  - Suppression
- **Fonctionnalité native adaptée** :
  - La fonctionnalité GPS initialement développée a été adaptée pour ouvrir une page Google Maps dans le navigateur.
- **Utilisation des composants IONIC** :
  - Grille, icônes, images
  - Menu
- **Validation des formulaires** côté client
- **Connexion à Firebase**
- **Affichage mobile optimisé**
- **Service Angular avec Observables**

### Fonctionnalités Manquantes

- **Utilisation de `.env` pour les clés Firebase** :
  - Malgré plusieurs tentatives, il n'a pas été possible de sécuriser les clés API via un fichier `.env`.
- **Gestion avancée des sujets (Subjects)**
- **Ajout de contenu enrichi pour rendre l'application "vivante"**
