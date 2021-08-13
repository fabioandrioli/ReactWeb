import {Button} from './components/Button';
import { HomePage } from './pages/HomePage';
import {NewRoom} from './pages/NewRoom';
import {BrowserRouter,Route} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={HomePage}/>
      <Route path="/rooms/new"  component={NewRoom}/>
    </BrowserRouter>
   
  );
}

export default App;
