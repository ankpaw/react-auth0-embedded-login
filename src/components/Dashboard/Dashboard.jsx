import React from "react";
import "./Dashboard.css";
import auth0 from "auth0-js";
import Profile from "./components/Profile";
import Tiles from "./components/Tiles";

class Dashboard extends React.Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = { isLoading: true, email: "", name: "", picture: "", emailVerified: false };
  }
  getUserInfo = (accessToken) => {
    const auth0Client = new auth0.WebAuth({
      domain: process.env.REACT_APP_AUTH0_DOMAIN,
      clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
      redirectUri: process.env.REACT_APP_AUTH0_REDIRECT_URI,
    });

    auth0Client.client.userInfo(accessToken, (err, userInfo) => {
      if (err) {
        alert("Error", err.description);
        return;
      }
      if (userInfo) {
        console.log(userInfo);
        if (this._isMounted) {
          this.setState({
            email: userInfo.email,
            picture: userInfo.picture,
            name: userInfo.name,
            emailVerified: userInfo.email_verified
          });
        }
      }
      if (this._isMounted) {
        this.setState({
          isLoading: false,
        });
      }
    });
  };

  componentDidMount() {
    this._isMounted = true;
    let accessToken = JSON.parse(window.localStorage.getItem("token"))
      .accessToken;
    this.getUserInfo(accessToken);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return this.state.isLoading ? (
      <div>Loading ...</div>
    ) : (
      <div>
        <Profile email={this.state.email} name={this.state.name} picture={this.state.picture} verified={this.state.emailVerified}></Profile>
        <Tiles />
      </div>
    );
  }
}

export default Dashboard;
