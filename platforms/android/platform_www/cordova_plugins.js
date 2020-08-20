cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-appsflyer-sdk.appsflyer",
      "file": "plugins/cordova-plugin-appsflyer-sdk/www/appsflyer.js",
      "pluginId": "cordova-plugin-appsflyer-sdk",
      "clobbers": [
        "window.plugins.appsFlyer"
      ]
    },
    {
      "id": "cordova-plugin-appsflyer-sdk.AppsFlyerError",
      "file": "plugins/cordova-plugin-appsflyer-sdk/www/AppsFlyerError.js",
      "pluginId": "cordova-plugin-appsflyer-sdk",
      "clobbers": [
        "AppsFlyerError"
      ]
    },
    {
      "id": "cordova-plugin-awesome-shared-preferences.SharedPreferences",
      "file": "plugins/cordova-plugin-awesome-shared-preferences/www/index.js",
      "pluginId": "cordova-plugin-awesome-shared-preferences",
      "clobbers": [
        "window.plugins.SharedPreferences"
      ]
    },
    {
      "id": "cordova-plugin-inappbrowser.inappbrowser",
      "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
      "pluginId": "cordova-plugin-inappbrowser",
      "clobbers": [
        "cordova.InAppBrowser.open"
      ]
    },
    {
      "id": "cordova-plugin-statusbar.statusbar",
      "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
      "pluginId": "cordova-plugin-statusbar",
      "clobbers": [
        "window.StatusBar"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-appsflyer-sdk": "5.4.30",
    "cordova-plugin-awesome-shared-preferences": "0.1.0",
    "cordova-plugin-inappbrowser": "4.0.0",
    "cordova-plugin-statusbar": "2.4.3",
    "cordova-plugin-whitelist": "1.3.4"
  };
});