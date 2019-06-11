import React from 'react';
import styles from'./ButtonAdd.module.css';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import TextField from '@material-ui/core/TextField';

const ButtonAdd = () => (
	<div className={styles.buttonBox}>
		<Button variant="contained" color="secondary">
			Delete selected
			<DeleteIcon />
		</Button>
	</div>
)

export default ButtonAdd;