import React from "react";
import { Tabs, Radio, Layout } from "antd";

import { Link } from "react-router-dom";
import history from "../Router/History";

const TabPane = Tabs.TabPane;

class SlidingTabsDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "left",
    };
  }

  handleClickProfile = () => {
    history.push("/Profile");
  };
  handleClickToDo = () => {
      history.push("/ToDo")
  }
  handleClickPost = () => {
    history.push("/Post")
}
handleClickGallery = () => {
    history.push("/Gallery")
}
  render() {
    const { mode } = this.state;
    return (
      <div>
        <Tabs
          defaultActiveKey="1"
          tabPosition={mode}
          style={{ height: 220 }}
        >
          <header>profile</header>
          <TabPane tab="Profile" key="1" Component={Link}  to="/Profile" onClick={this.handleClickProfile}>
            Content of tab 1
          </TabPane>
          <TabPane tab="Post" key="2" Component={Link} to="/Post" onClick={this.handleClickPost}>
            Coming soon
          </TabPane>
          <TabPane tab="Gallery" key="3" Component={Link} to="/Gallery" onClick={this.handleClickGallery}>
            Coming soon
          </TabPane>
          <TabPane tab="ToDo" key="4" Component={Link} to="/ToDo" onClick={this.handleClickToDo}>
            Coming soon
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default SlidingTabsDemo;
