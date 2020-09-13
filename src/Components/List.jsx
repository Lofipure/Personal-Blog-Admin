import React, { useState, useEffect } from "react";
import axios from "axios";
import { List, Button } from "antd";
import { PaperClipOutlined, DeleteOutlined } from "@ant-design/icons";
const ListArticle = () => {
  const [myList, setMyList] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4044/admin/getArticleList").then((rep) => {
      let repList = rep.data.data;
      for (let i = 0; i < repList.length; ++i) {
        let content = repList[i].articleContent;
        content = content.replace(/<nextLine>/g, "\n");
        content = content.replace(/<space>/g, " ");
        content = content.replace(/<doubleFlag>/g, '"');
        repList[i].articleContent = content;
      }
      setMyList(repList);
      console.log(myList);
    });
  }, []);

  let handleDelete = (id) => {
    // console.log(id);
    axios
      .get("http://localhost:4044/admin/deleteArticleListById?id=" + id)
      .then((rep) => {
        window.location.reload();
      });
  };
  return (
    <div className="container">
      <List
        dataSource={myList}
        renderItem={(item) => {
          return (
            <List.Item
              extra={
                <div>
                  <Button
                    icon={<PaperClipOutlined />}
                    onClick={() => {
                      alert("待开发，王子恒不想动了......");
                    }}
                  >
                    修改
                  </Button>
                  <Button
                    icon={<DeleteOutlined />}
                    onClick={handleDelete.bind(this, item.id)}
                  >
                    删除
                  </Button>
                </div>
              }
            >
              {item.title}
            </List.Item>
          );
        }}
      />
    </div>
  );
};
export default ListArticle;
