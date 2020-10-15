import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import history from "../../Router/History";
import "./profileDetails.css";
import UserContnent from "./UserContent";
import UserCardList from "../userCard";
import ComingSoon from "./ComingSoon";

const { Content, Footer, Sider } = Layout;

class UserDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayProfile: false,
    };
  }

  handleClickProfile = () => {
    history.push("/Profile");
    console.log("history", history);
  };
  handleClickToDo = () => {
    this.setState({ displayProfile: true });
    history.push("/ToDo");
  };
  handleClickPost = () => {
    this.setState({ displayProfile: true });
    history.push("/Post");
  };
  handleClickGallery = () => {
    this.setState({ displayProfile: true });
    history.push("/Gallery");
  };
  render() {
    console.log("this is userdetails ", this.props.selectedUSer);
    return (
      <div>
        <Layout className="sideNav">
          <Sider>
            <div className="logo" />
            <Menu defaultSelectedKeys={["1"]} mode="inline">
              <Menu.Item
                key="1"
                Component={Link}
                to="/profile"
                onClick={() => this.setState({ displayProfile: false })}
              >
                <span>Profile</span>
              </Menu.Item>
              <Menu.Item
                key="2"
                Component={Link}
                to="/Post"
                onClick={this.handleClickPost}
              >
                <span>Posts</span>
              </Menu.Item>

              <Menu.Item
                key="3"
                Component={Link}
                to="/Gallery"
                onClick={this.handleClickGallery}
              >
                <span>Gallery</span>
              </Menu.Item>

              <Menu.Item
                key="4"
                Component={UserCardList}
                to="/userCardList"
                onClick={this.handleClickToDo}
              >
                <span>To Do</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ margin: "24px 16px 0" }}>
              <div
                className="site-layout-background"
                style={{ padding: 24, minHeight: 500 }}
              >
                {this.state.displayProfile ? (
                  <ComingSoon />
                ) : (
                  <UserContnent UserDetails={this.props.selectedUser} />
                )}
              </div>
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}
export default UserDetails;
