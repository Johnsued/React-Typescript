import React from "react";
import style from './relogio.module.scss';

interface Props {
    tempo: number | undefined
}

export default function Relogio ({ tempo = 0 }: Props) {
    const minutos = Math.floor(tempo / 60);
    const segundos = tempo % 60;
    return (
       <>
        <span className={style.relogioNumero }>0</span>
        <span className={style.relogioNumero }>0</span>
        <span className={style.relogioDivisao}>:</span>
        <span className={style.relogioNumero }>0</span>
        <span className={style.relogioNumero }>0</span>
       </>
    )
}