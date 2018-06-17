import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "./components/Header";
import Computer from "./components/Computer";

import {
  Container,
  Content,
  InputContainer,
  Input,
  Submit,
  Main,
  InfoWithComputer,
  MyError
} from "./styles/AppStyles";

import {
  networkBits,
  getMask,
  getClass,
  subnetBits,
  calculateHostBits,
  hostToSubnets,
  subnets,
  ipToBinary,
  getNetworkID,
  getBroadcastID
} from "./js/classlessAndClassfullNetworking";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { ip: "", mask: "", inVal: "", Err: "" };
    this._submit = this._submit.bind(this);
    this.updateIP = this.updateIP.bind(this);
    this.updateMASK = this.updateMASK.bind(this);
    this.validate = this.validate.bind(this);
  }
  updateIP() {
    const { ip } = this;
    if (ip.value === undefined) {
    }
    const validated = this.validate(ip.value);
    this.setState({ inVal: validated });
  }

  updateMASK() {
    const { mask } = this;
    const validated = this.validate(mask.value);
    this.setState({ inVal: validated });
  }

  validate(inputValue) {
    let isNumber = /[0-9]/i;
    let isLetter = /[a-z]/i;

    let v = inputValue.split(".");
    let _isNumber = isNumber.test(v);
    let _isLetter = isLetter.test(v);

    // cHECK FOR LETTERS IN INPUT
    _isLetter
      ? (this.submit.style.display = "none")
      : (this.submit.style.display = "");

    //CHECK FOR A NUMBER, THEN FOR A LETTER
    while (_isNumber === true) {
      console.log(`_isNumber: ${v}`);

      if (_isLetter === true) {
        console.log((this.submit.style.display = "none"));
        return this.setState({
          Err: (
            <span
              style={{
                color: "yellow",
                backgroundColor: "black",
                padding: 10,
                borderRadius: 3
              }}
            >
              Only Numbers
            </span>
          )
        });
      } else {
        return this.setState({ Err: "" }), (this.submit.style.display = "");
      }
    }
  }

  _submit() {
    if (this.ip.value === "" || this.mask.value === "") {
      this.setState({
        Err: (
          <span
            style={{
              color: "yellow",
              backgroundColor: "black",
              padding: 10,
              borderRadius: 3
            }}
          >
            IP or MASK Can't be Empty
          </span>
        )
      });
      return "";
    }

    this.setState({
      ip: this.ip.value,
      mask: this.mask.value
    });

    this.ip.value = "";
    this.mask.value = "";
  }

  render() {
    return (
      <div>
        <CssBaseline />

        <Header
          id="ip"
          ip={this.state.ip}
          mask={getMask(this.state.mask)}
          netID={getNetworkID(this.state.ip, this.state.mask)}
        />
        <Container>
          <InputContainer>
            <MyError>{this.state.Err}</MyError>
            <form id="form">
              <Input
                onChange={this.updateIP}
                maxLength="15"
                innerRef={x => {
                  this.ip = x;
                }}
                placeholder="IP"
                defaultValue="8.1.4.5"
              />

              <Input
                onChange={this.updateMASK}
                id="mask"
                maxLength="15"
                innerRef={x => (this.mask = x)}
                placeholder="MASK"
                defaultValue="255.255.0.0"
              />

              <Submit onClick={this._submit} innerRef={x => (this.submit = x)}>
                Submit
              </Submit>
            </form>
          </InputContainer>
          <Content>
            <InfoWithComputer>
              <Computer fs="125" />
              <br />
              {this.state.ip} | {this.state.mask}
              {this.state.ip ? (
                <span style={{ marginLeft: 10 }}>
                  /{getMask(this.state.mask)}
                </span>
              ) : (
                undefined
              )}
            </InfoWithComputer>
            <Main>
              <div>
                Prefix <hr />
                <span>
                  {" "}
                  {!this.state.mask ? "-" : "/" + getMask(this.state.mask)}
                </span>
              </div>
              <div>
                Class <hr />
                <span> {!this.state.ip ? "-" : getClass(this.state.ip)}</span>
              </div>
              <div>
                Subnet Bits <hr />
                <span>
                  {" "}
                  {!this.state.mask
                    ? "-"
                    : subnetBits(
                        getMask(this.state.mask),
                        networkBits(this.state.ip)
                      )}
                </span>{" "}
              </div>
              <div>
                Host Bits <hr />
                <span>
                  {" "}
                  {!this.state.mask
                    ? "-"
                    : calculateHostBits(getMask(this.state.mask))}
                </span>
              </div>
              <div>
                Host/Subnets <hr />
                <span>
                  {" "}
                  {!this.state.mask
                    ? "-"
                    : hostToSubnets(
                        calculateHostBits(getMask(this.state.mask))
                      )}
                </span>
              </div>
              <div>
                Subnets <hr />
                <span>
                  {" "}
                  {!this.state.mask
                    ? "-"
                    : subnets(
                        subnetBits(
                          getMask(this.state.mask),
                          networkBits(this.state.ip)
                        )
                      )}
                </span>{" "}
              </div>
              <div>
                Binary Mask <hr />
                <br />
                <span id="toBinary">
                  {" "}
                  {!this.state.mask ? "-" : ipToBinary(this.state.mask)}
                </span>
              </div>
              <hr />
              <div>
                Network ID <hr />
                <span>
                  {!this.state.mask
                    ? "-"
                    : getNetworkID(this.state.ip, this.state.mask)}
                </span>
              </div>
              <div>
                Broadcast ID <hr />
                <span id="bcastID">
                  {!this.state.mask
                    ? "-"
                    : getBroadcastID(this.state.ip, this.state.mask)}
                </span>
              </div>
            </Main>
          </Content>
        </Container>
      </div>
    );
  }
}

export default App;
