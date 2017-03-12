module.exports = function run( config )
{
    config.set( {

        basePath : '../..',

        singleRun : true,

        port : 9876,

        browsers : ['PhantomJS'],

        frameworks :
        [
            'mocha',
            'chai',
            'chai-dom',
            'sinon-chai'
        ],

        files :
        [
            'test/index.js'
        ],

        preprocessors :
        {
            'test/index.js' : ['webpack', 'sourcemap']
        },

        reporters :
        [
            'mocha',
            'coverage'
        ],

        webpack : require( '../webpack/test' ),

        webpackMiddleware :
        {
            noInfo : true
        },

        coverageReporter :
        {
            type : 'text-summary'
        }

    } );
};
