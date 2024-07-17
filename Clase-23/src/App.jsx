import React, {useState} from 'react';
import Mensaje from './Componentes/Mensaje';
import MessageForm from './Componentes/MessageForm';


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
  const autoReply ={
    author: 'pepe',
    content: `Recibi tu mensaje: "${incomingMessage.content}"`,
    estado: 'visto',
    fecha: `hoy a ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit'})}`,
    id: Date.now() + 1 
  };

  setMessages(prevMessages => [...prevMessages, autoReply]);
}
  return (
    <div className="App">
      <h1>Chat</h1>
      <div className="chat">
        {message.map(mensaje => (
          <Mensaje
            key={mensaje.id}
            author={mensaje.author}
            content={mensaje.content}
            fecha={mensaje.fecha}
            estado={mensaje.estado}
          />
        ))}
      </div>
      <MessageForm onSendMessage={handleSendMessage}/>
    </div>
  );
};

export default App;






// function App() {
//   // let condicion = false
//   // let estaRegistrado = true

//   const userData = {
//     isLogged: true,
//     isAdmin: true,
//     lang: 'en'
//   }
 
  /*
  Van a crear un componente llamado Navbar y van a pasarle por props el objeto userData
  Si isLogged es false entonces mostraran un button que diga 'login'
  Si isAdmin es true mostraran un <button></button> que diga 'crear producto'
  OPCIONAL:
  Si lang esta en 'en' todos los textos deben ser en ingles
  Si lang esta en 'es' todos los textos deben ser en español
  */

//   return (
//     <>
//    {
//     condicion
//     ? <h2>Se cumplio</h2>
//     : <h3>No se cumplio</h3>
//    }

//    {
//     condicion 
//    }
//      )
//      </>
  
// export default App
// const DATA_MOOK = [
//   {
//     author: 'pepe',
//     content: 'Hola?',
//     fecha: 'ayer a 15:34',
//     estado: 'visto',
//     id: 1 
//   },
//   {
//     author: 'pepe',
//     content: 'Hola?',
//     fecha: 'ayer a 15:34',
//     estado: 'visto',
//     id: 2
//   },{
//     author: 'pepe',
//     content: 'Hola?',
//     fecha: 'ayer a 15:34',
//     estado: 'visto',
//     id: 3
//   },{
//     author: 'pepe',
//     content: 'Hola?',
//     fecha: 'ayer a 15:34',
//     estado: 'visto',
//     id: 4
//   },
// ]
