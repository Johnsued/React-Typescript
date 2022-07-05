import Botao from "../Botao";
import Relogio from './Relógio'
import style from './cronometro.module.scss'

export default function Cronometro () {
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha o card e inicie o cronometro</p>
            <div className={style.relogioWrapper}>
                <Relogio />
            </div>
            <Botao>
                Começar!
            </Botao>
        </div>
    )
}