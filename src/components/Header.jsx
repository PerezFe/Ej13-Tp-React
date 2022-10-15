import React from "react";
import '../styles/Header.css'


function Header({ titulo }) {
  return (
    <>
      <header>
        <div className="container ">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            
            <p className="text-center text-white titulo-header text-size">
              {titulo}
            </p>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;