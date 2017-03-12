const webpack           = require( 'webpack' );
const merge             = require( 'webpack-merge' );
const precss            = require( 'precss' );
const autoprefixer      = require( 'autoprefixer' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );

const paths        = require( '../paths' );
const sharedConfig = require( './shared' );


const prodConfig =
{
    module :
    {
        loaders :
        [
            {
                test    : /\.js$/,
                loader  : 'babel',
                include : paths.src,
                query   : { cacheDirectory : true }
            },

            {
                test    : /\.css$/,
                loader  : ExtractTextPlugin.extract( 'style', 'css!postcss' ),
                include : paths.styles
            }
        ]
    },

    postcss : () => [precss, autoprefixer],

    plugins :
    [
        new webpack.DefinePlugin( { 'process.env.NODE_ENV' : '"production"' } ),
        new webpack.optimize.UglifyJsPlugin( { compress : { warnings : false } } ),
        new ExtractTextPlugin( '../css/style.css' )
    ]
};


module.exports = merge( prodConfig, sharedConfig );
