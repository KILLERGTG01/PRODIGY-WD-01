import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Main from '../components/Main';

const Index: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Responsive Landing Page</title>
        <meta name="description" content="A responsive landing page built with Next.js, TypeScript, and Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main />
    </div>
  );
};

export default Index;
