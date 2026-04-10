import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Mountain, Lock, Mail, ArrowRight } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/admin/dashboard';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple mock authentication
    if (email === 'admin@campec.com.br' && password === 'admin123') {
      login();
      navigate(from, { replace: true });
    } else {
      setError('E-mail ou senha inválidos. Tente admin@campec.com.br / admin123');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4 transition-colors duration-200">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700">
        <div className="p-8 bg-[#0f7636] text-center">
          <div className="w-16 h-16 rounded-full bg-white mx-auto flex items-center justify-center mb-4 shadow-lg">
            <Mountain className="text-[#0f7636]" size={32} />
          </div>
          <h1 className="text-2xl font-bold text-white tracking-widest uppercase mb-1">Campec</h1>
          <p className="text-green-100 text-sm">Acesso ao Painel Administrativo</p>
        </div>
        
        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 p-3 rounded-lg text-sm font-medium text-center border border-red-100 dark:border-red-800">
                {error}
              </div>
            )}
            
            <div className="space-y-2">
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300">
                E-mail
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-[#0f7636] focus:border-transparent outline-none transition-all dark:text-white"
                  placeholder="admin@campec.com.br"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300">
                Senha
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-[#0f7636] focus:border-transparent outline-none transition-all dark:text-white"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#0f7636] hover:bg-[#0c5e2b] text-white py-3 rounded-xl font-bold transition-colors flex items-center justify-center gap-2 group"
            >
              Entrar no Painel
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
          
          <div className="mt-8 text-center">
            <button 
              onClick={() => navigate('/')}
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-[#0f7636] dark:hover:text-[#14a851] font-medium transition-colors"
            >
              &larr; Voltar para o site
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
