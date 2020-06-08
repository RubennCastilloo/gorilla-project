import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

const responseOption = [
    {value: 'si', label: 'Si'},
    {value: 'no', label: 'No'},
    {value: 'prueba', label: 'Radio Noticias 860 Juarez'}
]

const NotaContenido = () => {
    return(
       
                    <div className="w-3/6 mr-1">
                            <div className="mb-2">
                                <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="titulo">
                                    Titulo
                                </label>
                                <input 
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="titulo"
                                    type="text"
                                    placeholder="Titulo Nota"
                                />
                            </div>

                            <div className="mb-2">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contenido">
                                    Contenido
                                </label>
                                <textarea 
                                    rows="25" cols="50"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="contenido"
                                    type="text"
                                    placeholder="Contenido"
                                />
                            </div>

                            <div className="flex">
                                <div className="w-1/2">
                                    <div className="mb-2">
                                    <label className="text-gray-700 text-sm font-bold mb-1" htmlFor="autor">
                                        Autor
                                    </label>
                                    <input 
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="autor"
                                        type="text"
                                        placeholder="Autor"
                                        />
                                    </div>
                                </div>

                                <div className="w-1/2">
                                    <div className="ml-2">
                                    <label className="text-gray-700 text-sm font-bold mb-1" htmlFor="destacada">
                                        Destacada
                                    </label>
                                    <Select 
                                        id="destacada"
                                        className=""
                                        options={ responseOption }
                                        components={animatedComponents}
                                        defaultValue={responseOption[1]}
                                        isMulti={false}
                                        placeholder="Busque el estado"
                                        noOptionsMessage={ () => "No hay resultados"}
                                    />
                                    </div>
                                </div>
                            </div>

                            <div className="flex">
                                <div className="w-1/3">
                                    <div className="ml-0">
                                        <label className="text-gray-700 text-sm font-bold mb-1" htmlFor="encuesta">
                                            Encuesta
                                        </label>
                                        <Select 
                                            id="encuesta"
                                            className=""
                                            options={ responseOption }
                                            components={animatedComponents}
                                            defaultValue={responseOption[1]}
                                            isMulti={false}
                                            placeholder="Busque el estado"
                                            noOptionsMessage={ () => "No hay resultados"}
                                        />
                                    </div>
                                </div>

                                <div className="w-1/3">
                                    <div className="ml-2">
                                        <label className="text-gray-700 text-sm font-bold mb-1" htmlFor="banner">
                                            Banner
                                        </label>
                                        <Select 
                                            id="banner"
                                            className=""
                                            options={ responseOption }
                                            components={animatedComponents}
                                            defaultValue={responseOption[1]}
                                            isMulti={false}
                                            placeholder="Busque el estado"
                                            noOptionsMessage={ () => "No hay resultados"}
                                        />
                                    </div>
                                </div>

                                <div className="w-1/3">
                                    <div className="ml-2">
                                        <label className="text-gray-700 text-sm font-bold mb-1" htmlFor="cartoon">
                                            Cartoon
                                        </label>
                                        <Select
                                            id="cartoon" 
                                            className=""
                                            options={ responseOption }
                                            components={animatedComponents}
                                            defaultValue={responseOption[1]}
                                            isMulti={false}
                                            placeholder="Busque el estado"
                                            noOptionsMessage={ () => "No hay resultados"}
                                        />
                                    </div>
                                </div>
                            </div>
                    </div>
    );
}

export default NotaContenido;