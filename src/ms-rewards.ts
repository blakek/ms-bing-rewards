import puppeteer from 'puppeteer';
import { credentials } from './config';
import { randomInt } from './randomInt';

export async function getSearchLinks(browser: puppeteer.Browser) {
  const page = await browser.newPage();

  await page.goto('https://www.bing.com/');
  await page.waitFor('#crs_pane a');

  const links = page.evaluate(() =>
    Array.from(document.querySelectorAll('#crs_pane a')).map(
      (a: HTMLAnchorElement) => a.textContent
    )
  );

  await page.close();

  return links;
}

export async function login(browser: puppeteer.Browser) {
  const page = await browser.newPage();

  // Navigate to the login page
  // Ensure username and password are given
  if (!credentials.username) {
    console.error('username is required but was not given');
    process.exit(1);
  } else if (!credentials.password) {
    console.error('password is required but was not given');
    process.exit(1);
  }

  await page.goto('https://login.live.com');

  // Login
  await page.type('[name="loginfmt"]', credentials.username, { delay: 32 });
  const formHandle = await page.$('form');
  await formHandle.press('Enter');
  await page.waitFor('.has-identity-banner');
  await page.type('[name="passwd"]', credentials.password, { delay: 32 });
  await formHandle.press('Enter');
  await page.waitForNavigation();
  page.close();
}

export async function runSearch(browser: puppeteer.Browser, text: string) {
  const searchPage = await browser.newPage();
  await searchPage.goto('https://bing.com/');
  await searchPage.type('[name="q"]', text, { delay: 26 });
  const formHandle = await searchPage.$('#sb_form');
  await formHandle.press('Enter');
  await searchPage.waitForNavigation();
  await searchPage.waitFor(randomInt(2000, 5000));
  await searchPage.close();
}
