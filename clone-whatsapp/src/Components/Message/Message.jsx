import React from 'react';
import './Message.css'

const Message = ({ messages }) => {
    return (
        <div className="chat">
            {messages.map((mensaje) => (
                <div key={mensaje.id} className="mensaje">
                    <div className="mensaje-author">{mensaje.author}</div>
                    <div className="mensaje-content">{mensaje.content}</div>
                    <div className="mensaje-fecha">{mensaje.fecha}</div>
                    <div className="mensaje-estado">{mensaje.estado}</div>
                </div>
            ))}
        </div>
    );
};

export default Message;


// function Mensaje(props) {
//     return (
//         <div className="mensaje">
//             <div className="mensaje-author">{props.author}</div>
//             <div className="mensaje-content">{props.content}</div>
//             <div className="mensaje-fecha">{props.fecha}</div>
//             <div className={`mensaje-estado ${props.estado}`}>{props.estado}</div>
//         </div>
//     );
// }

// export default Mensaje;
