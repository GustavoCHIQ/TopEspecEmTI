import { Users } from "phosphor-react"
import { CardUser } from "./components/CardUser/"
import { Header } from "./components/Header"
import { List } from "./components/List"
import { GlobalStyle } from "./GlobalStyle"

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header title="Lista de Usuários" logo={<Users size={32} />} />
        <List />
      </div>
    </>
  )
}

export default App
