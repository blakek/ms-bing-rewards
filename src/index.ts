import puppeteer from 'puppeteer-core';
import { userAgent } from './config';
import { login, getSearchLinks } from './lib/ms-rewards';
import randomInt from './lib/randomInt';

async function main() {
  const browser = await puppeteer.launch({
    devtools: true,
    // executablePath: '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser',
    executablePath:
      '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: false
  });

  const page = await browser.newPage();

  await page.setUserAgent(userAgent.desktop);

  const [_, searchLinks] = await Promise.all([
    login(browser),
    getSearchLinks(browser)
  ]);

  const runnableSearches = searchLinks.map(textContent => async () => {
    const searchPage = await browser.newPage();
    await searchPage.goto('https://bing.com/');
    await searchPage.type('[name="q"]', textContent, { delay: 26 });
    const formHandle = await searchPage.$('#sb_form');
    await formHandle.press('Enter');
    await searchPage.waitForNavigation();
    await searchPage.waitFor(randomInt(2000, 5000));
    await searchPage.close();
  });

  for (const search of runnableSearches) {
    await search();
  }

  await browser.close();
}

main();

// const nightmare = Nightmare({ show: true });

// nightmare
//   .useragent(userAgent.desktop)
//   .use(login(username, password))
//   .then(() => {
//     nightmare.use(getSearchLinks()).then(links => {
//       links.reduce((accum, url) => {
//         return accum.then(results => {
//           return nightmare
//             .goto(url)
//             .wait('body')
//             .wait(randomInt(1, 10) * 1000)
//             .then(result => result);
//         });
//       }, Promise.resolve([]));
//     });
//   })
//   .catch(error => console.error('ERROR:', error));
