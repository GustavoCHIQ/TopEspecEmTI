import { Users } from "phosphor-react";
import { FormUser } from "./components/FormUser";
import { Header } from "./components/Header"
import { GlobalStyle } from "./GlobalStyle";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const logo = <Users size={60} color="#f5f5f5" weight="duotone" />
  return (
    <div className="App">
      <GlobalStyle />
      <Header title="Cadastro de Clientes" logo={logo} />
      <FormUser />
    </div>
  )
}

export default App
