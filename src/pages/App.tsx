import React, { useState } from 'react';
import Cronometro from '../components/Cronometro';
import Formulario from '../components/Formularios';
import Lista from '../components/Lista';
import style from "./App.module.scss";

function App() {
  const [tarefas, setTarefas] = useState([{
    tarefa: 'React',
    tempo: '02:00:00'
}, {
    tarefa: 'JavaScript',
    tempo: '01:00:00'
}, {
    tarefa: 'TypeScript',
    tempo: '00:30:00'
}]);
  return (
    <div className={style.AppStyle}>
       <Formulario setTarefas={setTarefas} />
       <Lista tarefas={tarefas} />
       <Cronometro />
    </div>
  );
}

export default App;
