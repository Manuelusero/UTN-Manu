import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './Components/Navbar.css/Navbar.jsx';
import App from './App.jsx';
import './global.css';

const userData = {
  isLogged: false,
  isAdmin: true,
  lang: 'en'
};


const MainApp = () => {
  return (
    <div>
      <Navbar userData={userData}/>
    </div>
  )
}







ReactDOM.createRoot(document.getElementById('root')).render(

  <MainApp />

)