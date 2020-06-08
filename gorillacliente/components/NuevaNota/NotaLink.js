import React from 'react';

const NotaLink = () => {
    return (
        <>
            <div className="flex mt-2">
                <div className="ml-2 w-full">
                    <label className="text-gray-700 text-sm font-bold" htmlFor="link">
                        Link
                    </label>
                    <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="link"
                        type="text"
                        placeholder="Link"
                    />
                </div>
            </div>
            <div className="flex mt-3 justify-center">
                <div className="ml-2">
                        <button
                            type="button"
                            className="flex justify-center item center bg-green-600 py-2 px-4 text-white font-bold rounded text-xs uppercase"
                            // onClick={run()}
                        >
                            <svg className="h-4 w-4 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg> Obtener Nota
                        </button>
                </div>
            </div> 
        </>
    );
}

export default NotaLink;