import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const SnackBar = (props) => {
	const { message, open, close } = props;

	return (
		<Snackbar
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'left',
			}}
			open={open}
			autoHideDuration={3000}
			onClose={close}
			message={message}
			action={
				<React.Fragment>
					<IconButton size='small' aria-label='close' color='inherit' onClick={close}>
						<CloseIcon fontSize='small' />
					</IconButton>
				</React.Fragment>
			}
		/>
	);
};

export default SnackBar;
