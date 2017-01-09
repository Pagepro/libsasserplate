function prettifyTime (milliseconds) {
  if (milliseconds > 999) {
    return (milliseconds / 1000).toFixed(2) + ' s'
  } else {
    return milliseconds + ' ms'
  }
}
export default prettifyTime
