import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Settings, Palette, Users, Bell, Moon, PenTool, FileText, Mountain, ExternalLink, Share2, LogOut, Image as ImageIcon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';

export default function AdminLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/admin/dashboard' },
    { icon: ImageIcon, label: 'Slides', path: '/admin/slides' },
    { icon: Settings, label: 'Configurações Gerais', path: '/admin/settings' },
    { icon: Palette, label: 'Cores & Temas', path: '/admin/appearance' },
    { icon: Share2, label: 'Integrações', path: '/admin/integrations' },
    { icon: PenTool, label: 'Serviços', path: '/admin/services' },
    { icon: FileText, label: 'Notícias', path: '/admin/content' },
    { icon: Users, label: 'Profissionais', path: '/admin/professionals' },
  ];

  const getPageTitle = () => {
    if (location.pathname.includes('/admin/slides')) return 'Gestão de Slides';
    if (location.pathname.includes('/admin/appearance')) return 'Customização Visual';
    if (location.pathname.includes('/admin/services')) return 'Gestão de Serviços';
    if (location.pathname.includes('/admin/content')) return 'Gestão de Conteúdo';
    if (location.pathname.includes('/admin/professionals')) return 'Gestão de Profissionais';
    if (location.pathname.includes('/admin/settings')) return 'Configurações Gerais';
    if (location.pathname.includes('/admin/integrations')) return 'Integrações';
    if (location.pathname.includes('/admin/dashboard')) return 'Dashboard';
    return 'Admin';
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex font-sans text-gray-800 dark:text-gray-200 transition-colors duration-200">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col hidden md:flex transition-colors duration-200">
        <div className="p-4">
          <div className="bg-[#0f7636] p-6 rounded-xl flex flex-col items-center justify-center text-white mb-6">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-3">
              <Mountain className="text-[#0f7636]" size={32} />
            </div>
            <span className="font-bold text-xl tracking-widest uppercase">Campec</span>
          </div>
          <nav className="space-y-1">
            {navItems.map((item) => {
              const isActive = location.pathname.includes(item.path) || (item.path === '/admin/appearance' && location.pathname === '/admin');
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-colors ${
                    isActive 
                      ? 'bg-[#0f7636] text-white shadow-md' 
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/50 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  <item.icon size={20} className={isActive ? 'text-white' : 'text-gray-400 dark:text-gray-500'} />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="mt-auto p-4 border-t border-gray-100 dark:border-gray-800 transition-colors duration-200 space-y-1">
          <Link 
            to="/"
            target="_blank"
            className="flex items-center gap-3 w-full px-4 py-3 text-sm font-bold text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-xl transition-colors"
          >
            <ExternalLink size={20} />
            Ir para o site
          </Link>
          <button 
            onClick={toggleTheme}
            className="flex items-center gap-3 w-full px-4 py-3 text-sm font-bold text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-xl transition-colors"
          >
            <Moon size={20} />
            Alternar Tema
          </button>
          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-4 py-3 text-sm font-bold text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl transition-colors"
          >
            <LogOut size={20} />
            Sair
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden bg-gray-50 dark:bg-gray-900">
        {/* Top Header */}
        <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 h-20 flex items-center justify-between px-8 transition-colors duration-200 shrink-0">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">{getPageTitle()}</h1>
          <div className="flex items-center gap-6">
            <button className="relative text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
              <Bell size={20} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-gray-800"></span>
            </button>
            <div className="h-8 w-px bg-gray-200 dark:bg-gray-700"></div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-sm font-bold text-gray-900 dark:text-white leading-none">Admin Campec</p>
                <p className="text-xs text-gray-500 mt-1">Administrador</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#e8d8c3] flex items-center justify-center text-white overflow-hidden shrink-0">
                <Users size={20} className="text-white" />
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-auto p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
