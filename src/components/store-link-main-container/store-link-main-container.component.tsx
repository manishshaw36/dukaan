import './store-link-main-container.style.scss';

import StoreLinkHeader from  '../store-link-header/store-link-header.component';
import StoreLinkCardContainer from '../store-link-card-container/store-link-card-container.component';

export default function StoreLinkMainContainer() {
    return <div className="w-100 dukaan-store-link-container">
        <StoreLinkHeader />
        <StoreLinkCardContainer />
    </div>
}