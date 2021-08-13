import IlustrationImg from '../assets/images/illustration.svg'
import LogoImage from '../assets/images/logo.svg'
import GoogleIconImage from '../assets/images/google-icon.svg'

export function HomePage(){
    return(
        <div id="page-auth">
            <aside>
                <img src={IlustrationImg} alt="Ilustração simbolizando perguntas e respoastas" />
                <strong>Crie salas de Q&amp; ao-vivo </strong>
                <p>Tire as dúvidas da sua audiência em tempo-real</p>
            </aside>
            <main>
                <div>
                    <img src={LogoImage} alt="Maratona React" />
                    <button>
                        <img src={GoogleIconImage} alt="Logo da google" />
                        Crie sua sala com Goole
                    </button>
                    <div>Ou entre em uma sala</div>
                    <form action="">
                        <input 
                            type="text"
                            placeholder="Digite o código da sala"
                        />
                         <button type="submit">
                            Entrar na sala
                        </button>
                    </form>
                </div>
            </main>
        </div>
    );
}