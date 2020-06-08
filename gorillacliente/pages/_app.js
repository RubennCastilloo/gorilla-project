import { ApolloProvider } from '@apollo/client';
import client from '../config/apollo';
import '../components/spinner.css';
import EstadoState from '../context/estados/EstadoState';


const MyApp = ({ Component, pageProps }) => {
    
    return(
        <ApolloProvider client={client}>
            <EstadoState>
                <Component {...pageProps} />
            </EstadoState>
        </ApolloProvider>
        
    );
}

export default MyApp;