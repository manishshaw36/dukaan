import StoreLinkMainContainer from '../store-link-main-container/store-link-main-container.component';
import ActiveOrderMainContainer from '../active-order-main-containter/active-order-main-containter.component';

export default function HomeStore() {
    return <div className="w-100">
        <StoreLinkMainContainer />
        <ActiveOrderMainContainer />
    </div>
}