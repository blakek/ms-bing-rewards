export const getSearchLinks = () => (nightmare) => {
  nightmare
    .goto('https://www.bing.com/')
    .wait('#crs_pane a')
    .evaluate(() => Array.from(document.querySelectorAll('#crs_pane a')).map(a => a.href))
}

export const getStatus = () => (nightmare) => {
  nightmare
    .goto('https://www.bing.com/rewardsapp/getoffers')
    .evaluate(() => JSON.parse(document.body.innerText))
    // .then(status => console.log(status))
    // .catch(error => console.error('Failed getting status:', error))
}

export const login = (username, password) => (nightmare) => {
  nightmare
    .goto('http://www.bing.com/rewards/signup/signin')
    .click('#signin-link')
    .wait('input[name="loginfmt"]')
    .type('input[name="loginfmt"]', username)
    .click('input[type="submit"]')
    .wait(500)
    .type('input[name="passwd"]', password)
    .check('input[name="KMSI"]')
    .click('input[type="submit"]')
    .wait('#rewards-dashboard')
    // .cookies.get({ url: null })
    // .then(cookies => console.log(cookies))
    // .catch(error => console.error('Login failed:', error))
}

export default {
  getStatus,
  login
}
