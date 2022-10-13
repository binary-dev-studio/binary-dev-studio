import React, { useState, useEffect } from "react";
import { Menu, Dropdown, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { breakPointValuesUtils } from "../../../../theme/theme";
import { MediaQuery } from "../../../../components/responsive";
import { HashLink } from 'react-router-hash-link';
const menuItems = [
  {
    label: <HashLink to="#home" className="text-uppercase">Home</HashLink>,
    key: "home",
  },
  {
    label: <HashLink to="#about" className="text-uppercase">About</HashLink>,
    key: "about",
  },
  {
    label: <HashLink to="#services" className="text-uppercase">Services</HashLink>,
    key: "services",
  },
  {
    label: <HashLink to="#pricing" className="text-uppercase">Pricing</HashLink>,
    key: "pricing",
  },
  {
    label: <HashLink to="#clients" className="text-uppercase">Clients</HashLink>,
    key: "clients",
  },
  {
    label: <HashLink to="#our-team" className="text-uppercase">Our Team</HashLink>,
    key: "our-team",
  },
  {
    label: <HashLink to="#blog" className="text-uppercase">Blog</HashLink>,
    key: "blog",
  },
  {
    label: <HashLink to="#faqs" className="text-uppercase">Faqs</HashLink>,
    key: "faqs",
  },
  {
    label: <HashLink to="#contact-us" className="text-uppercase">Contact US</HashLink>,
    key: "contact-us",
  }
];
function NavigationMenu({ navStyle }) {
  const [isSSR, setIsSSR] = useState(true);
  const [selectedNavKey, setSelectedNavKey] = useState([""]);
  useEffect(() => {
    setIsSSR(false);
  }, []);
  if (isSSR) {
    return null;
  }
  return (
    <React.Fragment>
      <MediaQuery query={breakPointValuesUtils.up("md")}>
        <Menu
          mode="horizontal"
          selectedKeys={selectedNavKey}
          onSelect={({ key }) => {
            setSelectedNavKey([key]);
          }}
          items={menuItems}
          style={{
            width: "100%",
            backgroundColor: "transparent",
            justifyContent: "flex-end",
            ...navStyle,
            border: "none",
          }}
        ></Menu>
      </MediaQuery>

      <MediaQuery query={breakPointValuesUtils.down("md")}>
        <Dropdown
          overlay={
            <Menu
              onClick={({ key }) => {
                setSelectedNavKey([key]);
              }}
              selectedKeys={selectedNavKey}
              items={menuItems}
            ></Menu>
          }
        >
          <div style={{}}>
            <Button
              type="text"
              style={{ color: "white" }}
              icon={<MenuOutlined />}
            ></Button>
          </div>
        </Dropdown>
      </MediaQuery>
    </React.Fragment>
  );
}

export default NavigationMenu;
