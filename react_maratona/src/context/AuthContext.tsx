
import { createContext, ReactNode, useEffect, useState } from 'react';
import { auth, firebase } from '../service/firebase';
type UserType = {
    id: string,
    name: string,
    avatar: string,
  }
  
  type AuthContextType = {
    user:UserType | undefined,
    siginWithGoogle: () => Promise<void>,
  }
  
export const AuthContext = createContext({} as AuthContextType)

type AuthContextProviderProps = {
    children:ReactNode
}

export function AuthContextProvider(props: AuthContextProviderProps){
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
        <AuthContext.Provider value={{user,siginWithGoogle}}>
             {/** tudo o que está dentro do provide consegue enxegar o valor do contexto */}
             {props.children}
        </AuthContext.Provider>
    );
}