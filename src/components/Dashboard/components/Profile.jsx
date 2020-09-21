import React from "react";
import { logout } from "../../../utils";

export const EmailVerifiedBadge = (props) => {
  return props.verified ? <span class="badge badge-info">Verified</span> : null;
};

export const LogoutButton = () => {
  return <button className="btn btn-primary" onClick={() => logout()}>Logout</button>;
};

const Profile = (props) => {
  return (
    <div className="modal-content">
      <div className="modal-header">
       <LogoutButton />
      </div>
      <div className="modal-body">
        <center>
          <img
            src={props.picture}
            name="aboutme"
            width="140"
            height="140"
            border="0"
            className="img-circle"
          />
          <h3 className="media-heading">
            {props.name} <small>USA</small>
          </h3>
          <span>
            <strong>Skills: </strong>
          </span>
          <span className="label label-warning">HTML5/CSS</span>
          <span className="label label-info">Adobe CS 5.5</span>
          <span className="label label-info">Microsoft Office</span>
          <span className="label label-success">Windows XP, Vista, 7</span>
        </center>
        <hr />
        <center>
          <p className="text-center">
            <strong>Bio: </strong>
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sem dui,
            tempor sit amet commodo a, vulputate vel tellus.
          </p>
          <p className="text-center">
            Email: {props.email}
            <EmailVerifiedBadge verified={props.verified} />
          </p>
        </center>
      </div>
    </div>
  );
};

export default Profile;
