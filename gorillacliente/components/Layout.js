import React from 'react';
import Head from 'next/head';
import Sidebar from '../components/Sidebar';
import SidebarAdmin from '../components/SidebarAdmin';
import Header from '../components/Header';
import { useRouter } from 'next/router';

const Layout = ({children}) => {

    // Hook de routing
    const router = useRouter();


    return(
        <>
            <Head>
                <title>Gorilla Media Monitoring - COMSOC</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha256-l85OmPOjvil/SOvVt3HnSSjzF1TUMyT9eV0c2BzEGzU=" crossOrigin="anonymous" />
                <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet"/>
                <link
                rel="stylesheet"
                href="https://video-react.github.io/assets/video-react.css"
                />
                {/* <link href="../css/style.css" rel="stylesheet"/> */}
            </Head>

            {router.pathname === '/login' ? (
                <div className="bg-green-600 min-h-screen flex flex-col justify-center ">
                    <div>
                        {children}
                    </div>
                </div>
            ) : (
                <div className="bg-gray-200 min-h-screen">
                    <div className="flex min-h-screen">
                    {router.pathname === '/administrador' || router.pathname === '/listausuarios' || router.pathname === '/nuevacuenta' || router.pathname === '/editarusuario/[id]' ? (
                        <SidebarAdmin />
                    ) : (
                        <Sidebar />
                    )}
                        
                        
                        <main className="sm:w-2/4 xl:w-4/5 sm:min-h-screen p-5">
                            <Header />
                            {children}
                        </main>
                    </div>
                    
                </div>
            )}
        </>
    );
}

export default Layout;