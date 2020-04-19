import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Col from "../data/colors.json";

export const board = styled.div`
  width: 100%;
  text-align: center;
  overflow-a: auto;
  max-height: 70vh;
  background-color: transparent;
`;

export const lane = styled.section`
  background-color: ${Col.main.lighter};
  border: solid 0.5px ${Col.main.dark};
  border-radius: 5px;
  margin: 5px 5px;
  position: relative;
  padding: 10px;
  display: inline-flex;
  height: auto;
  max-height: 90%;
  flex-direction: column;
`;

const AddCardLink = styled.a`
  color: ${Col.main.darker};
  display: block;
  padding: 5px 2px;
  margin-top: 10px;
  position: relative;
  cursor: pointer;

  & {
    text-decoration: none;
  }
`;

export const AddCardStyled = ({ onClick, t }) => (
  <AddCardLink onClick={onClick}>{"Add Card"}</AddCardLink>
);

export const GlobalStyleOverride = createGlobalStyle`
  .react-trello-card {
    text-align: left;
    border: 1px solid ${Col.main.darker};

    & > header > span {
      color: black;
      font-weight: bold;
    }
    & > div {
      font-size: 14px;
    }
  }

  .comPlainTextContentEditable {
    border: 0.5px solid lightgrey;
  }

  .smooth-dnd-container.vertical + div {
    border-radius: 5px;
    padding-bottom: 4px;

    & > button {
      border-radius: 5px;
      border: 0.5px solid white;
      font-weight: normal;
    }
  }

  .smooth-dnd-container.horizontal {
    & > div > section > div > button {
      border-radius: 5px;
      border: 0.5px solid white;
      font-weight: normal;
    }


  } textarea {
    font-family: sans-serif;
  }
`;
