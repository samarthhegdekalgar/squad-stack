import { ReactElement } from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Sidebar from '@/components/sidebar';

import Home from '../components/home';

export default function Index() {
  return <Home />;
}

Index.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <Seo />
      <Sidebar />
      {page}
    </Layout>
  );
};
