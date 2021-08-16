

import {useParams} from 'react-router-dom';
import logoImg from '../assets/images/logo.svg';
import { Button } from '../components/Button';


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
          <Button type="submit" isOutlined>Encerra sala</Button>
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
              />
            )
          })}
        </div>
      </main>
    </div>
  );
}