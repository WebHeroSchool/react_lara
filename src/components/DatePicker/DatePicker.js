import React from 'react';
import TextField from '@material-ui/core/TextField';

const DatePicker = ({ ymdDate }) => (
<div> 
	<TextField
		id="date"
		label="Check by date:"
		type="date"
        defaultValue={ymdDate}

		InputLabelProps={{
		shrink: true,
	}}
	/>
</div>);

export default DatePicker;

