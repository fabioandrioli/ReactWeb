

import logoImg from '../assets/images/logo.svg';


import '../styles/room.scss';


export function Room() {
 

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="Letmeask" />
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
            value=""
          />

          <div className="form-footer">
          
              <div className="user-info">
                <img src="" alt=""/>
                <span></span>
              </div>
           
              <span>Para enviar uma pergunta, <button>faça seu login</button>.</span>
          
           
          </div>
        </form>

        <div className="question-list">
         
    
        </div>
      </main>
    </div>
  );
}