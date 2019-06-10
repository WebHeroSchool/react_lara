import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from'./Buttons.module.css';
import IconButton from '@material-ui/core/IconButton';
import PropTypes  from 'prop-types';


class Buttons extends React.Component {
	

	render() {
		const { onClickDelete, item } = this.props;

		return(
		<IconButton
			aria-label="Delete"
			className={styles.buttonDelete}
			onClick={() => onClickDelete(item.id)}
		>
		<DeleteIcon fontSize="small"/>
		</IconButton>
		)
	}
}


Buttons.propTypes = {
	onClickDelete: PropTypes.func,
	item: PropTypes.object
}

export default Buttons;