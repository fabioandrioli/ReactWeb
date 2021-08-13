import {useState, useEffect } from 'react';
import {auth, firebase} from './service/firebase'
import {Button} from './components/Button';
import { HomePage } from './pages/HomePage';
import {NewRoom} from './pages/NewRoom';
import {BrowserRouter,Route} from 'react-router-dom';



function App() {
  const [user,setUser] = useState<UserType>();

  // useEffect(() => {

  // },[user]) Se quiser disparar uma funcao toda vez que o user mudar, deixar o user no array, mas se quiser uma unica vez, quando for criado, deixa vazio

  useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(user => {
        if(user){
          const {displayName, photoURL, uid} = user;

          if(!displayName || !photoURL){
            throw new Error("Missing information from Google Account.");
          }
    
          setUser({
            id: uid,
            name:displayName,
            avatar: photoURL,
          })
        }
      });

      return () => {
        unsubscribe();
      }
  },[])

  async function siginWithGoogle(){
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await auth.signInWithPopup(provider);
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
  }

  return (
    <BrowserRouter>
      <Route path="/" exact component={HomePage}/>
      <Route path="/rooms/new"  component={NewRoom}/>
    </BrowserRouter>
   
  );
}

export default App;
