import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

const seccion = [
    {value: "", label: 'Seleccionar'},
    {value: "Cultura", label: 'Cultura'},
	{value: "Deportes", label: 'Deportes'},
    {value: "Local", label: 'Local'},
	{value: "Nacional", label: 'Nacional'},
	{value: "Policiaca", label: 'Policiaca'},
	{value: "Sociales", label: 'Sociales'}
];

const size = [
    {value: "", label: 'Seleccionar'},
    {value: "Plana completa", label: 'Plana completa'},
	{value: "Media plana", label: 'Media plana'},
    {value: "Cuarto de plana", label: 'Cuarto de plana'},
	{value: "Octavo de plana", label: 'Octavo de plana'},
	{value: "Cintillo", label: 'Cintillo'},
	{value: "Columna", label: 'Columna'}
]

const responseOption = [
    {value: 'si', label: 'Si'},
    {value: 'no', label: 'No'},
    {value: 'prueba', label: 'Radio Noticias 860 Juarez'}
]

const NotaImpresos = () => {
    return (
                    <>
                        <div className="flex mt-6">
                                <div className="w-1/3">
                                    <div className="ml-2">
                                        <label className="text-gray-700 text-sm font-bold mb-1" htmlFor="portada">
                                            Portada
                                        </label>
                                        <Select
                                            id="portada" 
                                            className=""
                                            options={ responseOption }
                                            components={animatedComponents}
                                            isMulti={false}
                                            defaultValue={responseOption[1]}
                                            placeholder="Portada"
                                            noOptionsMessage={ () => "No hay resultados"}
                                        />
                                    </div>
                                </div>

                                <div className="w-1/3">
                                    <div className="ml-2">
                                        <label className="text-gray-700 text-sm font-bold mb-1" htmlFor="fotoPortada">
                                            Foto / Portada
                                        </label>
                                        <Select
                                            id="fotoPortada" 
                                            className=""
                                            options={ responseOption }
                                            components={animatedComponents}
                                            isMulti={false}
                                            defaultValue={responseOption[1]}
                                            placeholder="Foto"
                                            noOptionsMessage={ () => "No hay resultados"}
                                        />
                                    </div>
                                </div>

                                <div className="w-1/3">
                                    <div className="ml-2">
                                        <label className="text-gray-700 text-sm font-bold mb-1" htmlFor="pagina">
                                            Página
                                        </label>
                                        <input 
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="pagina"
                                            type="text"
                                            placeholder="Página"
                                        />
                                    </div>
                                </div>
                                
                            </div>

                            <div className="flex mt-2">
                                <div className="w-1/3">
                                    <div className="ml-2">
                                        <label className="text-gray-700 text-sm font-bold mb-1" htmlFor="seccion">
                                            Sección
                                        </label>
                                        <Select
                                            id="seccion" 
                                            className=""
                                            options={ seccion }
                                            components={animatedComponents}
                                            isMulti={false}
                                            defaultValue={seccion[0]}
                                            placeholder="Portada"
                                            noOptionsMessage={ () => "No hay resultados"}
                                        />
                                    </div>
                                </div>

                                <div className="w-1/3">
                                    <div className="ml-2">
                                        <label className="text-gray-700 text-sm font-bold mb-1" htmlFor="desplegado">
                                            Desplegado
                                        </label>
                                        <Select
                                            id="desplegado" 
                                            className=""
                                            options={ responseOption }
                                            components={animatedComponents}
                                            isMulti={false}
                                            defaultValue={responseOption[1]}
                                            placeholder="Foto"
                                            noOptionsMessage={ () => "No hay resultados"}
                                        />
                                    </div>
                                </div>

                                <div className="w-1/3">
                                    <div className="ml-2">
                                        <label className="text-gray-700 text-sm font-bold mb-1" htmlFor="tamanio">
                                            Tamaño
                                        </label>
                                        <Select 
                                            id="tamanio"
                                            className=""
                                            options={ size }
                                            components={animatedComponents}
                                            isMulti={false}
                                            defaultValue={size[0]}
                                            placeholder="Foto"
                                            noOptionsMessage={ () => "No hay resultados"}
                                        />
                                    </div>
                                </div>
                                
                        </div>
                    </>
    );
}

export default NotaImpresos;