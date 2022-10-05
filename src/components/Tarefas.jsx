import style from './Tarefas.module.css'

import clip from '../img/Clipboard.svg'

export function Tarefas(){

    return(
        <div className={style.tarefas}>
            <img src={clip}/>
            <h5>Você ainda não tem tarefas cadastradas</h5>
            <h6>Crie tarefas e organize seus ietns a fazer</h6>
        </div>
    )

}