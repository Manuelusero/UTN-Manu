import React, { useState } from 'react';
import Message from './Components/Message/Message';
import MessageForm from './Components/MessageForm/MessageForm';



const DATA_MOOK = [
  {
    author: 'pepe',
    content: 'Hola?',
    fecha: 'ayer a 15:34',
    estado: 'visto',
    id: 1
  },
  {
    author: 'yo',
    content: 'Sos real OMG',
    fecha: 'ayer a 15:35',
    estado: 'visto',
    id: 2
  },
  {
    author: 'pepe',
    content: 'Obviamente, acaso lo dudaste?',
    fecha: 'ayer a 15:36',
    estado: 'visto',
    id: 3
  },
  {
    author: 'yo',
    content: 'Jamas.',
    fecha: 'ayer a 15:37',
    estado: 'entregado',
    id: 4
  }
];

const App = () => {
  const [message, setMessages] = useState(DATA_MOOK);

  const handleSendMessage = (newMessage) => {
    newMessage.estado = 'entregado';
    setMessages(prevMessages => {
      const updatedMessages = [...prevMessages, newMessage];
      setTimeout(() => generateAutoReply(newMessage), 1000);
      return updatedMessages;
    });
  };

  const generateAutoReply = (incomingMessage) => {
    const autoReply = {
      author: 'pepe',
      content: `Recibi tu mensaje: "${incomingMessage.content}"`,
      estado: 'visto',
      fecha: `hoy a ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`,
      id: Date.now() + 1
    };

    setMessages(prevMessages => [...prevMessages, autoReply]);
  }

  return (
    <>
      <div className="App">
        <div className='imgPerfil'></div>
        <h1>Messi</h1>
        <Message messages={message} />
      </div><MessageForm onSendMessage={handleSendMessage} /></>

  );
};


//   return (
//     <div className="App">
//       <div className='imgPerfil'></div>
//       <h1>Messi</h1>
//       <div className="chat">
//         {message.map(mensaje => (
//           <Message
//             key={mensaje.id}
//             author={mensaje.author}
//             content={mensaje.content}
//             fecha={mensaje.fecha}
//             estado={mensaje.estado}
//           />
//         ))}
//       </div>
//       <MessageForm onSendMessage={handleSendMessage} />
//     </div>
//   );
// };

export default App;