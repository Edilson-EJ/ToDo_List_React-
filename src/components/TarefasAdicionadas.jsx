import { Trash } from 'phosphor-react';

import check from '../img/check.svg';
import lixo from '../img/Layer 1.svg'

import style from './TarefasAdicionadas.module.css'

export function TarefasAdicionadas(){

    return (
        <div className={style.tarefasAdd }>
            <div className={style.tarefasAdiciona}>
                <img src={check} />
                <p>Estuda React</p>
                <button>
                    <Trash sise={40}/>
                </button>
            </div>
        
        </div>
        
    )

}