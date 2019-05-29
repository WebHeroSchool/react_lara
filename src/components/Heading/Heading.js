import React from 'react';
import styles from'./Heading.module.css';

const Heading = (props) => {

	return (
		<div className={styles.titlewrap}>
		<h1 className={styles.title}> {props.collectionName} </h1>
		</div>
	)
}

Heading.defaultProps = {
	collectionName: "TO DO LIST"
}

export default Heading;