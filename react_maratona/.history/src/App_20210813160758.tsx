import { createContext, useState } from 'react';
import {auth, firebase} from './service/firebase'
import {Button} from './components/Button';
import { HomePage } from './pages/HomePage';
import {NewRoom} from './pages/NewRoom';
import {BrowserRouter,Route} from 'react-router-dom';

type UserType = {
  id: String,
  name: String,
  avatar: String,
}

type AuthContextType = {
  user:UserType,
  siginWithGoogle: () => void,
}

export const AuthContext = createContext({} as AuthContextType)

function App() {
  const [user,setUser] = useState();

  function siginWithGoogle(){
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).then(result => {
        console.log(result)
        if(result.user){
          const {displayName, photoURL, uid} = result.user;

          if(!displayName || !photoURL){
            throw new Error("Missing information from Google Account.");
          }

          setUser({
            id: uid,
            name:displayName,
            avatar: photoURL,
          })

        }
    })
  }

  return (
    <BrowserRouter>
      {/** tudo o que está dentro do provide consegue enxegar o valor do contexto */}
      <AuthContext.Provider value={{user,siginWithGoogle}}>
        <Route path="/" exact component={HomePage}/>
        <Route path="/rooms/new"  component={NewRoom}/>
      </AuthContext.Provider>
    </BrowserRouter>
   
  );
}

export default App;
