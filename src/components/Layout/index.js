import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import Background from "../Background";
import { Header } from "../Text";
import Trello from "../Trello";
import Backup from "../Backup";
import Forecast from "../Forecast";

const Grid = styled.div`
  backgroundcolor: transparent;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  height: auto;
  margin: 0 0 60px;
  min-height: 90vh;
`;
const PushDown = styled.div`
  flex-grow: 1;
`;

const Layout = ({ children }) => (
  <Grid>
    <Background />
    <Header>Welcome Home</Header>
    <Forecast />
    <Trello />
    <PushDown />
    <Backup />
  </Grid>
);

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
