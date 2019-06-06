import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes  from 'prop-types';



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

DatePicker.propTypes = {
	defaultValue: PropTypes.func
}

export default DatePicker;

