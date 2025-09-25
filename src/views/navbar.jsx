import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-10 p-4 bg-transparent text-white">
      <nav className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span role="img" aria-label="La Palma AI Logo">
            🌴
          </span>
          <a href="/" className="text-2xl font-bold tracking-wide">
            La Palma AI
          </a>
        </div>
        <div className="flex space-x-6">
          <a
            href="#features"
            className="hover:text-gray-300 transition-colors duration-200"
          >
            Características
          </a>
          <a
            href="#pricing"
            className="hover:text-gray-300 transition-colors duration-200"
          >
            Planes
          </a>
          <a
            href="/ContactForm"
            className="hover:text-gray-300 transition-colors duration-200"
          >
            Contacto
          </a>
        </div>
      </nav>
    </header>
  );
};
