import React from 'react';
import Chip from '@material-ui/core/Chip';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		justifyContent: 'center',
		flexWrap: 'wrap',
		listStyle: 'none',
		padding: theme.spacing(0.5),
		margin: 0,
	},
	chip: {
		margin: theme.spacing(0.5),
	},
}));

const IngredientsList = (props) => {
	const classes = useStyles();

	return (
		<div>
			{props.ingredients.length !== 0 ? <Divider variant='middle' /> : null}
			<Box component='ul' className={classes.root}>
				{props.ingredients.map((data) => {
					return (
						<li key={data.key}>
							<Chip label={data} onDelete={() => props.deleteFunction(data)} className={classes.chip} />
						</li>
					);
				})}
			</Box>
			{props.ingredients.length !== 0 ? <Divider variant='middle' /> : null}
		</div>
	);
};

export default IngredientsList;
