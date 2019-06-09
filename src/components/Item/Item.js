import React from 'react';
import classnames from 'classnames';
import styles from'./Item.module.css';

const Item = ({ value, isDone, id }) => {
	console.log(value);
	console.log(isDone);
	console.log(id);
	const classNames = classnames({
		[styles.item]: true,
		[styles.done]: isDone
	});
	return <span className={classNames}> {value} </span>
}


Item.defaultProps = { 
  isDone: true 
};

export default Item;

