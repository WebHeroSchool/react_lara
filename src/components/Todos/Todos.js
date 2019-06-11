import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import styles from'./Todos.module.css';
import Row from '../Row/Row';
import classNames from 'classnames'; 
import PropTypes  from 'prop-types';

class Todos extends React.Component {

	render() {
	const { items, onClickDone, onClickDelete } = this.props;
		return(<Table>
			<TableBody>
				{items.map(item => 
					<TableRow key={item.value}> 	
						<TableCell className={styles.tableCell}> 
							<Row 
								item={item} 
								onClickDone={onClickDone}
								onClickDelete={onClickDelete}
							/>
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