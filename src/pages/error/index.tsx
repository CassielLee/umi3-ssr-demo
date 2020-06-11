import React from 'react';
import withLayout from '@/layouts/Layout';
import './index.less';

const Page404 = () => {
  return (
    <section className="section-lose">
      <div className="container">
        <div className="lose-bg"></div>
        <a href="/">返回首页 >></a>
      </div>
    </section>
  );
};

export default withLayout(Page404);
