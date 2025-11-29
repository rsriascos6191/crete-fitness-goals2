import { Link } from 'react-router-dom';
import { Dumbbell } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-primary p-2 rounded-xl group-hover:scale-110 transition-transform">
            <Dumbbell className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Crete
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <Link 
            to="/dashboard" 
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Dashboard
          </Link>
          <Link 
            to="/profile" 
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Perfil
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
