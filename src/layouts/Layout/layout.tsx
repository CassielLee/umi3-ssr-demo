import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BrowserTip from '@/components/BrowserTip';
import '@/assets/css/style.less';

interface LayoutProps {
  [propName: string]: any;
}

interface LayoutState {
  [propName: string]: any;
}

export default class Layout extends Component<LayoutProps, LayoutState> {
  changeShowChildrenState = () => {
    this.setState({
      showChild: true,
    });
  };

  render() {
    const { children } = this.props;
    return (
      <>
        <Helmet>
          <title>umi-ssr测试</title>
          <meta httpEquiv="X-UA-Compatible" content="IE=Edge,chrome=1" />
          <meta name="baidu-site-verification" content="hfJiP6YpMe" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
          />
          <meta
            name="format-detection"
            content="telephone=no, address=no, email=no"
          />
          <meta
            name="description"
            content="SEO描述SEO描述SEO描述SEO描述SEO描述SEO描述SEO描述SEO描述SEO描述SEO描述SEO描述SEO描述SEO描述SEO描述SEO描述SEO描述SEO描述SEO描述"
          />
          <meta
            name="keywords"
            content="关键词,关键词,关键词,关键词,关键词,关键词,关键词,关键词,关键词,关键词,关键词,关键词,关键词,关键词,关键词,关键词,关键词"
          />
        </Helmet>
        <Header didMount={this.changeShowChildrenState} />
        {children}
        <Footer />
        <BrowserTip />
      </>
    );
  }
}
