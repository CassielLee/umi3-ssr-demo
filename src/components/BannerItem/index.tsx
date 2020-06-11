import classnames from 'classnames';
import React from 'react';

//banner标题徽标
const bannerFlag: any = {
  0: '',
  1: 'HOT',
  2: 'NEW',
};

const TYPE_DEFAULT = 0; // 默认类型
const TYPE_GOLDFONT = 1; // 金色字体类型
const TYPE_BUTTON2 = 2; // 2个按钮类型

const BannerItem = ({ bannerItem, isPc }: any) => {
  const {
    bannerType = TYPE_DEFAULT,
    small_title = '',
    btn_text = '',
    btn_text2 = '',
    url = '',
    url2 = '',
  } = bannerItem;
  const imgStyle = isPc
    ? {
        backgroundImage: `url(${bannerItem.web_pic_path})`,
      }
    : {
        backgroundImage: `url(${bannerItem.wap_pic_path})`,
      };

  const specailFont =
    bannerType === TYPE_GOLDFONT
      ? {
          color: '#cec4a0',
        }
      : {};

  const isButton2 = bannerType === TYPE_BUTTON2;
  const btnCls = classnames('btn-line banner', {
    btn2: isButton2,
  });

  return (
    <li className="swiper-slide index-ban-img-preact" style={imgStyle}>
      <div className="sys-container sys-tb">
        <div className="sys-tbcell">
          {bannerItem.main_title && (
            <h2>
              {bannerItem.main_title}
              {!!bannerItem.flag && <em>{bannerFlag[bannerItem.flag]}</em>}
              {/* {flag.length > 0 && <em>{flag}</em>} */}
            </h2>
          )}
          {bannerItem.sub_title && (
            <h3 style={specailFont}>{bannerItem.sub_title}</h3>
          )}
          {small_title && (
            <p className="h3-smaller" style={specailFont}>
              {bannerItem.small_title}
            </p>
          )}
          {btn_text && url && (
            <a
              href={bannerItem.url}
              className={btnCls}
              id={`${bannerItem.btn_id}2`}
            >
              {bannerItem.btn_text}
            </a>
          )}
          {isButton2 && (
            <a href={url2} className={btnCls} id={`${bannerItem.btn_id}3`}>
              {btn_text2}
            </a>
          )}
        </div>
      </div>
    </li>
  );
};

export default BannerItem;
