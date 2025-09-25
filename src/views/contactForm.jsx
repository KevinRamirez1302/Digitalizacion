import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

// Componente principal de la aplicación, contiene todo el formulario.
const App = () => {
  // Estado para manejar los mensajes de éxito o error.
  const [statusMessage, setStatusMessage] = useState('');
  // Estado para el indicador de carga.
  const [isSubmitting, setIsSubmitting] = useState(false);

  // useForm para manejar el estado del formulario y las validaciones.
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // Función que se ejecuta al enviar el formulario.
  const onSubmit = async (formData) => {
    setIsSubmitting(true);
    setStatusMessage('');

    try {
      const response = await axios.post(
        'https://kevin1302.app.n8n.cloud/webhook/2daf1627-df55-4416-a1ff-06e7b32f9185',
        formData
      );

      if (response.status === 200 || response.status === 201) {
        setStatusMessage('¡Formulario enviado con éxito!');
        reset();
      } else {
        setStatusMessage('Hubo un error al enviar el formulario.');
      }
    } catch (error) {
      console.error('Error al enviar la petición:', error);
      setStatusMessage('Error de conexión. Inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl mx-auto p-8 space-y-8 bg-gray-800 rounded-2xl shadow-2xl border-2 border-gray-700">
        {/* Encabezado del formulario */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2">
            Contáctanos
          </h1>
          <p className="text-gray-400 text-lg md:text-xl">
            ¿Tienes alguna pregunta o necesitas ayuda? Envíanos un mensaje.
          </p>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Campo de Nombre */}
            <div>
              <label
                htmlFor="nombre"
                className="block text-sm font-medium text-gray-300 mb-1"
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
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 placeholder-gray-400 text-white"
                placeholder="Ingresa tu nombre"
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
                className="block text-sm font-medium text-gray-300 mb-1"
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
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 placeholder-gray-400 text-white"
                placeholder="Ingresa tu apellido"
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
              className="block text-sm font-medium text-gray-300 mb-1"
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
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 placeholder-gray-400 text-white"
              placeholder="Ingresa tu email"
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
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Número de Teléfono
            </label>
            <input
              type="tel"
              id="telefono"
              autoComplete="off"
              {...register('telefono')}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 placeholder-gray-400 text-white"
              placeholder="Ingresa tu teléfono (opcional)"
            />
          </div>

          {/* Campo de Compañía */}
          <div>
            <label
              htmlFor="compania"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Compañía
            </label>
            <input
              type="text"
              id="compania"
              autoComplete="off"
              {...register('compania')}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 placeholder-gray-400 text-white"
              placeholder="Ingresa tu compañía (opcional)"
            />
          </div>

          {/* Mensajes de estado (éxito/error) */}
          {statusMessage && (
            <div
              className={`text-center p-3 rounded-lg font-semibold ${
                statusMessage.includes('éxito')
                  ? 'bg-emerald-600 text-white'
                  : 'bg-red-600 text-white'
              }`}
            >
              {statusMessage}
            </div>
          )}

          {/* Botón de envío */}
          <button
            type="submit"
            className="w-full py-3 px-6 bg-emerald-600 text-white font-semibold rounded-lg shadow-lg hover:bg-emerald-500 transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:bg-gray-500 disabled:transform-none disabled:cursor-not-allowed"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
