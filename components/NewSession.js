import React, { Component } from "react";
import { ActionSheet, Button, Icon, Modal } from "native-base";

export default class NewSession extends Component {
  constructor(props) {
    super(props);
    this.BUTTONS = [];
    this.DESTRUCTIVE_INDEX = -1;
    this.CANCEL_INDEX = -1;

    this.state = {};
    this.state.gameType = "";
    this.state.limit = "";
    this.state.gamelocation = "";
    this.state.buyin = "";
    this.state.cashout = "";
    this.state.date = "";
  }
  resetFormState = () => {
    this.setState({
      gameType: "",
      limit: "",
      gamelocation: "",
      buyin: "",
      cashout: "",
      date: ""
    });
    this.showResults();
  };
  render = () => {
    return (
      <Button transparent onPress={this.selectGameType}>
        <Icon name={this.props.icon} />
      </Button>
    );
  };
  selectGameType = () => {
    this.BUTTONS = [
      "No Limit Holdem",
      "Omaha Hi/Lo",
      "Pot Limit Omaha",
      "Limit Holdem",
      "Cancel"
    ];
    this.DESTRUCTIVE_INDEX = -1;
    this.CANCEL_INDEX = 4;

    //show sheet for game type then show for limit next
    this.showSheet("Select Game Type", "gameType", this.selectLimit);
  };
  selectLimit = () => {
    this.BUTTONS = ["$1/$2", "$2/$4", "$3/$6", "$4/$8", "Cancel"];
    this.DESTRUCTIVE_INDEX = -1;
    this.CANCEL_INDEX = 4;

    this.showSheet("Select Game Limt", "limit", this.showResults);
  };
  showResults = () => {
    console.log(this.state);
  };
  showSheet = (title, stateType, next) => {
    ActionSheet.show(
      {
        options: this.BUTTONS,
        cancelButtonIndex: this.CANCEL_INDEX,
        destructiveButtonIndex: this.DESTRUCTIVE_INDEX,
        title: title
      },
      buttonIndex => {
        const selection = this.BUTTONS[buttonIndex];

        if (selection == "Cancel") {
          this.resetFormState();
          return;
        }

        this.setState({ [stateType]: this.BUTTONS[buttonIndex] });

        if (next != null) next();
      }
    );
  };
}
