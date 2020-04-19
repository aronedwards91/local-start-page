import React from "react";
import styled from "styled-components";
// used https://weatherwidget.io/, script found in public/index.html

const Forecast = () => {
  return (
    <Link
      className="weatherwidget-io"
      href="https://forecast7.com/en/51d75n0d45/hemel-hempstead/"
      data-label_1="Hemel"
      data-label_2="Forecast"
      data-font="Arial"
      data-icons="Climacons"
      data-days="3"
      data-theme="weather_one"
    >
      Hemel Forecast
    </Link>
  );
};

const Link = styled.a`
  width: calc(100% - 40px);
  height: 98px;
  margin: 12px 20px;
`;

export default Forecast;
