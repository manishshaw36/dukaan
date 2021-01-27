import React, { useEffect, useState } from 'react';
import { Menu } from 'antd';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import { SideNav } from '../side-nav/side-nav.component';

import  './nav-link.style.scss';

interface NavLinksProps extends RouteComponentProps<any> {
    navLinkList: any[];
    mode: "horizontal" | "vertical" | "inline";
    theme?: "dark" | undefined;
}

function NavLinks({ navLinkList, mode, theme, location }: NavLinksProps) {
    const [selectedMenu, setSelectedMenu] = useState<any>([]);
    const newOrdersCount = 2;
    useEffect(() => {
        let path = location.pathname.split('/');
        setSelectedMenu([path[path.length - 1]])
    }, [location.pathname]);

    return <Menu
        className="dukaan-side-nav-menu"
        theme={theme} 
        mode={mode} 
        style={{border: "none"}} 
        selectedKeys={selectedMenu}
    >
        {
            navLinkList.map((each: SideNav) => (
                <Menu.Item 
                    className="dukaan-side-nav-menu-item"
                    key={each.key} 
                    icon={<img alt={each.key} src={selectedMenu.includes(each.key) ? each.activeIcon : each.inActiveIcon} />}
                >
                    <Link className="d-flex align-items-center font-GalanoGrotesqueMedium font-rg" to={each.hrefLink}>
                        {each.displayName}
                        {
                            each.key === "orders" && newOrdersCount > 0 ? <div className="new-order-count d-flex align-items-center">
                                {newOrdersCount}
                            </div> : null
                        } 
                    </Link>
                </Menu.Item>
            ))
        }
    </Menu>
}

export default withRouter(NavLinks)