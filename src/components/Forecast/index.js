import React, { useState } from "react";
import { WeatherGetData, WeatherDataStore } from "../userData";
import Constants, {
  Link,
  OpenModal,
  ModalContainer,
  Modal,
  GuideHeader,
  Btn,
  RedBtn,
  FormWrapper,
  FormLabel,
  FormInput,
} from "./styling";
// Used https://weatherwidget.io/

const WeatherFunction = (d, s, id) => {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (!d.getElementById(id)) {
    js = d.createElement(s);
    js.id = id;
    js.src = "https://weatherwidget.io/js/widget.min.js";
    fjs.parentNode.insertBefore(js, fjs);
  }
};

const Forecast = () => {
  const [showChangeModal, setShowModal] = useState(false);
  const storedVal = WeatherGetData();
  const weatherSettings = storedVal || Constants.initData;
  WeatherFunction(document, "script", "weatherwidget-io-js");

  const showModal = () => {
    setShowModal(true);
  };
  const hideModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Link
        className="weatherwidget-io"
        href={weatherSettings.href}
        data-label_1={weatherSettings.dataLabel_1}
        data-label_2={weatherSettings.dataLabel_2}
        data-font={weatherSettings.dataFont}
        data-icons={weatherSettings.dataIcons}
        data-days={weatherSettings.dataDays}
        data-theme={weatherSettings.dataTheme}
      >
        {weatherSettings.dataLabel_1 + " " + weatherSettings.dataLabel_2}
      </Link>
      <OpenModal onClick={showModal}>
        <GuideHeader>Change Weather Location</GuideHeader>
      </OpenModal>
      {showChangeModal && (
        <ModalContainer>
          <Modal>
            <GuideHeader>{Constants.Strings.modalGuide}</GuideHeader>
            <WeatherControllerForm
              weatherInit={weatherSettings}
              hideModal={hideModal}
            />
          </Modal>
        </ModalContainer>
      )}
    </>
  );
};

const WeatherControllerForm = ({ weatherInit, hideModal }) => {
  const [weatherForm, setForm] = useState(weatherInit);
  const setFormObj = (obj) => {
    setForm(JSON.parse(JSON.stringify(obj)));
  };

  const updateItem = (key, value) => {
    const newObj = weatherForm;
    newObj[key] = value;
    setFormObj(newObj);
  };
  const reset = () => {
    setFormObj(weatherInit);
  };
  const update = () => {
    WeatherDataStore(weatherForm);
    window.location.reload();
  };

  return (
    <div>
      <FormWrapper>
        {Object.keys(weatherForm).map((key) => (
          <div>
            <FormLabel>{key}</FormLabel>
            <FormInput
              onChange={(e) => {
                updateItem(key, e.target.value);
              }}
              value={weatherForm[key]}
            />
          </div>
        ))}
      </FormWrapper>
      <div>
        <Btn onClick={update}>Update</Btn>
        <Btn onClick={reset}>Reset</Btn>
        <RedBtn onClick={hideModal}>Close</RedBtn>
      </div>
    </div>
  );
};

export default Forecast;
