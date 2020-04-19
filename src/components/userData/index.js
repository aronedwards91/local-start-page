// Obj key used to
export const localStorageKeys = {
  Trello: "trellodata",
};

export const getStorage = (key) => {
  const storageItem = localStorage.getItem(key);
  try {
    return JSON.parse(storageItem);
  } catch (e) {
    return false;
  }
};

export const storeData = (data, key) => {
  localStorage.setItem(key, JSON.stringify(data));
};

// Trello

export const TrelloGetData = () => {
  return getStorage(localStorageKeys.Trello);
};
export const TrelloStore = (data) => {
  storeData(data, localStorageKeys.Trello);
};

// Backup

export const getBackupDataStr = () => {
  const dataObj = {};
  Object.keys(localStorageKeys).forEach((key) => {
    dataObj[key] = getStorage(localStorageKeys[key]);
  });
  return JSON.stringify(dataObj);
};

export const importBackupString = (jsonString) => {
  const dataObj = JSON.parse(jsonString);
  const keysArr = Object.keys(localStorageKeys);
  let responseObj = "";

  Object.keys(dataObj).forEach((key) => {
    if (keysArr.includes(key)) {
      storeData(dataObj[key], localStorageKeys[key]);
      responseObj += "Data for " + key + " item was imported\n";
    } else {
      responseObj += "unknown data for " + key + " item, not imported\n";
    }
  });

  return responseObj;
};
