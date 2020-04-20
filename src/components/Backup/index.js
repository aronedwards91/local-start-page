import React, { useState } from "react";
import { getBackupDataStr, importBackupString } from "../userData";
import { getBackupFile } from "../userData/filemaker";
import { RedX } from "../StyledItems";
import {Strings, Container, ButtonStyled, HorizPad, TextOutput, EditableSpan } from './styling.js';

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
        {showbackupString && (
          <TextOutput>
            {Strings.backupGuide}
            <ButtonStyled onClick={getBackupFile}>
              {Strings.backupDownload}
            </ButtonStyled>
          </TextOutput>
        )}
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

export default Backup;
