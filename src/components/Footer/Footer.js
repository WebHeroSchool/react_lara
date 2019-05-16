import React from 'react';
import styles from './Footer.module.css';


const Footer = ({ count }) => (<div className={styles.Footer}> TODOs left: { count } </div>);

export default Footer;