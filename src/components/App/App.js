import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import DatePicker from '../DatePicker/DatePicker';
import Footer from '../Footer/Footer';
import styles from'./App.module.css';
import Todos from '../Todos/Todos';
import ButtonAdd from '../ButtonAdd/ButtonAdd';
import Item from '../Item/Item';

class App extends React.Component {

	state = {
		hasError: false,
		count: 3,
		items: [
			{
				value: 'build new app',
				isDone: true,
				id: 1
			},
			{ 
				value: 'write down props',
				isDone: false,
				id: 2
			},
			{
				value: 'do all the other things',
				isDone: false,
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

		return (
			<div className={styles.wrapper}> 
				<h1 className={styles.title}> List of Items:</h1>
				<ItemList items={this.state.items} onClickDone={this.onClickDone} onClickDelete={this.onClickDelete} />
				<InputItem
					onClickAdd={this.onClickAdd}
					hasError={this.state.hasError}
				/>
				<ButtonAdd />
				<Footer count={this.state.count} onClickFooter={this.onClickFooter}/>
			</div>
		);
	}
};



export default App;