import React from 'react';
import Layout from './layout';

export default (Component:any) => {
  return (props:any) => (
    <Layout>
      <Component {...props} />
    </Layout>
  );
};
