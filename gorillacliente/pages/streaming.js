import Head from 'next/head';
import Layout from '../components/Layout';
import Stream from '../components/Streaming';

const Streaming = () => (
    <div>
        <Layout>
            <h1 className="text-2xl text-gray-800 font-light">Streaming</h1>
            <Stream>
            </Stream>
        </Layout>
    </div>
)

export default Streaming;