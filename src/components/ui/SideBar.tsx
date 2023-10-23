"use client";
import { Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import React, { useState } from 'react';

const SideBar = () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
    );
};

export default SideBar;