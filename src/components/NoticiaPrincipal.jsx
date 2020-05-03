import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';


const NoticiaPrincipal = ({noticia}) => {
    //console.log(noticias);
    const{urlToImage,url,title,description,source}=noticia;
   
    //console.log(title);
        
    
        // for (const key in title) {
        //     //if (noticia.hasOwnProperty(key)) {
        //         const element = noticia['title'];
        //         console.log(element.title);
        //     //}
        // }
      



        const imagen=(urlToImage)?
                <div className="card-image">
                    <img src={urlToImage} alt={title}/>
                    <span className="card-title">{source.name}</span>
                </div>
        :null;
    

    //console.log(imagen)



    //  noticias.map((noticia)=>{
    //         //console.log(noticia.title); 
    //         var titulos=noticia.title

    //  });
 
    const Cartaaction=styled.div`
    text-align:center;
    `;
    const Hh5 =styled.h5`
    font-weight:bold;
`;

    return (
        <div className="col s12 m12 l12">
        <div className="card">
            {imagen}
            <div className="card-content">
                <Hh5>{title}</Hh5>
                <p>{description}</p>
            </div>
            <Cartaaction className="card-action">
                <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="waves-effect waves-light btn"
                >Ver noticia Completa</a>
            </Cartaaction>
            </div>
    </div>
      );
}
 
NoticiaPrincipal.propType={
    noticia:PropTypes.object.isRequired
}
export default NoticiaPrincipal;