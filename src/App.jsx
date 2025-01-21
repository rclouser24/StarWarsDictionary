import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import CardList from './components/CardList'

function App() {
  const [endpoint, setEndpoint] = useState("people");

  return (
    <>
      <Navbar setEndpoint={setEndpoint} />
      <CardList endpoint={endpoint} />
    </>
  );
}

export default App
