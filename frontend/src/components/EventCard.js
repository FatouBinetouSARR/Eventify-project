import React from 'react';

const EventCard = ({ event, onEventClick, onRegister, isRegistered }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getCategoryIcon = (category) => {
    const icons = {
      'Technologie': 'fa-laptop-code',
      'Culture': 'fa-masks-theater',
      'Sport': 'fa-football',
      'Business': 'fa-briefcase',
      'Éducation': 'fa-graduation-cap',
      'Musique': 'fa-music',
      'Art': 'fa-palette',
      'Food': 'fa-utensils'
    };
    return icons[category] || 'fa-calendar';
  };

  return (
    <div className="bg-white rounded-xl shadow-md card-hover overflow-hidden">
      <div className="relative">
        <img 
          src={event.image_url || `https://picsum.photos/400/200?random=${event.id}`}
          alt={event.title}
          className="w-full h-48 object-cover cursor-pointer"
          onClick={() => onEventClick(event)}
        />
        {event.is_private && (
          <div className="absolute top-2 right-2 bg-purple-500 text-white px-2 py-1 rounded text-xs">
            <i className="fas fa-lock mr-1"></i>
            Privé
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
            <i className={`fas ${getCategoryIcon(event.category)} mr-1`}></i>
            {event.category || 'Général'}
          </span>
          <span className="text-gray-500 text-sm">
            <i className="fas fa-eye mr-1"></i>
            {event.views_count} vues
          </span>
        </div>
        
        <h3 
          className="text-lg font-bold text-gray-800 mb-2 cursor-pointer hover:text-green-600 transition-colors"
          onClick={() => onEventClick(event)}
        >
          {event.title}
        </h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600 text-sm">
            <i className="fas fa-calendar-alt mr-2 text-green-600"></i>
            {formatDate(event.date)}
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <i className="fas fa-map-marker-alt mr-2 text-green-600"></i>
            {event.location}
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <i className="fas fa-users mr-2 text-green-600"></i>
            {event.participants_count} participants
            {event.max_participants && ` / ${event.max_participants}`}
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {event.description}
        </p>

        {onRegister && (
          <div className="flex space-x-2">
            <button
              onClick={() => onEventClick(event)}
              className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Voir détails
            </button>
            <button
              onClick={() => onRegister(event)}
              disabled={event.is_full || isRegistered}
              className={`flex-1 py-2 px-4 rounded-lg transition-colors ${
                isRegistered 
                  ? 'bg-green-500 text-white cursor-not-allowed'
                  : event.is_full 
                    ? 'bg-red-500 text-white cursor-not-allowed'
                    : 'bg-yellow-500 text-white hover:bg-yellow-600'
              }`}
            >
              {isRegistered ? 'Inscrit' : event.is_full ? 'Complet' : 'S\'inscrire'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventCard;
