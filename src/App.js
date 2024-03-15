import React from 'react';
import './App.css';
import LoginPage from './components/LoginPage';
import NavBar from './components/NavBar';


const App = () => {
  return (
    <div className="App">
      
      <LoginPage/>

    </div>
  );
};

function WrappedApp() {
  return (
    <NavBar>
      <App />
    </NavBar>
  );
}

export default WrappedApp;
