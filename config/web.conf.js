const _ = require("lodash")
const timeStamp = new Date().getTime()
const {config} = require('./base.conf')
//config.cucumberOpts.tagExpression = "@Sample"
exports.config = {
    ...config,
    specs: [
        // './tests/web/features/*'
        './tests/web/features/site-search.feature'
    ],
    maxInstances: 1,
    capabilities: [{
        'bstack:options': {
            'projectName': 'BrowserStack',
            'buildName': `IBM Foundation Regression - ${new Date().toDateString()}`,
            'debug': true,
            'networkLogs': true,
            'video': true,
            'maskCommands': 'setValues, getValues, setCookies, getCookies',
            'os': 'Windows',
            'osVersion': '10'
        },
        browserName: 'Chrome',
        browserVersion: 'latest',
        acceptInsecureCerts: true
    }],
    baseUrl: 'https://bstackdemo.com/',
    services: ['browserstack'],
    afterScenario: async (world, result) => {
        if (!result.passed) {
            await browser.takeScreenshot()
        }
    }
}
