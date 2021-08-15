import { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom'
import IlustrationImg from '../assets/images/illustration.svg'
import LogoImage from '../assets/images/logo.svg'
import GoogleIconImage from '../assets/images/google-icon.svg'
import '../styles/auth.scss'
import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth'
import { database } from '../service/firebase';



export function HomePage(){
    const history = useHistory();
    const {user, siginWithGoogle} = useAuth()
    const [roomCode, setRoomCode] = useState('')
    async function handleCreateRoom(){
        if(!user){
            await siginWithGoogle()
        }

        //Todo await espera um requisição de sucesso, caso não seja, ele não deixa passar.
        history.push("/rooms/new");
    }


    
    async function handleJoin(event: FormEvent){
        event.preventDefault();
        if(roomCode.trim() === ''){
           return; 
        }

        const roomRef = await database.ref(`rooms/${roomCode}`).get();

        if(!roomRef.exists()){
            alert("Room does not exist.");
            return;
        }

        history.push(`/rooms/${roomCode}`)
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
                    <form action="" onSubmit={handleJoin}>
                        <input 
                            type="text"
                            placeholder="Digite o código da sala"
                            onChange={event => setRoomCode(event.target.value)}
                            value={roomCode}
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