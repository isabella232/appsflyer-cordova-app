import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import Box from '@material-ui/core/Box';
import SnackBar from './SnackBar';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	backgroundTitle: {
		color: '#C5C5C8',
		margin: 'auto',
		textAlign: 'center',
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
	const { ingredients } = props;
	const classes = useStyles();
	const [data, setData] = useState([]);
	const [open, setOpenSnackBar] = useState(false);
	const [message, setMessage] = useState('');
	const targetUrl = 'http://www.recipepuppy.com/api/?i=';

	useEffect(() => {
		if (ingredients.length !== 0) {
			fetchData();
		} else {
			setData([]);
		}
	}, [ingredients]);

	const fetchData = () => {
		const options = {
			method: 'get',
			headers: { Authorization: 'OAuth2: token' },
		};

		window.cordova.plugin.http.sendRequest(
			targetUrl + ingredients,
			options,
			function (response) {
				var obj = JSON.parse(response.data);
				setData(obj.results);
			},
			function (response) {
				console.log(response.error);
			}
		);
	};

	const openSnackbar = (str) => {
		setMessage(str);
		setOpenSnackBar(true);
	};
	const handleCloseSnackBar = () => {
		setOpenSnackBar(false);
	};

	return (
		<div>
			{ingredients.length === 0 ? (
				<Box display='flex' height='50vh' alignItems='center'>
					<Typography variant='h4' gutterBottom className={classes.backgroundTitle} align='center'>
						Type ingredients to search for a recipe...
					</Typography>
				</Box>
			) : data.length !== 0 ? (
				<div style={{ height: '100%', marginBottom: 50 }}>
					{data.map((recipe) => (
						<Recipe title={recipe.title} thumbnail={recipe.thumbnail} ingredients={recipe.ingredients} href={recipe.href} userFeedback={openSnackbar} />
					))}
				</div>
			) : (
				<div style={{ position: 'relative' }}>
					<CircularProgress style={{ marginLeft: '45%', marginTop: '40%' }} />
				</div>
			)}
			<SnackBar open={open} message={message} close={handleCloseSnackBar} />
		</div>
	);
};

export default RecipesList;
