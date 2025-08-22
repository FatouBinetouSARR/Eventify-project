import React from 'react';
import { useAuth } from '../context/AuthContext';

const Header = ({ currentPage, setCurrentPage }) => {
  const { user, logout } = useAuth();

  return (
    <header className="gradient-bg text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => setCurrentPage('home')}
          >
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <i className="fas fa-calendar-alt text-green-600 text-xl"></i>
            </div>
            <h1 className="text-2xl font-bold">Eventify Sénégal</h1>
          </div>

          <nav className="hidden md:flex space-x-6">
            <button 
              onClick={() => setCurrentPage('home')}
              className={`hover:text-yellow-300 transition-colors ${currentPage === 'home' ? 'text-yellow-300' : ''}`}
            >
              Accueil
            </button>
            {user && (
              <>
                {user.role === 'organizer' ? (
                  <button 
                    onClick={() => setCurrentPage('dashboard')}
                    className={`hover:text-yellow-300 transition-colors ${currentPage === 'dashboard' ? 'text-yellow-300' : ''}`}
                  >
                    Dashboard
                  </button>
                ) : (
                  <button 
                    onClick={() => setCurrentPage('my-events')}
                    className={`hover:text-yellow-300 transition-colors ${currentPage === 'my-events' ? 'text-yellow-300' : ''}`}
                  >
                    Mes Événements
                  </button>
                )}
              </>
            )}
          </nav>

          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <div className="hidden md:block">
                  <span className="text-sm">Bienvenue, {user.first_name}</span>
                  <div className="text-xs opacity-75">
                    {user.role === 'organizer' ? 'Organisateur' : 'Participant'}
                  </div>
                </div>
                <button 
                  onClick={logout}
                  className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg transition-colors"
                >
                  <i className="fas fa-sign-out-alt mr-2"></i>
                  Déconnexion
                </button>
              </div>
            ) : (
              <div className="space-x-2">
                <button 
                  onClick={() => setCurrentPage('login')}
                  className="bg-white text-green-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Connexion
                </button>
                <button 
                  onClick={() => setCurrentPage('register')}
                  className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors"
                >
                  Inscription
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
