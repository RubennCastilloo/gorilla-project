import React, {useState, useEffect} from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import Select from 'react-select';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]



const ListaNotas = () => {

    const [estados, setSabores] = useState([]);

    useEffect(() => {
        console.log(estados);
    }, [estados])

    const seleccionarEstado = estados => {
        setSabores(estados);
    }
    return(
        <>
        <Layout>
            <h1 className="text-center text-3xl text-gray-800 font-light">Notas</h1>

            <Link href="/">
                <button
                    type="button"
                    className="flex justify-center item center bg-green-600 py-2 px-4 text-white font-bold rounded text-xs uppercase"
                >
                    <svg className="h-4 w-4 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg> Regresar
                </button>
            </Link>

            <Select 
                options={options}
                onChange={opcion => seleccionarEstado(opcion)}
            />


        </Layout>
        </>
    );
}

export default ListaNotas;