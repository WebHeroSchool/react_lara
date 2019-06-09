import React from 'react';
import styles from './Footer.module.css';
import PropTypes  from 'prop-types';
import Typography from '@material-ui/core/Typography';


const Footer = ({ count, onClickFooter }) => (
	<Typography 
		variant='subtitle1' 
		color='textSecondary' 
		className={styles.Footer} 
		onClick={onClickFooter}> 
		Tasks left to do: { count }
	</Typography>
);
	
Footer.defaultProps = {
	count: 0
}

Footer.propTypes = {
	count: PropTypes.number
}

export default Footer;