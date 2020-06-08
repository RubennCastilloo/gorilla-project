import React from 'react';
import EstadoContext from '../../context/estados/EstadoContext';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

const responseOption = [
    {value: 'si', label: 'Si'},
    {value: 'no', label: 'No'},
    {value: 'prueba', label: 'Radio Noticias 860 Juarez'}
]

const NotaProgramas = () => {
    return(
        <div className="flex mt-2">
                            <div className="w-1/3">
                                <div className="ml-2">
                                    <label className="text-gray-700 text-sm font-bold mb-1" htmlFor="tipo">
                                        Tipo
                                    </label>
                                    <Select
                                        id="tipo" 
                                        className=""
                                        options={ responseOption }
                                        components={animatedComponents}
                                        isMulti={false}
                                        placeholder="Tipo"
                                        noOptionsMessage={ () => "No hay resultados"}
                                    />
                                    </div>
                            </div>

                            <div className="w-1/3">
                                <div className="ml-2">
                                    <label className="text-gray-700 text-sm font-bold mb-1" htmlFor="fuente">
                                        Fuente
                                    </label>
                                    <Select
                                        id="fuente" 
                                        className=""
                                        options={ responseOption }
                                        components={animatedComponents}
                                        isMulti={false}
                                        placeholder="Fuente"
                                        noOptionsMessage={ () => "No hay resultados"}
                                    />
                                </div>
                            </div>

                            <div className="w-1/3">
                                <div className="ml-2">
                                    <label className="text-gray-700 text-sm font-bold mb-1" htmlFor="programa">
                                        Programa
                                    </label>
                                    <Select
                                        id="programa" 
                                        className=""
                                        options={ responseOption }
                                        components={animatedComponents}
                                        isMulti={false}
                                        placeholder="Programa"
                                        noOptionsMessage={ () => "No hay resultados"}
                                    />
                                </div>
                            </div>
                    </div>
    );
}

export default NotaProgramas;