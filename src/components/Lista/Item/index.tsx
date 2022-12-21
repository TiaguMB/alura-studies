import classNames from 'classnames';

import { ITarefa } from '../../types/ITarefa';
import style from './Item.module.scss';

interface Props extends ITarefa {
	selecionaTarefa: (tarefaSelecionada: ITarefa) => void,
}

export default function Item(
	{
		tarefa,
		tempo,
		selecionado,
		completado,
		id,
		selecionaTarefa
	}: Props
) {
	return (
		<li
			className={classNames(
				style.item,
				{ [style.itemSelecionado]: selecionado },
				{ [style.itemCompletado]: completado },
			)}
			onClick={() => selecionaTarefa({
				tarefa,
				tempo,
				selecionado,
				completado,
				id,
			})}
		>
			<h3>{ tarefa }</h3>
			<span>{ tempo }</span>
		</li>
	);
}
