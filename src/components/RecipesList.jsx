import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Recipe from './Recipe';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
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

const RecipesList = (props) => {
	const classes = useStyles();
	const [data, setData] = useState([]);
	const [favorites, setFavorites] = useState([]);
	const storage = window.plugins.SharedPreferences.getInstance('savedRecipes');
	const proxyUrl = 'https://cors-anywhere.herokuapp.com/',
		targetUrl = 'http://www.recipepuppy.com/api/?i=';

	useEffect(() => {
		fetchData();
	}, [props.ingredients]);

	const fetchData = () => {
		axios
			.get(proxyUrl + targetUrl + props.ingredients)
			.then((res) => {
				storage.keys(successCallback, errorCallback);
				setData(res.data.results);
			})
			.catch((res) => {
				console.log('Problem');
			});
	};

	const successCallback = (keys) => {
		setFavorites(keys);
	};

	const errorCallback = function (err) {
		console.error(err);
	};

	return (
		<div>
			{props.ingredients.length === 0 ? (
				<Box display='flex' height='70vh' alignItems='center'>
					<Typography variant='h4' gutterBottom className={classes.backgroundTitle} align='center'>
						Type ingredients to search for a recipe...
					</Typography>
				</Box>
			) : (
				<div>
					{data.map((recipe) => (
						<Recipe title={recipe.title} thumbnail={recipe.thumbnail} ingredients={recipe.ingredients} href={recipe.href} favorite={false} />
					))}
				</div>
			)}
		</div>
	);
};

export default RecipesList;
