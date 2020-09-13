import React, { useState, useEffect } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import "../Style/adminiIndex.css";
import {
  PieChartOutlined,
  UserOutlined,
  DesktopOutlined,
} from "@ant-design/icons";
import { Route, Link } from "react-router-dom";

import List from "./List";
import AddArticle from "./AddArticle";

const { Header, Content, Footer, Sider } = Layout;

const AdminIndex = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider>
        <Header className={"slider-title"}>Lofipure's Blog</Header>
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1">
            <DesktopOutlined />
            <Link to="/">添加文章</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <PieChartOutlined />
            <Link to="/list">文章列表</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>后台管理</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
            <Route path="/" exact component={AddArticle} />
            <Route path="/list" exact component={List}></Route>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>Lofipure</Footer>
      </Layout>
    </Layout>
  );
};

export default AdminIndex;
