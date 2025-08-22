import React, { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import EventDetail from './pages/EventDetail';
import './App.css';

// Composant principal de l'application
const AppContent = () => {
  const { user, loading } = useAuth();
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setCurrentPage('event-detail');
  };

  const handleBackToHome = () => {
    setSelectedEvent(null);
    setCurrentPage('home');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      {currentPage === 'home' && (
        <Home onEventClick={handleEventClick} />
      )}
      
      {currentPage === 'login' && (
        <Login setCurrentPage={setCurrentPage} />
      )}
      
      {currentPage === 'register' && (
        <Register setCurrentPage={setCurrentPage} />
      )}
      
      {currentPage === 'event-detail' && selectedEvent && (
        <EventDetail 
          event={selectedEvent} 
          onBack={handleBackToHome} 
        />
      )}
      
      <Footer />
    </div>
  );
};

// Composant racine avec le provider d'authentification
function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
