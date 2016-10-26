# ms-bing-rewards

> Automated runner for Bing / Microsoft Rewards

You want to get your Microsoft Rewards (formerly-known-as Bing Rewards), but you don't want to actually use Bing?  This helps you do that.

This project is a simple [Nightmare](https://github.com/segmentio/nightmare) script to run a series of automated commands in an  [Electron](https://github.com/electron/electron) browser.  There shouldn't be any difference in you visiting Bing in a Chrome browser and clicking on several of the featured news items.

Caveats: this does not do the daily offers, and it may stop before you max out your points.  I probably won't look into fixing either issue unless anyone is interested in using this.

## Usage

First, either clone this repo or [download the zip file](https://github.com/blakek/archive/master.zip).

Then, with [npm](https://npmjs.org/) installed, run:

  * `npm install`
  * `npm build`
  * To run desktop searches, run `npm run start:desktop`
  * To run mobile searches, run `npm run start:mobile`

## API

Would you be interested in an API?  [Open a new issue](https://github.com/blakek/ms-bing-rewards/issues/new), and let's talk it over.

## License

MPL-2.0
