import Layout from '../components/Layout';
import Link from 'next/link';

const Index = () => (
  <div>
    <Layout>
      <h1 className="text-2xl text-gray-800 font-light text-center">Notas Relevantes</h1>
        <Link href="/nuevanota">
            <button
              type="button"
              className="flex justify-center item center bg-green-600 py-2 px-4 text-white font-bold rounded text-xs uppercase"
            >
              Agregar Nota <svg className="w-4 h-4 ml-2 font-bold" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeLidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
            </button>
        </Link>

        <Link href="/listanotas">
            <button
              type="button"
              className="mt-4 flex justify-center item center bg-green-600 py-2 px-4 text-white font-bold rounded text-xs uppercase"
            >
              Mis Notas <svg className="h-4 w-4 ml-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path></svg>
            </button>
        </Link>

   </Layout>
  </div>
)
export default Index;
