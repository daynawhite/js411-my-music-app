import React from 'react';

const NavBar = ({ children }) => {
    return (
      <header>
        <nav>
          <a href="/Dashboard">Dashboard</a>
        </nav>
        {children}
      </header>
    );
  };

  export default NavBar;