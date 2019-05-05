import React from 'react';
import Item from '../Item/Item';


const ItemList = ({ toDoItem }) => (<ul> 
	<li> <Item toDoItem = {toDoItem} /> </li>
	<li> <Item toDoItem = {'write down props'} /> </li>
	<li> <Item toDoItem = {'do all the other things'} /> </li>
</ul>);

export default ItemList;