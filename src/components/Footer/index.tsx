import React, { Component } from 'react';

interface FooterState {
  isWindow: boolean;
  isPc: boolean;
}

interface FooterProps {
  [propName: string]: any;
}

export default class Footer extends Component<FooterProps, FooterState> {
  constructor(props: FooterProps) {
    super(props);
    this.state = {
      isWindow: false,
      isPc: true,
    };
  }

  componentDidMount() {
    this.setState({
      isWindow: true,
    });
  }

  render() {
    const { isWindow, isPc } = this.state;
    if (!isWindow) return null;
    return (
      <>
        {isPc ? (
          <footer>
            <div className="sys-ft">
              <div className="sys-container">
                <div className="sys-contact">
                  <a href="#">
                    在线咨询<i className="i-sys-contact"></i>
                  </a>
                </div>
                <div className="sys-footer">
                  <p className="sys-footer-link">
                    <a href="/">文案</a>
                    <a href="/">文案啊文案啊文案啊</a>
                    <a href="/">帮助中心</a>
                    <a href="/">APP下载</a>
                  </p>
                  <p>
                    Copyright &#169; 2020 xxxxxxxx All Rights Reserved{' '}
                    <i className="phone-wrap"></i>XXXXXXXXX有限公司版权所有
                  </p>
                  <p>
                    <a
                      href="http://www.beian.miit.gov.cn/state/outPortal/loginPortal.action"
                      target="_blank"
                    >
                      粤ICP备XXXXXXX号-8{' '}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </footer>
        ) : (
          <footer>
            <div className="sys-ft">
              <div className="sys-container">
                <div className="sys-btns">
                  <a
                    target="_blank"
                    href="http://new.xlkf.xunlei.com/live800/chatClient/chatbox.jsp?companyID=8950&configID=63&enterurl=box.onethingpcs.com&robot_ud_box=box"
                  >
                    在线咨询<i className="i-sys-contact"></i>
                  </a>
                </div>
                <div className="sys-contact">
                  <h5>
                    咨询时间：09:00-18:00 节假日除外{' '}
                    <span className="space">QQ群: 1059564174</span>
                  </h5>
                </div>
                <div className="sys-footer">
                  <p className="sys-footer-link">
                    <a href="/service">帮助中心</a>
                    <a href="/download">APP下载</a>
                  </p>
                  <p>
                    Copyright &#169; 2020 onethingtech.net All Rights Reserved{' '}
                    <i className="phone-wrap"></i>深圳市网心科技有限公司版权所有
                  </p>
                  <p>
                    <a
                      href="http://www.beian.miit.gov.cn/state/outPortal/loginPortal.action"
                      target="_blank"
                    >
                      粤ICP备14008884号-8{' '}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </footer>
        )}
      </>
    );
  }
}
