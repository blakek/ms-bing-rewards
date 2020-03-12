# ms-bing-rewards

> Automated runner for Bing / Microsoft Rewards

You want to get your Microsoft Rewards (formerly-known-as Bing Rewards), but you
don't want to actually use Bing? This helps you do that.

This project is a simple [Puppeteer](https://pptr.dev) script to run a series of
automated commands in an Chromium browser. The result should be the same as you
visiting Bing in a Chrome browser and clicking on several of the featured news
items.

## Usage

- Either [clone this repo](https://help.github.com/articles/cloning-a-repository/) or [download the zip file](https://github.com/blakek/ms-bing-rewards/archive/master.zip).
- Set your username & password using the `LIVE_USERNAME` and `LIVE_PASSWORD` environment variables. For example:
  - `export LIVE_USERNAME='youremail@live.com'`
  - `export LIVE_PASSWORD='yourpassword'`
- With [yarn](https://yarnpkg.com/) installed, run:
  - `yarn`
  - `yarn build`
  - To run the searches, run `yarn start`

**NOTE:** the login screen has been changed several times—sometimes very
subtly—in the last couple months. Since the script relies on selectors to find
things like the login button and username/password fields, these may break at
any time. I usually see the issue and have it fixed soon. Just know that, if the
script isn't working properly for you, this is likely the reason. To speed
things up, please [open a new
issue](https://github.com/blakek/ms-bing-rewards/issues/new) if you see this not
working for any reason.

## Todo

Things that would be nice to have but doesn't currently work

- [ ] an easier interface for logging in
- [ ] automated completion of daily offers
- [ ] continue searching random topics using by keeping up with the daily points
      (currently just clicks all the featured links, which gets _most_ of the
      points)

## API

There isn't one yet. If you're interested, [open a new
issue](https://github.com/blakek/ms-bing-rewards/issues/new).

## License

MPL-2.0
