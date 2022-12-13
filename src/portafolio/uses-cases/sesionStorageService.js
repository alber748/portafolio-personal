

export class session{
    retrive  = ( clave ) =>{ return JSON.parse( sessionStorage.getItem( clave )) };
    insert   = ( clave, item ) => { sessionStorage.setItem( clave, JSON.stringify( item )) } 
}
