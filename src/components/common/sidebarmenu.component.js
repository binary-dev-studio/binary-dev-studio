import React, { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, Popconfirm } from "antd";
import { useTheme } from "styled-components";
import { IoPeopleOutline, IoGrid, IoPower } from "react-icons/io5";
import { getStore } from "../../stores";

function SideBarMenu({ collapsed }) {
  let navigate = useNavigate();
  let location = useLocation();
  const theme = useTheme();
  const { sessionStore } = getStore();

  const onClickSideBarMenu = ({ key }) => {
    if (key !== "logout") {
      navigate(key);
    }
  };
  const menuItems = [
    {
      label: "Dashboard",
      key: "/dashboard/app",
      icon: <IoGrid size={20} />,
    },
    {
      label: "Task",
      key: "/dashboard/tasks",
      icon: <i className="fa fa-folder-o" style={{ fontSize: 20 }} />,
    },
    {
      label: "Contacts",
      key: "/dashboard/contacts",
      icon: <i className="fa fa-user-circle" style={{ fontSize: 20 }} />,
    },
    {
      label: "Clients",
      key: "/dashboard/clients",
      icon: <i className="fa fa-users" style={{ fontSize: 20 }} />,
    },
    {
      label: "Employee",
      key: "/dashboard/employees",
      icon: <IoPeopleOutline size={30} />,
    },
    {
      label: "Moderator",
      key: "/dashboard/moderators",
      icon: <i className="fa fa-users" style={{ fontSize: 20 }} />,
    },
    {
      label: "History",
      key: "/dashboard/histories",
      icon: <i className="fa fa-file-text-o" style={{ fontSize: 20 }} />,
    },
    {
      label: (
        <Popconfirm
          title="Are you sure to logout?"
          onConfirm={() => sessionStore.logOutSession()}
          okText="Yes"
          cancelText="No"
        >
          Logout
        </Popconfirm>
      ),
      key: "logout",
      icon: (
        <Popconfirm
          title="Are you sure to logout?"
          onConfirm={() => sessionStore.logOutSession()}
          okText="Yes"
          cancelText="No"
        >
          <IoPower size={20} />
        </Popconfirm>
      ),
    },
  ];
  return (
    <>
      <Menu
        theme="light"
        mode="inline"
        selectedKeys={[location.pathname || "/dashboard/app"]}
        defaultSelectedKeys={[location.pathname || "/dashboard/app"]}
        onClick={onClickSideBarMenu}
        style={{
          backgroundColor: theme.palette.background.default,
          borderRadius: 15,
          marginTop: 60,
          padding: "40px 5px 40px 5px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        items={menuItems}
      >
      </Menu>
    </>
  );
}

export default SideBarMenu;
