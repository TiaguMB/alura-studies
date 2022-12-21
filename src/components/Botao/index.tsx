import { Component } from 'react';

import style from './Botao.module.scss';

type IButtonType = 'button' | 'submit' | 'reset';

class Botao extends Component<{
	children: string,
	type?: IButtonType,
	onClick?: () => void,
}> {
	render() {
		const { type = 'button', onClick } = this.props;

		return (
			<button
				type={ type }
				className={ style.botao }
				onClick={ onClick }
			>
				{ this.props.children }
			</button>
		);
	}
}

export default Botao;
