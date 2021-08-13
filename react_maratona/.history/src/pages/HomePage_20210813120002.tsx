import IlustrationImg from '../assets/images/illustration.svg'

export function HomePage(){
    return(
        <div>
            <aside>
                <img src={IlustrationImg} alt="Ilustração simbolizando perguntas e respoastas" />
                <strong>Crie salas de Q&amp; ao-vivo </strong>
            </aside>
        </div>
    );
}