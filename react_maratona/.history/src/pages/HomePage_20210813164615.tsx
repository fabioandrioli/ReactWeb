import {useContext} from 'react'

import { useHistory } from 'react-router-dom'
import { AuthContext } from '../App'
import IlustrationImg from '../assets/images/illustration.svg'
import LogoImage from '../assets/images/logo.svg'
import GoogleIconImage from '../assets/images/google-icon.svg'
import '../styles/auth.scss'
import { Button } from '../components/Button';



export function HomePage(){
    const history = useHistory();
    const {siginWithGoogle} = useContext(AuthContext)

    function handleCreateRoom(){
        history.push("/rooms/new");
    }

    return(
        <div id="page-auth">
            <aside>
                <img src={IlustrationImg} alt="Ilustração simbolizando perguntas e respoastas" />
                <strong>Crie salas de Q&amp; ao-vivo </strong>
                <p>Tire as dúvidas da sua audiência em tempo-real</p>
            </aside>
            <main>
              
                <div className="main-content">
                    <img src={LogoImage} alt="Maratona React" />
                    <button onClick={handleCreateRoom} className="create-room">
                        <img src={GoogleIconImage} alt="Logo da google" />
                        Crie sua sala com Goole
                    </button>
                    <div className="separator">Ou entre em uma sala</div>
                    <form action="">
                        <input 
                            type="text"
                            placeholder="Digite o código da sala"
                        />
                         <Button  type="submit">
                            Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    );
}