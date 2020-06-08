import React, {useContext} from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import NotaTestigos from '../components/NuevaNota/NotaTestigos';
import NotaContenido from '../components/NuevaNota/NotaContenido';
import NotaEstado from '../components/NuevaNota/NotaEstado';
import NotaLink from '../components/NuevaNota/NotaLink';
import NotaImpresos from '../components/NuevaNota/NotaImpresos';

//Context de estados
import EstadoContext from '../context/estados/EstadoContext';




const NuevaNota = () => {

    //Utilizar context y extraer sus valores
    const estadoContext = useContext(EstadoContext);

    const {estado, municipio} = estadoContext;

    
    console.log(estado.value);
    console.log(municipio.value);

    const validarCampos = () => {
        return estado.length !== 0 || municipio !== 0 ? " opacity-50 cursor-not-allowed " : "";
    }

   

    return(
        <>
        <Layout>
            <h1 className="text-2xl text-gray-800 font-light">Crear Nueva Nota</h1>

            <Link href="/">
                <button
                    type="button"
                    className="mt-4 flex justify-center item center bg-green-600 py-2 px-4 text-white font-bold rounded text-xs uppercase"
                >
                    <svg className="h-4 w-4 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg> Regresar
                </button>
            </Link>

                <div className="flex mt-4">
                    <NotaContenido/>

                <div className="w-3/6">
                    <NotaEstado/>
                    <NotaLink/>
                    <NotaImpresos/>
                    <NotaTestigos/>

                    {/* {municipio.length !== 0 ? (
                        <>
                            <NotaLink/>
                            <NotaImpresos/>
                            <NotaTestigos/>
                        </>
                    ) : (
                        ""
                    ) } */}
                </div>
            </div>

                        
                <button 
                    className={`bg-green-700 w-full mt-5 p-2 text-white uppercase hover:bg-green-800 cursor-pointer rounded mb-6 ${validarCampos()}`}
                >
                    Agregar Nota
                </button>
                

        </Layout>
        </>
    );
}

export default NuevaNota;