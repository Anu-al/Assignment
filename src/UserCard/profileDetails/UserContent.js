import React from "react";
import UserDetails from "./profileDetails";
import { Row, Col, Avatar } from "antd";
import GoogleMapReact from "google-map-react";
import "./UserContent.css";
import SignOut from "../../signOut/signOut";
const AnyReactComponent = ({ text }) => <div>{text}</div>;

class UserContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayModal: false,
    };
  }
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };
  handleSignOut = () => {
    this.setState({
      displayModal: true,
    });
    console.log("click", this.state.displayModal);
  };
  render() {
    const { UserDetails } = this.props;
    console.log(this.state.displayModal);
    return (
      <div>
        <Row>
          <Col style={{ position: "relative", right: "10vw" }} span={12}>
            Profile
          </Col>
          <Col
            style={{ position: "relative", left: "6vw" }}
            span={12}
            onClick={this.handleSignOut}
          >
            <Avatar src={UserDetails.profilepicture}></Avatar>&nbsp;
            {UserDetails.name}
          </Col>
        </Row>
        <hr />
        <Row style={{ lineHeight: 2 }}>
          <Col span={12}>
            <Avatar style={{width:"100px", height:"100px"}} src={UserDetails.profilepicture}></Avatar>
            <Row>{UserDetails.name}</Row>
            <Row>Username: {UserDetails.username}</Row>
            <Row>email: {UserDetails.email}</Row>
            <Row>Phone: {UserDetails.phone}</Row>
            <Row>Website: {UserDetails.website}</Row>
            <hr style={{ width: "90%", position: "relative", right: "24px" }} />
            <Row>Company</Row>
            <Row>Name :{UserDetails.company.name}</Row>
            <Row style={{ width: 295, wordBreak: "break-all" }}>
              {" "}
              catchphrase: {UserDetails.company.catchPhrase}
            </Row>
            <Row>bs: {UserDetails.company.bs}</Row>
          </Col>
          <div className="vl"></div>
          <Col style={{ left: 3 }} span={12}>
            <Row>Address:</Row>
            <Row>Street : {UserDetails.address.street}</Row>
            <Row>Suite: {UserDetails.address.suite}</Row>
            <Row>City: {UserDetails.address.city}</Row>
            <Row>Zipcode: {UserDetails.address.zipcode}</Row>
            <Row>
              <GoogleMapReact
                style={{
                  width: 290,
                  height: 200,
                  top: 144,
                  borderradiu: 5,
                  position: "absolute",
                }}
                lat={UserDetails.address.geo.lat}
                lng={UserDetails.address.geo.lng}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
              >
                <AnyReactComponent
                  lat={UserDetails.address.geo.lat}
                  lng={UserDetails.address.geo.lng}
                  text="My Marker"
                />
              </GoogleMapReact>
              <Row style={{ top: "56vh", right: "0vh", position: "absolute" }}>
                Lat: {UserDetails.address.geo.lat} lnt:{" "}
                {UserDetails.address.geo.lng}
              </Row>
            </Row>
          </Col>
        </Row>
        {this.state.displayModal ? (
          <SignOut visible="true" UserDetails={UserDetails} />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default UserContent;
