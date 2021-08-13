
import { createContext } from 'react';
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

export function AuthContextProvider(){
    return ();
}