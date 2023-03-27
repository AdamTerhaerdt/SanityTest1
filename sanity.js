import 'url-search-params-polyfill';
import createClient from '@sanity/client';

export const client = createClient({
    projectId: '3s47rjjr',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2023-03-13'
  });
  export default client;