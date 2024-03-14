import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import NavBar from './components/NavBar';


const App = () => {
  return (
    <div className="App">
      
      <Dashboard/>

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
