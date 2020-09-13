import React, { useState } from "react";
import marked from "marked";
import { Row, Col, Input, Button, DatePicker } from "antd";
import axios from "axios";

import "../Style/AddArticle.css";

const { TextArea } = Input;

const AddArticle = () => {
  const [articleTitle, setArticleTitle] = useState("");
  const [articleContent, setArticleContent] = useState("");
  const [markdownContent, setMarkdownContent] = useState("预览内容");
  const [articleIntroduce, setArticleIntroduce] = useState("");
  const [markdownIntroduce, setMarkdownIntroduce] = useState("预览内容");
  const [articleDate, setArticleDate] = useState();
  const [articleTags, setArticalTags] = useState();
  marked.setOptions({
    renderer: marked.Renderer(),
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false,
  });

  const changeTitle = (e) => {
    setArticleTitle(e.target.value);
  };
  const changeContent = (e) => {
    setArticleContent(e.target.value);
    let html = marked(e.target.value);
    setMarkdownContent(html);
  };
  const changeIntroduce = (e) => {
    setArticleIntroduce(e.target.value);
    let html = marked(e.target.value);
    setMarkdownIntroduce(html);
  };

  const pushArticle = () => {
    let temp = articleContent.replace(/"/g, "<doubleFlag>");
    let obj = {
      articleTitle,
      articleContent: temp,
      articleIntroduce,
      articleTags,
      articleDate,
    };
    console.log(obj);
    axios.post("http://localhost:4044/admin/addNewArticle", obj).then((req) => {
      if (req.data) {
        setArticalTags("");
        setArticleContent("");
        setArticleDate("");
        setArticleIntroduce("");
        setArticleTitle("");
        setMarkdownContent("");
        setMarkdownIntroduce("");
        alert("添加成功");
      } else {
        alert("添加失败");
      }
    });
  };
  return (
    <div>
      <Row gutter={5}>
        <Col span={18}>
          <Row gutter={10}>
            <Col span={24}>
              <Input
                placeholder="博客标题"
                size="large"
                onChange={changeTitle}
                value={articleTitle}
              />
            </Col>
          </Row>
          <br />
          <Row gutter={10}>
            <Col span={12}>
              <TextArea
                className="markdown-content"
                rows={35}
                placeholder="文章内容"
                onChange={changeContent}
                value={articleContent}
              />
            </Col>
            <Col span={12}>
              <div
                className="show-html"
                dangerouslySetInnerHTML={{ __html: markdownContent }}
              ></div>
            </Col>
          </Row>
        </Col>

        <Col span={6}>
          <Row>
            <Col span={24}>
              <DatePicker
                placeholder="发布日期"
                size="large"
                onChange={(date, dateString) => setArticleDate(dateString)}
              />
              &nbsp;&nbsp;&nbsp;
              <Button size={"large"} type={"primary"} onClick={pushArticle}>
                发布文章
              </Button>
              <br /> <br />
              <div>
                <Input
                  value={articleTags}
                  placeholder={"文章标签(使用,隔开)"}
                  onChange={(e) => setArticalTags(e.target.value)}
                />
                <br /> <br />
              </div>
              <div>
                <TextArea
                  rows={4}
                  placeholder="文章简介"
                  onChange={changeIntroduce}
                  value={articleIntroduce}
                />
                <br /> <br />
                <div
                  className="introduce-html"
                  dangerouslySetInnerHTML={{ __html: markdownIntroduce }}
                ></div>
                <br /> <br />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
export default AddArticle;
