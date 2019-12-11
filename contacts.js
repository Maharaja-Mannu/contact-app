const NUM_CONTACTS = 100

const firstNames = ['Mannu', 'Sonu', 'Sandeep', 'Mohit', 'Jhon', 'Smith', 'Sumit', 'Yugesh', 'Himanshu', 'Amit']

const lastNames = ['Tanti', 'Kumar', 'Singh', 'Jha', 'Sah', 'Kasyap']

// generate a random number b/w min and max
const rand = (max, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min

// generate a name
const generateName = () => `${firstNames[rand(firstNames.length - 1)]} ${lastNames[rand(lastNames.length - 1)]}`

// generate a phone number
const generatePhoneNumber = () => `${rand(999, 100)}-${rand(999, 100)}-${rand(999, 100)}`

// create a person
const createContact = () => ({ name: generateName(), phone: generatePhoneNumber() })

// compare two contacts for alphabetizing
export const compareNames = (contact1, constact2) => contact1.name > constact2.name

// add keys to based on index

const addKeys = (val, key) => ({ key: `${key}`, ...val })

// create an array of length NUM_CONTACTS and assigning key
export default Array.from({ length: NUM_CONTACTS }, createContact).map(addKeys)