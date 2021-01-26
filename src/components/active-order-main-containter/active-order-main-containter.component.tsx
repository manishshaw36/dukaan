import './active-order-main-containter.style.scss';

import iconsGreaterArrowSrc from '../../assets/svg/icons_greater_arrow.svg';
import dummyImgSrc from '../../assets/images/ice-cream.png';
import ActiveOrderItemCard from '../active-order-item-card/active-order-item-card.component';

const orderTabs =  [
    {
        key: "pending",
        text: "Pending",
        value: 12
    },
    {
        key: "accepted",
        text: "Accepted",
        value: 33
    },
    {
        key: "shipped",
        text: "Shipped",
        value: 121
    }
];

const orderItems = [
    {
        orderId: 281217,
        isNew: true,
        orderOn: "Today, 11:11 PM",
        quantity: 1,
        imgSrc: dummyImgSrc,
        price: 79
    },
    {
        orderId: 281218,
        isNew: true,
        orderOn: "Today, 11:11 PM",
        quantity: 1,
        imgSrc: dummyImgSrc,
        price: 79
    },
    {
        orderId: 281219,
        isNew: true,
        orderOn: "Today, 11:11 PM",
        quantity: 1,
        imgSrc: dummyImgSrc,
        price: 79
    },
    {
        orderId: 281220,
        isNew: true,
        orderOn: "Today, 11:11 PM",
        quantity: 1,
        imgSrc: dummyImgSrc,
        price: 79
    },
    {
        orderId: 281221,
        isNew: false,
        orderOn: "Today, 11:11 PM",
        quantity: 1,
        imgSrc: dummyImgSrc,
        price: 79
    },
    {
        orderId: 281222,
        isNew: false,
        orderOn: "Today, 11:11 PM",
        quantity: 1,
        imgSrc: dummyImgSrc,
        price: 79
    }
]

export default function ActiveOrderMainContainer() {
    const selectedTab: string = "pending"
    
    return (
        <div className="w-100 dukaan-active-order-container">
            <div className="d-flex justify-content-between" style={{marginBottom: "24px"}}>
                <h5 className="m-0">
                    Active Orders
                </h5>
                <div className="d-flex">
                    <h5 className="view-link cursor-pointer">
                        View All
                    </h5>
                    <img src={iconsGreaterArrowSrc} alt="Greater arrow"/>
                </div>
            </div>
            <div className="d-flex">
                {
                    orderTabs.map(tab => 
                        <div className={`order-tab ${selectedTab === tab.key ? "selected" : "" }`} key={tab.key}>
                            {tab.text} ({tab.value})
                        </div>
                    )
                }
            </div>
            <div className="item-row">
                {   
                    orderItems.map(item => <ActiveOrderItemCard key={item.orderId} item={item}/>)
                }
            </div>
        </div>
    )
}