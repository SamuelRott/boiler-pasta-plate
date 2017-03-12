module.exports =
{
    host : '0.0.0.0',
    port : 8000,

    contentBase : require( './paths' ).public.split( '/' ).pop(),

    quiet  : false,
    noInfo : false,
    hot    : true,

    historyApiFallback : true,

    stats :
    {
        colors       : true,
        assets       : false,
        version      : false,
        hash         : false,
        timings      : false,
        chunks       : false,
        chunkModules : false
    },

    // proxy :
    // {
    //     // to avoid conflicts in dev mode, block any previously built prod CSS
    //     '/css/style.css' :
    //     {
    //         target     : 'http://localhost/null',
    //         ignorePath : true
    //     }
    // }
};
