import Head from 'next/head';
import React from 'react';

import MainNavigation from '../Common/Navigation/MainNavigation';

type LeyoutProps = {
  title: string;
  children?: React.ReactNode;
  description: string;
};

/**
 * This is main leyout of the come-fast
 */
const Leyout: React.FC<LeyoutProps> = ({ title, children, description }) => (
  <>
    <Head>
      <title>{title || 'come fast'}</title>
      <meta name="description" content={description || ''} />
      {/* <meta name="theme-color" content={THEME_COLOR} /> */}
      <link rel="icon" sizes="192x192" href="/static/images/icons-192.png" />
      <link rel="apple-touch-icon" href="/static/images/icons-192.png" />
      <link rel="icon" href="/static/favicon.ico" />
      <link rel="manifest" href="/manifest.json" />
    </Head>
    <MainNavigation />
    {children}
  </>
);

export default Leyout;
