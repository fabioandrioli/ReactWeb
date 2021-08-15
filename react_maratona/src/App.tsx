import {BrowserRouter,Route, Switch} from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import {NewRoom} from './pages/NewRoom';
import {Room} from './pages/Room'

import {AuthContextProvider} from './context/AuthContext';


function App() {
 
  return (
    <BrowserRouter>
      <AuthContextProvider>
        {/* O Switch substitui o exect */}
        <Switch>
            <Route path="/" exact component={HomePage}/>
            <Route path="/rooms/new"  component={NewRoom}/>
            <Route path="/rooms/:id"  component={Room}/>
          </Switch>
        </AuthContextProvider>
    </BrowserRouter>
   
  );
}

export default App;
