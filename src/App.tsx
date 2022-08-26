import { CardUser } from "./components/CardUser"
import './global.css'

function App() {
  let users = [
    {
      img: 'https://randomuser.me/api/portraits/men/10.jpg',
      name: 'Philip Kim'
    },
    {
      img: 'https://randomuser.me/api/portraits/men/4.jpg',
      name: 'Miguel Caldwell'
    },
    {
      img: 'https://randomuser.me/api/portraits/women/40.jpg',
      name: 'Heather Watts'
    },
    {
      img: 'https://randomuser.me/api/portraits/women/37.jpg',
      name: 'Leslie Alexander'
    },
  ]
  return (
    <div className="App" >
      <CardUser user={users[0]} />
      <CardUser user={users[1]} />
      <CardUser user={users[2]} />
      <CardUser user={users[3]} />
    </div>
  )
}

export default App
