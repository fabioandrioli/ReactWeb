import copyImg from '../assets/images/copy.svg'
import '../styles/room-code.scss'

type RoomCodeProps = {
    code: String,
}

export function RoomCode(props: RoomCodeProps){
    return (
        <button>
            <div>
                <img src={copyImg} alt="Copy room code" />
            </div>
            <span>Sala -Mh6mljVLUm5RxetVRkz</span>
        </button>
    );
}