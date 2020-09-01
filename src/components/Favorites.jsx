import React from 'react';
import FavoriteRecipe from './FavoriteRecipe';
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
	const localStorage = window.localStorage;

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = () => {
		var recipes = localStorage.getItem('savedRecipes');
		if (recipes === null) {
			setKeys('');
		} else {
			recipes = JSON.parse(recipes);
			setKeys(recipes);
		}
	};

	const handleDeleteFromFavorites = (key) => {
		var updatedArray = keys.filter((x) => x !== key);
		setKeys(updatedArray);
		localStorage.setItem('savedRecipes', JSON.stringify(updatedArray));
	};

	return (
		<div>
			{keys.length === 0 ? (
				<Box display='flex' height='70vh' alignItems='center'>
					<Typography variant='h4' gutterBottom className={classes.backgroundTitle} align='center'>
						There are no favorites recipes
					</Typography>
				</Box>
			) : (
				<div style={{ height: '100%', marginBottom: 50 }}>
					{keys.map((key) => (
						<FavoriteRecipe title={key} removeFromFavorites={handleDeleteFromFavorites} />
					))}
				</div>
			)}
		</div>
	);
};

export default Favorites;
