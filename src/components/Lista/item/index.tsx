import { ITarefa } from '../../../types/tarefa';
import style from './item.module.scss';
interface Props extends ITarefa{
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}


export default function Item (
    { 
        tarefa, 
        tempo, 
        selecionado, 
        completado, 
        id, 
        selecionaTarefa 
    }: Props) {
    return (
        <li className={`${style.item} ${selecionado ? style.itemSelecionado : ''}`} 
        onClick={() => selecionaTarefa(
            {
                tempo,
                selecionado,
                completado,
                tarefa,
                id
            }
        )}>
        <h3>{tarefa}</h3>
        <span>{tempo}</span>
    </li>
    )
}