import { useState } from 'react';
import axios from 'axios';

// Define the main App component that will contain the chat interface.
const App = () => {
  // Estado para guardar el texto que el usuario ingresa.
  const [inputText, setInputText] = useState('');
  // Estado para guardar la respuesta del bot, incluyendo el historial de la conversación.
  const [messages, setMessages] = useState([]);
  // Estado para manejar el estado de carga mientras se espera la respuesta de la API.
  const [isLoading, setIsLoading] = useState(false);
  // Estado para guardar cualquier mensaje de error de la llamada a la API.
  const [error, setError] = useState('');

  // La URL del endpoint
  const n8nApiUrl =
    'https://kevin1302.app.n8n.cloud/webhook/30051f65-4aba-4061-bf80-99030c0ec8cf';

  // Manejador para cuando el usuario hace clic en el botón de búsqueda.
  const handleSendMessage = async () => {
    // Evita que se envíen mensajes vacíos.
    if (inputText.trim() === '') {
      return;
    }

    // Limpia cualquier error previo.
    setError('');
    // Añade el mensaje del usuario al estado de los mensajes.
    const newUserMessage = { text: inputText, sender: 'user' };
    setMessages((prevMessages) => [...prevMessages, newUserMessage]);

    // Limpia el campo de entrada inmediatamente.
    setInputText('');

    // Establece el estado de carga a 'true' para mostrarle al usuario que se está procesando la solicitud.
    setIsLoading(true);

    try {
      // Realiza la solicitud POST a la API de N8N con el texto del usuario.
      const response = await axios.post(n8nApiUrl, {
        text: inputText,
      });
      console.log(response);

      // Verifica si la respuesta contiene los datos esperados.
      if (response.data && response.data.response) {
        // Añade la respuesta del bot al estado de los mensajes.
        const newBotMessage = { text: response.data.response, sender: 'bot' };
        setMessages((prevMessages) => [...prevMessages, newBotMessage]);
      } else {
        // Maneja el formato de respuesta inesperado.
        setError(
          'Respuesta inesperada de la API. Por favor, revisa la configuración de tu flujo de trabajo de N8N.'
        );
      }
    } catch (err) {
      // Maneja cualquier error de red o de la API.
      console.error('Error al conectar con la API de n8n:', err);
      setError(
        'Error al conectar con el servidor. Por favor, inténtalo de nuevo más tarde.'
      );
    } finally {
      // Establece el estado de carga a 'false' una vez que la solicitud se ha completado.
      setIsLoading(false);
    }
  };

  return (
    <section
      id="chat"
      className="min-h-screen py-20 bg-gray-800 text-white flex items-center justify-center"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-emerald-400">
            Habla con La Palma AI
          </h2>
          <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
            Haz tu consulta y obtén una respuesta inteligente al instante.
          </p>
        </div>

        <div className="bg-gray-900 p-8 rounded-2xl shadow-2xl max-w-3xl mx-auto flex flex-col h-[70vh]">
          {/* Área del historial de conversación */}
          <div className="flex-1 overflow-y-auto pr-4 mb-6 space-y-4">
            {messages.length === 0 ? (
              <div className="text-center text-gray-500 italic p-4">
                Tu respuesta de IA aparecerá aquí...
              </div>
            ) : (
              messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${
                    msg.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-[70%] p-4 rounded-3xl shadow-md ${
                      msg.sender === 'user'
                        ? 'bg-emerald-600 text-white'
                        : 'bg-gray-700 text-gray-200'
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{msg.text}</p>
                  </div>
                </div>
              ))
            )}
            {/* Indicador de carga */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="p-2 w-10 h-10 flex items-center justify-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-emerald-500"></div>
                </div>
              </div>
            )}
            {/* Mensaje de error */}
            {error && (
              <div className="text-red-400 text-center mt-4">{error}</div>
            )}
          </div>

          {/* Área de entrada de texto y botón de envío */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-auto">
            <textarea
              className="flex-grow bg-gray-700 border border-gray-600 rounded-lg p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-200 resize-none"
              rows="3"
              placeholder="Escribe tu consulta aquí..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
            ></textarea>
            <button
              type="submit"
              onClick={handleSendMessage}
              disabled={isLoading}
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <span className="animate-spin h-5 w-5 border-4 border-white border-t-transparent rounded-full"></span>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-send"
                >
                  <path d="m22 2-7 19-3-6-6-3 19-7z" />
                  <path d="M11 11l-3 3" />
                </svg>
              )}
              <span className="ml-2 hidden md:block">
                {isLoading ? 'Cargando...' : 'Enviar'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
