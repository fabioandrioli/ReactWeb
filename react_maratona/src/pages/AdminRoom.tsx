

import {useHistory, useParams} from 'react-router-dom';
import logoImg from '../assets/images/logo.svg';
import { Button } from '../components/Button';
import deleteImage from '../assets/images/delete.svg'


import '../styles/room.scss';
import { RoomCode } from '../components/RoomCode';
// import { FormEvent, useEffect, useState } from 'react';
// import { useAuth } from '../hooks/useAuth';
import { database } from '../service/firebase';
import { Question } from './../components/Question/Question';
import { useRoom } from '../hooks/useRoom';


type RoomParamsType = {
  id: string,
}




export function AdminRoom() {
  const history = useHistory();
  async function handleEndRoom(){
    database.ref(`rooms/${roomId}`).update({
      endedAt: new Date(),
    })

    history.push("/")
  }

  async function handleDeleteQuestion(questionId: string){
    if (window.confirm('Você tem certeza de que deseja excluir essa pergunta')){
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove()
    }
  }
  
  // const {user} = useAuth()
  const params = useParams<RoomParamsType>();
  const roomId = params.id;
  const {title,questions} = useRoom(roomId)

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="Letmeask" />
          <RoomCode code={params.id}/>
         <div>
          <Button type="submit" onClick={handleEndRoom} isOutlined>Encerra sala</Button>
         </div>
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>Sala {title}</h1>
          {questions.length > 0 && <span> {questions.length} pergunta(s)</span> }
        </div>


        <div className="question-list">
        {questions.map(question => {
            return (
              <Question
                key={question.id}
                content={question.content}
                author={question.author}
              > 
                <button
                  type="button"
                  onClick={() => handleDeleteQuestion(question.id)}
                >
                  <img src={deleteImage} alt="remover pergunta" />g
                </button>
              </Question>
            )
          })}
        </div>
      </main>
    </div>
  );
}