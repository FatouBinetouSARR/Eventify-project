# Eventify - Plateforme de Gestion d'Événements

## 🎯 Vue d'Ensemble

Eventify est une plateforme complète de gestion d'événements permettant aux utilisateurs de créer, organiser et participer à des événements. Le projet est structuré en deux parties principales : un frontend React moderne et une API backend robuste.

## 🏗️ Architecture du Projet

```
eventify/
├── frontend/                 # Application React
│   ├── public/              # Fichiers statiques
│   ├── src/                 # Code source React
│   │   ├── components/      # Composants réutilisables
│   │   ├── pages/          # Pages de l'application
│   │   ├── hooks/          # Hooks personnalisés
│   │   ├── context/        # Contextes React
│   │   ├── services/       # Services API
│   │   └── utils/          # Fonctions utilitaires
│   ├── tailwind.config.js  # Configuration Tailwind CSS
│   └── package.json        # Dépendances frontend
├── backend/                 # API Node.js/Express
│   ├── src/                # Code source de l'API
│   │   ├── controllers/    # Contrôleurs API
│   │   ├── models/         # Modèles de données
│   │   ├── routes/         # Définition des routes
│   │   ├── middleware/     # Middlewares personnalisés
│   │   ├── utils/          # Fonctions utilitaires
│   │   └── config/         # Configuration
│   ├── prisma/             # Schéma et migrations DB
│   └── package.json        # Dépendances backend
└── README.md               # Documentation principale
```

## 🚀 Technologies Utilisées

### Frontend
- **React 18** - Bibliothèque UI moderne
- **React Router** - Routage de l'application
- **Tailwind CSS** - Framework CSS utilitaire
- **PostCSS** - Outil de traitement CSS

### Backend
- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **Prisma** - ORM pour la base de données
- **PostgreSQL** - Base de données relationnelle
- **JWT** - Authentification par token
- **bcryptjs** - Hashage des mots de passe

## 📋 Fonctionnalités Principales

### 👥 Gestion des Utilisateurs
- Inscription et connexion sécurisées
- Profils utilisateur personnalisables
- Système de rôles (utilisateur, organisateur, admin)

### 🎪 Gestion des Événements
- Création et édition d'événements
- Catégorisation et tags
- Gestion des inscriptions et capacités
- Système de favoris

### 📍 Localisation et Géolocalisation
- Adresses et coordonnées GPS
- Recherche par localisation
- Carte interactive des événements

### 🔔 Notifications
- Notifications en temps réel
- Rappels d'événements
- Confirmations d'inscription

## 🛠️ Installation et Configuration

### Prérequis
- Node.js 18+ et npm
- PostgreSQL 12+
- Git

### 1. Cloner le Projet
```bash
git clone <repository-url>
cd Eventify-project
```

### 2. Configuration du Backend
```bash
cd backend
npm install

# Créer le fichier .env
cp .env.example .env
# Éditer .env avec vos configurations

# Configuration de la base de données
npm run build:prisma
npm run db:migrate

# Démarrer l'API
npm run dev
```

### 3. Configuration du Frontend
```bash
cd frontend
npm install

# Démarrer l'application
npm start
```

## 🌐 Accès aux Applications

- **Frontend** : http://localhost:3000
- **Backend API** : http://localhost:5000
- **Prisma Studio** : http://localhost:5555 (après `npm run db:studio`)

## 📚 Documentation Détaillée

- [Documentation Frontend](./frontend/README.md)
- [Documentation Backend](./backend/README.md)
- [Architecture du Projet](./ARCHITECTURE_DU_PROJET.md)

## 🔧 Scripts Disponibles

### Frontend
```bash
npm start          # Démarre l'app en développement
npm run build      # Construit l'app pour la production
npm test           # Lance les tests
```

### Backend
```bash
npm start          # Démarre l'API en production
npm run dev        # Démarre l'API en développement
npm run db:migrate # Applique les migrations DB
npm run db:studio  # Ouvre Prisma Studio
npm test           # Lance les tests
```

## 🗄️ Base de Données

Le projet utilise PostgreSQL avec Prisma ORM pour :
- Gestion des relations complexes
- Migrations automatiques
- Validation des données
- Génération automatique du client

### Modèles Principaux
- **User** - Utilisateurs et profils
- **Event** - Événements et détails
- **Category** - Catégories d'événements
- **Registration** - Inscriptions aux événements
- **Tag** - Tags de catégorisation
- **Notification** - Notifications système

## 🔒 Sécurité

- Authentification JWT sécurisée
- Hashage des mots de passe avec bcrypt
- Validation stricte des données
- Protection CORS configurée
- Rate limiting anti-DDoS
- Headers de sécurité avec Helmet

## 🧪 Tests

- Tests unitaires avec Jest
- Tests d'intégration API
- Tests des composants React
- Couverture de code

## 🚀 Déploiement

### Frontend
- Build de production optimisé
- Configuration des variables d'environnement
- Déploiement sur plateforme statique

### Backend
- Configuration des variables d'environnement
- Scripts de migration de base de données
- Gestion des erreurs en production
- Logs structurés

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📞 Support

Pour toute question ou support :
- Créer une issue sur GitHub
- Contacter l'équipe de développement

## 🎉 Remerciements

Merci à tous les contributeurs qui participent au développement d'Eventify !

---

**Eventify** - Rendez vos événements inoubliables ! 🎊
