// the data from localStorage is accessible, and every user can see it as plain text (because it is string-based), but if we need to hide it from users, there is a way to encrypt it. We need to use the encrypt-storage library.


import { EncryptStorage } from 'encrypt-storage'

const encryptedLocalStorage = new EncryptStorage(
  'SET_YOUR_SECRET_KEY',
  {
    // Keys used by this library will have this prefix
    // e.g.: 'enc' + ':' + 'input-data' = 'enc:input-data' as key name
    prefix:'enc',
    // Encryption algorithm type
    encAlgorithm: 'AES',
    // Storage type (localStorage and sessionStorage are supported)
    storageType: 'localStorage'
  }
);

export {
  encryptedLocalStorage
}