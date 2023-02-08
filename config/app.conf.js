/**
 * Configuration file for running Native App tests
 */

const {config} = require('./base.conf')

exports.config = {
    ...config,
    specs: [
        './tests/app/features/*.feature'
    ],
    exclude: [
       
    ],
    maxInstances: 15,
    capabilities: [{
        platformName:'android',
        "appium:deviceName":'Google Pixel 6',
        "appium:platformVersion":"12.0",
        "appium:app": process.env.MASTERS_ANDROID_APP,
        'bstack:options' : {
            "appiumVersion" : "2.0.0",
            "buildName" : `IBM Masters App Regression - ${new Date().toDateString()}`,  
            "projectName":"Browserstack Test"
        },
    },{
        platformName: 'iOS',
        "appium:deviceName": 'iPhone 13',
        "appium:platformVersion":"15.0",
        "appium:app": process.env.MASTERS_IOS_APP,
        'bstack:options' : {
            "appiumVersion" : "2.0.0",  
            "buildName" : `IBM Masters App Regression - ${new Date().toDateString()}`,
            "projectName":"Browserstack Test"
        },
    }]
}
