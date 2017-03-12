var webpack = require( 'webpack' );
var merge   = require( 'webpack-merge' );

var paths        = require( '../paths' );
var sharedConfig = require( '../webpack/shared' );


var testConfig =
{
    devtool : 'eval-source-map',

    module :
    {
        preLoaders :
        [
            {
                test    : /\.js$/,
                loader  : 'babel',
                include : paths.test
            },

            {
                test    : /\.js$/,
                loader  : 'isparta',
                include : paths.src
            }
        ],

        loaders :
        [
            {
                test    : /\.css$/,
                loader  : 'ignore',
                include : paths.styles
            }
        ]
    },

    plugins :
    [
        new webpack.DefinePlugin( { 'process.env.NODE_ENV' : '"development"' } )
    ]
};


module.exports = merge( testConfig, sharedConfig );
