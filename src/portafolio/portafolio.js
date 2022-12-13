import { App as html } from './app-html'
import { cambiarSlider } from './uses-cases/cambiarSlider';
import { session as Session } from './uses-cases/sesionStorageService';


const session = new Session();

!session.retrive( 'intervalState' ) ? session.insert( 'intervalState', true ) : console.log( 'El intervalo ya fue inicializado' )


export let intervalActive =  session.retrive( 'intervalState' );

export const estadoInterval = () =>{
    console.log( 'Cambiando Estado' )
    intervalActive = false;
}

export const intervaloCambioSlider = ( sliders ) => {

    setInterval(() => {    
        if( !session.retrive( 'intervalState' ) ) return   
        cambiarSlider( sliders  )
    }, 4000);

}

export const AppPortafolio = () => {

    (() => {
        const app     = document.createElement( 'div' );
        app.innerHTML = html;
        document.querySelector( '#app' ).append( app );
    })();

    const arrows  = document.querySelectorAll( '.arrow' );
    const sliders = document.querySelectorAll( '.slider-element' );

    arrows.forEach( arrow => {
        arrow.addEventListener( 'click', ( event )=>{
            cambiarSlider( sliders, event.target )
        } )
    });

    const cambioAutomaticoSlider = ( sliders ) => {
        intervaloCambioSlider( sliders );
    }

    cambioAutomaticoSlider( sliders );
}
