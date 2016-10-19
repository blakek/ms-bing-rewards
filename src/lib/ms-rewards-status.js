import axios from 'axios'
import util from 'util'

/**
 * converts an array of cookie objects to a cookie string
 * used in request headers
 * @param {array} cookies - array of cookie objects
 * @param {string} cookies.name - cookie name
 * @param {string} cookies.value - cookie value
 * @return {string} a string representing cookies
 */
export function cookiesToString(cookies) {
  return cookies
    .reduce((accum, { name, value }) => {
      return accum + `${name}=${value}; `
    }, '')
}

/**
 * gets the status from the Microsoft rewards API
 * @param {array} cookies - array of cookie objects
 * @param {string} cookies.name - cookie name
 * @param {string} cookies.value - cookie value
 * @param {object} options - optional options
 * @param {string} options.userAgent - the user-agent to use
 */
export function getStatus (cookies, options = {}) {
  const config = {
    headers: {
      cookie: cookiesToString(cookies)
    }
  }

  if (options.userAgent) {
    config.headers.userAgent = options.userAgent
  }

  return new Promise((resolve, reject) => {
    axios
      .get('https://www.bing.com/rewardsapp/getoffers', config)
      .then(response => resolve(response.data))
      .catch(reject)
  })
}

export default getStatus
