import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IngredientList from './IngredientsList';
import RecipesList from './RecipesList';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
	searchBar: {
		width: '100%',
	},
	backgroundTitle: {
		color: '#C5C5C8',
		margin: 20,
	},
}));

const SearchPage = () => {
	const [ingredients, setIngredients] = React.useState([]);
	const [search, setsearch] = React.useState('');

	const classes = useStyles();

	const handleSearch = () => {
		if (search.length !== 0) {
			setIngredients((ingredient) => [...ingredients, search]);
			setsearch('');
		}
	};

	const handleChange = (e) => {
		setsearch(e.target.value);
	};

	const handleDelete = (item) => {
		var updatedArray = ingredients.filter((x) => x !== item);
		setIngredients(updatedArray);
	};

	return (
		<div>
			<Box display='flex' alignItems='center' margin={1}>
				<TextField
					id='outlined-search'
					value={search}
					className={classes.searchBar}
					onChange={handleChange}
					InputProps={{
						endAdornment: (
							<InputAdornment>
								<IconButton onClick={handleSearch}>
									<SearchIcon />
								</IconButton>
							</InputAdornment>
						),
					}}
					label='Type an Ingredient'
					type='search'
					variant='outlined'
				/>
			</Box>
			<IngredientList ingredients={ingredients} deleteFunction={handleDelete} />
			<RecipesList ingredients={ingredients} />
		</div>
	);
};

export default SearchPage;
