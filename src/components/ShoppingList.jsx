import React from 'react';
import List from '@material-ui/core/List';
import ShoppingListItem from './ShoppingListItem';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	backgroundTitle: {
		color: '#C5C5C8',
		margin: 'auto',
		textAlign: 'center',
	},
	root: {
		width: '100%',
		backgroundColor: theme.palette.background.paper,
	},
}));

const ShoppingList = () => {
	const classes = useStyles();
	const [data, setData] = useState([]);
	const localStorage = window.localStorage;

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = () => {
		var shoppingList = localStorage.getItem('shoppingList');
		if (shoppingList === null) {
			setData('');
		} else {
			shoppingList = JSON.parse(shoppingList);
			setData(shoppingList);
		}
	};

	const handleDeleteFromShoppingList = (key) => {
		var updatedArray = data.filter((x) => x !== key);
		setData(updatedArray);
		localStorage.setItem('shoppingList', JSON.stringify(updatedArray));
	};

	return (
		<div>
			{data.length === 0 ? (
				<Box display='flex' height='70vh' alignItems='center'>
					<Typography variant='h4' gutterBottom className={classes.backgroundTitle} align='center'>
						There are no items in the shopping list
					</Typography>
				</Box>
			) : (
				<List className={classes.root}>
					{data.map((key) => {
						return <ShoppingListItem title={key} remove={handleDeleteFromShoppingList} />;
					})}
				</List>
			)}
		</div>
	);
};

export default ShoppingList;
