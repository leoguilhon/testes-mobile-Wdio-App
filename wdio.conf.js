const {join} = require('path')

exports.config = {
    hostname: '127.0.0.1',
    port: 4723,
    path: '/wd/hub',
    specs: [
        './test/specs/**/*.spec.js'
    ],
    framework: 'mocha',
    capabilities:[{
        "platformName": "Android",
        "platformVersion": "12.0",
        "deviceName": "wdio-qe",
        "automationName": "UiAutomator2",
        "app": join(process.cwd(), './app/android/wdio-app.apk'),
        "appWaitActivity": '*'
    }]
}