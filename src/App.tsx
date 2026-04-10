import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AccessibilityProvider } from './contexts/AccessibilityContext';
import { SettingsProvider } from './contexts/SettingsContext';
import { AuthProvider } from './contexts/AuthContext';
import { SlidesProvider } from './contexts/SlidesContext';
import ProtectedRoute from './components/ProtectedRoute';
import LandingPage from './pages/LandingPage';
import NewsPage from './pages/NewsPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';
import TeamPage from './pages/TeamPage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import AdminLayout from './layouts/AdminLayout';
import Appearance from './pages/admin/Appearance';
import Content from './pages/admin/Content';
import Dashboard from './pages/admin/Dashboard';
import Services from './pages/admin/Services';
import Professionals from './pages/admin/Professionals';
import Settings from './pages/admin/Settings';
import Integrations from './pages/admin/Integrations';
import Slides from './pages/admin/Slides';

export default function App() {
  return (
    <ThemeProvider>
      <SettingsProvider>
        <AccessibilityProvider>
          <AuthProvider>
            <SlidesProvider>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<LandingPage />} />
                  <Route path="/news" element={<NewsPage />} />
                  <Route path="/contato" element={<ContactPage />} />
                  <Route path="/servicos" element={<ServicesPage />} />
                  <Route path="/equipe" element={<TeamPage />} />
                  <Route path="/sobre" element={<AboutPage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/admin" element={
                    <ProtectedRoute>
                      <AdminLayout />
                    </ProtectedRoute>
                  }>
                    <Route index element={<Navigate to="/admin/dashboard" replace />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="settings" element={<Settings />} />
                    <Route path="integrations" element={<Integrations />} />
                    <Route path="services" element={<Services />} />
                    <Route path="professionals" element={<Professionals />} />
                    <Route path="appearance" element={<Appearance />} />
                    <Route path="content" element={<Content />} />
                    <Route path="slides" element={<Slides />} />
                  </Route>
                </Routes>
              </BrowserRouter>
            </SlidesProvider>
          </AuthProvider>
        </AccessibilityProvider>
      </SettingsProvider>
    </ThemeProvider>
  );
}
