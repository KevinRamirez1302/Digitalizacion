export const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-gray-400 py-10">
        <div className="container mx-auto px-6 lg:px-8 flex flex-col items-center text-center">
          {/* Logo y Nombre de la IA */}
          <div className="flex items-center space-x-2 mb-4">
            <span role="img" aria-label="La Palma AI Logo" className="text-xl">
              🌴
            </span>
            <span className="text-2xl font-bold tracking-wide text-white">
              La Palma AI
            </span>
          </div>

          {/* Enlaces de Navegación */}
          <nav className="flex flex-wrap justify-center space-x-6 mb-4 text-sm font-medium">
            <a
              href="#features"
              className="hover:text-white transition-colors duration-200"
            >
              Características
            </a>
            <a
              href="#pricing"
              className="hover:text-white transition-colors duration-200"
            >
              Planes
            </a>
            <a
              href="/legal/privacy"
              className="hover:text-white transition-colors duration-200"
            >
              Política de Privacidad
            </a>
            <a
              href="/legal/terms"
              className="hover:text-white transition-colors duration-200"
            >
              Términos de Servicio
            </a>
          </nav>

          {/* Íconos de Redes Sociales (puedes usar un SVG o una librería) */}
          <div className="flex space-x-4 mb-4">
            {/* Ejemplo de un enlace a red social. Puedes añadir más. */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <svg
                className="h-6 w-6 fill-current hover:text-white transition-colors duration-200"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Aquí iría el path del ícono de Twitter o tu red social favorita */}
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.565-2.005.974-3.127 1.144a4.958 4.958 0 00-8.465 4.55A14.004 14.004 0 011.05 3.328a4.958 4.958 0 001.549 6.574 4.958 4.958 0 01-2.23-.616v.062a4.958 4.958 0 003.97 4.862 4.991 4.991 0 01-2.228.084 4.958 4.958 0 004.604 3.442 9.972 9.972 0 01-6.241 2.153c-.417 0-.833-.025-1.24-.072a14.041 14.041 0 007.541 2.204c9.053 0 14.01-7.502 14.01-14.01 0-.214-.005-.427-.012-.637a10.005 10.005 0 002.46-2.54z" />
              </svg>
            </a>
          </div>

          {/* Texto de Copyright */}
          <p className="text-sm">
            &copy; {new Date().getFullYear()} La Palma AI. Todos los derechos
            reservados.
          </p>
        </div>
      </footer>
    </>
  );
};
