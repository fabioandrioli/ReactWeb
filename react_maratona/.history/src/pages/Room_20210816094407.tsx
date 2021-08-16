

import {useParams} from 'react-router-dom';
import logoImg from '../assets/images/logo.svg';
import { Button } from '../components/Button';


import '../styles/room.scss';
import { RoomCode } from '../components/RoomCode';
import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';

type RoomParamsType = {
  id: string,
}

export function Room() {
  const user = useAuth()
  const params = useParams<RoomParamsType>();
  const roomId = params.id;
  const [newQuestion, setNewQuestion] = useState('');

  async function handleSendQuestion(){
    if(newQuestion.trim() === ''){
      return;
    }

    if(!user ){
      throw new Error('You must be logged in');
    }
  }

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="Letmeask" />
          <RoomCode code={params.id}/>
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>Sala</h1>
          <span></span> 
        </div>

        <form>
          <textarea
            placeholder="O que você quer perguntar?"
            value={newQuestion}
            onChange={event => setNewQuestion(event.target.value)}
          />

          <div className="form-footer">
          
              <div className="user-info">
                <img src="" alt=""/>
                <span></span>
              </div>
           
              <span>Para enviar uma pergunta, <Button type="submit">faça seu login</Button>.</span>
          
           
          </div>
        </form>

        <div className="question-list">
         
    
        </div>
      </main>
    </div>
  );
}