import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { useState, useEffect } from 'react';

const ShoppingListItem = (props) => {
	const { title, remove } = props;
	const [checked, setChecked] = useState(0);
	const labelId = `checkbox-list-label-${title}`;
	const localStorage = window.localStorage;

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = () => {
		var isChecked = localStorage.getItem(title);
		if (isChecked === '1') {
			setChecked(1);
		} else {
			setChecked(0);
		}
	};

	const handleToggle = () => {
		if (checked === 0) {
			setChecked(1);
			localStorage.setItem(title, '1');
		} else {
			setChecked(0);
			localStorage.setItem(title, '0');
		}
	};

	return (
		<div>
			<ListItem key={title} role={undefined} dense button onClick={handleToggle}>
				<ListItemIcon>
					<Checkbox edge='start' checked={checked === 1} tabIndex={-1} color='primary' disableRipple inputProps={{ 'aria-label': labelId }} />
				</ListItemIcon>
				<ListItemText id={labelId} primary={title} />
				<ListItemSecondaryAction>
					<IconButton edge='end' aria-label='comments'>
						<DeleteIcon onClick={() => remove(title)} />
					</IconButton>
				</ListItemSecondaryAction>
			</ListItem>
		</div>
	);
};

export default ShoppingListItem;
