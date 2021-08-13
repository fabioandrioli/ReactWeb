import { createContext } from 'react';

import {Button} from './components/Button';
import { HomePage } from './pages/HomePage';
import {NewRoom} from './pages/NewRoom';
import {BrowserRouter,Route} from 'react-router-dom';

export const TestContext = createContext('')

function App() {
  return (
    <BrowserRouter>
      {/** tudo o que está dentro do provide consegue enxegar o valor do contexto */}
      <TestContext.Provider value={'test'}>
        <Route path="/" exact component={HomePage}/>
        <Route path="/rooms/new"  component={NewRoom}/>
      </TestContext.Provider>
    </BrowserRouter>
   
  );
}

export default App;
