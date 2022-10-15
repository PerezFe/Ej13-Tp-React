
import React, {useState} from 'react'
import Error from './Error';


function Formulario({busqueda,setBusqueda,setConsultar}) {
    const {ciudad,pais} = busqueda;
    const [error,setError] = useState(false);
    const handleInput = e => {
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    const enviarFormulario = e => {
        e.preventDefault();
        if(ciudad.trim() ==='' || pais.trim() === ''){
            setError(true);
            return;
        }
        setError(false);
        setConsultar(true)
      

    }
    return (
        <form onSubmit={enviarFormulario}>
        {error && <Error descripcion="Todos los campos son obligatorios"/>}
            <div className="form-group my-3">
                <label htmlFor="ciudad">Ciudad:</label>
                <input 
                    type="text" 
                    id="ciudad"
                    name="ciudad"
                    placeholder="Escriba una ciudad..."
                    className="form-control"
                    value={ciudad}
                    onChange={handleInput}
                />
            </div>
            <div className="form-group my-3">
            <label htmlFor="pais" className='mx-4'>País</label>
                <select 
                    className="custom-select"
                    id="pais"    
                    name="pais"
                    value={pais}
                    onChange={handleInput}
                >
                    <option value="">--Seleccione un pais--</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                    <option value="BO">Bolivia</option>       
                </select>
            </div>
            <div className='text-center'>

            <input type="submit" className="btn btn-outline-dark btn-md btn-block btn-primary" value="Consultar"/>
            </div>
        </form>
    )
}

export default Formulario