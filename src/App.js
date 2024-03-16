import React from 'react';
import './App.css';
import LoginTextFields from './components/LoginPage';
import NavBar from './components/AppBar';
// import Dashboard from './components/Dashboard'


const App = () => {
  return (
    <div className="App">

      {/* <Dashboard/> */}
      
      <LoginTextFields/>

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
