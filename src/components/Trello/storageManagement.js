const storageKey = "trelloboard"

export const getStorage = () => {
  const storageItem = localStorage.getItem(storageKey)
  console.log("storedItem", storageItem)
  try {
    return JSON.parse(storageItem)
  } catch (e) {
    return false
  }
}

export const storeData = data => {
    localStorage.setItem(storageKey, JSON.stringify(data))
}
