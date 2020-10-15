import React from "react";
import { Modal, Button, Row, Avatar, Col } from "antd";
import "./signOut.css";
import { Link } from "react-router-dom";
import history from "../Router/History";

import UserContent from "../UserCard/profileDetails/UserContent";

class SignOut extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayModal: false,
    };
  }
  clickCancel = () => {
    this.setState({ displayModal: !this.state.displayModal });
    history.push("/");
  };
  render() {
    const { UserDetails, visible, handleCancel } = this.props;

    console.log("userdetails ", UserDetails);
    return (
      <>
        <Modal
          wrapClassName="modalwrapper"
          className="modalClass"
          footer={null}
          visible={visible}
          closable={false}
        >
          <Row>
            <Avatar
              style={{ width: "7vw", height: "14vh", left: "3vw" }}
              src={UserDetails.profilepicture}
            ></Avatar>
          </Row>
          <Row style={{ left: "3vw", position: "relative", lineHeight: 3 }}>
            {UserDetails.name}
          </Row>
          <Row style={{ left: "3vw", position: "relative" }}>
            {" "}
            {UserDetails.email}
          </Row>
          <hr />
          <Button
            style={{ left: "3vw", position: "relative" }}
            className="signOut"
            Component={Link}
            to="/"
            onClick={this.clickCancel}
          >
            Sign Out
          </Button>
        </Modal>
      </>
    );
  }
}
export default SignOut;
