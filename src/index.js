import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//Appsflyer plugin initialization
//IMPORTANT: use the "initSdk" inside "onDeviceReady"
document.addEventListener('deviceready', onDeviceReady.bind(this), false);

function onDeviceReady() {
	// Success callback for init SDK
	var handleSuccessInit = function (success) {
		console.log(success);
	};
	// Failure callback for init SDK
	var handleFailureInit = function (failure) {
		console.log(failure);
	};
	var options = {
		devKey: 'Us4Gm2SnJghcuoev846Qed', //AppsFlyer devkey
		isDebug: true,
		onInstallConversionDataListener: true,
		appId: '123336789',
	};
	window.plugins.appsFlyer.initSdk(options, handleSuccessInit, handleFailureInit);

	ReactDOM.render(
		<React.StrictMode>
			<App />
		</React.StrictMode>,
		document.getElementById('root')
	);

	// If you want your app to work offline and load faster, you can change
	// unregister() to register() below. Note this comes with some pitfalls.
	// Learn more about service workers: https://bit.ly/CRA-PWA
	serviceWorker.unregister();
}
