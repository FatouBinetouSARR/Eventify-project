import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const LoginPage = ({ setCurrentPage }) => {
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const result = await login(formData.email, formData.password);
    
    if (result.success) {
      setCurrentPage('home');
    } else {
      setError(result.error);
    }
    
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-green-600 rounded-full mx-auto flex items-center justify-center mb-4">
            <i className="fas fa-user text-white text-2xl"></i>
          </div>
          <h2 className="text-3xl font-bold text-gray-800">Connexion</h2>
          <p className="text-gray-600 mt-2">Connectez-vous à votre compte Eventify</p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Adresse e-mail
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="votre@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Mot de passe
              </label>
              <input
                type="password"
                required
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full gradient-bg text-white py-3 px-4 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 font-semibold"
          >
            {loading ? (
              <i className="fas fa-spinner fa-spin mr-2"></i>
            ) : (
              <i className="fas fa-sign-in-alt mr-2"></i>
            )}
            Se connecter
          </button>

          <div className="text-center">
            <p className="text-gray-600">
              Pas encore de compte ?{' '}
              <button
                type="button"
                onClick={() => setCurrentPage('register')}
                className="text-green-600 hover:text-green-500 font-semibold"
              >
                Créer un compte
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
