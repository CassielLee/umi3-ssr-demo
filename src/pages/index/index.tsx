import { IGetInitialProps, connect } from 'umi';
import React, { Component } from 'react';
import Swiper from 'swiper';
import Layout from '@/layouts/Layout/layout';
import BannerItem from '@/components/BannerItem';
import bannerList from '@/common/bannerListConfig';

interface IndexPageProps {
  msg: string;
  [propName: string]: any;
}

interface IndexPageState {
  [propName: string]: any;
}

@connect(({ user }: any) => ({ user }))
export default class Index extends Component<IndexPageProps, IndexPageState> {
  static getInitialProps = (async (ctx: any) => {
    const { store } = ctx;
    await store.dispatch({
      type: 'user/getSomeData',
    });
    return store.getState();
  }) as IGetInitialProps;

  componentDidMount() {
    this.swiper();
  }

  swiper() {
    new Swiper('.index-ban-swiper', {
      loop: true,
      speed: 2000,
      grabCursor: true,
      autoplay: {
        disableOnInteraction: false,
        delay: 5000,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }

  render() {
    const { someData } = this.props.user;
    console.log(someData);
    return (
      <>
        <Layout>
          <div className="sys-wrap indexpro-ban">
            <div className="index-ban-swiper swiper-container">
              <ul className="swiper-wrapper">
                {bannerList.length > 0 &&
                  bannerList.map((bannerItem, index) => {
                    return (
                      <BannerItem
                        bannerItem={bannerItem}
                        isPc={true}
                        key={index}
                      ></BannerItem>
                    );
                  })}
              </ul>
              {bannerList.length > 1 && (
                <>
                  <div className="swiper-pagination"></div>
                  <div className="swiper-button-prev swiper-button-white"></div>
                  <div className="swiper-button-next swiper-button-white"></div>
                </>
              )}
            </div>
            <h2>getInitialProps获取的数据：</h2>
            <ul>
              {someData.map((item: any, index: number) => (
                <li key={index}>
                  <h3>{item.text}</h3>
                </li>
              ))}
            </ul>
            <br></br>
            <h2>页面文案：</h2>
            <p>文案</p>
            <p>文案</p>
            <p>文案</p>
            <p>文案</p>
            <p>文案</p>
            <p>文案</p>
            <p>文案</p>
            <p>文案</p>
            <p>文案</p>
            <p>文案</p>
            <p>文案</p>
            <p>文案</p>
            <p>文案</p>
            <p>文案</p>
            <p>文案</p>
            <p>文案</p>
            <p>文案</p>
            <p>文案</p>
            <p>文案</p>
            <p>文案</p>
            <p>文案</p>
            <p>文案</p>
            <p>文案</p>
            <p>文案</p>
            <p>文案</p>
            <p>文案</p>
            <p>文案</p>
            <p>文案</p>
            <p>文案</p>
            <p>文案</p>
            <p>文案</p>
            <p>文案</p>
            <p>文案</p>
            <p>文案</p>
            <p>文案</p>
            <p>文案</p>
            <p>文案</p>
            <p>文案</p>
            <p>文案</p>
            <p>文案</p>
          </div>
        </Layout>
      </>
    );
  }
}
