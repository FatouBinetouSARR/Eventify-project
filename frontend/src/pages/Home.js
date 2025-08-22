import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import EventCard from '../components/EventCard';

const HomePage = ({ onEventClick }) => {
  const { user } = useAuth();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    search: '',
    category: '',
    location: '',
    upcoming: true
  });
  const [registeredEvents, setRegisteredEvents] = useState([]);

  const API_BASE_URL = 'http://localhost:8000/api';

  useEffect(() => {
    fetchEvents();
    if (user) {
      fetchUserEvents();
    }
  }, [filters, user]);

  const fetchEvents = async () => {
    try {
      const params = new URLSearchParams();
      if (filters.search) params.append('search', filters.search);
      if (filters.category) params.append('category', filters.category);
      if (filters.location) params.append('location', filters.location);
      if (filters.upcoming) params.append('upcoming', 'true');

      const response = await fetch(`${API_BASE_URL}/events/?${params}`);
      const data = await response.json();
      setEvents(data.results || data);
    } catch (error) {
      console.error('Erreur lors de la récupération des événements:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchUserEvents = async () => {
    try {
      const token = localStorage.getItem('access_token');
      const response = await fetch(`${API_BASE_URL}/users/me/events/`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setRegisteredEvents(data.map(event => event.id));
    } catch (error) {
      console.error('Erreur lors de la récupération des événements utilisateur:', error);
    }
  };

  const handleRegister = async (event) => {
    if (!user) {
      alert('Veuillez vous connecter pour vous inscrire');
      return;
    }

    try {
      const token = localStorage.getItem('access_token');
      const response = await fetch(`${API_BASE_URL}/events/${event.id}/register/`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        alert('Inscription réussie !');
        setRegisteredEvents([...registeredEvents, event.id]);
        fetchEvents(); // Rafraîchir pour mettre à jour le compteur
      } else {
        const data = await response.json();
        alert(data.error || 'Erreur lors de l\'inscription');
      }
    } catch (error) {
      alert('Erreur réseau');
    }
  };

  const categories = ['Technologie', 'Culture', 'Sport', 'Business', 'Éducation', 'Musique', 'Art', 'Food'];
  const locations = ['Dakar', 'Thiès', 'Saint-Louis', 'Kaolack', 'Ziguinchor', 'Louga', 'Fatick', 'Diourbel'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="gradient-bg senegal-pattern text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Découvrez les événements au Sénégal
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Teranga Event - Connectez-vous à votre communauté
          </p>
          
          {/* Barre de recherche */}
          <div className="max-w-4xl mx-auto bg-white rounded-xl p-6 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <input
                type="text"
                placeholder="Rechercher un événement..."
                value={filters.search}
                onChange={(e) => setFilters({...filters, search: e.target.value})}
                className="px-4 py-3 rounded-lg border text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <select
                value={filters.category}
                onChange={(e) => setFilters({...filters, category: e.target.value})}
                className="px-4 py-3 rounded-lg border text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">Toutes catégories</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              <select
                value={filters.location}
                onChange={(e) => setFilters({...filters, location: e.target.value})}
                className="px-4 py-3 rounded-lg border text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">Toutes villes</option>
                {locations.map(loc => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
              <button 
                onClick={fetchEvents}
                className="bg-yellow-500 text-white py-3 px-6 rounded-lg hover:bg-yellow-600 transition-colors font-semibold"
              >
                <i className="fas fa-search mr-2"></i>
                Rechercher
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section des événements */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-800">
              Événements à venir
            </h2>
            <label className="flex items-center text-gray-600">
              <input
                type="checkbox"
                checked={filters.upcoming}
                onChange={(e) => setFilters({...filters, upcoming: e.target.checked})}
                className="mr-2"
              />
              Événements à venir uniquement
            </label>
          </div>

          {loading ? (
            <div className="flex justify-center py-16">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
            </div>
          ) : events.length === 0 ? (
            <div className="text-center py-16">
              <i className="fas fa-calendar-times text-6xl text-gray-300 mb-4"></i>
              <p className="text-gray-500 text-xl">Aucun événement trouvé</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map(event => (
                <EventCard
                  key={event.id}
                  event={event}
                  onEventClick={onEventClick}
                  onRegister={handleRegister}
                  isRegistered={registeredEvents.includes(event.id)}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
