import React, { Component } from "react";
import { Container, Content, Root } from "native-base";
import CustomHeader from "./components/Header";
import History from "./components/History";

export default class App extends Component {
  render() {
    return (
      <Root>
        <Container>
          <CustomHeader title={"Poker Diary"} />
          <Content padder>
            <History />
          </Content>
        </Container>
      </Root>
    );
  }
}
