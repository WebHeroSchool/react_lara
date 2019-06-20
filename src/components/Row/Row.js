import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Buttons from '../Buttons/Buttons';
import PropTypes  from 'prop-types';

class Row extends React.Component {

	componentDidMount(){
		let i = 0;
		this.timerID = setInterval(() => console.log('Interval ' + i++ ), 1000); 
	}

	componentWillUnmount () {
		clearInterval(this.timerID);
	}
	
	render() {

		const { item, onClickDone, onClickDelete } = this.props;

		return(
			<div>
				<Checkbox 
					value="checkedA" 
					checked={item.isDone} 
					onClick={() => 
					onClickDone(item.id)}
				/>
					{item.value} 
				<Buttons onClickDelete={onClickDelete} item={item} />
			</div>	
		)
	}
}

export default Row;

