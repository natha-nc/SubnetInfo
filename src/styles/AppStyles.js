import styled from "styled-components";
import "../App.css";

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  width: 70%;
  position: relative;
  top: 70px;
  font-family: Neucha;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;
export const Content = styled.div`
  width: 50%;
  height: 700px;
  margin-left: auto;
  margin-right: auto;
  min-width: 128px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const InputContainer = styled.div`
  #form {
    padding-bottom: 20px;
  }
  #mask {
    @media (max-width: 768px) {
      margin-top: 0px;
    }
  }
`;

export const Input = styled.input.attrs({
  type: "text"
})`
  padding: 10px;
  font-size: 2.5em;
  margin: 7px;
  text-align: center;
  margin-top: 75px;
  width: 350px;
  border-radius: 3px;
  background-color: black;
  color: yellow;
  &:focus {
    background-color: black;
    color: yellow;
    border: 3px solid black;
  }

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -mox-appearance: none;
  }

  @media (max-width: 768px) {
    width: 70%;
  }
`;
export const Submit = styled.div`
  padding: 10px;
  font-size: 2em;
  width: 40%;
  margin-left: auto;
  margin-right: auto;
  border-radius: 3px;
  border: 3px solid black;
  background: linear-gradient(to bottom);
  color: black;
  min-width: 125px;
  background-color: white;
  color: black;
  transition: background-color 0.5s, color 0.5s;
  cursor: pointer;
  display: {
    props: content;
  }

  &:hover {
    background-color: black;
    color: yellow;
    box-shadow: 1px 5px 10px black;
  }

  @media (max-width: 768px) {
    background-color: black;
    color: yellow;
    box-shadow: 0px 5px 10px black;
    cursor: pointer;
  }
  @media (max-width: 425px) {
  }
  @media (max-width: 375px) {
  }
  @media (max-width: 320px) {
  }
`;
export const Main = styled.div`
  margin: 7px;
  padding: 7px;

  div {
    font-size: 2em;
    margin: 0px;
    border: 3px solid black;
    min-width: 165px;
    text-align: center;
    transform: scale(0.9);
    padding: 30px 10px;
    box-shadow: 0px 0px 10px black;
  }
  div:hover {
    background-color: black;
    color: yellow;
    font-size: 2.5em;
  }

  span {
    position: relative;
    top: 10px;
    display: block;
    font-size: 1em;
    font-weight: 1;
  }

  #toBinary {
    font-size: 1em;
  }
  #bcastID {
  }
`;

export const InfoWithComputer = styled.p`
  position: relative;
  left: 0px;
  margin-top: 30px;
  font-size: 2em;
  letter-spacing: 2px;
  font-weight: bold;
  border-bottom: 3px solid black;
`;
export const MyError = styled.p`
  position: relative;
  top: 55px;
  transform: scale(1.5);
`;
