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
		margin: 20,
	},
	root: {
		width: '100%',
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper,
	},
}));

const ShoppingList = () => {
	const classes = useStyles();
	const [data, setData] = useState([]);
	const storage = window.plugins.SharedPreferences.getInstance('shoppingList');

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = () => {
		storage.keys(successCallback, errorCallback);
	};

	const successCallback = function (val) {
		setData(val);
	};
	const errorCallback = function (err) {
		console.error(err);
	};

	const handleDeleteFromFavorites = (key) => {
		storage.del(key, errorCallback, errorCallback);
		var updatedArray = data.filter((x) => x !== key);
		setData(updatedArray);
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
						return <ShoppingListItem title={key} remove={handleDeleteFromFavorites} />;
					})}
				</List>
			)}
		</div>
	);
};

export default ShoppingList;
