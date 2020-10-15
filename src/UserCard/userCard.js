import React from "react";
import { List, Avatar } from "antd";
import InfiniteScroll from "react-infinite-scroller";
import API from "../Utils/API";
import { Link } from "react-router-dom";

class UserCardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      hasMore: true,
    };
  }

  async componentDidMount() {
    let Data = await API.get("https://panorbit.in/api/users.json");
    this.setState({ data: Data.data.users });
    let newArray = [];
    for (let item in Data.data.users) {
      let eachItem = { ...Data.data.users[item], Data: this.state.data };
      console.log("data hereeee", Data.data.users[item].name);
      newArray.push(eachItem);
      console.log("each array", eachItem);
    }
  }

  render() {
    return (
      <div style={{ backgroundImage: " linear-gradient(45deg, blue, purple)" }}>
        <InfiniteScroll
          initialLoad={false}
          pageStart={0}
          loadMore={this.handleInfiniteOnLoad}
          hasMore={!this.state.loading && this.state.hasMore}
          useWindow={false}
        >
          <List
            style={{ backgroundColor: "white", width: "25vw" }}
            size="small"
            dataSource={this.state.data}
            bordered
            header={<div>Select an account</div>}
            renderItem={(item) => (
              <List.Item onClick={() => this.props.handleUserName(item)}>
                <Avatar src={item.profilepicture}></Avatar>
                {item.name}
              </List.Item>
            )}
          />
        </InfiniteScroll>
      </div>
    );
  }
}
export default UserCardList;
