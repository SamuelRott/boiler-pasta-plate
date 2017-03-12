// require all `test/specs/**/*.spec.js`
const testsContext = require.context( './specs', true, /spec\.js$/);

testsContext.keys().forEach( testsContext );

// require all `src/**/*.js`
const componentsContext = require.context( '../src/', true, /\.js$/ );

componentsContext.keys().forEach( componentsContext );
