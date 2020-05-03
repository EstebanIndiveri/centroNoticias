import React,{Fragment,useState,useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario'
import ListadoNoticias from './components/ListadoNoticias';
// import NoticiaPrincipal from './components/NoticiaPrincipal';

function App() {

  //definimos la categoria y noticias
  const[categoria,guardarCategoria]=useState('');
  const[noticia,guardarNoticia]=useState([]);
  const[noticiaonly,guardarNoticiaOnly]=useState([]);

  useEffect(()=>{
    const consultarAPI= async()=>{
      const ApiKey='e30554b98c364b69a3d2b445998dbfed';

      const url=`https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=${ApiKey}`;
      const urlAlone=`https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&pageSize=1&apiKey=${ApiKey}`;
      
      const respuesta=await fetch(url);

      const noticias=await respuesta.json();

      const respuestaOnly=await fetch(urlAlone);
      const noticiaOnly=await respuestaOnly.json();

      guardarNoticia(noticias.articles);

      guardarNoticiaOnly(noticiaOnly.articles);

      
    }
    consultarAPI();
  },[categoria])
 
  return (
    <Fragment>
      <Header
      titulo="Buscador de Noticias"
      />
      
      <div className="container grey lighten-5">
        <Formulario
        guardarCategoria={guardarCategoria}
        />
   
        
  
        <ListadoNoticias
        noticias={noticia}
        noticiaonly={noticiaonly}
        />
      </div>

    </Fragment>
  );
}

export default App;
