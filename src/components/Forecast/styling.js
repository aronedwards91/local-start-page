import styled from "styled-components";
import Col from "../data/colors.json";

const initData = {
  href: "https://forecast7.com/en/51d75n0d45/hemel-hempstead/",
  dataLabel_1: "Hemel",
  dataLabel_2: "Forecast",
  dataFont: "Arial",
  dataIcons: "Climacons",
  dataDays: "3", //can be 3, 5 or 7
  dataTheme: "weather_one",
};

const Strings = {
  modalGuide:
    "To get codes go to https://weatherwidget.io/, fill in setttings, then select get code, the values given to the <a></a> object can be matched with the options below, triggering a change will reload the page",
};

export const Link = styled.a`
  width: calc(100% - 40px);
  height: 98px;
  margin: 12px 20px;
`;
export const OpenModal = styled.div`
  text-align: left;
  width: 90%;
  font-size: 12px;
  padding-left: 12px;
  cursor: pointer;
  color: ${Col.main.light};
`;
export const ModalContainer = styled.div`
  position: absolute;
  z-index: 1000;
  background: rgba(127, 127, 127, 0.7);
  width: 80%;
  height: 100%;
  padding: 0 10%;
  text-align: center;
`;
export const Modal = styled.div`
  background: ${Col.main.light};
  border: 2px solid ${Col.main.darker};
  margin-top: 20%;
  border-radius: 10px;
  padding: 16px;
`;
export const GuideHeader = styled.div`
  color: black;
  font-weight: bold;
  text-align: left;
  margin-bottom: 16px;
`;
export const Btn = styled.a`
  border-radius: 5px;
  border: 1px solid ${Col.main.darker};
  background: transparent;
  padding: 4px 12px;
  cursor: pointer;
  outline: none;
  text-decoration: none;
  margin: 16px 8px;

  &:hover {
    background: ${Col.main.lighter};
  }
`;
export const RedBtn = styled(Btn)`
  border: 1px solid red;
`;
export const FormWrapper = styled.div`
  text-align: left;
  margin-bottom: 24px;
  height: 240px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const FormLabel = styled.span`
  color: ${Col.main.darker};
  width: 160px;
  display: inline-block;
`;
export const FormInput = styled.input`
  border-radius: 5px;
`;

export default {
  initData,
  Strings
};
