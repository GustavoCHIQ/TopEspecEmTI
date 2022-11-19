import React from "react";
import "./App.css";


function App() {

  const fotoPadrao = "https://www.w3schools.com/howto/img_avatar.png";

  return (
    <div className="container-app">
      <div className="container">
        <header className="header-top">
        </header>
        <main>
          <div className="form">
            <h1>Buscador de Perfis do GITHUB</h1>
            <input
              type="text"
              placeholder="Digite o nome do usuário" />
            <button>Buscar</button>
          </div>
          <div className="content">
            <div>
              <img src={fotoPadrao} alt="Perfil" />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
