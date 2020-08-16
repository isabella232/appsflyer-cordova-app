import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import SearchPage from './components/SearchPage';
import ShoppingList from './components/ShoppingList';
import Favorites from './components/Favorites';
import AboutDialog from './components/AboutDialog';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles((theme) => ({
	root: {
		width: 500,
	},
	title: {
		flexGrow: 1,
	},
	bottomNav: {
		width: '100%',
		position: 'fixed',
		bottom: 0,
	},
}));

function App() {
	const classes = useStyles();
	const [value, setValue] = React.useState('search');
	const [openDialog, setopenDialog] = React.useState(false);

	const handleOpenDialog = () => {
		setopenDialog(true);
	};
	const handleCloseDialog = () => {
		setopenDialog(false);
	};

	return (
		<div>
			<AppBar position='static' color='#FFFFFF' elevation={0} alignItems='center'>
				<Toolbar>
					<Typography variant='h6' className={classes.title} color='#000000' align='center'>
						Let's cook something!
					</Typography>
					<RestaurantIcon onClick={handleOpenDialog} />
				</Toolbar>
			</AppBar>
			<AboutDialog open={openDialog} close={handleCloseDialog} />

			<Router>
				<Route path='/' exact component={SearchPage} />
				<Route path='/list' component={ShoppingList} />
				<Route path='/favorites' component={Favorites} />

				<BottomNavigation
					value={value}
					onChange={(event, newValue) => {
						setValue(newValue);
					}}
					showLabels
					className={classes.bottomNav}>
					<BottomNavigationAction component={Link} to='/list' value='list' label='Shopping List' icon={<PlaylistAddCheckIcon />} />
					<BottomNavigationAction component={Link} to='/' value='search' label='Search' icon={<SearchIcon />} />
					<BottomNavigationAction component={Link} to='/favorites' value='favorites' label='Favorites' icon={<FavoriteIcon />} />
				</BottomNavigation>
			</Router>
		</div>
	);
}

export default App;
