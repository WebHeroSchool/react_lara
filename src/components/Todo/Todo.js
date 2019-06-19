import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import DatePicker from '../DatePicker/DatePicker';
import Footer from '../Footer/Footer';
import styles from'./Todo.module.css';
import Todos from '../Todos/Todos';
import ButtonAdd from '../ButtonAdd/ButtonAdd';
import Heading from '../Heading/Heading';
import PropTypes  from 'prop-types';

class Todo extends React.Component {

	state = {
		hasError: false,
		count: 3,
		items: [
			{
				value: 'build new app',
				id: 1
			},
			{ 
				value: 'write down props',
				id: 2
			},
			{
				value: 'do all the other things',
				id: 3
			}
		]
	};
	
	onClickDone = id => {
		const newItemList = this.state.items.map(item => {
			const newItem = { ...item };
			if (item.id === id) {
				newItem.isDone = !item.isDone;
			}
			return newItem;
		});

		this.setState({ items: newItemList });
	};

	onClickDelete = id => {
		const itemsArr = this.state.items.filter(item => item.id !== id );

		this.setState({ items: itemsArr });
	}

	onClickAdd = value => {
		if ( value !== '') {

			this.setState(state => ({
				items: [
					...state.items,
					{
						value,
						isDone: false,
						id: state.count + 1
					}
				],
				count: state.count + 1,
				hasError: false
			}));
	} else {
		this.setState(state => ({
			hasError: true
		}))

	}
}

	render () {			
		let date = new Date().getDate(); 
		let month = new Date().getMonth() + 1; 
		if (month<10) {
			month = '0' + month;
		}

		let year = new Date().getFullYear(); 
		const ymdDate = year + '-' + month + '-' + date;

		return (
			<div className={styles.wrapper}> 
				<Heading />
				<ItemList
					items={this.state.items} 
					onClickDone={this.onClickDone} 
					onClickDelete={this.onClickDelete}
				/>
				<DatePicker ymdDate={ymdDate} />
				<InputItem
					onClickAdd={this.onClickAdd}
					hasError={this.state.hasError}
				/>
				<ButtonAdd />
				<Footer />
			</div>
		);
	}
};

export default Todo;