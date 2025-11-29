import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dumbbell, Zap, Target } from 'lucide-react';

interface Exercise {
  id: string;
  name: string;
  level: 'Principiante' | 'Intermedio' | 'Avanzado';
  description: string;
  reps?: string;
}

const exercises: Record<string, Exercise[]> = {
  Principiante: [
    {
      id: '1',
      name: 'Lagartijas',
      level: 'Principiante',
      description: 'Ejercicio básico para pecho, hombros y tríceps',
      reps: '3 series de 10-15 repeticiones'
    },
    {
      id: '2',
      name: 'Sentadillas',
      level: 'Principiante',
      description: 'Fortalece piernas y glúteos',
      reps: '3 series de 15-20 repeticiones'
    },
    {
      id: '3',
      name: 'Planchas',
      level: 'Principiante',
      description: 'Core y abdominales',
      reps: '3 series de 20-30 segundos'
    },
    {
      id: '4',
      name: 'Flexiones de brazos',
      level: 'Principiante',
      description: 'Ejercicio para brazos y espalda',
      reps: '3 series de 8-12 repeticiones'
    },
    {
      id: '5',
      name: 'Burpees',
      level: 'Principiante',
      description: 'Ejercicio cardiovascular completo',
      reps: '3 series de 10 repeticiones'
    },
    {
      id: '6',
      name: 'Estiramiento de isquiotibiales',
      level: 'Principiante',
      description: 'Flexibilidad en las piernas',
      reps: '3 series de 30 segundos'
    }
  ],
  Intermedio: [
    {
      id: '7',
      name: 'Flexiones diamante',
      level: 'Intermedio',
      description: 'Variante avanzada de lagartijas',
      reps: '3 series de 8-12 repeticiones'
    },
    {
      id: '8',
      name: 'Sentadillas pistola',
      level: 'Intermedio',
      description: 'Sentadilla con una pierna',
      reps: '3 series de 5-10 repeticiones'
    },
    {
      id: '9',
      name: 'Dominadas',
      level: 'Intermedio',
      description: 'Ejercicio para espalda y brazos',
      reps: '3 series de 5-10 repeticiones'
    },
    {
      id: '10',
      name: 'Peso muerto',
      level: 'Intermedio',
      description: 'Fortalece toda la cadena posterior',
      reps: '3 series de 6-8 repeticiones'
    },
    {
      id: '11',
      name: 'Press de pecho',
      level: 'Intermedio',
      description: 'Desarrollo del pecho',
      reps: '3 series de 8-12 repeticiones'
    },
    {
      id: '12',
      name: 'Mountain climbers',
      level: 'Intermedio',
      description: 'Cardio y core',
      reps: '3 series de 20-30 repeticiones'
    }
  ],
  Avanzado: [
    {
      id: '13',
      name: 'Flexiones con palmada',
      level: 'Avanzado',
      description: 'Explosividad y potencia',
      reps: '3 series de 8-10 repeticiones'
    },
    {
      id: '14',
      name: 'Handstand push-ups',
      level: 'Avanzado',
      description: 'Invertido contra la pared',
      reps: '3 series de 5-8 repeticiones'
    },
    {
      id: '15',
      name: 'Sentadilla con salto',
      level: 'Avanzado',
      description: 'Potencia y explosividad',
      reps: '3 series de 10-15 repeticiones'
    },
    {
      id: '16',
      name: 'Dominadas de un brazo',
      level: 'Avanzado',
      description: 'Máxima fuerza en espalda',
      reps: '3 series de 3-5 repeticiones'
    },
    {
      id: '17',
      name: 'Front lever',
      level: 'Avanzado',
      description: 'Sostén horizontal en barra',
      reps: '3 series de 5-15 segundos'
    },
    {
      id: '18',
      name: 'Battle ropes',
      level: 'Avanzado',
      description: 'Cardio intenso de cuerpo completo',
      reps: '3 series de 30-40 segundos'
    }
  ]
};

const ExercisesSection = () => {
  const getLevelIcon = (level: string) => {
    switch (level) {
      case 'Principiante':
        return <Dumbbell className="h-4 w-4" />;
      case 'Intermedio':
        return <Zap className="h-4 w-4" />;
      case 'Avanzado':
        return <Target className="h-4 w-4" />;
      default:
        return null;
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Principiante':
        return 'bg-green-500/10 text-green-600 border-green-200';
      case 'Intermedio':
        return 'bg-yellow-500/10 text-yellow-600 border-yellow-200';
      case 'Avanzado':
        return 'bg-red-500/10 text-red-600 border-red-200';
      default:
        return '';
    }
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Biblioteca de{' '}
            <span className="text-primary">Ejercicios</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explora nuestra colección de ejercicios clasificados por nivel de dificultad
          </p>
        </div>

        <div className="space-y-12">
          {Object.entries(exercises).map(([level, exerciseList]) => (
            <div key={level}>
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">{level}</h3>
                <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full" />
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {exerciseList.map((exercise) => (
                  <Card key={exercise.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1">
                          <CardTitle className="text-lg">{exercise.name}</CardTitle>
                          <CardDescription className="mt-1">
                            {exercise.description}
                          </CardDescription>
                        </div>
                        <Badge 
                          variant="outline"
                          className={`flex items-center gap-1 ${getLevelColor(exercise.level)} flex-shrink-0`}
                        >
                          {getLevelIcon(exercise.level)}
                          <span className="text-xs">{exercise.level}</span>
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {exercise.reps && (
                          <div>
                            <p className="text-sm font-semibold text-muted-foreground">Series</p>
                            <p className="text-sm text-foreground">{exercise.reps}</p>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExercisesSection;
