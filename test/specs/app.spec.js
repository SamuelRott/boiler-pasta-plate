import main from 'app';


describe( 'App entry point', () =>
{
    // test render target
    const container = document.createElement( 'div' );

    it( 'should export a function', () =>
    {
        expect( main ).to.be.a( 'function' );
    } );


    it( 'should execute correctly', () =>
    {
        expect( main( container ) ).to.be.ok;
    } );

} );
