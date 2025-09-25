import { Features } from './features';
import { Pricing } from './pricing';
import { Footer } from './footer';

export const Home = () => {
  return (
    <>
      <section className="relative h-screen flex items-center justify-center bg-gray-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1549414272-b8832a849f2b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-60"></div>

        <div className="relative text-center text-white p-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-4 animate-fade-in-down">
            La Palma AI: Tu asistente inteligente para el futuro
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 opacity-80 animate-fade-in-up">
            Simplifica tu vida, optimiza tu trabajo y descubre nuevas
            posibilidades con nuestra IA de vanguardia.
          </p>
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 active:scale-95 animate-fade-in-up">
            <a href="/AiSearch">Comienza Gratis</a>
          </button>
        </div>
      </section>

      <Features />
      <Pricing />
      <Footer />
    </>
  );
};
