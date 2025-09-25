import { useForm } from 'react-hook-form';
import Buttton from '@mui/material/Button';

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (formData) => {
    try {
      // Reemplaza 'TU_URL_DEL_WEBHOOK' con la URL real de n8n
      const response = await fetch(
        'https://kevin1302.app.n8n.cloud/webhook-test/2daf1627-df55-4416-a1ff-06e7b32f9185',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        alert('¡Formulario enviado con éxito!');
        reset();
      } else {
        alert('Hubo un error al enviar el formulario.');
      }
    } catch (error) {
      console.error('Error al enviar la petición:', error);
      alert('Error de conexión. Inténtalo de nuevo.');
    }
  };

  return (
    <section id="contact" className="py-20 h-auto bg-gray-900 text-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Contáctanos
          </h2>
          <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto">
            ¿Tienes alguna pregunta o necesitas ayuda? Envíanos un mensaje.
          </p>
        </div>

        <div className="w-full max-w-2xl mx-auto p-8 space-y-6 bg-gray-800 rounded-xl shadow-2xl">
          <h3 className="text-2xl font-semibold text-center text-white">
            Formulario de Contacto
          </h3>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Campo de Nombre */}
              <div>
                <label
                  htmlFor="nombre"
                  className="block text-sm font-medium text-gray-300"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="nombre"
                  autoComplete="off"
                  {...register('nombre', {
                    required: 'El nombre es obligatorio',
                  })}
                  className="mt-1 block w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 placeholder-gray-400"
                  placeholder=" "
                />
                {errors.nombre && (
                  <p className="mt-1 text-xs text-red-400">
                    {errors.nombre.message}
                  </p>
                )}
              </div>

              {/* Campo de Apellido */}
              <div>
                <label
                  htmlFor="apellido"
                  className="block text-sm font-medium text-gray-300"
                >
                  Apellido
                </label>
                <input
                  type="text"
                  id="apellido"
                  autoComplete="off"
                  {...register('apellido', {
                    required: 'El apellido es obligatorio',
                  })}
                  className="mt-1 block w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 placeholder-gray-400"
                  placeholder=" "
                />
                {errors.apellido && (
                  <p className="mt-1 text-xs text-red-400">
                    {errors.apellido.message}
                  </p>
                )}
              </div>
            </div>

            {/* Campo de Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                autoComplete="off"
                {...register('email', {
                  required: 'El email es obligatorio',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Formato de email incorrecto',
                  },
                })}
                className="mt-1 block w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 placeholder-gray-400"
                placeholder=" "
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-400">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Campo de Teléfono */}
            <div>
              <label
                htmlFor="telefono"
                className="block text-sm font-medium text-gray-300"
              >
                Número de Teléfono
              </label>
              <input
                type="tel"
                id="telefono"
                autoComplete="off"
                {...register('telefono')}
                className="mt-1 block w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 placeholder-gray-400"
                placeholder=" "
              />
            </div>

            {/* Campo de Compañía */}
            <div>
              <label
                htmlFor="compania"
                className="block text-sm font-medium text-gray-300"
              >
                Compañía
              </label>
              <input
                type="text"
                id="compania"
                autoComplete="off"
                {...register('compania')}
                className="mt-1 block w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 placeholder-gray-400"
                placeholder=" "
              />
            </div>

            <Buttton
              type="submit"
              variant="contained"
              className="w-full py-3 mt-4 bg-emerald-500 text-white font-semibold rounded-lg shadow-lg hover:bg-emerald-600 transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              Enviar
            </Buttton>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
