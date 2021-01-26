import { Button, Dropdown } from "antd";
import { DownOutlined } from '@ant-design/icons';


const menu = (   // Dummy menu dropdown
    // <Menu >
    //   <Menu.Item key="1">
    //     1st menu item
    //   </Menu.Item>
    //   <Menu.Item key="2">
    //     2nd menu item
    //   </Menu.Item>
    //   <Menu.Item key="3">
    //     3rd menu item
    //   </Menu.Item>
    // </Menu>
    <></>
);

export default function StoreLinkHeader() {
    return (
        <div className="d-flex align-items-center justify-content-between w-100" style={{marginBottom: "24px"}}>
            <h5 className="m-0">
                Share store link
            </h5>
            <Dropdown overlay={menu}>
                <Button className="d-flex align-items-center font-rg">
                    Last Month <DownOutlined />
                </Button>
            </Dropdown>
        </div>
    )
}