import React from 'react';
import Recipe from './Recipe';
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
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
		flexGrow: 1,
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		overflow: 'hidden',
		backgroundColor: theme.palette.background.paper,
		marginBottom: 10,
		marginTop: 10,
		height: 200,
	},
	media: {
		height: 130,
	},
	icon: {
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
}));

const Favorites = () => {
	const classes = useStyles();
	const [keys, setKeys] = useState('');
	const storage = window.plugins.SharedPreferences.getInstance('savedRecipes');

	useEffect(() => {
		fetchData();
	}, [keys]);

	const fetchData = () => {
		// var storage = window.plugins.SharedPreferences.getInstance('savedRecipes');
		storage.keys(successCallback, errorCallback);
	};

	var successCallback = function (val) {
		setKeys(val);
	};
	var errorCallback = function (err) {
		console.error(err);
	};
	var successclearCallback = function (val) {
		console.log(val);
	};
	var errorclearCallback = function (err) {
		console.error(err);
	};

	const clear = () => {
		// var storage = window.plugins.SharedPreferences.getInstance('savedRecipes');
		storage.clear(successclearCallback, errorclearCallback);
	};
	const save = () => {
		// var storage = window.plugins.SharedPreferences.getInstance('savedRecipes');
		storage.put('yala', 'the king');
	};
	return (
		<div>
			<Button variant='contained' onClick={() => clear()}>
				clear
			</Button>
			<Button variant='contained' onClick={() => save()}>
				save
			</Button>

			<Box display='flex' height='70vh' alignItems='center'>
				{keys.length === 0 ? (
					<Typography variant='h4' gutterBottom className={classes.backgroundTitle} align='center'>
						There are no favorites recipes
					</Typography>
				) : (
					<div>
						{keys.map((key) => (
							<h6>
								{key} {storage.get(key, 'null', successclearCallback, errorclearCallback)}
							</h6>
						))}
					</div>
				)}
			</Box>
		</div>
	);
};

export default Favorites;
