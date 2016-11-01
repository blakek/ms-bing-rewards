import Nightmare from 'nightmare'
import { getStatus } from './lib/ms-rewards-status'
import { getSearchLinks, login } from './lib/ms-rewards'
import { randomInt } from './lib/randomInt'
import { authentication, userAgent } from './config'

const { username, password } = authentication

// Only try to log in if a username and password is given
if (username == null) {
  console.error('username is required but was not given')
  process.exit(1)
} else if (password == null) {
  console.error('password is required but was not given')
  process.exit(1)
}

const nightmare = Nightmare({
  show: true
})

nightmare
  .useragent(userAgent.desktop)
  .use(login(username, password))
  .then(() => {
    nightmare
      .use(getSearchLinks())
      .then(links => {
        links.reduce((accum, url) => {
          return accum.then(results => {
            return nightmare
              .goto(url)
              .wait('body')
              .wait(randomInt(1, 10) * 1000)
              .then(result => result)
          })
        }, Promise.resolve([]))
      })
  })
  .catch(error => console.error('ERROR:', error))
