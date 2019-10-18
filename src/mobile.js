import Nightmare from 'nightmare';
import { getSearchLinks, login } from './lib/ms-rewards';
import { randomInt } from './lib/randomInt';
import { credentials, userAgent } from './config';

const { username, password } = credentials;

const nightmare = Nightmare({
  show: true
});

nightmare
  .useragent(userAgent.desktop)
  .use(login({ page: username, username: password }))
  .then(() => {
    nightmare.use(getSearchLinks()).then(links => {
      links.reduce((accum, url) => {
        return accum.then(() => {
          return nightmare
            .useragent(userAgent.mobile)
            .goto(url)
            .wait('body')
            .wait(randomInt(1, 10) * 1000)
            .then(result => result);
        });
      }, Promise.resolve([]));
    });
  })
  .catch(error => console.error('ERROR:', error));
