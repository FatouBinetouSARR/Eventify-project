Architecture du Projet Eventify
Architecture Technique
Stack Technologique
Frontend: React.js avec Tailwind CSS

Backend: Node.js + Express.js

Base de données: PostgreSQL avec Prisma ORM

Authentification: JWT (JSON Web Tokens)

Stockage fichiers: Cloudinary (pour les images d'événements)

Hébergement:

Frontend: Vercel

Backend: Render/Heroku

Base de données: Supabase ou service similaire

Structure des Dossiers
text
eventify/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── context/
│   │   ├── services/
│   │   └── utils/
│   ├── tailwind.config.js
│   └── package.json
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middleware/
│   │   ├── utils/
│   │   └── config/
│   ├── prisma/
│   └── package.json
└── README.md
Schéma de Base de Données
sql
-- Table des utilisateurs
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  role VARCHAR(20) DEFAULT 'participant' CHECK (role IN ('participant', 'organizer')),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table des événements
CREATE TABLE events (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  date TIMESTAMP NOT NULL,
  location VARCHAR(255) NOT NULL,
  category VARCHAR(100),
  image_url VARCHAR(500),
  is_private BOOLEAN DEFAULT false,
  max_participants INTEGER,
  organizer_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  views_count INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table des inscriptions
CREATE TABLE registrations (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  event_id INTEGER REFERENCES events(id) ON DELETE CASCADE,
  registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  status VARCHAR(20) DEFAULT 'confirmed' CHECK (status IN ('confirmed', 'cancelled', 'waiting')),
  UNIQUE(user_id, event_id)
);

-- Table des tokens JWT (pour la gestion des tokens révoqués)
CREATE TABLE revoked_tokens (
  id SERIAL PRIMARY KEY,
  token VARCHAR(500) NOT NULL,
  revoked_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
API Endpoints
Authentification
POST /api/auth/register - Création de compte

POST /api/auth/login - Connexion

POST /api/auth/logout - Déconnexion

GET /api/auth/me - Récupération du profil utilisateur

Événements
GET /api/events - Liste des événements publics (avec filtres)

POST /api/events - Création d'un événement (organisateur seulement)

GET /api/events/:id - Détails d'un événement

PUT /api/events/:id - Modification d'un événement (organisateur seulement)

DELETE /api/events/:id - Suppression d'un événement (organisateur seulement)

GET /api/events/:id/participants - Liste des participants (organisateur seulement)

Inscriptions
POST /api/events/:id/register - S'inscrire à un événement

DELETE /api/events/:id/register - Se désinscrire d'un événement

GET /api/users/me/events - Événements auxquels l'utilisateur est inscrit

Architecture Frontend
Pages et Routes
text
/                   → Page d'accueil (liste des événements)
/login              → Page de connexion
/register           → Page d'inscription
/event/:id          → Détails d'un événement
/dashboard          → Dashboard organisateur
/my-events          → Mes événements (participant)
/*                  → Page 404
Composants Principaux
Header: Navigation avec logo et menu utilisateur

EventCard: Carte d'événement pour les listes

EventFilter: Composant de filtrage des événements

RegistrationModal: Modal pour s'inscrire à un événement

EventForm: Formulaire de création/édition d'événement

DashboardStats: Statistiques pour le dashboard organisateur

ParticipantsList: Liste des participants avec option d'export

Workflow d'Authentification et Rôles
Inscription: L'utilisateur choisit son rôle (participant/organisateur)

Connexion: Génération d'un JWT avec les informations de rôle

Accès aux routes: Middleware de vérification des rôles sur le backend

Interface adaptative: Affichage différent selon le rôle de l'utilisateur

Sécurité
Validation des données côté client et serveur

Hashage des mots de passe avec bcrypt

Protection contre les attaques XSS et CSRF

Validation des paramètres d'URL et body des requêtes

Middleware d'authentification sur les routes protégées

Vérification des autorisations (un organisateur ne peut modifier que ses événements)