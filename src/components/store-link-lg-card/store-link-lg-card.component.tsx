import { Card } from "antd";

import facebookIconSrc from  '../../assets/svg/facebook.svg';
import whatsUpIconSrc from  "../../assets/svg/what's-up-icon.svg";
import twitterIconSrc from  '../../assets/svg/icons8-twitter_circled.svg';

interface Props {
    storeLink: string
}

export default function StoreLinkLgCard({storeLink}: Props) {
    return (
        <div className="col-4 lg-card">
            <Card>
                <p className="card-text-regular">
                    Your customers can visit your online store and place the orders from this link.
                    </p>
                <h5 className="store-link cursor-pointer">
                    {storeLink}
                </h5>
                <p className="card-text-regular">
                    Share via
                </p>
                <div className="d-flex">
                    <div className="share-icon">
                        <img src={whatsUpIconSrc} alt="whatsup icon" />
                    </div>
                    <div className="share-icon">
                        <img src={facebookIconSrc} alt="facebook icon" />
                    </div>
                    <div className="share-icon">
                        <img src={twitterIconSrc} alt="twitter icon" />
                    </div>
                </div>
            </Card>
        </div>
    )
}