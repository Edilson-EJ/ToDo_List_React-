import style from './AdicionaTarefa.module.css'

import plus from '../img/plus.svg'

export function AdicionaTarefa(){
    return(
        <div className={style.addTarefa}>
            <div className={style.tarefa}>
                <input type='text' placeholder='Adicione uma nova tarefa'></input>
            </div>

            <div className={style.buttonCriar}>   
                <img src={plus}/>    
                <button>Criar</button>
            </div>

        </div>

    )
}