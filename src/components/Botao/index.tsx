import { ReactNode } from 'react';

import style from './Botao.module.scss';

type IButtonType = 'button' | 'submit' | 'reset';

interface Props {
	children?: ReactNode,
	type?: IButtonType,
	onClick?: () => void,
}

export default function Botao({ children, type, onClick }: Props) {
	return (
		<button
			type={ type }
			className={ style.botao }
			onClick={ onClick }
		>
			{ children }
		</button>
	);
}
