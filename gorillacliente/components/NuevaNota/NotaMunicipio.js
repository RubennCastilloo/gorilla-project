import React, { useContext, useEffect, useState} from 'react';
import EstadoContext from '../../context/estados/EstadoContext';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';


const animatedComponents = makeAnimated();


const NotaMunicipio = () => {

    const [ municipios, setMunicipios ] = useState([]);

    const estadoContext = useContext(EstadoContext);

    const {agregarMunicipio} = useContext(EstadoContext);


    useEffect(() => {
        agregarMunicipio(municipios);
    }, [municipios]);

    const {municipio} = estadoContext;
    // console.log(municipio.municipios);

    const seleccionarMunicipio = municipios => {
        setMunicipios(municipios.value)
    }
    return(
        <>
            <div className="w-1/2">
                            <div className="ml-4">
                                <label className=" text-gray-700 text-sm font-bold" htmlFor="municipio">
                                    Municipio
                                </label>
                                <Select
                                    id="municipio" 
                                    className=""
                                    options={ municipio.municipios }
                                    components={animatedComponents}
                                    isMulti={false}
                                    placeholder="Buscar"
                                    noOptionsMessage={ () => "No hay resultados"}
                                    onChange={opcion => seleccionarMunicipio(opcion)}
                                    getOptionLabel={opciones => opciones.label}
                                    getOptionValue={opciones => opciones.value}
                                />
                            </div>
                        </div>
            </>
    );
}

export default NotaMunicipio;