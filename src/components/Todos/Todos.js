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
import PropTypes  from 'prop-types';


// Сделали рефакторинг: привели к классу
class Todos extends React.Component {
	
	render() {
	const { items, onClickDone, id, onClickDelete } = this.props;
		return(<Table>
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
		</Table>)
	}
}


Todos.propTypes = {
	items: PropTypes.array,
	onClickDone: PropTypes.func,
	id: PropTypes.number,
	onClickDelete: PropTypes.func
}
	
export default Todos;