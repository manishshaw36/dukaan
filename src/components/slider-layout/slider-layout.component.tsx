import React, { CSSProperties } from "react";
import { Layout } from "antd";
import NavLinks from '../nav-link/nav-link.component';
import { sideNavsArray } from '../../shared/modal/side-nav/side-nav.modal';

import companyLogoSrc from '../../assets/svg/dukaan_logo_white.svg';
import Header from '../header/header.component';
import NeedHelp from '../need-help/need-help.component';

const { Sider } = Layout;

const layoutStyle: CSSProperties = {
  height: "100vh", 
  overflow: "hidden"
}

const sliderStyle: CSSProperties = {
  overflow: "auto",
  height: "100%",
  padding: "24px 0 16px 0"
}

const companyLogoStyle: CSSProperties = {
  width: "150px",
  margin: "0 50px 40px 24px",
  objectFit: "contain"
}

const storeContentStyle: CSSProperties = {
  height: "calc(100% - 80px)",
  overflow: "scroll",
  margin: 32
}

export default function SiderLayout({children}: any) {
  return (
    <Layout style={layoutStyle}>
      <Sider width={224} style={sliderStyle} trigger={null} >
        <div style={companyLogoStyle}>
          <img src={companyLogoSrc} alt="Dukaan logo" />
        </div>
        <NavLinks navLinkList={sideNavsArray} theme="dark" mode="vertical"/>
        <NeedHelp />
      </Sider>
      <Layout className="site-layout">
        <Header storeName="Mano Super Market" />
        <div style={storeContentStyle}>
          {children}
        </div>
      </Layout>
    </Layout>
  );
}
