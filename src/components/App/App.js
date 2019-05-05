import React from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';


const toDoItem = 'build new app';
const App = () => (<div> 
	<h1> List of Items:</h1>
	<ItemList toDoItem = {toDoItem} />
	<Footer count= { 3 } />
</div>);

export default App;