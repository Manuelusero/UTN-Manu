import React, { useState } from 'react';

const MessageForm = ({ onSendMessage }) => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const message = {
            author: 'yo',
            content: inputValue,
            estado: 'no entregado',
            fecha: `hoy a ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`,
            hour: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            id: Date.now(),
        };

        onSendMessage(message);
        setInputValue('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="Escribe un mensaje"
            />
            <button type="submit">Send</button>
        </form>
    );
};

export default MessageForm;