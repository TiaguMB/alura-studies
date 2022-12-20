import { Component } from 'react';

import style from './Botao.module.scss';

class Botao extends Component<{ children: string }> {
	render() {
		return (
			<button className={ style.botao }>
				{ this.props.children }
			</button>
		);
	}
}

export default Botao;