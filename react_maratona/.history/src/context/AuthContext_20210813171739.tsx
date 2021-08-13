
import { createContext, ReactNode } from 'react';
type UserType = {
    id: String,
    name: String,
    avatar: String,
  }
  
  type AuthContextType = {
    user:UserType | undefined,
    siginWithGoogle: () => Promise<void>,
  }
  
export const AuthContext = createContext({} as AuthContextType)

type AuthContextProvider = {
    children:ReactNode
}

export function AuthContextProvider(props: AuthContextProvider){
    return (
        <AuthContext.Provider value={{user,siginWithGoogle}}>
             {/** tudo o que está dentro do provide consegue enxegar o valor do contexto */}
             {props.children}
        </AuthContext.Provider>
    );
}