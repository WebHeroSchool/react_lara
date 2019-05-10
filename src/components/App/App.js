import React from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from'./App.module.css';

const App = () => {
	const items = [
		{
			value: 'build new app',
		},
		{ 
			value: 'write down props',
		},
		{
			value: 'do all the other things'
		}
	];


	return (
		<div className={styles.wrapper}> 
			<h1 className={styles.title}> List of Items:</h1>
			<ItemList items={items} />
			<Footer count={3} />
		</div>
	);
}

export default App;