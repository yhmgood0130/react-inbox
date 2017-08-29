import React, { Component } from "react";
import Header from "./Header";
import Navbar from "./Header/Navbar"
import Inbox from "./Header/Inbox"
import ComposeForm from "./Header/ComposeForm"

export default class Layout extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <Navbar />
          <ComposeForm />
            <div>
              <Inbox />
            </div>
        </div>
      </div>
    );
  }
}
