import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

const AboutDialog = (props) => {
	const { open, close } = props;

	const handleClose = () => {
		close();
	};

	return (
		<Dialog aria-labelledby='simple-dialog-title' open={open} onClose={handleClose}>
			<DialogTitle id='simple-dialog-title'>{<img style={{ height: 50, margin: 10 }} src={'https://1z1euk35x7oy36s8we4dr6lo-wpengine.netdna-ssl.com/wp-content/uploads/2015/04/AppsFlyer-logo.png'} alt='{tile.title}' />}</DialogTitle>

			<DialogContent>
				<DialogContentText>This app was built with React & Cordova by the Appsflyer's SDK team in order to demonstrate a proper implementation of the Appsflyer's Cordova Plugin.</DialogContentText>
				<DialogContentText>Enjoy!</DialogContentText>
			</DialogContent>
		</Dialog>
	);
};

export default AboutDialog;
