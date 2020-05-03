import React,{Fragment} from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';


const Noticia = ({noticia}) => {
    //extraer datos:
    const{urlToImage,url,title,description,source}=noticia;

    const Image=styled.img`
        max-height:200px;
        height:100%;
    `;
    const SpanSub=styled.span`
        font-weight:bold;
    `;
    const Hh5 =styled.h5`
        font-weight:bold;
    `;

    const imagen=(urlToImage)?
            <div className="card-image">
                <Image src={urlToImage} alt={title}/>
                <span className="card-title"><SpanSub>{source.name}</SpanSub></span>
            </div>
    :null;

    const titulo= (title)? title.substring(0,60):title;
    const descripcion=(description)? description.substring(0,100):description;
    //console.log(descripcion);
    
    //console.log(noticia)
    const Carta= styled.div`
        height:502px;
    `;

  
    return (
    <Fragment>
        <div className="col s12 m6 l6">
            <Carta className="card">
                {imagen} 
                <div className="card-content">
                    <Hh5>{titulo}...</Hh5>
                    <p>{descripcion}...</p>
                </div>
                <div className="card-action">
                    <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="waves-effect waves-light btn"
                    >Ver noticia Completa</a>
                </div>
            </Carta>
        </div>
    </Fragment>
        );
}
 
Noticia.propTypes={
noticia:PropTypes.object.isRequired
}
export default Noticia;