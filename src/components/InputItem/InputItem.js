import React from 'react';
import TextField from '@material-ui/core/TextField';
import styles from'./InputItem.module.css';


const InputItem = () => (<div className={styles.inputBox}> 
	<TextField
		id="filled-dense"
		label="SEARCH"
		margin="dense"
		variant="filled"
		className={styles.inputItem}
	/>
</div>);

export default InputItem;