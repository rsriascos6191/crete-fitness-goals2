import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dumbbell, Trophy, Flame, Plus, Calendar, TrendingUp } from 'lucide-react';
import Navbar from '@/components/Navbar';
import ExercisesSection from '@/components/ExercisesSection';
import heroImage from '@/assets/hero-fitness.jpg';

const Index = () => {
  const [showDashboard, setShowDashboard] = useState(false);
  const [showExercises, setShowExercises] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const checkDarkMode = () => {
      const isDarkMode = document.documentElement.classList.contains('dark');
      setIsDark(isDarkMode);
    };
    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  const colors = {
    bg: isDark ? '#1a1a1a' : '#ffffff',
    bgSecondary: isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.03)',
    text: isDark ? '#fff' : '#000',
    textSecondary: isDark ? '#999' : '#666',
    border: isDark ? '#333' : '#ddd',
    buttonBg: isDark ? '#3b82f6' : '#2563eb',
    buttonHover: isDark ? '#2563eb' : '#1d4ed8',
    cardBg: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'
  };

  if (showDashboard) {
    if (showExercises) {
      return (
        <div style={{ minHeight: '100vh', backgroundColor: colors.bg, color: colors.text, transition: 'all 0.3s' }}>
          <Navbar />
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '32px 16px' }}>
            <button 
              onClick={() => setShowExercises(false)}
              style={{
                padding: '8px 16px',
                marginBottom: '32px',
                fontSize: '16px',
                backgroundColor: 'transparent',
                border: `1px solid ${colors.border}`,
                color: colors.text,
                borderRadius: '6px',
                cursor: 'pointer'
              }}
            >
              ← Volver a dashboard
            </button>

            <div style={{ marginBottom: '32px' }}>
              <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '8px', color: colors.text }}>
                Biblioteca de Ejercicios
              </h1>
              <p style={{ fontSize: '18px', color: colors.textSecondary }}>
                Elige los ejercicios que deseas hacer
              </p>
            </div>

            {/* Exercises Section */}
            <div style={{ marginBottom: '32px' }}>
              <ExercisesSection />
            </div>

            {/* Start Training Button */}
            <button 
              style={{
                padding: '12px 32px',
                fontSize: '18px',
                fontWeight: 'bold',
                color: 'white',
                backgroundColor: colors.buttonBg,
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                boxShadow: '0 10px 15px rgba(0, 0, 0, 0.3)',
                marginTop: '32px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = colors.buttonHover;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = colors.buttonBg;
              }}
            >
              Comenzar entrenamiento
            </button>
          </div>
        </div>
      );
    }

    return (
      <div style={{ minHeight: '100vh', backgroundColor: colors.bg, color: colors.text, transition: 'all 0.3s' }}>
        <Navbar />
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '32px 16px' }}>
          <button 
            onClick={() => setShowDashboard(false)}
            style={{
              padding: '8px 16px',
              marginBottom: '32px',
              fontSize: '16px',
              backgroundColor: 'transparent',
              border: `1px solid ${colors.border}`,
              color: colors.text,
              borderRadius: '6px',
              cursor: 'pointer'
            }}
          >
            ← Volver atrás
          </button>

          <div style={{ marginBottom: '32px' }}>
            <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '8px', color: colors.text }}>
              ¡Bienvenido de vuelta!
            </h1>
            <p style={{ fontSize: '18px', color: colors.textSecondary }}>
              Continúa tu viaje de fitness donde lo dejaste
            </p>
          </div>

          {/* Stats Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', marginBottom: '32px' }}>
            <Card className="border-border/50">
              <CardHeader style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '8px' }}>
                <CardTitle style={{ fontSize: '14px', color: colors.textSecondary }}>Racha actual</CardTitle>
                <Flame style={{ width: '20px', height: '20px', color: '#f97316' }} />
              </CardHeader>
              <CardContent>
                <div style={{ fontSize: '32px', fontWeight: 'bold', color: colors.text }}>0 días</div>
                <p style={{ fontSize: '12px', color: colors.textSecondary, marginTop: '4px' }}>¡Sigue así!</p>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '8px' }}>
                <CardTitle style={{ fontSize: '14px', color: colors.textSecondary }}>Entrenamientos totales</CardTitle>
                <Dumbbell style={{ width: '20px', height: '20px', color: '#3b82f6' }} />
              </CardHeader>
              <CardContent>
                <div style={{ fontSize: '32px', fontWeight: 'bold', color: colors.text }}>0</div>
                <p style={{ fontSize: '12px', color: colors.textSecondary, marginTop: '4px' }}>Sesiones completadas</p>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '8px' }}>
                <CardTitle style={{ fontSize: '14px', color: colors.textSecondary }}>Logros desbloqueados</CardTitle>
                <Trophy style={{ width: '20px', height: '20px', color: '#fbbf24' }} />
              </CardHeader>
              <CardContent>
                <div style={{ fontSize: '32px', fontWeight: 'bold', color: colors.text }}>0</div>
                <p style={{ fontSize: '12px', color: colors.textSecondary, marginTop: '4px' }}>Insignias ganadas</p>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '8px' }}>
                <CardTitle style={{ fontSize: '14px', color: colors.textSecondary }}>Esta semana</CardTitle>
                <TrendingUp style={{ width: '20px', height: '20px', color: '#22c55e' }} />
              </CardHeader>
              <CardContent>
                <div style={{ fontSize: '32px', fontWeight: 'bold', color: colors.text }}>0</div>
                <p style={{ fontSize: '12px', color: colors.textSecondary, marginTop: '4px' }}>Entrenamientos</p>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions and Achievements */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', marginBottom: '32px' }}>
            <Card>
              <CardHeader>
                <CardTitle style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Trophy style={{ width: '20px', height: '20px', color: '#fbbf24' }} />
                  Logros recientes
                </CardTitle>
                <CardDescription>Tus últimas insignias ganadas</CardDescription>
              </CardHeader>
              <CardContent style={{ textAlign: 'center', padding: '32px' }}>
                <Trophy style={{ width: '48px', height: '48px', margin: '0 auto 12px', opacity: 0.5, color: colors.textSecondary }} />
                <p style={{ color: colors.textSecondary }}>Completa tu primer entrenamiento para desbloquear logros</p>
              </CardContent>
            </Card>
          </div>

          {/* Exercises Section Button */}
          <div style={{ marginTop: '48px', textAlign: 'center' }}>
            <button 
              onClick={() => setShowExercises(true)}
              style={{
                padding: '16px 48px',
                fontSize: '20px',
                fontWeight: 'bold',
                color: 'white',
                backgroundColor: colors.buttonBg,
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                boxShadow: '0 10px 15px rgba(0, 0, 0, 0.3)',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = colors.buttonHover;
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = colors.buttonBg;
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              Comenzar entrenamiento
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: colors.bg, color: colors.text, transition: 'all 0.3s' }}>
      <Navbar />
      
      {/* Hero Section */}
      <section style={{ position: 'relative', overflow: 'hidden', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '48px', alignItems: 'center' }}>
          <div>
            <div style={{ display: 'inline-block', backgroundColor: colors.buttonBg, color: '#fff', padding: '8px 16px', borderRadius: '9999px', fontSize: '14px', fontWeight: 'bold', marginBottom: '32px' }}>
              Tu viaje fitness comienza aquí
            </div>
            <h1 style={{ fontSize: '64px', fontWeight: 'bold', color: colors.text, lineHeight: 1.2, marginBottom: '24px' }}>
              Transforma tu cuerpo, mejora tu vida
            </h1>
            <p style={{ fontSize: '18px', color: colors.textSecondary, marginBottom: '32px' }}>
              Crete hace que el ejercicio sea tan adictivo como tu app favorita. Entrena, progresa y alcanza tus objetivos con una experiencia gamificada.
            </p>
            <button 
              onClick={() => setShowDashboard(true)}
              style={{
                padding: '12px 32px',
                fontSize: '18px',
                fontWeight: 'bold',
                color: 'white',
                backgroundColor: colors.buttonBg,
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                boxShadow: '0 10px 15px rgba(0, 0, 0, 0.3)',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = colors.buttonHover;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = colors.buttonBg;
              }}
            >
              Comenzar ahora
            </button>
          </div>
          <div style={{ position: 'relative' }}>
            <img 
              src={heroImage} 
              alt="Fitness" 
              style={{ borderRadius: '24px', width: '100%', boxShadow: '0 20px 25px rgba(0, 0, 0, 0.3)' }}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: '80px 32px', backgroundColor: colors.bgSecondary }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '48px', fontWeight: 'bold', color: colors.text, textAlign: 'center', marginBottom: '64px' }}>
            Nuestras herramientas principales
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '32px', maxWidth: '600px', margin: '0 auto' }}>
            <div 
              onClick={() => setShowDashboard(true)}
              style={{ 
                backgroundColor: colors.cardBg, 
                padding: '32px', 
                borderRadius: '16px', 
                border: `1px solid ${colors.border}`,
                cursor: 'pointer',
                transition: 'all 0.3s',
                textAlign: 'center'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.borderColor = colors.buttonBg;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.borderColor = colors.border;
              }}
            >
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>💪</div>
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: colors.text, marginBottom: '16px' }}>Biblioteca de entrenamientos</h3>
              <p style={{ color: colors.textSecondary, marginBottom: '16px' }}>Accede a todos nuestros ejercicios y entrenamientos personalizados</p>
              <button 
                style={{
                  padding: '10px 24px',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  color: '#fff',
                  backgroundColor: colors.buttonBg,
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer'
                }}
              >
                Explorar ahora
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '80px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', background: `linear-gradient(135deg, ${colors.buttonBg}, #3b82f6)`, borderRadius: '24px', padding: '64px 32px', textAlign: 'center', color: 'white' }}>
          <h2 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '24px' }}>
            ¿Listo para comenzar tu transformación?
          </h2>
          <p style={{ fontSize: '18px', marginBottom: '32px', color: 'rgba(255, 255, 255, 0.9)' }}>
            Únete a miles de personas que ya están alcanzando sus objetivos de fitness con Crete
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: `1px solid ${colors.border}`, padding: '32px', textAlign: 'center', color: colors.textSecondary }}>
        <p>&copy; 2024 Crete. Tu compañero de fitness gamificado.</p>
      </footer>
    </div>
  );
};

export default Index;
