import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";

type GITHUBResponse = {
  html_url: string;
  name: string;
  avatar_url: string;
  bio: string;
};

function App() {
  const [userName, setUserName] = useState("");
  const [name, setName] = useState("Aguardando...");
  const [bio, setBio] = useState("Aguardando...");
  const [perfil, setPerfil] = useState("/");
  const [avatarURL, setAvatarURL] = useState("./src/assets/avatar.png");

  const [showElement, setShowElement] = useState(false)
  const showDetails = () => setShowElement(true)

  const [showElementError, setShowError] = useState(false)
  const hideError = () => setShowError(false)


  useEffect(() => {
    setUserName("")
    setName("Aguardando...")
    setBio("Aguardando...")
    setPerfil("/")
  }, [])


  const handleSearch = () => {
    setUserName("")
    setName("Aguardando...")
    setBio("Aguardando...")
    axios
      .get<GITHUBResponse>(`https://api.github.com/users/${userName}`)
      .then((res) => {
        if (res.status === 200) {
          setName(res.data.name);
          setBio(res.data.bio);
          setPerfil(res.data.html_url);
          setAvatarURL(res.data.avatar_url);
          showDetails()
          hideError()
        }
      })
      .catch((err) => {
        setName("Usuário não encontrado");
        setBio("Usuário não encontrado");
        setPerfil("#");
        setAvatarURL("./src/assets/avatar.png");
        showDetails()

      });
  };

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
              placeholder="Digite um username"
              onChange={(e) => setUserName(e.target.value)}
            />
            <button onClick={handleSearch}>Buscar</button>
          </div>
          <div className="content">
            <div>
              {showElement ? <img src={avatarURL} alt="avatar" /> : null}
              {showElement ? <h1>{name}</h1> : null}
              {showElement ? <p>{bio}</p> : null}
              {showElement ? <a className="verPerfil" href={perfil}>Acessar Perfil</a> : null}
              {/* <img src={avatarURL} alt="avatar" /> */}
              {/* <h1>{name}</h1>
              <p>{bio}</p>
              <a className="verPerfil" href={perfil} >Ver perfil</a> */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
