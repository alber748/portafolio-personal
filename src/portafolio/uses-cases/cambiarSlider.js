import { estadoInterval, intervalActive, intervaloCambioSlider } from "../portafolio";
import { session as Session } from "./sesionStorageService";

const session = new Session();

/**
 * 
 * @param { HTMLElement [] } sliders Lista de Sliders
 * @param { HTMLElement } target Flecha que recibio el click
 */
export const cambiarSlider = ( sliders, target = null ) => {
    if( !sliders) throw new Error ( 'Ambos parametros son obligatorios' );
    if( target  ){
        let param = 0;
        target.getAttribute( 'id' ) == 'btn-left' ? param = 1 : param = -1;
        cambiarClasesSlider( sliders, econtrarIDaMostrar( param ));
        session.insert( 'intervalState', false );
        setTimeout(() => {
            session.insert( 'intervalState', true );
        }, 6000);

    }else {
        cambiarClasesSlider( sliders, econtrarIDaMostrar( -1 ));
    }

}

/**
 * 
 * @param { HTMLElement[] } sliders 
 * @param {Int} id 
 */
const cambiarClasesSlider = ( sliders, id ) => {
    sliders.forEach( slider => {
        slider.classList.remove( 'sld-active' );
        if( slider.getAttribute( 'data-id' ) == id ){
            slider.classList.add( 'sld-active' );
        }
    })
}

/**
 * 
 * @param {Int} param 
 * @returns ID del elemento a activar
 */
const econtrarIDaMostrar = ( param ) => {
    let id       = 0;      
    let idSlider = parseInt( document.querySelector( '.sld-active' ).getAttribute( 'data-id' ));
    param === 1 ?(idSlider === 1 ? id = 3 : id = idSlider - ( param )):(idSlider === 3 ? id = 1 : id = idSlider - ( param ));

    return id;
}