import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Award, BarChart3, Dumbbell, Target, Trophy, Zap } from 'lucide-react';
import Navbar from '@/components/Navbar';
import heroImage from '@/assets/hero-fitness.jpg';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10" />
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-up">
              <div className="inline-block">
                <span className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold">
                  Tu viaje fitness comienza aquí
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Transforma tu{' '}
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  cuerpo
                </span>
                , mejora tu vida
              </h1>
              <p className="text-xl text-muted-foreground">
                Crete hace que el ejercicio sea tan adictivo como tu app favorita. 
                Entrena, progresa y alcanza tus objetivos con una experiencia gamificada.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Button 
                  size="lg" 
                  onClick={() => navigate('/dashboard')}
                  className="bg-primary hover:bg-secondary text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
                >
                  Comenzar ahora
                  <Zap className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl blur-3xl" />
              <img 
                src={heroImage} 
                alt="Fitness training illustration" 
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Todo lo que necesitas para{' '}
              <span className="text-primary">triunfar</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Una plataforma completa diseñada para mantenerte motivado y en forma
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg group">
              <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Dumbbell className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Biblioteca de entrenamientos</h3>
              <p className="text-muted-foreground">
                Accede a cientos de rutinas prediseñadas para todos los niveles. 
                Desde principiantes hasta avanzados.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border/50 hover:border-accent/50 transition-all hover:shadow-lg group">
              <div className="bg-accent/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BarChart3 className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Seguimiento de progreso</h3>
              <p className="text-muted-foreground">
                Visualiza tu evolución con gráficos detallados y calendario de entrenamientos completados.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg group">
              <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Trophy className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Sistema de logros</h3>
              <p className="text-muted-foreground">
                Desbloquea insignias y celebra tus hitos. Tu primer entrenamiento, rachas de 30 días y más.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border/50 hover:border-accent/50 transition-all hover:shadow-lg group">
              <div className="bg-accent/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Entrenamientos personalizados</h3>
              <p className="text-muted-foreground">
                Crea tus propias rutinas adaptadas a tus objetivos y preferencias específicas.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg group">
              <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Sesiones activas con timer</h3>
              <p className="text-muted-foreground">
                Temporizadores integrados para series y descansos. Nunca pierdas el ritmo de tu entrenamiento.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border/50 hover:border-accent/50 transition-all hover:shadow-lg group">
              <div className="bg-accent/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Award className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Experiencia gamificada</h3>
              <p className="text-muted-foreground">
                Convierte el ejercicio en un hábito divertido y sostenible con mecánicas de juego.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-primary via-accent to-primary rounded-3xl p-12 md:p-16 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ¿Listo para comenzar tu transformación?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Únete a miles de personas que ya están alcanzando sus objetivos de fitness con Crete
            </p>
            <Button 
              size="lg"
              onClick={() => navigate('/dashboard')}
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 shadow-lg"
            >
              Ir al Dashboard
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 Crete. Tu compañero de fitness gamificado.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
