import React from 'react';

const NotaTestigos = () => {
    return(
        <div className="flex mt-4">
            <div className="w-full ml-2 mt-2">
                <div className="w-64 flex w-full items-center justify-center bg-grey-lighter">
                    <label className="flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide border shadow cursor-pointer hover:bg-green-500 hover:text-white transition duration-300 ease-in-out">
                        <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                        </svg>
                        <span className="mt-2 text-base leading-normal mb-3">Seleccionar Testigo</span>
                        <input type='file' className="hidden" multiple id="testigo"/>
                    </label>
                </div>
            </div>
         </div>
    );
}

export default NotaTestigos;