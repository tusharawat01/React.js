
import { useEffect, useState } from "react"
import { encryptedLocalStorage } from "./toEncryptLocalStorage"

const decode = (value) => {
  return JSON.stringify(value)
}

const encode = (value) => {
  return JSON.parse(value)
}

// useLocalStorage hook
const useLocalStorage = (key, defaultState) => {
  const [value, setValue] = useState(
    encode(localStorage.getItem(key)||null) || defaultState
  )

  // New encrypted localStorage
const useSecureLocalStorage = (key, defaultState) => {
  const [value, setValue] = useState(
    encode(encryptedLocalStorage.getItem(key)||null) || defaultState
  )

  useEffect(() => {
    localStorage.setItem(key, decode(value))
  },  [value])

  return [value, setValue]
}

export {
  useLocalStorage,
  useSecureLocalStorage
}