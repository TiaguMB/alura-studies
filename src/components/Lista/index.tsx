import { ITarefa } from '../types/ITarefa';
import Item from './Item';
import style from './Lista.module.scss';

function Lista({ tarefas }: { tarefas: ITarefa[] }) {
	return (
		<aside className={ style.listaTarefas }>
			<h2>Estudos do dia</h2>
			<ul>
				{tarefas.map((item) => (
					<Item
						key={item.id}
						{ ...item }
					/>
				))}
			</ul>
		</aside>
	);
}

export default Lista;