import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import DatePicker from '../DatePicker/DatePicker';
import Footer from '../Footer/Footer';
import styles from'./App.module.css';
import Todos from '../Todos/Todos';
import ButtonAdd from '../ButtonAdd/ButtonAdd';

class App extends React.Component {
	render () {
			const items = [
				{
					value: 'build new app',
					isDone: true
				},
				{ 
					value: 'write down props',
					isDone: false
				},
				{
					value: 'do all the other things',
					isDone: true
				}
			];

			return (
				<div className={styles.wrapper}> 
					<h1 className={styles.title}> List of Items:</h1>
					<ItemList items={items}/>
					<ButtonAdd />

				</div>
			);
	}
}

export default App;