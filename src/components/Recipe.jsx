import React, { useState, useEffect } from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
	icon: {
		textAlign: 'center',
	},
	large: {
		width: theme.spacing(7),
		height: theme.spacing(7),
		marginRight: 20,
	},
}));

const Recipe = (props) => {
	const { title, thumbnail, ingredients, href, userFeedback } = props;
	const classes = useStyles();
	const [favorite, setfavorite] = useState(false);
	const localStorage = window.localStorage;

	useEffect(() => {
		var recipes = localStorage.getItem(title);
		if (recipes === null) {
			setfavorite(false);
		} else {
			setfavorite(true);
		}
	}, []);

	const handleOpenRecipeUrl = (url) => {
		window.open(url, '_blank');
	};

	const successTrackEvent = (success) => {
		//do something after the event registered in appsflyer
		console.log(success);
	};
	const failureTrackEvent = (failure) => {
		//do something after the registration failed
		console.log(failure);
	};

	const handleSave = () => {
		localStorage.setItem(title, JSON.stringify([thumbnail, ingredients, href]));
		setfavorite(true);
		saveArrayToStorage('savedRecipes', title);
		userFeedback(`${title} added to favorites!`);
		var eventName = 'af_added_to_favorites'; //the event name as it will appear on the dashboard. for recommended names visit appsflyer's support site.
		var eventValues = { af_content_id: title, af_currency: 'USD', af_revenue: '2' };
		window.plugins.appsFlyer.trackEvent(eventName, eventValues, successTrackEvent, failureTrackEvent); //register the event on appsflyer's server
	};

	const handleDelete = () => {
		removeFromFavoritesArray();
		localStorage.removeItem(title);
		setfavorite(false);
		userFeedback(`${title} removed to favorites!`);
	};

	const removeFromFavoritesArray = () => {
		var favoritesRecipes = JSON.parse(localStorage.getItem('savedRecipes'));
		var index = favoritesRecipes.indexOf(title);
		favoritesRecipes.splice(index, 1);
		localStorage.setItem('savedRecipes', JSON.stringify(favoritesRecipes));
	};
	const saveArrayToStorage = (arrayOnStorage, el) => {
		var arr = JSON.parse(localStorage.getItem(arrayOnStorage));
		if (arr === null) {
			arr = [];
		}
		arr.push(el);
		localStorage.setItem(arrayOnStorage, JSON.stringify(arr));
	};

	const handleAddToTheShoppingCart = (str) => {
		userFeedback('Added to shopping cart!');
		str.split(', ').map((el) => {
			saveArrayToStorage('shoppingList', el);
			localStorage.setItem(el, '0');
		});
		var eventName = 'af_added_to_cart'; //the event name as it will appear on the dashboard. for recommended names visit appsflyer's support site.
		var eventValues = { af_content_id: ingredients };
		window.plugins.appsFlyer.trackEvent(eventName, eventValues, successTrackEvent, failureTrackEvent); //register the event on appsflyer's server
	};

	return (
		<div>
			<List dense={true}>
				<ListItem>
					<Grid item xs={3}>
						<ListItemAvatar>
							<Avatar className={classes.large} alt={title} src={thumbnail} />
						</ListItemAvatar>
					</Grid>
					<Grid item xs={7}>
						<ListItemText primary={title} secondary={ingredients} onClick={() => handleOpenRecipeUrl(href)} />
					</Grid>
					<Grid item xs={3}>
						<ListItemSecondaryAction>
							<IconButton edge='end' aria-label='delete'>
								<AddShoppingCartIcon onClick={() => handleAddToTheShoppingCart(ingredients)} />
							</IconButton>
							<IconButton edge='end' aria-label='delete'>
								{favorite ? <FavoriteIcon fontSize='large' style={{ color: '#FF9134' }} onClick={() => handleDelete()} /> : <FavoriteBorderIcon className={classes.icon} fontSize='large' style={{ color: '#C2C2C2' }} onClick={() => handleSave()} />}
							</IconButton>
						</ListItemSecondaryAction>
					</Grid>
				</ListItem>
			</List>
		</div>
	);
};

export default Recipe;
