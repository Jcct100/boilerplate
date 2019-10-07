import React, { Component } from "react";
import Designprinciples from "./Designprinciples";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div class="container">
          <div class="row">
            <div class="col">1 of 2</div>
            <div class="col">2 of 2</div>
          </div>
          <div class="row">
            <div class="col">1 of 3</div>
            <div class="col">2 of 3</div>
            <div class="col">3 of 3</div>
          </div>
        </div>
        <div>
          <FontAwesomeIcon icon={faHome} />
          <Designprinciples />
        </div>
      </div>
    );
  }
}
