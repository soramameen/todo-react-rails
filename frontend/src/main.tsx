import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache
} from '@apollo/client';
const httpLink = createHttpLink({
  uri: 'http://localhost:4000'
});
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});
createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
  </StrictMode>,
)
