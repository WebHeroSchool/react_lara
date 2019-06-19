import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes  from 'prop-types';
import styles from'./About.module.css';


const About = ({aboutMe}) => (
	<div className={styles.titlewrap}>
		<h1 className={styles.title}> {aboutMe} </h1>
	</div>
)

About.defaultProps = {
	aboutMe: "My name is Lara. My tagline is ' From zero to webhero' "
}

About.propTypes = {
	aboutMe: PropTypes.string
}

export default About;
