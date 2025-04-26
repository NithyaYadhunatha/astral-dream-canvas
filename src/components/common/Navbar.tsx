
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User, Moon } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Placeholder authentication state - to be replaced with context later
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  // This would come from your auth context in a real implementation
  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <nav className="glass-card px-4 py-4 mb-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-dancing gradient-text font-bold">Lucid AI</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-white/90 hover:text-primary transition-colors">Home</Link>
          {isAuthenticated ? (
            <>
              <Link to="/dream-input" className="text-white/90 hover:text-primary transition-colors">New Dream</Link>
              <Link to="/dream-journal" className="text-white/90 hover:text-primary transition-colors">Journal</Link>
              <div className="relative group">
                <button className="flex items-center text-white/90 hover:text-primary transition-colors">
                  <User size={18} className="mr-1" />
                  <span>Account</span>
                </button>
                <div className="absolute right-0 mt-2 w-48 glass-card rounded-lg py-2 shadow-xl hidden group-hover:block z-50">
                  <Link to="/profile" className="block px-4 py-2 text-sm text-white/90 hover:text-primary hover:bg-white/5">
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left block px-4 py-2 text-sm text-white/90 hover:text-primary hover:bg-white/5"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <Link to="/about" className="text-white/90 hover:text-primary transition-colors">About</Link>
              <Link to="/contact" className="text-white/90 hover:text-primary transition-colors">Contact</Link>
              <Link to="/login" className="dreamy-btn-primary">
                Login
              </Link>
            </>
          )}
          <button className="p-2 rounded-full bg-muted/40 text-white hover:bg-muted/60 transition-colors">
            <Moon size={18} />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={toggleNav}
            className="text-white hover:text-primary transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden glass-card absolute left-0 right-0 top-[72px] z-20 animate-fadeIn">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 text-white/90 hover:text-primary transition-colors" onClick={toggleNav}>
              Home
            </Link>
            {isAuthenticated ? (
              <>
                <Link to="/dream-input" className="block px-3 py-2 text-white/90 hover:text-primary transition-colors" onClick={toggleNav}>
                  New Dream
                </Link>
                <Link to="/dream-journal" className="block px-3 py-2 text-white/90 hover:text-primary transition-colors" onClick={toggleNav}>
                  Journal
                </Link>
                <Link to="/profile" className="block px-3 py-2 text-white/90 hover:text-primary transition-colors" onClick={toggleNav}>
                  Profile
                </Link>
                <button
                  onClick={() => {handleLogout(); toggleNav();}}
                  className="w-full text-left block px-3 py-2 text-white/90 hover:text-primary transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/about" className="block px-3 py-2 text-white/90 hover:text-primary transition-colors" onClick={toggleNav}>
                  About
                </Link>
                <Link to="/contact" className="block px-3 py-2 text-white/90 hover:text-primary transition-colors" onClick={toggleNav}>
                  Contact
                </Link>
                <Link to="/login" className="block px-3 py-2 text-dreamCoral hover:text-dreamCoral-light transition-colors" onClick={toggleNav}>
                  Login
                </Link>
                <Link to="/signup" className="block px-3 py-2 text-dreamTeal hover:text-dreamTeal-light transition-colors" onClick={toggleNav}>
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
