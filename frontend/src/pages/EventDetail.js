import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

const EventDetailPage = ({ event, onBack }) => {
  const { user } = useAuth();
  const [isRegistered, setIsRegistered] = useState(false);
  const [loading, setLoading] = useState(false);

  const API_BASE_URL = 'http://localhost:8000/api';

  useEffect(() => {
    if (user && event) {
      checkRegistration();
    }
  }, [user, event]);

  const checkRegistration = async () => {
    try {
      const token = localStorage.getItem('access_token');
      const response = await fetch(`${API_BASE_URL}/users/me/events/`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      const userEvents = await response.json();
      setIsRegistered(userEvents.some(e => e.id === event.id));
    } catch (error) {
      console.error('Erreur lors de la vérification de l\'inscription:', error);
    }
  };

  const handleRegister = async () => {
    if (!user) {
      alert('Veuillez vous connecter pour vous inscrire');
      return;
    }

    setLoading(true);
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
        setIsRegistered(true);
      } else {
        const data = await response.json();
        alert(data.error || 'Erreur lors de l\'inscription');
      }
    } catch (error) {
      alert('Erreur réseau');
    } finally {
      setLoading(false);
    }
  };

  const handleUnregister = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('access_token');
      const response = await fetch(`${API_BASE_URL}/events/${event.id}/register/`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        alert('Désinscription réussie !');
        setIsRegistered(false);
      } else {
        const data = await response.json();
        alert(data.error || 'Erreur lors de la désinscription');
      }
    } catch (error) {
      alert('Erreur réseau');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (!event) return null;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <button
          onClick={onBack}
          className="mb-6 flex items-center text-green-600 hover:text-green-700 transition-colors"
        >
          <i className="fas fa-arrow-left mr-2"></i>
          Retour aux événements
        </button>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="relative h-64 md:h-96">
            <img 
              src={event.image_url || `https://picsum.photos/1200/400?random=${event.id}`}
              alt={event.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
              <div className="p-8 text-white">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{event.title}</h1>
                <p className="text-lg opacity-90">{event.category}</p>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Description</h2>
                <div className="prose max-w-none text-gray-600 mb-8">
                  {event.description || 'Aucune description disponible.'}
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Organisateur</h3>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                      <i className="fas fa-user text-white"></i>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">
                        {event.organizer?.first_name} {event.organizer?.last_name}
                      </p>
                      <p className="text-gray-600">{event.organizer?.email}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Informations</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center text-gray-600">
                      <i className="fas fa-calendar-alt mr-3 text-green-600 w-5"></i>
                      <div>
                        <p className="font-semibold">Date et heure</p>
                        <p className="capitalize">{formatDate(event.date)}</p>
                      </div>
                    </div>

                    <div className="flex items-center text-gray-600">
                      <i className="fas fa-map-marker-alt mr-3 text-green-600 w-5"></i>
                      <div>
                        <p className="font-semibold">Lieu</p>
                        <p>{event.location}</p>
                      </div>
                    </div>

                    <div className="flex items-center text-gray-600">
                      <i className="fas fa-users mr-3 text-green-600 w-5"></i>
                      <div>
                        <p className="font-semibold">Participants</p>
                        <p>
                          {event.participants_count}
                          {event.max_participants && ` / ${event.max_participants}`}
                          {event.is_full && ' (Complet)'}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center text-gray-600">
                      <i className="fas fa-eye mr-3 text-green-600 w-5"></i>
                      <div>
                        <p className="font-semibold">Vues</p>
                        <p>{event.views_count}</p>
                      </div>
                    </div>

                    {event.is_private && (
                      <div className="flex items-center text-purple-600">
                        <i className="fas fa-lock mr-3 w-5"></i>
                        <div>
                          <p className="font-semibold">Événement privé</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {user && user.id !== event.organizer?.id && (
                    <div className="mt-6 pt-6 border-t">
                      {isRegistered ? (
                        <button
                          onClick={handleUnregister}
                          disabled={loading}
                          className="w-full bg-red-500 text-white py-3 px-4 rounded-lg hover:bg-red-600 transition-colors disabled:opacity-50 font-semibold"
                        >
                          {loading ? (
                            <i className="fas fa-spinner fa-spin mr-2"></i>
                          ) : (
                            <i className="fas fa-times mr-2"></i>
                          )}
                          Se désinscrire
                        </button>
                      ) : (
                        <button
                          onClick={handleRegister}
                          disabled={loading || event.is_full}
                          className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors disabled:opacity-50 ${
                            event.is_full 
                              ? 'bg-gray-400 text-white cursor-not-allowed'
                              : 'bg-yellow-500 text-white hover:bg-yellow-600'
                          }`}
                        >
                          {loading ? (
                            <i className="fas fa-spinner fa-spin mr-2"></i>
                          ) : event.is_full ? (
                            <i className="fas fa-ban mr-2"></i>
                          ) : (
                            <i className="fas fa-ticket-alt mr-2"></i>
                          )}
                          {event.is_full ? 'Événement complet' : 'S\'inscrire'}
                        </button>
                      )}
                    </div>
                  )}

                  {!user && (
                    <div className="mt-6 pt-6 border-t">
                      <p className="text-gray-600 text-center mb-3">
                        Connectez-vous pour vous inscrire
                      </p>
                      <button className="w-full bg-green-500 text-white py-3 px-4 rounded-lg hover:bg-green-600 transition-colors font-semibold">
                        <i className="fas fa-sign-in-alt mr-2"></i>
                        Se connecter
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailPage;
