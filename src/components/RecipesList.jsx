import React, { useEffect, useState } from 'react';
import axios from 'axios';
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
	const { ingredients } = props;
	const classes = useStyles();
	const [data, setData] = useState([]);
	const [open, setOpenSnackBar] = useState(false);
	const [message, setMessage] = useState('');
	const proxyUrl = 'https://cors-anywhere.herokuapp.com/',
		targetUrl = 'http://www.recipepuppy.com/api/?i=';

	useEffect(() => {
		if (ingredients.length !== 0) {
			fetchData();
		} else {
			setData([]);
		}
	}, [ingredients]);

	const fetchData = () => {
		axios
			.get(proxyUrl + targetUrl + ingredients)
			.then((res) => {
				setData(res.data.results);
			})
			.catch((res) => {
				console.log(res);
			});
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
