import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles((theme) => ({
	appBar: {
		position: 'relative',
	},
	title: {
		marginLeft: theme.spacing(2),
		flex: 1,
	},
	large: {
		width: theme.spacing(7),
		height: theme.spacing(7),
		margin: 10,
	},
}));

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction='up' ref={ref} {...props} />;
});

const RecipeCard = (props) => {
	const { open, handleClose } = props;
	const classes = useStyles();
	return (
		<div>
			<Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
				<AppBar className={classes.appBar} elevation={0} color='#000000'>
					<Toolbar>
						<IconButton edge='start' color='inherit' onClick={handleClose} aria-label='close'>
							<CloseIcon />
						</IconButton>
						<Typography variant='h6' className={classes.title}>
							Details
						</Typography>
					</Toolbar>
				</AppBar>
				<div>
					<Divider />
					<Avatar className={classes.large} alt={props.title} src={props.thumbnail} />
					<Divider />
					<Typography variant='h5' align='center'>
						{props.title}
					</Typography>
					<ListItemText primary='Ingredients:' secondary={props.ingredients} align='center' />
				</div>
			</Dialog>
		</div>
	);
};

export default RecipeCard;
