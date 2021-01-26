import { Button, Card, Dropdown } from 'antd';

import { RightOutlined } from '@ant-design/icons';

interface Item {
    orderId: number,
    isNew?: boolean,
    orderOn: string,
    quantity: number,
    imgSrc: string,
    price: number
}

interface Props {
    item: Item
}

export default function ActiveOrderItemCard({ item: { orderId, isNew, orderOn, quantity, imgSrc, price } }: Props) {
    return (
        <div className="col-4 item-card">
            <Card>
                <div className="d-flex justify-content-between item-order-details">
                    <h5 className="item-order-id">Order #{orderId} 
                        { isNew ? <span className="new-tag">NEW</span> : "" }
                    </h5>
                    <p className="item-order-on">{orderOn}</p>
                </div>
                <div className="d-flex justify-content-between item-order-other-details">
                    <div className="d-flex">
                        <div className="item-img-container">
                            <img src={imgSrc} alt="dummuy img" />
                        </div>
                        <div className="d-flex flex-column align-items-center justify-content-center">
                            <div className="item-count">
                                {quantity} item
                            </div>
                            <h5 className="item-price">
                                ₹{price}
                            </h5>
                        </div>
                    </div>
                    <Dropdown className="item-details-btn" overlay={<></>}>
                        <Button className="d-flex align-items-center font-rg">
                            Details <RightOutlined className="ml-1" />
                        </Button>
                    </Dropdown>
                </div>
            </Card>
        </div>
    )
}