import style from './ContadorTarefas.module.css'

export function ContadorTarefas(){
    return(
        <div className={style.contTarefas}>
            <div className={style.tarefaCriada}>
                <h4>Tarefas Criadas</h4>
            </div>

            <div className={style.tarefaConcluida}>
                <h4>Concluidas</h4>

            </div>
        </div>
    )
}