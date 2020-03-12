export interface Credentials {
    password: string;
    username: string;
}

export const credentials: Credentials = {
    username: process.env.LIVE_USERNAME,
    password: process.env.LIVE_PASSWORD,
};
