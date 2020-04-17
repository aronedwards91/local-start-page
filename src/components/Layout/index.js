import PropTypes from "prop-types";
import React from "react";

import styled from "styled-components";
import Col from "../data/colors.json";
import Background from "../Background";
import {Header} from "../Text"
import Trello from '../Trello';

const Grid = styled.div`
  backgroundcolor: ${Col.main.medium};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Layout = ({ children }) => (
  <Background>
    <Grid>
      <Header>Welcome Home</Header>
      <Trello />
    </Grid>
  </Background>
);

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
