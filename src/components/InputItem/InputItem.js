import React from 'react';
import TextField from '@material-ui/core/TextField';
import styles from'./InputItem.module.css';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

// ф-цию меняем в класс чтобы исп внутр состояние

class InputItem extends React.Component {
	state = {
		inputValue: ''
	};


onButtonClick= () => {
	this.setState({
		inputValue: ''
	})

	this.props.onClickAdd(this.state.inputValue);

}


	render() {
		const { onClickAdd } = this.props;

		return (<Grid
			className={styles.inputBox}> 
			<TextField
				id="filled-dense"
				label="New task"
				margin="dense"
				variant="filled"
				className={styles.inputItem}
				value={this.state.inputValue}
				onChange={event => this.setState({ inputValue: event.target.value })}
			/>

			<Button
				variant='contained'
				color='primary'
				onClick={ this.onButtonClick }
			>
			Add another one
			</Button>
		</Grid> );
	}
}

export default InputItem;