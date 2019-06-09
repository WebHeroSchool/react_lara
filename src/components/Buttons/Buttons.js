import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from'./Buttons.module.css';
import IconButton from '@material-ui/core/IconButton';
import Item from '../Item/Item';

const Buttons = ({ onClickDelete, item }) => (
	<IconButton
		aria-label="Delete"
		className={styles.buttonDelete}
		onClick={() => onClickDelete(item.id)}
	>
		<DeleteIcon fontSize="small"/>
	</IconButton>
)



export default Buttons;