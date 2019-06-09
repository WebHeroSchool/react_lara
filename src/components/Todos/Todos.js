import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import Buttons from '../Buttons/Buttons';
import styles from'./Todos.module.css';
import classNames from 'classnames'; 

const Todos = ({ items, onClickDone, id, onClickDelete }) => { 
	// console.log(items);
	// console.log(onClickDone);
	// console.log(id);
	// console.log(onClickDelete);
	return (
		<Table>
			<TableBody>
				{items.map(item => 
					<TableRow key={item.value}> 	
						<TableCell className={styles.tableCell}> 
							<div className={styles.tableCellBox}>
								<Checkbox 
									value="checkedA" 
									checked={item.isDone} 
									onClick={() => 
									onClickDone(item.id)
								}/>
								{item.value} 
								<Buttons onClickDelete={onClickDelete} item={item} />
							</div>
						</TableCell>
					</TableRow>
				)}
			</TableBody>
		</Table>
	);
}
	
export default Todos;