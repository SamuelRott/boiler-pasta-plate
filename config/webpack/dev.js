const webpack       = require( 'webpack' );
const merge         = require( 'webpack-merge' );
const precss        = require( 'precss' );
const postcssImport = require( 'postcss-partial-import' );

const paths        = require( '../paths' );
const sharedConfig = require( './shared' );
const devServer    = require( '../devServer' );


// adds hot reloading for CSS files
// hopefully precss will deal with it by itself at some point
const reloadCSS = webpack => postcssImport( { addDependencyTo : webpack } );


const devConfig =
{
    devServer : devServer,

    devtool : 'eval-source-map',

    entry :
    [
        `webpack-dev-server/client?http://${ devServer.host }:${ devServer.port }`,
        'webpack/hot/only-dev-server'
    ],

    module :
    {
        loaders :
        [
            {
                test    : /\.js$/,
                loaders : ['react-hot', 'babel'],
                include : paths.src
            },

            {
                test    : /\.css$/,
                loaders : ['style', 'css', 'postcss'],
                include : paths.styles
            }
        ]
    },

    postcss : webpack => [reloadCSS( webpack ), precss],

    plugins :
    [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin( { 'process.env.NODE_ENV' : '"development"' } )
    ]
};


module.exports = merge( devConfig, sharedConfig );
