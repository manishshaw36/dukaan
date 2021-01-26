import iconsNavbarHomeActive from '../../assets/svg/icons_navbar_home_active.svg';
import iconsNavbarAccountInactive from '../../assets/svg/icons_navbar_account_inactive.svg';
import iconsNavbarProductsInactive from '../../assets/svg/icons_navbar_catalogue_inactive.svg';
import iconsNavbarMarketingInactive from '../../assets/svg/icons_navbar_marketing_inactive.svg';
import iconsNavbarOrdersInactive from '../../assets/svg/icons_navbar_orders_inactive.svg';

export class SideNav {
    displayName: string;
    key: string;
    hrefLink: string;
    activeIcon: string;
    inActiveIcon: string;
    constructor(displayName: string, key: string, hrefLink: string,  activeIcon: string, inActiveIcon: string) {
        this.displayName = displayName;
        this.key = key;
        this.hrefLink = hrefLink;
        this.activeIcon = activeIcon;
        this.inActiveIcon = inActiveIcon;
    };
};

export const sideNavsArray: any = [
    new SideNav('Home', 'home', '/home', iconsNavbarHomeActive, iconsNavbarHomeActive),
    new SideNav('Orders', 'orders', '/orders', iconsNavbarOrdersInactive, iconsNavbarOrdersInactive),
    new SideNav('Products', 'products', '/products', iconsNavbarProductsInactive, iconsNavbarProductsInactive),
    new SideNav('Marketing', 'marketing', '/marketing', iconsNavbarMarketingInactive, iconsNavbarMarketingInactive),
    new SideNav('Account', 'account', '/account', iconsNavbarAccountInactive, iconsNavbarAccountInactive),
]
