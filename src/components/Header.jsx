import style from './Header.module.css'

import rocket from '../img/rocket.svg'

export function Header(){
    return(
        <header className={style.header}>
            <img src={rocket} alt='logo de um foquete'/>
            <h2>to<span>do</span></h2>
        </header>
    )
}