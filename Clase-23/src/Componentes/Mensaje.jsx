import React from 'react';
import '../Estilos/Mensaje.css';

function Mensaje(props) {
  return (
    <div className="mensaje">
      <div className="mensaje-author">{props.author}</div>
      <div className="mensaje-content">{props.content}</div>
      <div className="mensaje-fecha">{props.fecha}</div>
      <div className={`mensaje-estado ${props.estado}`}>{props.estado}</div>
    </div>
  );
}

export default Mensaje;
