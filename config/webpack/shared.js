const paths    = require( '../paths' );


module.exports =
{
    entry :
    [
        `${ paths.src }/index.js`
    ],

    output :
    {
        path       : `${ paths.public }/js`,
        publicPath : '/js',
        filename   : 'bundle.js',
        library    : 'app',
    },

    resolve :
    {
        extensions : ['', '.js']
    }
};
