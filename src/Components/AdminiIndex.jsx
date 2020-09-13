import React, { useState } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import "../Style/adminiIndex.css";
import {
  PieChartOutlined,
  UserOutlined,
  DesktopOutlined,
} from "@ant-design/icons";
import { Route } from "react-router-dom";
import AddArticle from "./AddArticle";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const AdminIndex = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider>
        <Header className={"slider-title"}>Lofipure's Blog</Header>
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1">
            <PieChartOutlined />
            <span>工作台</span>
          </Menu.Item>
          <Menu.Item key="2">
            <DesktopOutlined />
            <span>添加文章</span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <UserOutlined />
                <span>文章管理</span>
              </span>
            }
          >
            <Menu.Item key="3">添加文章</Menu.Item>
            <Menu.Item key="4">文章列表</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout>
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>后台管理</Breadcrumb.Item>
            <Breadcrumb.Item>工作台</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
            <Route path="/index/" exact component={AddArticle} />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>Lofipure</Footer>
      </Layout>
    </Layout>
  );
};

export default AdminIndex;
