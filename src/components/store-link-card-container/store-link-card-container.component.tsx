import StoreLinkLgCard from '../store-link-lg-card/store-link-lg-card.component';
import StoreLinkSmCard from '../store-link-sm-card/store-link-sm-card.component';

export default function StoreLinkCardContainer() {
    const data = {
        storeLink: "mydukaan.io/manosupermarket",
        orders: 192,
        totalSales: 155920,
        storeViewCount: 96,
        productViewCount: 2313
    }
    return (
        <div className="d-flex flex-wrap card-row">
            <StoreLinkLgCard storeLink={data.storeLink} />
            <div className="col-4 d-flex flex-column sm-card">
                <StoreLinkSmCard text="ORDERS" value={data.orders} />
                <StoreLinkSmCard text="STORE VIEWS" value={data.storeViewCount} />
            </div>
            <div className="col-4 d-flex flex-column sm-card">
                <StoreLinkSmCard text="TOTAL SALES" value={data.totalSales} />
                <StoreLinkSmCard text="PRODUCT VIEWS" value={data.productViewCount} />
            </div>
        </div>
    )
}