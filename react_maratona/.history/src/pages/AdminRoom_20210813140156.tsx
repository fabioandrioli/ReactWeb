
import logoImg from '../assets/images/logo.svg';
import deleteImg from '../assets/images/delete.svg';
import checkImg from '../assets/images/check.svg';
import answerImg from '../assets/images/answer.svg';


import '../styles/room.scss';

type RoomParams = {
  id: string;
}

export function AdminRoom() {



  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="Letmeask" />
          <div>
            <RoomCode } />
            <Button isOutlined >Encerrar sala</Button>
          </div>
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>Sala </h1>
        
        </div>

        <div className="question-list">
     
          
          
        </div>
      </main>
    </div>
  );
}