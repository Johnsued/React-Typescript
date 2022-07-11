import React, {ReactNode} from 'react';
import style from './Botao.module.scss';
type ButtonProps={
    children: ReactNode
}

class Botao extends React.Component<{
    children: string
}>{
    render(): React.ReactNode {
        return (
            <button className={style.botao}>{this.props.children}</button>
        )
    }
}
export default Botao