import { createContext, useState } from 'react';

import {Button} from './components/Button';
import { HomePage } from './pages/HomePage';
import {NewRoom} from './pages/NewRoom';
import {BrowserRouter,Route} from 'react-router-dom';

export const AuthContext = createContext('')

function App() {
  const {user,setUser} = useState();
  return (
    <BrowserRouter>
      {/** tudo o que está dentro do provide consegue enxegar o valor do contexto */}
      <AuthContext.Provider value={'Auth'}>
        <Route path="/" exact component={HomePage}/>
        <Route path="/rooms/new"  component={NewRoom}/>
      </AuthContext.Provider>
    </BrowserRouter>
   
  );
}

export default App;
