import axios from 'axios';

/**
 * converts an array of cookie objects to a cookie string
 * used in request headers
 * @param {object[]} cookies - array of cookie objects
 * @param {string} cookies.name - cookie name
 * @param {string} cookies.value - cookie value
 * @return {string} a string representing cookies
 */
export function cookiesToString(cookies) {
  return cookies.reduce(
    (accum, { name, value }) => `${accum}${name}=${value}; `,
    ''
  );
}

/**
 * gets the status from the Microsoft rewards API
 * @param {object[]} cookies - array of cookie objects
 * @param {string} cookies.name - cookie name
 * @param {string} cookies.value - cookie value
 * @param {object} options - optional options
 * @param {string} options.userAgent - the user-agent to use
 */
export function getStatus(cookies, options = {}) {
  const config = {
    headers: {
      cookie: cookiesToString(cookies),
      ...(options.userAgent && { userAgent: options.userAgent })
    }
  };

  const response = axios.get(
    'https://www.bing.com/rewardsapp/getoffers',
    config
  );

  return response.data;
}

export default getStatus;
