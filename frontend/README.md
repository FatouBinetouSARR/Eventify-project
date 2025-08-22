# Eventify Frontend

## Architecture du Projet

Ce dossier contient l'application frontend React pour Eventify, une plateforme de gestion d'événements.

### Structure des Dossiers

```
frontend/
├── public/                 # Fichiers statiques publics
│   └── index.html         # Page HTML principale
├── src/                    # Code source de l'application
│   ├── components/         # Composants React réutilisables
│   ├── pages/             # Pages/Composants de niveau supérieur
│   ├── hooks/             # Hooks personnalisés React
│   ├── context/           # Contextes React (état global)
│   ├── services/          # Services pour l'API et la logique métier
│   ├── utils/             # Fonctions utilitaires
│   ├── App.js             # Composant principal de l'application
│   ├── App.css            # Styles spécifiques à l'application
│   ├── index.js           # Point d'entrée de l'application
│   └── index.css          # Styles globaux avec Tailwind CSS
├── tailwind.config.js      # Configuration Tailwind CSS
├── postcss.config.js       # Configuration PostCSS
└── package.json            # Dépendances et scripts
```

### Technologies Utilisées

- **React 18** - Bibliothèque UI
- **React Router** - Routage de l'application
- **Tailwind CSS** - Framework CSS utilitaire
- **PostCSS** - Outil de traitement CSS

### Installation et Démarrage

1. **Installer les dépendances :**
   ```bash
   npm install
   ```

2. **Démarrer l'application en mode développement :**
   ```bash
   npm start
   ```

3. **Construire l'application pour la production :**
   ```bash
   npm run build
   ```

### Composants Prévus

#### Composants de Base
- `Header` - En-tête de l'application avec navigation
- `Footer` - Pied de page
- `Navigation` - Menu de navigation principal
- `Button` - Bouton réutilisable avec variantes
- `Modal` - Modal/Overlay réutilisable
- `Card` - Carte de contenu

#### Composants Spécifiques aux Événements
- `EventCard` - Affichage d'un événement
- `EventForm` - Formulaire de création/modification d'événement
- `EventList` - Liste d'événements
- `EventDetail` - Détails d'un événement

### Pages Prévues

- `Home` - Page d'accueil
- `Events` - Liste des événements
- `EventDetail` - Détails d'un événement
- `Login` - Connexion utilisateur
- `Register` - Inscription utilisateur
- `Profile` - Profil utilisateur
- `Dashboard` - Tableau de bord
- `CreateEvent` - Création d'événement

### Hooks Personnalisés Prévus

- `useAuth` - Gestion de l'authentification
- `useEvents` - Gestion des événements
- `useLocalStorage` - Gestion du stockage local
- `useForm` - Gestion des formulaires
- `useApi` - Appels API
- `useDebounce` - Debounce pour les recherches

### Contextes Prévus

- `AuthContext` - État d'authentification global
- `EventContext` - État des événements global
- `ThemeContext` - Thème de l'application
- `NotificationContext` - Notifications système

### Services Prévus

- `authService` - Service d'authentification
- `eventService` - Service de gestion des événements
- `userService` - Service de gestion des utilisateurs
- `apiService` - Service d'appels API générique
- `storageService` - Service de stockage local

### Utilitaires Prévus

- `formatDate` - Formatage des dates
- `validateEmail` - Validation d'email
- `formatCurrency` - Formatage des montants
- `generateId` - Génération d'identifiants
- `debounce` - Fonction debounce
- `throttle` - Fonction throttle

### Conventions de Nommage

- **Composants** : PascalCase (ex: `EventCard.js`)
- **Hooks** : camelCase avec préfixe `use` (ex: `useAuth.js`)
- **Services** : camelCase avec suffixe `Service` (ex: `authService.js`)
- **Utilitaires** : camelCase (ex: `formatDate.js`)
- **Fichiers CSS** : camelCase (ex: `App.css`)

### Styles et Design

L'application utilise Tailwind CSS avec une palette de couleurs personnalisée :
- **Primary** : Bleu (pour les actions principales)
- **Secondary** : Gris (pour les éléments secondaires)
- **Responsive** : Design mobile-first avec breakpoints Tailwind

### Prochaines Étapes

1. Créer les composants de base (Header, Footer, Navigation)
2. Implémenter le système de routage complet
3. Créer les pages principales
4. Implémenter l'authentification
5. Créer les composants spécifiques aux événements
6. Ajouter la gestion d'état globale
7. Implémenter les services API
8. Ajouter les tests unitaires
