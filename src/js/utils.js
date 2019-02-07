// Keep your code DRY. If some functionality keeps repeating itself throughout the files, declare it here and import it everywhere it's used.
const getRandomNumber = (max = 1) => Math.floor((Math.random() * (max + 1))) // generate a random number from 0 to max

module.exports = {
  getRandomNumber
}
