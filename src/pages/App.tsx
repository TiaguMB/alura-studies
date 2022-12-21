import { useState } from 'react';

import Cronometro from '../components/Cronometro';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import { ITarefa } from '../components/types/ITarefa';
import style from './App.module.scss';

function App() {
	const [ tarefas, setTarefas ] = useState<ITarefa[]>([]);
	const [ selecionado, setSelecionado ] = useState<ITarefa>();

	function selecionaTarefa(tarefaSelecionada: ITarefa) {
		setSelecionado(tarefaSelecionada);
		setTarefas(tarefasAntigas => tarefasAntigas.map(tarefa => ({
			...tarefa,
			selecionado: tarefa.id === tarefaSelecionada.id
		})));
	}

	return (
		<div className={style.AppStyle}>
			<Formulario setTarefas={setTarefas} />
			<Lista
				tarefas={tarefas}
				selecionaTarefa={selecionaTarefa}
			/>
			<Cronometro selecionado={selecionado} />
		</div>
	);
}

export default App;
