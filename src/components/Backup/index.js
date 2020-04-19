import React, { useState } from "react";
import styled from "styled-components";
import Col from "../data/colors.json";
import { getBackupDataStr, importBackupString } from "../userData";
import { RedX } from "../StyledItems";

const Strings = {
  backup: "Backup",
  import: "Import",
  importTrigger: "Import Data",
  backupGuide: "Copy & save string below",
  importGuide: "Paste in string from backup & click =>   ",
  importNote: "Note: A successfull import will refresh page.",
};

const Backup = () => {
  const [showbackupString, setbackup] = useState(false);
  const [showImportBox, setImport] = useState(false);
  const [importData, setImportData] = useState("");

  const backupClick = () => {
    showbackupString ? setbackup(false) : setbackup(getBackupDataStr);
    setImport(false);
  };
  const showImportClick = () => {
    setImport(!showImportBox);
    setbackup(false);
  };
  const updateImportInput = (e) => {
    setImportData(e.target.value);
  };
  const runImport = () => {
    importBackupString(importData);
    window.location.reload();
  };

  return (
    <Container>
      <div>
        <ButtonStyled onClick={backupClick}>
          {Strings.backup} {showbackupString && <RedX />}
        </ButtonStyled>
        <HorizPad>-</HorizPad>
        <ButtonStyled onClick={showImportClick}>
          {Strings.import} {showImportBox && <RedX />}
        </ButtonStyled>
      </div>
      <div>
        {showbackupString && <TextOutput>{Strings.backupGuide}</TextOutput>}
        {showbackupString && <TextOutput>{showbackupString}</TextOutput>}

        {showImportBox && (
          <TextOutput>
            {Strings.importGuide}{" "}
            <ButtonStyled onClick={runImport}>
              {Strings.importTrigger}
            </ButtonStyled>
            <div>{Strings.importNote}</div>
          </TextOutput>
        )}
        {showImportBox && (
          <EditableSpan onChange={updateImportInput} value={importData} />
        )}
      </div>
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
  bottom: 0;
`;

const ButtonStyled = styled.button`
  border-radius: 5px;
  border: 1px solid ${Col.main.darker};
  background: transparent;
  padding: 4px 12px;
  cursor: pointer;
  outline: none;

  &:hover {
    background: ${Col.main.lighter};
  }
`;

const HorizPad = styled.span`
  padding: 0 20px;
`;

const TextOutput = styled.div`
  min-width: 320px;
  border: 1px solid ${Col.main.darker};
  border-radius: 5px;
  background: ${Col.main.light};
  margin: 24px 80px;
  padding: 24px 12px;
`;

const EditableSpan = ({ onChange, value }) => {
  const rows = value.length / 100 + 3;
  return <TextInput onChange={onChange} value={value} rows={rows} />;
};
const TextInput = styled.textarea`
  width: 540px;
  border: 1px solid ${Col.main.darker};
  border-radius: 5px;
  background: ${Col.main.light};
  margin: 24px 80px;
  padding: 24px 12px;
`;

export default Backup;
