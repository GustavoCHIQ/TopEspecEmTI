import { Alien, User, Users } from "phosphor-react"
import { CardUser } from "./components/CardUser/"
import { Header } from "./components/Header"

import './global.css'
function App() {
  let users = [
    {
      img: 'https://randomuser.me/api/portraits/women/66.jpg',
      name: 'Cassandra Wilson',
      id: 1
    },
    {
      img: 'https://randomuser.me/api/portraits/men/20.jpg',
      name: 'Henry Dean',
      id: 2
    },
    {
      img: 'https://randomuser.me/api/portraits/women/29.jpg',
      name: 'Nina Freeman',
      id: 3
    }
  ]

  const cardUser: any[] = []
  users.forEach(function (user) {
    cardUser.push(
      <div className="div" key={user.id}>
        <CardUser user={user} textButton="Ver Perfil" />
      </div>
    )
  })

  return (
    <div className="App">
      <Header title="Lista de Usuários" logo={<Users size={32} />} />
      {cardUser}
    </div>
  )
}

export default App
