import React from 'react';
import TextField from '@material-ui/core/TextField';


const DatePicker = () => (<div> 
	<TextField
		id="date"
		label="Check by date:"
		type="date"
		defaultValue="2019-05-11"
		InputLabelProps={{
		shrink: true,
	}}
	/>
</div>);

export default DatePicker;