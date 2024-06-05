import styled from "styled-components";

export const StyledSearchInput = styled.section`
  -webkit-font-smoothing: antialZiased;
  color: #acbdce;
  display: flex;
  justify-content: center;
  margin: 2rem;

  position: relative;
  z-index: 9999;

  body,
  html {
    display: grid;
    height: 100%;
    grid-template: 1fr/100%;
    place-items: center;
  }

  .Card {
    padding: 1px;
    border-radius: 10px;

    overflow: hidden;
    box-shadow: -2px -2px 6px rgba(255, 255, 255, 0.6), 2px 2px 12px #c8d8e7;
    width: 380px;
  }

  .CardInner {
    padding: 16px 16px;
    background-color: #e2e9f46e;
    border-radius: 10px;
  }

  .container {
    display: flex;
  }

  .Icon {
    min-width: 46px;
    min-height: 46px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    margin-right: 12px;
    box-shadow: -2px -2px 6px rgba(255, 255, 255, 0.6), 2px 2px 12px #c8d8e7;

    svg {
      transform: translate(-1px, -1px);
    }
  }

  .InputContainer {
    width: 100%;
  }

  input {
    background-color: #e3edf73d;
    padding: 16px 32px;
    border: none;
    display: block;
    font-family: "Orbitron", sans-serif;
    font-weight: 600;
    color: #a9b8c9;
    -webkit-appearance: none;
    transition: all 240ms ease-out;
    width: 100%;

    &::placeholder {
      color: #6d7f8f;
    }

    &:focus {
      outline: none;
      color: #6d7f8f;
      background-color: lighten(#e3edf7, 3%);
    }
  }

  .InputContainer {
    position: relative;
    border-radius: 10px;
    overflow: hidden;

    &:before,
    &:after {
      left: 0;
      top: 0;
      display: block;
      content: "";
      pointer-events: none;
      width: 100%;
      height: 100%;
      position: absolute;
    }

    &:before {
      box-shadow: inset -2px -2px 4px rgba(255, 255, 255, 0.7);
    }

    &:after {
      box-shadow: inset 1px 1px 3px #c5d4e3, inset 2px 2px 6px #c5d4e3;
    }
  }
`;
