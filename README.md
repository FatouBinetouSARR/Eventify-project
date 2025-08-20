Eventify est une application web de gestion d’événements inspirée de Eventbrite.
Elle permet aux organisateurs de créer, gérer et promouvoir leurs événements, et aux participants de consulter et s’inscrire facilement en ligne.

🚀 Fonctionnalités principales
👤 Authentification & Sécurité

Inscription / connexion par email + mot de passe

Gestion des rôles : participant vs organisateur

Accès sécurisé aux événements privés

🎟️ Côté participant

Parcourir les événements publics

Filtrer par date, lieu, catégorie

Consulter la fiche d’un événement (détails, image, lieu, date…)

S’inscrire à un événement en ligne

Voir la liste de ses inscriptions

🗓️ Côté organisateur

Créer, modifier, supprimer des événements

Consulter la liste des participants inscrits

Dashboard avec statistiques (vues, inscriptions)

(Bonus) Export CSV des participants

🛠️ Stack technique

Frontend : React.js + Tailwind CSS

Backend : Node.js (Express) ou Django

Base de données : MongoDB ou PostgreSQL

Auth : JWT / Firebase Auth

Déploiement : Vercel (Frontend) + Render/Heroku (Backend)

📂 Architecture des pages

/ : Liste des événements publics (Accueil)

/login – /register : Authentification

/event/:id : Détails d’un événement

/dashboard : Dashboard organisateur

/my-events : Événements auxquels le participant est inscrit

🎨 Design UI

Inspiré de Eventbrite

Style sobre, clair et responsive (mobile-first)

Cartes visuelles pour chaque événement

✅ Objectif

Fournir une solution simple, moderne et intuitive pour connecter organisateurs et participants, en rendant la gestion d’événements plus fluide et accessible.
