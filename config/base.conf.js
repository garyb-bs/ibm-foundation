exports.config = {
    hostname: 'hub-cloud.browserstack.com',
    port: 443,
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,
    logLevel: 'error',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    services: ['browserstack'],

    framework: 'cucumber',
    reporters: ['spec',['allure', {outputDir: 'allure-results'}]],
    autoCompileOpts: {
        autoCompile: true,
        // see https://github.com/TypeStrong/ts-node#cli-and-programmatic-options
        // for all available options
        tsNodeOpts: {
            transpileOnly: true,
            project: './tsconfig.json'
        }
    },
    cucumberOpts: {
        require: ['./tests/**/steps/**/*.steps.js'],
        // require: ['./tests/**/steps/**/*.steps.ts'],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        snippets: true,
        source: true,
        strict: false,
        tagExpression: '',
        timeout: 60000,
        ignoreUndefinedDefinitions: false
    }
}
