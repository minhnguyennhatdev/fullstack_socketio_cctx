import './App.css'
import PriceChart from './components/PriceChart'
import { io } from 'socket.io-client'

function App() {
  const socket = io("http://localhost:3001");
  return (
    <div> <PriceChart socket={socket} /></div>
  )
}

export default App
