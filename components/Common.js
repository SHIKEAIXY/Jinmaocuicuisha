import Mrender from './common-lib/Mrender.js'

function sleep (ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export default {
  Mrender,
  sleep
}
