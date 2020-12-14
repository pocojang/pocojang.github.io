import '../styles/tailwind.css';

import { AppProps } from 'next/app';
import React from 'react';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Component {...pageProps} />
  </>
);

export default App;
