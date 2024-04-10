import { useState } from 'react';
import './App.css';
import { Login } from './pages/Login/Login';
import { CriarConta } from './pages/CriarConta/CriarConta';

function App() {
  const [isLoginScreen, setIsLoginScreen] = useState(true)

  function toggleScreen () {
    setIsLoginScreen(!isLoginScreen)
  }

  return (
    <div>
      {isLoginScreen ? <Login toggleScreen={toggleScreen}/> : <CriarConta toggleScreen={toggleScreen} />}
    </div>
  )
}

export default App;
