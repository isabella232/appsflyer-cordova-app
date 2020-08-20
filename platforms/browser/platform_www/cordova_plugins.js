cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "id": "cordova-plugin-statusbar.statusbar",
        "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "file": "plugins/cordova-plugin-statusbar/src/browser/StatusBarProxy.js",
        "id": "cordova-plugin-statusbar.StatusBarProxy",
        "pluginId": "cordova-plugin-statusbar",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
        "id": "cordova-plugin-inappbrowser.inappbrowser",
        "pluginId": "cordova-plugin-inappbrowser",
        "clobbers": [
            "cordova.InAppBrowser.open"
        ]
    },
    {
        "file": "plugins/cordova-plugin-inappbrowser/src/browser/InAppBrowserProxy.js",
        "id": "cordova-plugin-inappbrowser.InAppBrowserProxy",
        "pluginId": "cordova-plugin-inappbrowser",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-awesome-shared-preferences/www/index.js",
        "id": "cordova-plugin-awesome-shared-preferences.SharedPreferences",
        "pluginId": "cordova-plugin-awesome-shared-preferences",
        "clobbers": [
            "window.plugins.SharedPreferences"
        ]
    },
    {
        "file": "plugins/cordova-plugin-appsflyer-sdk/www/appsflyer.js",
        "id": "cordova-plugin-appsflyer-sdk.appsflyer",
        "pluginId": "cordova-plugin-appsflyer-sdk",
        "clobbers": [
            "window.plugins.appsFlyer"
        ]
    },
    {
        "file": "plugins/cordova-plugin-appsflyer-sdk/www/AppsFlyerError.js",
        "id": "cordova-plugin-appsflyer-sdk.AppsFlyerError",
        "pluginId": "cordova-plugin-appsflyer-sdk",
        "clobbers": [
            "AppsFlyerError"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-statusbar": "2.4.3",
    "cordova-plugin-inappbrowser": "4.0.0",
    "cordova-plugin-awesome-shared-preferences": "0.1.0",
    "cordova-plugin-appsflyer-sdk": "5.4.30"
}
// BOTTOM OF METADATA
});