import React, { Component } from 'react';
import { connect } from 'dva';
import { Link } from 'umi';
import './index.less';

interface HeaderProps {
  loginState?: boolean;
  didMount: Function;
  [propName: string]: any;
}

interface HeaderState {
  hasLogin: boolean;
  menuShow: boolean;
  isWeiChart: boolean;
  phone: string;
  loginMenuShow: boolean;
  isPc: boolean;
}

@connect(({ user: { loginState } }: any) => ({
  loginState: loginState,
}))
class Header extends Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);

    this.state = {
      hasLogin: false,
      menuShow: true,
      isWeiChart: false,
      phone: '123456789',
      loginMenuShow: false,
      isPc: true,
    };
    this.handleLoginNavOver = this.handleLoginNavOver.bind(this);
    this.handleLoginNavLeave = this.handleLoginNavLeave.bind(this);
    this.handleLoginNavClick = this.handleLoginNavClick.bind(this);
  }

  static getDerivedStateFromProps(props: HeaderProps, state: HeaderState) {
    if (props.loginState !== state.hasLogin) {
      return {
        hasLogin: props.loginState,
        phone: '123456789',
      };
    }
    return {};
  }

  handleClose = () => {
    const { menuShow } = this.state;
    this.setState({
      menuShow: !menuShow,
    });
  };

  handleLoginNavOver() {
    this.setState({
      loginMenuShow: true,
    });
  }

  handleLoginNavLeave() {
    this.setState({
      loginMenuShow: false,
    });
  }

  handleLoginNavClick() {
    this.setState(prevState => ({
      loginMenuShow: !prevState.loginMenuShow,
    }));
  }

  handleJumpLogin = () => {
    console.log('登录');
  };

  render() {
    const { hasLogin, loginMenuShow, phone, isPc } = this.state;
    const logonList = hasLogin ? (
      <ul className="sys-hd-logined-nav">
        <li>
          <a href="#" onClick={() => console.log('个人中心')}>
            个人中心
          </a>
        </li>
        <li>
          <a href="#">退出登录</a>
        </li>
      </ul>
    ) : null;

    return (
      <div className="sys-hd">
        <input
          id="navCheck"
          name="navCheck"
          className="sys-nav-check"
          type="checkbox"
        />
        <div className="sys-container">
          <label htmlFor="navCheck" id="mNav" className="sys-nav-m-line">
            <span className="sys-nav-m-line-1"></span>
            <span className="sys-nav-m-line-2"></span>
            <span className="sys-nav-m-line-3"></span>
          </label>
          <ul className="sys-nav">
            <li>
              <a href="/">首页</a>
            </li>
            <li>
              <a href="/">ERROR</a>
            </li>
          </ul>
          <input
            id="asideCheck"
            name="asideCheck"
            className="sys-aside-check"
            type="checkbox"
          />
          <div className="sys-hd-aside">
            {hasLogin ? (
              isPc ? (
                <div
                  className={`sys-hd-log ${
                    loginMenuShow ? 'sys-hd-logined' : ''
                  }`}
                  onMouseOver={this.handleLoginNavOver}
                  onMouseLeave={this.handleLoginNavLeave}
                >
                  <div className="sys-hd-logname">
                    <i className="xrfont xr-icon-login"></i>
                    <em>{phone}</em>
                  </div>
                  {logonList}
                </div>
              ) : (
                <div
                  className={`sys-hd-log ${
                    loginMenuShow ? 'sys-hd-logined' : ''
                  }`}
                  onClick={this.handleLoginNavClick}
                >
                  <div className="sys-hd-logname">
                    <i className="xrfont xr-icon-login"></i>
                    <em>{phone}</em>
                  </div>
                  {logonList}
                </div>
              )
            ) : (
              <div id="sysLogin" className="sys-hd-log">
                <Link
                  to="#"
                  className="sys-hd-unlog"
                  onClick={this.handleJumpLogin}
                >
                  <i className="xrfont xr-icon-login"></i>
                  <em>登录</em>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
