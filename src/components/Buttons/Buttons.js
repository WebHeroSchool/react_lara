import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from'./Buttons.module.css';
import IconButton from '@material-ui/core/IconButton';

const Buttons = () => {
	return (
			<IconButton
			aria-label="Delete"
			className={styles.buttonDelete}>
				<DeleteIcon fontSize="small"/>
			</IconButton>
	)
}

export default Buttons;