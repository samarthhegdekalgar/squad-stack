import { AppProps } from 'next/app';
import type { FC, ReactElement } from 'react';

import '@/styles/globals.css';
import '@/styles/colors.css';

type Layout = (page: ReactElement) => ReactElement;

interface FCWithLayout extends FC {
  getLayout?: Layout;
}

interface CustomAppProps extends AppProps {
  Component: FCWithLayout;
}

const MyApp = ({ Component, pageProps }: CustomAppProps) => {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
};

export default MyApp;
