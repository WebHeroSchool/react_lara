import React from 'react';

import styles from'./App.module.css';
import About from '../About/About';
import Todo from '../Todo/Todo';
import Contacts from '../Contacts/Contacts';

import Card from '@material-ui/core/Card';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PropTypes  from 'prop-types';

const App = () => 
	(<Router>
		<div className={styles.wrap}>
			<Card className={styles.wrapper}>
				<MenuList>
					<Link to='/' className={styles.link}><MenuItem> About me </MenuItem></Link>
					<Link to='/todo' className={styles.link}><MenuItem> Todo </MenuItem></Link>
					<Link to='/contacts' className={styles.link}><MenuItem> Contacts </MenuItem></Link>
				</MenuList>
			</Card>
			<Card className={styles.wrapperTwo}>
				<Route path='/' exact component={About} />
				<Route path='/todo' component={Todo} />
				<Route path='/contacts' component={Contacts} />
			</Card>
		</div>
	</Router>);

export default App; 
