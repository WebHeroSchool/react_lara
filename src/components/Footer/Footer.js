import React from 'react';
import styles from './Footer.module.css';
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


export default Footer;