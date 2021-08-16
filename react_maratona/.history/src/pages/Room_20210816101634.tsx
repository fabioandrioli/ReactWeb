

import {useParams} from 'react-router-dom';
import logoImg from '../assets/images/logo.svg';
import { Button } from '../components/Button';


import '../styles/room.scss';
import { RoomCode } from '../components/RoomCode';
import { FormEvent, useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { database } from '../service/firebase';

type RoomParamsType = {
  id: string,
}

export function Room() {
  const {user} = useAuth()
  const params = useParams<RoomParamsType>();
  const roomId = params.id;
  const [newQuestion, setNewQuestion] = useState('');

  async function handleSendQuestion(event: FormEvent){
    event.preventDefault();
    if(newQuestion.trim() === ''){
      return;
    }

    if(!user ){
      throw new Error('You must be logged in');
    }

    const question = {
      content: newQuestion,
      author:{
        name: user.name,
        avatar: user.avatar,
      },
      isHighlighted: false,
      isAnswered:false,
    }

    await database.ref(`rooms/${roomId}/questions`).push(question)
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

        <form onSubmit={handleSendQuestion}>
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