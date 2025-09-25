export const Features = () => {
  const featuresList = [
    {
      icon: '🚀',
      title: 'Análisis de datos avanzado',
      description:
        'Transforma datos complejos en información útil. Identifica tendencias, predice resultados y toma decisiones informadas con nuestro motor de IA.',
    },
    {
      icon: '💬',
      title: 'Asistente de conversación inteligente',
      description:
        'Interactúa con La Palma AI de forma natural. Genera textos, traduce idiomas y responde preguntas con una precisión asombrosa.',
    },
    {
      icon: '🖼️',
      title: 'Creación de contenido automatizada',
      description:
        'Genera artículos, posts para redes sociales e imágenes de alta calidad en segundos. Ahorra tiempo y libera tu creatividad.',
    },
    {
      icon: '⚡',
      title: 'Optimización de flujos de trabajo',
      description:
        'Automatiza tareas repetitivas y optimiza tus procesos. Aumenta la productividad y enfócate en lo que realmente importa.',
    },
    {
      icon: '🔒',
      title: 'Seguridad y privacidad de datos',
      description:
        'Tus datos están protegidos con los más altos estándares de seguridad. Trabajamos para garantizar que tu información permanezca segura y privada.',
    },
    {
      icon: '🌍',
      title: 'Soporte multilingüe',
      description:
        'La Palma AI entiende y se comunica en múltiples idiomas, permitiéndote expandir tus operaciones a nivel global sin barreras.',
    },
  ];

  return (
    <>
      <section id="features" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Características que nos definen
            </h2>
            <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto">
              Descubre el poder de La Palma AI y cómo puede transformar tu forma
              de trabajar y crear.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuresList.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
