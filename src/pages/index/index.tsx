import { IGetInitialProps } from 'umi';
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

export default class Index extends Component<IndexPageProps, IndexPageState> {
  static getInitialProps = (async () => {
    return Promise.resolve({
      msg: 'test ssr !',
    });
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
    console.log('========props=========', this.props.msg);
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
            {/* <p>{this.props.data.msg}</p> */}
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
