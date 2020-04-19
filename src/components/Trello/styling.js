import React from "react";
import styled from "styled-components";
import Col from "../data/colors.json";

export const BoardContainerCSS = {
  width: "100%",
  textAlign: "center",
  overflowY: "auto",
  maxHeight: "70vh",
};

export const board = styled.div`
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
