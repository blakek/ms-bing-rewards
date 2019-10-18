export interface Credentials {
  password: string;
  username: string;
}

export const credentials: Credentials = {
  username: process.env.LIVE_USERNAME,
  password: process.env.LIVE_PASSWORD
};

export const userAgent = {
  desktop:
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.10 (KHTML, like Gecko) Chrome/23.0.1262.0 Safari/537.10',
  mobile:
    'Mozilla/5.0 (Linux; Android 4.0.4; Galaxy Nexus Build/IMM76B) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.133 Mobile Safari/535.19'
};
