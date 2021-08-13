import {useState, useEffect } from 'react';
import {auth, firebase} from './service/firebase'
import {Button} from './components/Button';
import { HomePage } from './pages/HomePage';
import {NewRoom} from './pages/NewRoom';
import {BrowserRouter,Route} from 'react-router-dom';
import AuthContextProvider from './context/AuthContext';


function App() {
 
  return (
    <BrowserRouter>
      <AuthContextProvider>
          <Route path="/" exact component={HomePage}/>
          <Route path="/rooms/new"  component={NewRoom}/>
        <AuthContextProvider/>
    </BrowserRouter>
   
  );
}

export default App;
