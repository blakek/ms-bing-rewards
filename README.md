# ms-bing-rewards

> Automated runner for Bing / Microsoft Rewards

You want to get your Microsoft Rewards (formerly-known-as Bing Rewards), but you don't want to actually use Bing? This helps you do that.

This project is a simple [Nightmare](https://github.com/segmentio/nightmare) script to run a series of automated commands in an [Electron](https://github.com/electron/electron) browser. This should have the same result as you visiting Bing in a Chrome browser and clicking on several of the featured news items.

## Usage

- Either [clone this repo](https://help.github.com/articles/cloning-a-repository/) or [download the zip file](https://github.com/blakek/ms-bing-rewards/archive/master.zip).
- Set your username & password using the `LIVE_USERNAME` and `LIVE_PASSWORD` environment variables. For example:
  - `export LIVE_USERNAME='youremail@live.com'`
  - `export LIVE_PASSWORD='yourpassword'`
- With [npm](https://npmjs.org/) installed, run:
  - `npm install`
  - `npm run build`
  - To run desktop searches, run `npm run start:desktop`
  - To run mobile searches, run `npm run start:mobile`

**NOTE:** the login screen has been changed several times—sometimes very subtly—in the last couple months. Since the script relies on selectors to find things like the login button and username/password fields, these may break at any time. I usually see the issue and have it fixed soon. Just know that, if the script isn't working properly for you, this is likely the reason. To speed things up, please [open a new issue](https://github.com/blakek/ms-bing-rewards/issues/new) if you see this not working for any reason.

Would you be interested in a GUI app to run this same thing? [Open a new issue](https://github.com/blakek/ms-bing-rewards/issues/new), and let's talk it over.

## Todo

I probably won't look into fixing any of these unless anyone else shows interest in using this tool.

- [ ] should complete the daily offers
- [ ] should not stop until daily points are completely maxed (currently just clicks all the featured links, which gets _most_ of the points)

## API

Would you be interested in an API? [Open a new issue](https://github.com/blakek/ms-bing-rewards/issues/new), and let's talk it over.

## License

MPL-2.0
