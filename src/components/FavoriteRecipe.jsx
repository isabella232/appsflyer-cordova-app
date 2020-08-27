import React, { useState, useEffect } from 'react';
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
	large: {
		width: theme.spacing(7),
		height: theme.spacing(7),
		marginRight: 20,
	},
}));

const FavoriteRecipe = (props) => {
	const { title, removeFromFavorites } = props;
	const classes = useStyles();
	const [recipeData, setrecipeData] = useState('');
	const localStorage = window.localStorage;

	useEffect(() => {
		var data = localStorage.getItem(title);
		if (data !== null) {
			data = JSON.parse(data);
			setrecipeData(data);
		}
	}, [title]);

	const handleOpenRecipeUrl = (url) => {
		window.open(url, '_blank');
	};

	return (
		<div>
			<List dense={true}>
				<ListItem>
					<ListItemAvatar>
						<Avatar className={classes.large} alt={title} src={recipeData[0]} />
					</ListItemAvatar>
					<ListItemText primary={title} secondary={recipeData[1]} onClick={() => handleOpenRecipeUrl(recipeData[2])} />
					<ListItemSecondaryAction>
						<IconButton edge='end' aria-label='delete'>
							<FavoriteIcon fontSize='large' style={{ color: '#FF9134' }} onClick={() => removeFromFavorites(title)} />
						</IconButton>
					</ListItemSecondaryAction>
				</ListItem>
			</List>
		</div>
	);
};

export default FavoriteRecipe;
