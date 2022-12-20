import { Component } from 'react';

import style from './Botao.module.scss';

type IButtonType = 'button' | 'submit' | 'reset';

class Botao extends Component<{
	children: string,
	type?: IButtonType,
}> {
	render() {
		const { type = 'button' } = this.props;

		return (
			<button type={ type } className={ style.botao }>
				{ this.props.children }
			</button>
		);
	}
}

export default Botao;