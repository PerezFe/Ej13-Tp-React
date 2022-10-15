import React, {Fragment, useState, useEffect} from 'react'
import Formulario from './components/Formulario'
import Clima from './components/Clima'
import Error from './components/Error'
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles/App.css'
import { Container } from 'react-bootstrap'
function App() {
  const [busqueda, setBusqueda] = useState({
    ciudad:'',
    pais:'',
  });
  const {ciudad,pais} = busqueda;

  const [consultar,setConsultar] = useState(false);
  const [data, setData] = useState({}); 
  const [error, setError] = useState(false);

  useEffect(()=> {
    const consultarAPI = async() => {
      if(consultar){
        let keyAPI = `eaed9e10df601aab920b0f2f1e13df89`;
        let urlAPI = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${keyAPI}`;
        let response = await fetch(urlAPI);
        let data = await response.json(); 
        setData(data);
        setConsultar(false);

        
        if(data.cod === '404')
          setError(true);
        else
          setError(false);  
        
        console.log(data)

        
        if(data.cod === "404"){
          setError(true);
        }else{
          setError(false);
        }
      }
    };
    consultarAPI();
  },[consultar]);

  let componente;
  if(error) {
    componente = <Error descripcion = {data.message}/> ;
  }
  else{
    componente = <Clima data={data}/>
  }
  return (
    <Container>
      <div className="row">
        <div className="col-md-6 col-sm-12 mt-3">
          <h3 className="text-center">Consultar Clima</h3>
          <hr/>
          <Formulario 
            busqueda={busqueda}
            setBusqueda={setBusqueda}
            setConsultar={setConsultar}
          />
        </div>
        <div className="col-md-6 col-sm-12">
          
          {componente}
        </div>
      </div>
    </Container>
  );
}

export default App;
