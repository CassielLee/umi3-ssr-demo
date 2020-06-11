import React from 'react';
import './index.less';

export default () => (
  <div id="show-tip" style={{ display: 'none' }}>
    <div className="page-pop">
      <div className="page-download">
        <div className="title-box">
          <h1>改善你的体验</h1>
          <p>
            我们使用了最新的技术搭建我们的网站，使我们的网站更快和更容易使用，不幸的是，您的浏览器版本过低，不支持这些技术，下载已下其中一款浏览器，您就可以正常访问了！
          </p>
        </div>
        <div className="down-list">
          <ul>
            <li>
              <a
                href="https://www.baidu.com/s?ie=utf-8&f=3&rsv_bp=0&rsv_idx=1&tn=57095150_1_oem_dg&wd=ie%E6%B5%8F%E8%A7%88%E5%99%A8%E5%AE%98%E6%96%B9%E4%B8%8B%E8%BD%BD&rsv_pq=f3e60856000026a6&rsv_t=cd7fds%2B4FnjnhhgojXDw8h2rKNPM4haoJP23zU3sktPc8BV7kHr9ZwFe0sBw1%2F%2BcQOXNzBlGIyI&rqlang=cn&rsv_enter=1&rsv_sug3=3&rsv_sug1=2&rsv_sug7=101&rsv_sug2=0&prefixsug=ie&rsp=0&inputT=2572&rsv_sug4=4181"
                target="_blank"
              >
                <img src={require('@/assets/images/download-ie.png')} />
              </a>
            </li>
            <li>
              <a
                href="https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=57095150_1_oem_dg&wd=chrome%E6%B5%8F%E8%A7%88%E5%99%A8%E5%AE%98%E6%96%B9%E4%B8%8B%E8%BD%BD&oq=chrome%25E6%25B5%258F%25E8%25A7%2588%25E5%2599%25A8%25E5%25AE%2598%25E6%2596%25B9%25E4%25B8%258B%25E8%25BD%25BD&rsv_pq=a4b7c05100000ffe&rsv_t=4062ByK%2FT7WEO1lel1U9gfonMkW1QD%2B%2FEmxHnRNmiLWYqMFD0NUNERRmB3SGxOh8jtEahZxLzbA&rqlang=cn&rsv_enter=0"
                target="_blank"
              >
                <img src={require('@/assets/images/download-chrome.png')} />
              </a>
            </li>
            <li>
              <a
                href="https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=57095150_1_oem_dg&wd=ff%E6%B5%8F%E8%A7%88%E5%99%A8%E5%AE%98%E6%96%B9%E4%B8%8B%E8%BD%BD&oq=chrome%25E6%25B5%258F%25E8%25A7%2588%25E5%2599%25A8%25E5%25AE%2598%25E6%2596%25B9%25E4%25B8%258B%25E8%25BD%25BD&rsv_pq=dfd623a800033ca5&rsv_t=d6aaFAEu50m70X%2FryXqkvZFi15UHkI6UXnEI1KyQwFfG162nwnYYGMw5%2FGsnHg4gHwpoF%2BIa3fw&rqlang=cn&rsv_enter=0&rsv_sug3=4&rsv_sug1=4&rsv_sug7=100&rsv_sug2=0&inputT=1469&rsv_sug4=1469"
                target="_blank"
              >
                <img src={require('@/assets/images/download-ff.png')} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);
