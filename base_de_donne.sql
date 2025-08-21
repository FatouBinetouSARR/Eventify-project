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