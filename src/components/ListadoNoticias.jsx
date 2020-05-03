import React,{Fragment}from 'react';
import Noticia from './Noticia';
import NoticiaPrincipal from './NoticiaPrincipal';
import PropTypes from 'prop-types';


const ListadoNoticias = ({noticias,noticiaonly}) => {
    
    return ( 
        <Fragment> 
             <div className="row">
                {noticiaonly.map(noticia=>(
                    <NoticiaPrincipal
                    key={noticia.url}
                    noticia={noticia}
                />
                ))}
            </div>
            
        <div className="row">
            {noticias.map(noticia=>(
                <Noticia
                key={noticia.url}
                noticia={noticia}
                />
            ))}
        </div>
        </Fragment>
     );
}
 
ListadoNoticias.propTypes={
    noticias:PropTypes.array.isRequired,
    noticiaonly:PropTypes.array.isRequired
}
export default ListadoNoticias;