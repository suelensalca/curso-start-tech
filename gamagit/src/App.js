import React from 'react';
import Routes from './routes';

import './style.css';

function App() {
  return (
    <Routes />    
  );
}
    
export default App;
// useState retorna um array [ estado, função ]
//   const [ usuario, setUsuario ] = useState('Guilherme')
//   return (
//     <p>{ usuario }</p>
//   );