import Nightmare from 'nightmare'
import { getStatus } from './lib/ms-rewards-status'
import { getSearchLinks, login } from './lib/ms-rewards'
import { randomInt } from './lib/randomInt'
import { authentication, userAgent } from './config'

const { username, password } = authentication

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
              .useragent(userAgent.mobile)
              .goto(url)
              .wait('body')
              .wait(randomInt(1, 10) * 1000)
              .then(result => result)
          })
        }, Promise.resolve([]))
      })
  })
  .catch(error => console.error('ERROR:', error))
