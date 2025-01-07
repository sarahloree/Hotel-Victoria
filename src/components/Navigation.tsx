import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/bookings', label: 'Bookings' },
    { path: '/dining', label: 'Dining' },
    { path: '/activities', label: 'Activities' },
    { path: '/services', label: 'Services' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/lovable-uploads/0697b144-8772-4055-bbc0-eb83bec901b3.png"
              alt="Hotel Victoria Logo"
              className="h-8 w-auto"
            />
            <span className="text-3xl font-serif font-bold">
              Hotel Victoria
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`nav-link ${
                  location.pathname === path ? 'text-primary' : ''
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;