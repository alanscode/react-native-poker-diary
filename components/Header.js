import React, { Component } from "react";
import {
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Text
} from "native-base";

import NewSession from "./NewSession";
export default class CustomHeader extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Header>
        <Left>
          <NewSession icon="add" />
        </Left>
        <Body>
          <Title>{this.props.title}</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name="menu" />
          </Button>
        </Right>
      </Header>
    );
  }
}
