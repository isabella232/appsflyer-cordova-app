import React, { useState } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
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
	},
	large: {
		width: theme.spacing(7),
		height: theme.spacing(7),
		marginRight: 20,
	},
}));

const Recipe = (props) => {
	const classes = useStyles();
	const [favorite, setfavorite] = useState(props.favorite);
	const [open, setOpen] = useState(false);
	const [message, setMessage] = useState('');

	const handleOpenRecipe = (url) => {
		window.open(url, '_blank');
	};

	const handleClose = () => {
		setOpen(false);
	};
	const handleSave = () => {
		setfavorite(true);
		var storage = window.plugins.SharedPreferences.getInstance('savedRecipes');
		storage.put(props.title, JSON.stringify([props.thumbnail, props.ingredients, props.href]), handleSaveSuccess, handleSaveFailure);
	};

	const handleDelete = () => {
		setfavorite(false);
		var storage = window.plugins.SharedPreferences.getInstance('savedRecipes');
		storage.del(props.title, handleSaveSuccess, handleSaveFailure);
	};

	const handleSaveSuccess = () => {
		// setfavorite(true);
		// setMessage('yesss');
		// setOpen(true);
	};
	const handleSaveFailure = () => {
		// setfavorite(false);
		// setMessage('noo..');
		// setOpen(true);
	};

	return (
		<div>
			<List dense={true}>
				<ListItem>
					<ListItemAvatar>
						<Avatar className={classes.large} alt={props.title} src={props.thumbnail} />
					</ListItemAvatar>
					<ListItemText primary={props.title} secondary={props.ingredients} onClick={() => handleOpenRecipe(props.href)} />
					{/* <ListItemText primary={props.title} secondary={favorite} onClick={() => handleOpenRecipe(props.href)} /> */}
					<ListItemSecondaryAction>
						<IconButton edge='end' aria-label='delete'>
							{favorite ? <FavoriteIcon fontSize='large' style={{ color: '#FF9134' }} onClick={() => handleDelete()} /> : <FavoriteBorderIcon className={classes.icon} fontSize='large' style={{ color: '#C2C2C2' }} onClick={() => handleSave()} />}
						</IconButton>
					</ListItemSecondaryAction>
				</ListItem>
			</List>
			<Snackbar anchorOrigin={('top', 'center')} open={open} autoHideDuration={3000} onClose={handleClose}>
				{message}
			</Snackbar>
		</div>
	);
};

export default Recipe;
