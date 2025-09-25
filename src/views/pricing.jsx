export const Pricing = () => {
  const pricingPlans = [
    {
      name: 'Plan Básico',
      price: 'Gratis',
      features: [
        'Acceso limitado',
        '100 consultas al mes',
        'Soporte estándar',
        'Funcionalidades esenciales',
      ],
      buttonText: 'Empezar Gratis',
      isPopular: false,
      buttonClass:
        'bg-transparent text-emerald-500 border-2 border-emerald-500 hover:bg-emerald-500 hover:text-white',
    },
    {
      name: 'Plan Pro',
      price: '€19/mes',
      features: [
        'Consultas ilimitadas',
        'Análisis de datos avanzado',
        'Soporte prioritario 24/7',
        'Creación de contenido ilimitada',
        'Acceso a nuevas funciones (beta)',
      ],
      buttonText: 'Suscribirse',
      isPopular: true,
      buttonClass: 'bg-emerald-500 text-white hover:bg-emerald-600',
    },
    {
      name: 'Plan Empresarial',
      price: 'Contactar',
      features: [
        'Soluciones personalizadas',
        'Integración con sistemas existentes',
        'Soporte dedicado',
        'Entrenamiento de IA a medida',
        'Contratos de servicio SLA',
      ],
      buttonText: 'Contactar Ventas',
      isPopular: false,
      buttonClass:
        'bg-transparent text-emerald-500 border-2 border-emerald-500 hover:bg-emerald-500 hover:text-white',
    },
  ];

  return (
    <>
      <section id="pricing" className="py-20 bg-gray-800 text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Nuestros planes
            </h2>
            <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto">
              Elige el plan que mejor se adapte a tus necesidades.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-gray-900 rounded-xl shadow-xl p-8 flex flex-col justify-between transform transition-all duration-300 hover:scale-105 ${
                  plan.isPopular ? 'border-4 border-emerald-500 shadow-2xl' : ''
                }`}
              >
                <div>
                  <h3 className="text-3xl font-bold mb-2">{plan.name}</h3>
                  {plan.isPopular && (
                    <span className="inline-block bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase mb-4">
                      Más popular
                    </span>
                  )}
                  <p className="mt-4 text-4xl font-extrabold text-emerald-500">
                    {plan.price}
                  </p>
                  <p className="text-sm text-gray-400 mt-2">por mes</p>
                  <ul className="mt-8 space-y-4 text-gray-300">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-3">
                        <svg
                          className="w-5 h-5 text-emerald-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  className={`mt-10 w-full font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 ${plan.buttonClass}`}
                >
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
